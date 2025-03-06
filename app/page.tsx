import Image from "next/image";
import Link from "next/link";
import Hero from "./hero.png";
import EmailForm from "./email-form";
import Logo from "./favicon.png";

export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 right-0 w-full h-12 bg-slate-50 border-b border-b-slate-100 px-4 py-2 z-10 shadow-xs flex items-center">
        <Link href="/" className="font-bold text-lg flex items-center gap-2">
          <Image src={Logo} alt="RentWise logo" className="w-5 h-5" />
          rentwise.
        </Link>
        <ul className="flex flex-row gap-x-4 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
        </ul>
        <div />
      </header>
      <main className="p-8 mt-8">
        <div className="flex flex-col md:flex-row mx-auto max-w-(--breakpoint-lg) pt-16 justify-center items-center">
          <div className="w-full md:w-1/2 flex flex-col gap-8 mb-8 md:mb-0">
            <p className="text-3xl md:text-4xl font-bold">
              Boost your{" "}
              <span className="text-blue-600 bg-slate-100 px-1">
                rental income
              </span>{" "}
              with trusted reviews
            </p>
            <p className="text-lg md:text-xl">
              Great tenants leave great reviews. Use{" "}
              <span className="font-bold">RentWise</span> to build trust and
              command higher rents.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-8 flex items-center justify-center">
            <Image
              priority
              src={Hero}
              alt="illustration of a house with a dialogue bubble showing a review"
              className="max-w-full h-auto max-h-[300px] w-auto"
            />
          </div>
        </div>
        <div className="flex mx-auto max-w-(--breakpoint-sm) rounded-lg border py-4 px-6 bg-slate-50 my-8">
          <EmailForm />
        </div>
        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The RentWise Difference
          </h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            {/* Before Column */}
            <div className="flex-1 bg-slate-100 rounded-lg p-6 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">
                Before RentWise
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-500"
                    >
                      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                      <path d="M3 16V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
                      <path d="M12 12h.01" />
                      <path d="M3 16h18" />
                      <path d="M12 20v-4" />
                      <path d="M12 20h4" />
                      <path d="M8 20h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Dull Rental Listing
                    </h4>
                    <p className="text-slate-600">
                      Generic listings that blend in with hundreds of others
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-500"
                    >
                      <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9Z" />
                      <path d="m12 12 4-4" />
                      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                      <path d="M12 12v4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Hesitant Tenants</h4>
                    <p className="text-slate-600">
                      Potential renters have no way to verify your reputation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-200 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-500"
                    >
                      <path d="M2 20h.01" />
                      <path d="M7 20v-4" />
                      <path d="M12 20v-8" />
                      <path d="M17 20V8" />
                      <path d="M22 4v16" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Lower Rent</h4>
                    <p className="text-slate-600">
                      Forced to compete on price alone, reducing your income
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* After Column */}
            <div className="flex-1 bg-blue-50 rounded-lg p-6 border border-blue-100 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                After RentWise
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      5-Star Landlord Badge
                    </h4>
                    <p className="text-slate-700">
                      Showcase your verified reviews and stellar reputation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">More Inquiries</h4>
                    <p className="text-slate-700">
                      Attract quality tenants who value trusted landlords
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M2 20h.01" />
                      <path d="M7 20v-4" />
                      <path d="M12 20v-8" />
                      <path d="M17 20V8" />
                      <path d="M22 4v16" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Higher Rent Justified
                    </h4>
                    <p className="text-slate-700">
                      Command premium rates based on your proven track record
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
