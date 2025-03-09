"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Copy, Check } from "lucide-react";
import { registerLandlord } from "../actions";
import { useState } from "react";
import Link from "next/link";
import { ReactNode } from "react";

// Creating Label and Textarea components inline since they may not exist
const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) => (
  <label
    htmlFor={htmlFor}
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    {children}
  </label>
);

const Textarea = ({
  id,
  name,
  placeholder,
  rows,
  required,
}: {
  id: string;
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) => (
  <textarea
    id={id}
    name={name}
    placeholder={placeholder}
    rows={rows}
    required={required}
    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  />
);

// Type for the landlord registration form state
type LandlordFormState = {
  success: boolean;
  tenantLink: string | null;
  error: string | null;
};

export default function FullRegistrationForm() {
  // Using the correctly typed initial state
  const initialState: LandlordFormState = {
    success: false,
    tenantLink: null,
    error: null,
  };

  const [state, submitAction, isPending] = useActionState(
    registerLandlord,
    initialState
  );

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (state.tenantLink) {
      await navigator.clipboard.writeText(state.tenantLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (state.success && state.tenantLink) {
    return (
      <div className="space-y-6">
        <div className="bg-green-50 border border-green-100 p-4 rounded-md text-green-700">
          <h3 className="font-semibold text-xl mb-2">
            Success! You&apos;re all set.
          </h3>
          <p>Share this unique link with your tenant to request a review:</p>
        </div>

        <div className="flex items-center gap-2 border rounded-md p-2 bg-slate-50">
          <Input
            value={state.tenantLink}
            readOnly
            className="bg-transparent border-0 focus-visible:ring-0"
          />
          <Button
            type="button"
            variant="outline"
            onClick={copyToClipboard}
            className="flex items-center gap-1"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>

        <div className="mt-6 space-y-4">
          <h4 className="font-semibold">What happens next?</h4>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Send this link to your tenant</li>
            <li>
              They&apos;ll leave an honest review of their rental experience
            </li>
            <li>
              You can use these reviews to build trust with future tenants
            </li>
          </ol>
          <Button asChild className="w-full mt-4">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-6" action={submitAction}>
      {state.error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-md text-red-700">
          <p>{state.error}</p>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" name="name" placeholder="John Smith" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="propertyAddress">Property Address</Label>
        <Textarea
          id="propertyAddress"
          name="propertyAddress"
          placeholder="123 Main St, Apartment 4B, City, State, Zip"
          rows={3}
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <>
            <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          "Generate Tenant Review Link"
        )}
      </Button>
    </form>
  );
}
