"use client";

import * as React from "react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { MainHeader } from "@/components/main-header";
import { menuItems, MenuGroup, MenuItem } from "@/config/menu-data";

interface DocTypeLayoutProps {
  children: React.ReactNode;
}

export function DocTypeLayout({ children }: DocTypeLayoutProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <MainHeader>
          {menuItems.map((group: MenuGroup, groupIndex: number) => (
            <div key={groupIndex} className="py-2">
              <div className="flex items-center px-3 text-xs font-medium text-gray-700 dark:text-gray-300">
                {group.name}
              </div>
              <div className="grid gap-0 pl-6 pt-2">
                {group.children.map((item: MenuItem, itemIndex: number) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </MainHeader>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">{children}</main>
      </div>
    </div>
  );
}
