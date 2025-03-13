import { Metadata } from "next";
import Header from "../../header";
import DashboardClient from "./client";

export const metadata: Metadata = {
  title: "Landlord Dashboard | RentWise",
  description: "Landlord dashboard",
};

export default function DashboardPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <DashboardClient />
    </div>
  );
}
