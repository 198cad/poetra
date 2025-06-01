"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { PaletteIcon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSelector() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 px-0">
          <PaletteIcon className="h-4 w-4" />
          <span className="sr-only">Select theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("zinc")}>Zinc</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("rose")}>Rose</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("blue")}>Blue</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("green")}>Green</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
