import Image from "next/image";
import Link from "next/link";
import Hero from "./hero.png";
import EmailForm from "./email-form";
import Logo from "./favicon.png";
import {
  Home as HomeIcon,
  Clipboard,
  BarChart3,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";

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
                    <HomeIcon className="text-slate-500" />
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
                    <Clipboard className="text-slate-500" />
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
                    <BarChart3 className="text-slate-500" />
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
                    <Star className="text-blue-600" />
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
                    <Users className="text-blue-600" />
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
                    <TrendingUp className="text-blue-600" />
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

        <section className="py-16 px-4 md:px-6 lg:px-8 bg-slate-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How it works
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our simple three-step process helps landlords build trust and
                attract better tenants
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {/* Placeholder for doodle */}
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Invite tenants to leave a review
                </h3>
                <p className="text-slate-600 text-center">
                  Ask your current and past tenants to share their honest rental
                  experience
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {/* Placeholder for doodle */}
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Reviews build trust for future renters
                </h3>
                <p className="text-slate-600 text-center">
                  Positive reviews create confidence and transparency for
                  potential new tenants
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="mb-4 flex justify-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {/* Placeholder for doodle */}
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Attract better tenants & justify higher rent
                </h3>
                <p className="text-slate-600 text-center">
                  Quality reviews help you stand out, attracting reliable
                  tenants willing to pay premium rates
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
