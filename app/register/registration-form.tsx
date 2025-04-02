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
import { useTransition, useState } from "react";
import { useScrollToTop } from "@/lib/utils";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
export default function RegistrationForm(props: { email?: string }) {
  const form = useForm<z.infer<typeof RegistrationSchema>>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      name: "",
      email: props.email,
      addressLine1: "",
      addressLine2: "",
      city: "",
      postcode: "",
    },
  });

  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  function onSubmit(values: z.infer<typeof RegistrationSchema>) {
    startTransition(async () => {
      const result = await registerLandlord(values);
      if (result.success) {
        setIsSuccess(true);
      }
    });
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
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input {...field} className="max-w-xs" />
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
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input {...field} className="max-w-xs" type="email" />
              </FormControl>
              <FormMessage />
              <FormDescription>
                You&apos;ll need access to this email to log into your account.
              </FormDescription>
            </FormItem>
          )}
        />

        <div className="space-y-6 mt-12">
          <h3 className="text-lg font-medium">Property address</h3>

          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address line 1</FormLabel>
                <FormControl>
                  <Input {...field} className="max-w-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="addressLine2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address line 2 (optional)</FormLabel>
                <FormControl>
                  <Input {...field} className="max-w-md" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row gap-6 flex-wrap">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} className="max-w-xs" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode</FormLabel>
                  <FormControl>
                    <Input {...field} className="max-w-xs" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormDescription>
            The address of the property you are getting reviews for. You can add
            more properties later.
          </FormDescription>
        </div>

        {isSuccess ? (
          <SuccessMessage />
        ) : (
          <SubmitButton label="Register" isPending={isPending} />
        )}
      </form>
    </Form>
  );
}

function SuccessMessage() {
  return (
    <Alert>
      <AlertTitle>Please check your emails</AlertTitle>
      <AlertDescription>
        We&apos;ve sent a verification link to your email address. Please check
        your email and click the link to complete your registration.
      </AlertDescription>
    </Alert>
  );
}
