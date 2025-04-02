"use client";

import { Button } from "@/components/ui/button";
import { initializePaddle } from "@paddle/paddle-js";
import { useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";

export default function DashboardClient(props: {
  email: string;
  name: string;
}) {
  const searchParams = useSearchParams();

  const handlePay = useCallback(async () => {
    const paddle = initializePaddle({
      environment: "sandbox",
      token: process.env.NEXT_PUBLIC_PADDLE_TOKEN!,
    });
    (await paddle)?.Checkout.open({
      items: [{ priceId: "pri_01jp8fj7bnw1fgt5xsfd9j9f8b", quantity: 1 }],
      customer: {
        email: props.email,
        address: {
          postalCode: "SE1 1AA",
          countryCode: "GB",
        },
      },
    });
  }, [props.email]);

  useEffect(() => {
    if (searchParams.has("payment")) {
      handlePay();
    }
  }, [searchParams, handlePay]);

  return (
    <main className="p-8 mt-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <p>Hello, {props.name}</p>
      <p className="mb-6">Email: {props.email}</p>
      <Button onClick={handlePay}>Pay</Button>
    </main>
  );
}
