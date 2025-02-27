import { customColumnsTable, moleculesTable } from "@/db/schema";
import db from "@/db";
import { Filter, MoleculesTable, SortPredicate } from "./molecules-table";
import { and, asc, count, desc, eq, ilike, SQL } from "drizzle-orm";

export default async function Home({
  searchParams,
}: {
  // There are the query parameters passed to the page (?filters=..., etc).
  // This is a Next.js convention, it will provide them to us out of the box.
  searchParams: Promise<{ filters?: string; sorting?: string; page?: string }>;
}) {
  const { page, filters, sorting } = await searchParams;
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="w-full h-10 bg-slate-50 border-b border-b-slate-100 px-4 py-2 font-bold">
        rentwise.
      </header>
      <main className="p-4">Boost Your Rental Income with Trusted Reviews</main>
    </div>
  );
}
