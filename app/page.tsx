import Link from "next/link";

export default async function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 right-0 w-full h-12 bg-slate-50 border-b border-b-slate-100 px-4 py-2 font-bold text-lg z-10 shadow-sm flex items-center">
        <Link href="/">rentwise.</Link>
      </header>
      <main className="p-4 mt-12">
        <div className="flex mx-auto max-w-screen-lg pt-32">
          <div className="w-1/2 flex flex-col gap-8">
            <p className="text-4xl font-bold">
              Boost your{" "}
              <span className="text-blue-600 bg-slate-100 px-2">
                rental income
              </span>{" "}
              with trusted reviews
            </p>
            <p className="text-xl">
              Great tenants leave great reviews. Use RentWise to build trust and
              command higher rents
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
