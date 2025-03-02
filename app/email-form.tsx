"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { LoaderCircle } from "lucide-react";
import { addContact } from "./actions";

export default function EmailForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  return (
    <form
      className="flex items-center gap-x-4 w-full h-10"
      action={(formData) => {
        startTransition(async () => {
          const resp = await addContact(formData);
          if (resp.success) setMessage("Thank you, you're registered!");
        });
      }}
    >
      {message ? (
        <p className="text-sm text-slate-700 text-center w-full">{message}</p>
      ) : (
        <>
          <Input
            name="email"
            className="grow bg-white"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Button type="submit" className="w-48" disabled={isPending}>
            {isPending ? (
              <>
                <LoaderCircle className="size-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Get early access"
            )}
          </Button>
        </>
      )}
    </form>
  );
}
