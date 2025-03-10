"use server";

import { redirect } from "next/navigation";
import { nanoid } from "nanoid";
import { z } from "zod";

const StartRegistrationSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// Initial email signup - adds to Brevo and redirects to full form
export async function addContact(state: unknown, formData: FormData) {
  const { email } = StartRegistrationSchema.parse({
    email: formData.get("email"),
  });

  await addContactToBrevo(email);

  // Redirect to the full registration form with email pre-filled
  redirect(`/register?email=${encodeURIComponent(email)}`);
}

async function addContactToBrevo(email: string) {
  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Api-Key": process.env.BREVO_API_KEY ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ smsBlacklisted: true, email, listIds: [2] }),
  });

  if (!response.ok) {
    const info = await response.json();

    if (info.code === "duplicate_parameter") {
      // Contact already exists, which is fine
      return;
    }

    throw new Error("Failed to create contact: " + response.statusText);
  }
}
