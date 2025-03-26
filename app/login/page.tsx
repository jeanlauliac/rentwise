import { Metadata } from "next";
import Header from "../header";
import LoginForm from "./form";

export const metadata: Metadata = {
  title: "Login | RentWise",
  description: "Login to your RentWise account",
};

export default async function LoginPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="p-8 mt-16 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <p className="text-slate-600 mb-8 text-center">
          Login to your RentWise account to continue.
        </p>

        <div className="bg-white py-8 md:p-8 rounded-lg md:shadow-sm md:border border-slate-200">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
