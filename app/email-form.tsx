"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function EmailForm() {
  const [isSending, setIsSending] = useState(false);

  return (
    <form
      className="flex items-center gap-x-4 w-full"
      action={async (formData) => {
        setIsSending(true);
      }}
    >
      <Input
        className="grow bg-white"
        type="email"
        placeholder="Enter your email"
        required
      />
      <Button type="submit" className="w-48" disabled={isSending}>
        {isSending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Get early access"
        )}
      </Button>
    </form>
  );
}
