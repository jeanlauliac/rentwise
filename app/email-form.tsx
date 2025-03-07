"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { LoaderCircle } from "lucide-react";
import { addContact } from "./actions";

export default function EmailForm() {
  const [state, submitAction, isPending] = useActionState(addContact, {
    success: false,
  });

  return (
    <form
      className="flex flex-col sm:flex-row items-stretch gap-4 w-full"
      action={submitAction}
    >
      {state.success ? (
        <p className="text-sm text-slate-700 text-center w-full">
          Thank you, you&apos;re registered!
        </p>
      ) : (
        <>
          <Input
            name="email"
            className="grow bg-white"
            type="email"
            placeholder="Enter your email"
            required
          />
          <Button type="submit" className="w-full sm:w-48" disabled={isPending}>
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
