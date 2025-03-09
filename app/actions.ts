"use server";

import { redirect } from "next/navigation";
import { nanoid } from "nanoid";
import { z } from "zod";

// Types for our form state
type LandlordFormState = {
  success: boolean;
  tenantLink: string | null;
  error: string | null;
};

type ReviewFormState = {
  success: boolean;
  error: string | null;
};

// Stores landlord information temporarily (in a real app, this would be in a database)
// This is just for demonstration purposes
const landlordRegistry = new Map<
  string,
  {
    id: string;
    name: string;
    email: string;
    propertyAddress: string;
  }
>();

// Stores reviews temporarily (in a real app, this would be in a database)
const reviewRegistry = new Map<
  string,
  {
    id: string;
    landlordId: string;
    tenantName: string;
    rating: number;
    reviewText: string;
    createdAt: Date;
  }
>();

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

// Full landlord registration that generates tenant review link
export async function registerLandlord(
  state: LandlordFormState,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const propertyAddress = formData.get("propertyAddress") as string;

  if (!name || !email || !propertyAddress) {
    return {
      success: false,
      tenantLink: null,
      error: "All fields are required",
    };
  }

  try {
    // Generate a unique ID for this landlord
    const landlordId = nanoid(10);

    // In a real app, you would store this in a database
    landlordRegistry.set(landlordId, {
      id: landlordId,
      name,
      email,
      propertyAddress,
    });

    // Create a review link for the tenant
    // In production, this would use your actual domain
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const tenantLink = `${baseUrl}/review/${landlordId}`;

    // Add or update contact in Brevo with additional attributes
    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Api-Key": process.env.BREVO_API_KEY ?? "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes: {
          LANDLORD_NAME: name,
          PROPERTY_ADDRESS: propertyAddress,
          TENANT_LINK: tenantLink,
        },
        listIds: [2],
      }),
    });

    return {
      success: true,
      tenantLink,
      error: null,
    };
  } catch (error) {
    console.error("Error in registerLandlord:", error);
    return {
      success: false,
      tenantLink: null,
      error: "Failed to register. Please try again.",
    };
  }
}

// Tenant review submission
export async function submitReview(state: ReviewFormState, formData: FormData) {
  const landlordId = formData.get("landlordId") as string;
  const tenantName = formData.get("tenantName") as string;
  const rating = parseInt(formData.get("rating") as string, 10);
  const reviewText = formData.get("reviewText") as string;

  if (
    !landlordId ||
    !tenantName ||
    !reviewText ||
    !rating ||
    rating < 1 ||
    rating > 5
  ) {
    return {
      success: false,
      error:
        "All fields are required. Please provide a valid rating between 1 and 5.",
    };
  }

  // Check if the landlord exists
  if (!landlordRegistry.has(landlordId)) {
    return {
      success: false,
      error: "Landlord not found. The link might be invalid.",
    };
  }

  try {
    // Generate a unique ID for this review
    const reviewId = nanoid(10);

    // In a real app, you would store this in a database
    reviewRegistry.set(reviewId, {
      id: reviewId,
      landlordId,
      tenantName,
      rating,
      reviewText,
      createdAt: new Date(),
    });

    // Get the landlord information
    const landlord = landlordRegistry.get(landlordId);

    if (landlord && landlord.email) {
      // Send notification to landlord about the new review
      // This is where you would integrate with Brevo to send a notification email
      console.log(`New review notification for landlord: ${landlord.email}`);
    }

    return {
      success: true,
      error: null,
    };
  } catch (error) {
    console.error("Error in submitReview:", error);
    return {
      success: false,
      error: "Failed to submit review. Please try again.",
    };
  }
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
