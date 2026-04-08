"use client";

import { useState } from "react";

interface Field {
  name: string;
  label: string;
}

interface Props {
  fields: Field[];
  initialData?: any;
  onSubmit: (data: any) => void;
}

export function Form({ fields, initialData = {}, onSubmit }: Props) {
  const [form, setForm] = useState(initialData);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4"
    >
      {fields.map((f) => (
        <div key={f.name}>
          <label className="block mb-1">{f.label}</label>
          <input
            className="border p-2 w-full"
            value={form[f.name] || ""}
            onChange={(e) =>
              setForm({ ...form, [f.name]: e.target.value })
            }
          />
        </div>
      ))}

      <button className="bg-blue-500 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}