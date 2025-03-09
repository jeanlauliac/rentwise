import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../favicon.png";
import ReviewForm from "./review-form";

export const metadata: Metadata = {
  title: "Leave a Landlord Review | RentWise",
  description:
    "Share your experience with your landlord and help future tenants make informed decisions",
};

export default function ReviewPage({
  params,
}: {
  params: { landlordId: string };
}) {
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
          Share Your Rental Experience
        </h1>
        <p className="text-slate-600 mb-8 text-center">
          Your honest review helps others find great landlords and properties.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
          <ReviewForm landlordId={params.landlordId} />
        </div>
      </main>
    </div>
  );
}
