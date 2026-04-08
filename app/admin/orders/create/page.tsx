"use client";

import { useRouter } from "next/navigation";
import { Form } from "../../../components/Form";

export default function Page() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    await fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    router.push("/admin/orders");
  };

  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">Create Order</h1>

      <Form
        fields={[
          { name: "userId", label: "User ID" },
          { name: "server", label: "Server" },
          { name: "gameName", label: "Game" },
          { name: "gameId", label: "Game ID" },
          { name: "packageId", label: "Package ID" },
          { name: "amount", label: "Amount" },
          { name: "promoCode", label: "Promo Code" },
          { name: "timestamp", label: "Timestamp" },
        ]}
        onSubmit={handleSubmit}
      />
    </div>
  );
}