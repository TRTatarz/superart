"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Form } from "../../../components/Form";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:3340/orders/${id}`)
      .then((res) => res.json())
      .then(setData);
  }, [id]);

  if (!data) return <div>Loading...</div>;

  const handleSubmit = async (form: any) => {
    await fetch(`http://localhost:3340/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    router.push("/admin/orders");
  };

  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">Edit Order</h1>

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
        initialData={data}
        onSubmit={handleSubmit}
      />
    </div>
  );
}