"use client";

import { Button } from "@/components/ui/button";
import { initializePaddle } from "@paddle/paddle-js";
import { useState } from "react";

export default function DashboardClient() {
  const paddle = usePaddle();

  return (
    <main className="p-8 mt-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <Button
        onClick={async () => {
          (await paddle)?.Checkout.open({
            items: [{ priceId: "pri_01jp8fj7bnw1fgt5xsfd9j9f8b", quantity: 1 }],
          });
        }}
      >
        Pay
      </Button>
    </main>
  );
}

function usePaddle() {
  const [paddle] = useState(() =>
    initializePaddle({
      environment: "sandbox",
      token: process.env.NEXT_PUBLIC_PADDLE_TOKEN!,
    })
  );
  return paddle;
}
