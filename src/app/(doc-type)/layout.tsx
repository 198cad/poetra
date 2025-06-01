import React from "react";

export default function DocTypeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "2px solid green", padding: "20px", margin: "20px" }}>
      <h1>Document Type Layout</h1>
      {children}
    </div>
  );
}
