"use client";

import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { SubmitButton } from "@/components/ui/submit-button";
import { addContact } from "./actions";

export default function EmailForm() {
  const [, submitAction, isPending] = useActionState(addContact, undefined);

  return (
    <form
      className="flex flex-col sm:flex-row items-stretch gap-4 w-full"
      action={submitAction}
    >
      <Input
        name="email"
        className="grow bg-white"
        type="email"
        placeholder="Enter your email"
        required
      />
      <SubmitButton
        className="w-full sm:w-48"
        label="Get tenant reviews"
        isPending={isPending}
      />
    </form>
  );
}
