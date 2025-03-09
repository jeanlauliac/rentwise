import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "../favicon.png";

export const metadata: Metadata = {
  title: "Landlord Dashboard | RentWise",
  description: "Monitor your property reviews and manage your landlord profile",
};

export default function DashboardPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 right-0 w-full h-12 bg-slate-50 border-b border-b-slate-100 px-4 py-2 z-10 shadow-xs flex items-center">
        <Link href="/" className="font-bold text-lg flex items-center gap-2">
          <Image src={Logo} alt="RentWise logo" className="w-5 h-5" />
          rentwise.
        </Link>
        <nav className="ml-8">
          <ul className="flex space-x-6">
            <li className="font-medium text-blue-600">Dashboard</li>
            <li>
              <Link
                href="/dashboard/properties"
                className="text-slate-600 hover:text-blue-600"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/reviews"
                className="text-slate-600 hover:text-blue-600"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="p-8 mt-16 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold mb-2">Properties</h2>
            <p className="text-3xl font-bold text-blue-600">1</p>
            <p className="text-slate-600 mt-2">Active property listing</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold mb-2">Reviews</h2>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-slate-600 mt-2">Reviews received</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold mb-2">Average Rating</h2>
            <p className="text-3xl font-bold text-blue-600">-</p>
            <p className="text-slate-600 mt-2">No reviews yet</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="text-center py-8 text-slate-500">
            <p>No recent activity to display.</p>
            <p className="mt-2">
              As you send out review requests and receive reviews, they&apos;ll
              appear here.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-medium">Invite more tenants</h3>
                <p className="text-slate-600">
                  Send review requests to your current and past tenants
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-medium">Complete your profile</h3>
                <p className="text-slate-600">
                  Add information about yourself to build trust with potential
                  tenants
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-medium">Add more properties</h3>
                <p className="text-slate-600">
                  Register all your rental properties to get reviews for each
                </p>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
