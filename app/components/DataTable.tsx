"use client";

import { useState } from "react";

interface Column<T> {
  key: keyof T;
  label: string;
}

interface Props<T> {
  data: T[];
  columns: Column<T>[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export function DataTable<T extends { id: number }>({
  data,
  columns,
  onEdit,
  onDelete,
}: Props<T>) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search */}
      <input
        className="border p-2 mb-4 w-full"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <table className="w-full border">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className="border p-2">
                {col.label}
              </th>
            ))}
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={String(col.key)} className="border p-2">
                  {String(row[col.key])}
                </td>
              ))}

              <td className="border p-2">
                {onEdit && (
                  <button
                    onClick={() => onEdit(row.id)}
                    className="text-blue-500 mr-2"
                  >
                    Edit
                  </button>
                )}

                {onDelete && (
                  <button
                    onClick={() => onDelete(row.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}