"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DataTable } from "../../components/DataTable";

export default function Page() {
  const [data, setData] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    const res = await fetch("http://localhost:3340/orders");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Orders</h1>

      <button
        onClick={() => router.push("/admin/orders/create")}
        className="bg-blue-500 text-white px-4 py-2 mb-4"
      >
        + Create
      </button>

      <DataTable
        data={data}
        columns={[
          { key: "id", label: "ID" },
          { key: "userId", label: "User" },
          { key: "gameName", label: "Game" },
          { key: "amount", label: "Price" },
        ]}
        onEdit={(id) => router.push(`/admin/orders/${id}`)}
        onDelete={async (id) => {
          await fetch(`http://localhost:3340/orders/${id}`, {
            method: "DELETE",
          });
          fetchData();
        }}
      />
    </div>
  );
}