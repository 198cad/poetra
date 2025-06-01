import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "2px solid blue", padding: "20px", margin: "20px" }}>
      <h1>Auth Layout HEllo</h1>
      {children}
    </div>
  );
}
