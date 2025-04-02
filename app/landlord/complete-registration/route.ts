import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { RegistrationSchema } from "@/app/register/common";
import db from "@/db";
import { landlords } from "@/db/schema";

export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user || !data.user.email) {
    redirect("/login");
  }

  const cookieStore = await cookies();
  const registrationCookie = cookieStore.get("registrationData");
  if (!registrationCookie) {
    redirect("/register");
  }

  try {
    const registrationData = RegistrationSchema.parse(
      JSON.parse(registrationCookie.value)
    );

    // Clear the cookie after retrieving the data
    cookieStore.delete("registrationData");

    // Create the landlord record
    const result = await db
      .insert(landlords)
      .values({
        id: data.user.id,
        name: registrationData.name,
        addressLine1: registrationData.addressLine1,
        addressLine2: registrationData.addressLine2 || null,
        city: registrationData.city,
        postcode: registrationData.postcode,
      })
      .returning({ id: landlords.id });

    if (!result[0]?.id) {
      throw new Error("Failed to create landlord record");
    }
  } catch (error) {
    console.error("Registration completion error:", error);
    // Redirect to error page with a message
    redirect("/error?message=Failed to complete registration");
  }

  // Redirect to dashboard on success
  redirect("/landlord/dashboard");
}
