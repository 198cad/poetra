import { DocTypeLayout } from "@/components/doc-type-layout";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocTypeLayout>{children}</DocTypeLayout>;
}
