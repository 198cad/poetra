"use client";

import * as React from "react";
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ModeSwitcher } from "@/components/mode-switcher";
import { ThemeSelector } from "@/components/theme-selector";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { menuItems, MenuGroup, MenuItem } from "@/config/menu-data";

interface MainHeaderProps {
  children?: React.ReactNode; // Untuk konten navigasi seluler yang spesifik
}

export function MainHeader({ children }: MainHeaderProps) {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="h-6 w-6" />
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetTitle>Orcish Dashboard</SheetTitle>
          <nav className="grid gap-2 text-lg font-medium">
            {children
              ? children
              : menuItems.map((group: MenuGroup, groupIndex: number) => (
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
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <ThemeSelector />
      <ModeSwitcher />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
