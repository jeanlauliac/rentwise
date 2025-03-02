import Image from "next/image";
import Link from "next/link";
import Hero from "./hero.svg";
import EmailForm from "./email-form";

export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 right-0 w-full h-12 bg-slate-50 border-b border-b-slate-100 px-4 py-2 z-10 shadow-xs flex items-center">
        <Link href="/" className="font-bold text-lg">
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
        <div className="flex mx-auto max-w-(--breakpoint-lg) pt-16 justify-center items-center">
          <div className="w-1/2 flex flex-col gap-8">
            <p className="text-4xl font-bold">
              Boost your{" "}
              <span className="text-blue-600 bg-slate-100 px-1">
                rental income
              </span>{" "}
              with trusted reviews
            </p>
            <p className="text-xl">
              Great tenants leave great reviews. Use{" "}
              <span className="font-bold">RentWise</span> to build trust and
              command higher rents
            </p>
          </div>
          <div className="w-1/2">
            <Image
              priority
              src={Hero}
              alt="illustration of a tenant leaving a review"
            />
          </div>
        </div>
        <div className="flex mx-auto max-w-(--breakpoint-sm) rounded-full border py-4 px-6 bg-slate-50 my-8">
          <EmailForm />
        </div>
      </main>
    </div>
  );
}
