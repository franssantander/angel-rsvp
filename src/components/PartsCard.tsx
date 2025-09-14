import React from "react";

export default function PartsCard({ name }: { name: string }) {
  return (
    <div>
      <div className="pt-4">
        <h1 className="text-xs">{name}</h1>
      </div>
    </div>
  );
}
