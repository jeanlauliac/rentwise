import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "../favicon.png";
import FullRegistrationForm from "./full-registration-form";

export const metadata: Metadata = {
  title: "Complete Your Registration | RentWise",
  description:
    "Complete your landlord registration and start inviting tenants to review your property",
};

export default function FullRegistrationPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 right-0 w-full h-12 bg-slate-50 border-b border-b-slate-100 px-4 py-2 z-10 shadow-xs flex items-center">
        <Link href="/" className="font-bold text-lg flex items-center gap-2">
          <Image src={Logo} alt="RentWise logo" className="w-5 h-5" />
          rentwise.
        </Link>
      </header>
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
