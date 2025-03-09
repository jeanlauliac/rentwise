import { Metadata } from "next";
import FullRegistrationForm from "./full-registration-form";
import Header from "../header";

export const metadata: Metadata = {
  title: "Complete Your Registration | RentWise",
  description:
    "Complete your landlord registration and start inviting tenants to review your property",
};

export default function FullRegistrationPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="p-8 mt-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Complete Your Registration
        </h1>
        <p className="text-slate-600 mb-8 text-center">
          Provide details about your property to generate a review invitation
          link for your tenants.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
          <FullRegistrationForm />
        </div>
      </main>
    </div>
  );
}
