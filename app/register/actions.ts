"use server";

import { RegistrationSchema } from "./common";
import { z } from "zod";
import db from "@/db";
import { landlordsTable } from "@/db/schema";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function registerLandlord(
  values: z.infer<typeof RegistrationSchema>
) {
  const validatedData = RegistrationSchema.parse(values);

  // Update contact in Brevo with the full name
  await updateContactInBrevo(validatedData.email, validatedData.name);

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOtp({
    email: validatedData.email,
    options: {
      emailRedirectTo:
        process.env.NODE_ENV === "production"
          ? "https://www.rentwise.com/dashboard"
          : "http://localhost:3000/dashboard",
    },
  });

  if (error) {
    throw error;
  }

  // Store registration data in an encrypted cookie
  const cookieStore = await cookies();
  cookieStore.set("registrationData", JSON.stringify(validatedData), {
    // Cookie options
    httpOnly: true, // Makes it inaccessible to client-side JS
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 30, // 30 minutes
  });

  return { success: true };
}

async function updateContactInBrevo(email: string, name: string) {
  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Api-Key": process.env.BREVO_API_KEY ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: name.split(" ")[0] || "",
        LASTNAME: name.split(" ").slice(1).join(" ") || "",
      },
    }),
  });

  if (!response.ok) {
    console.error("Failed to update contact in Brevo:", await response.text());
    // We don't throw here since this is a secondary operation
    // The main registration should succeed even if Brevo update fails
  }
}

// TODO: need to call this from client after they sign in
export async function completeLandlordRegistration() {
  // Get the stored registration data
  const cookieStore = await cookies();
  const storedData = cookieStore.get("registrationData");

  if (!storedData) {
    throw new Error("Registration data not found");
  }

  const registrationData = JSON.parse(storedData.value);

  // Clear the cookie after retrieving the data
  cookieStore.delete("registrationData");

  // Create the landlord record
  const result = await db
    .insert(landlordsTable)
    .values({
      name: registrationData.name,
      email: registrationData.email,
      addressLine1: registrationData.addressLine1,
      addressLine2: registrationData.addressLine2 || null,
      city: registrationData.city,
      postcode: registrationData.postcode,
    })
    .returning({ id: landlordsTable.id });

  return { success: true, landlordId: result[0]?.id };
}
