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
import { useState, useEffect } from "react";
import { NHLogoFromFile } from "@nh-ui/ui";

export function SiteHeader() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      className="backdrop-blur-md bg-white/70 dark:bg-black/70"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" color="foreground">
            <NHLogoFromFile className="h-8 w-auto" />
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
            onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {mounted && resolvedTheme === "dark" ? (
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