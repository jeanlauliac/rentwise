"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Star } from "lucide-react";
import { submitReview } from "../../actions";
import { useActionState } from "react";
import Link from "next/link";

interface ReviewFormProps {
  landlordId: string;
}

export default function ReviewForm({ landlordId }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const [state, submitAction, isPending] = useActionState(submitReview, {
    success: false,
    error: null,
  });

  // Function to handle submitting the form with the landlordId
  const handleSubmit = (formData: FormData) => {
    // Append the landlordId and rating to the form data
    formData.append("landlordId", landlordId);
    formData.append("rating", rating.toString());

    // Pass to the server action
    return submitAction(formData);
  };

  if (state.success) {
    return (
      <div className="space-y-6 text-center">
        <div className="bg-green-50 border border-green-100 p-4 rounded-md text-green-700">
          <h3 className="font-semibold text-xl mb-2">
            Thank you for your review!
          </h3>
          <p>Your feedback helps build trust in the rental community.</p>
        </div>

        <div className="mt-8">
          <Button asChild className="mx-auto">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-6" action={handleSubmit}>
      {state.error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-md text-red-700">
          <p>{state.error}</p>
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium">Your Name</label>
        <Input name="tenantName" placeholder="Jane Smith" required />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Rating</label>
        <div className="flex gap-1 my-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="bg-transparent border-none p-0 cursor-pointer"
            >
              <Star
                className={`w-8 h-8 ${
                  (hoverRating || rating) >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-slate-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Your Review</label>
        <textarea
          name="reviewText"
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Share your experience with this landlord. Was maintenance handled promptly? Was communication clear? Would you rent from them again?"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isPending || rating === 0}
      >
        {isPending ? (
          <>
            <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Review"
        )}
      </Button>
    </form>
  );
}
