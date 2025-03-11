"use client";

import { Input } from "@/components/ui/input";
import { registerLandlord } from "./actions";
import { SubmitButton } from "@/components/ui/submit-button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { RegistrationSchema } from "./common";
import { useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useScrollToTop } from "@/lib/utils";

export default function RegistrationForm(props: { email?: string }) {
  const form = useForm<z.infer<typeof RegistrationSchema>>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      name: "",
      email: props.email,
    },
  });

  const [isPending, startTransition] = useTransition();

  function onSubmit(values: z.infer<typeof RegistrationSchema>) {
    startTransition(() => registerLandlord(values));
  }

  // Scroll to top when we navigate to the page from the homepage. I'm not sure
  // why this is needed, need to open a ticket on Next.js repo later.
  useScrollToTop();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="max-w-xs"
                  placeholder="John Smith"
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Your full name as it appears on the tenancy agreement.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="max-w-xs"
                  type="email"
                  placeholder="you@example.com"
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                You&apos;ll need access to this email to log into your account.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="propertyAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Address</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="max-w-lg"
                  placeholder="123 Oak Street, Flat 3A, London, E1 1AA"
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                The full address of the property you are getting reviews for.
                You can add more properties later.
              </FormDescription>
            </FormItem>
          )}
        />

        <SubmitButton label="Register" isPending={isPending} />
      </form>
    </Form>
  );
}
