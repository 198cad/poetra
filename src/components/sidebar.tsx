"use client";

import * as React from "react";
import Link from "next/link";
import { Bell, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/config/menu-data";

export function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-4 lg:px-6">
          <Link href="/me" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">PT. Poetra Mandiri Sejati</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8 sr-only">
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {menuItems.map((group, groupIndex) => (
              <div key={groupIndex} className="py-2">
                <div className="flex items-center px-3 text-xs font-medium text-gray-700 dark:text-gray-300">
                  {group.name}
                </div>
                <div className="grid gap-0 pl-6 pt-2">
                  {group.children.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
