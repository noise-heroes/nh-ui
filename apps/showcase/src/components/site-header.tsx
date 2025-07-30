"use client";

import { 
  Button, 
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Chip,
} from "@heroui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Typography", href: "/typography" },
    { label: "Colors", href: "/colors" },
    { label: "Components", href: "/components" },
    { label: "Animations", href: "/animations" },
    { label: "Dark Mode", href: "/dark-mode" },
  ];

  return (
    <Navbar 
      isBordered 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground">
            <img 
              src="/NH-logo-RGB-hr.svg" 
              alt="Noise Heroes" 
              className="h-8 w-auto"
            />
          </Link>
          <Chip size="sm" variant="flat" color="secondary" className="ml-3">
            UI Kit v2.0
          </Chip>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link 
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}