"use server";

import { RegistrationSchema } from "./common";
import { z } from "zod";
import db from "@/db";
import { landlordsTable } from "@/db/schema";
import { redirect } from "next/navigation";

export async function registerLandlord(
  values: z.infer<typeof RegistrationSchema>
) {
  const validatedData = RegistrationSchema.parse(values);

  // Update contact in Brevo with the full name
  await updateContactInBrevo(validatedData.email, validatedData.name);

  // Create the landlord in the database
  const result = await db
    .insert(landlordsTable)
    .values({
      name: validatedData.name,
      email: validatedData.email,
      addressLine1: validatedData.addressLine1,
      addressLine2: validatedData.addressLine2 || null,
      city: validatedData.city,
      postcode: validatedData.postcode,
    })
    .returning({ id: landlordsTable.id });

  // TODO: need to authenticate the user after they register
  // return { success: true, landlordId: result[0]?.id };
  redirect(`/landlord/dashboard`);
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
