"use server";

export async function addContact(formData: FormData) {
  const email = formData.get("email");

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Api-Key": process.env.BREVO_API_KEY ?? "",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      smsBlacklisted: true,
      email,
      listIds: [2],
    }),
  });

  if (!response.ok) {
    // Handle non-200 responses
    const info = await response.json();

    if (info.code === "duplicate_parameter") {
      // Contact already exists, which is fine
      return { success: true };
    }

    // Some unhandled error, log this
    console.error("Failed to create contact", info);
    return {
      success: false,
    };
  }

  return { success: true };
}
