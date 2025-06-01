import * as React from "react";
import { Home, ShoppingCart, Package, Users, LineChart, Settings, User, Shield, Globe, Sliders } from "lucide-react";

export interface MenuItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

export interface MenuGroup {
  name: string;
  icon?: React.ElementType;
  children: MenuItem[];
}

export const menuItems: MenuGroup[] = [
  {
    name: "General",
    children: [
      { name: "Dashboard", href: "#", icon: Home },
      { name: "Orders", href: "#", icon: ShoppingCart },
      { name: "Products", href: "#", icon: Package },
      { name: "Customers", href: "#", icon: Users },
      { name: "Analytics", href: "#", icon: LineChart },
    ],
  },
  {
    name: "System Configuration",
    icon: Settings,
    children: [
      { name: "User", href: "#", icon: User },
      { name: "Role", href: "#", icon: Shield },
      { name: "Permission", href: "#", icon: Sliders },
      { name: "Global Setting", href: "#", icon: Globe },
      { name: "Profile", href: "#", icon: User },
    ],
  },
];
