"use server";

import { RegistrationSchema } from "./common";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export async function registerLandlord(
  values: z.infer<typeof RegistrationSchema>
) {
  const validatedData = RegistrationSchema.parse(values);

  // Update contact in Brevo with the full name
  await updateContactInBrevo(validatedData.email, validatedData.name);

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email: validatedData.email,
    options: {
      emailRedirectTo:
        process.env.NODE_ENV === "production"
          ? "https://www.rentwise.com/landlord/complete-registration"
          : "http://localhost:3000/landlord/complete-registration",
    },
  });

  if (error) {
    throw error;
  }

  // Store registration data locally. Once the user confirms the email address,
  // we will use this data to create the landlord record. We don't create the
  // record right away to avoid spamming the database with unconfirmed emails.
  const cookieStore = await cookies();
  cookieStore.set("registrationData", JSON.stringify(validatedData), {
    httpOnly: true, // Makes it inaccessible to client-side JS
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60, // 1 hour (same as the email magic link timeout)
  });

  return { success: true };
}

async function updateContactInBrevo(email: string, name: string) {
  const response = await fetch(
    `https://api.brevo.com/v3/contacts/${email}?identifierType=email_id`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Api-Key": process.env.BREVO_API_KEY ?? "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attributes: {
          FULLNAME: name,
          FIRSTNAME: name.split(" ")[0] || "",
          LASTNAME: name.split(" ").slice(1).join(" ") || "",
        },
      }),
    }
  );

  if (!response.ok) {
    console.error("Failed to update contact in Brevo:", await response.text());
    // We don't throw here since this is a secondary operation
    // The main registration should succeed even if Brevo update fails
  }
}
