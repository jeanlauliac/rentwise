import { Metadata } from "next";
import RegistrationForm from "./registration-form";
import Header from "../header";

export const metadata: Metadata = {
  title: "Complete Your Registration | RentWise",
  description:
    "Complete your landlord registration and start inviting tenants to review your property",
};

export default async function FullRegistrationPage(props: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await props.searchParams;

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="p-8 mt-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Complete your registration
        </h1>
        <p className="text-slate-600 mb-8 text-center">
          Complete your landlord registration and start inviting tenants to
          review your property. We&apos;ll generate a unique link you can share
          with tenants.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
          <p className="text-slate-800 text-lg mb-2">
            One-time registration fee &mdash; just{" "}
            <span className="font-bold">£20</span>
          </p>
          <p className="text-slate-600 mb-2 text-sm">
            After submitting your details, you&apos;ll be directed to complete
            your payment securely.
          </p>
          <p className="text-slate-600 mb-6 text-sm">
            This one-time fee gives you full access to RentWise, helping you
            attract better tenants and maximize your rental income.
          </p>
          <RegistrationForm email={email} />
        </div>
      </main>
    </div>
  );
}
