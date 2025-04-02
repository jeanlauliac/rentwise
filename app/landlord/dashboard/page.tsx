import { Metadata } from "next";
import Header from "../../header";
import DashboardClient from "./client";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import db from "@/db";
import { landlords } from "@/db/schema";
import { eq } from "drizzle-orm";

export const metadata: Metadata = {
  title: "Landlord Dashboard | RentWise",
  description: "Landlord dashboard",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user || !data.user.email) {
    redirect("/login");
  }

  const name = await db
    .select()
    .from(landlords)
    .where(eq(landlords.id, data.user.id))
    .then((res) => res[0]?.name);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <DashboardClient email={data.user.email} name={name} />
    </div>
  );
}
