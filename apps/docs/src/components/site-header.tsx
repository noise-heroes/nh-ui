"use client";

import { 
  NHButton, 
  NHLink,
  NHNavbar,
  NHNavbarBrand,
  NHNavbarContent,
  NHNavbarItem,
  NHNavbarMenu,
  NHNavbarMenuItem,
  NHNavbarMenuToggle,
  NHChip,
  NHLogoFromFile,
  MoonIcon, 
  SunIcon
} from "@nh-ui/ui";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
    { label: "Getting Started", href: "/getting-started" },
    { label: "Principles", href: "/principles" },
    { label: "Foundation", href: "/foundation" },
    { label: "Typography", href: "/typography" },
    { label: "Colors", href: "/colors" },
    { label: "Components", href: "/components/overview" },
    { label: "Inputs", href: "/inputs" },
    { label: "Feedback", href: "/feedback" },
    { label: "Navigation", href: "/navigation" },
    { label: "Data Display", href: "/data-display" },
  ];

  return (
    <NHNavbar 
      isBordered 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="backdrop-blur-md bg-white/70 dark:bg-black/70"
    >
      <NHNavbarContent>
        <NHNavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NHNavbarBrand>
          <NHLink href="/" color="foreground">
            <NHLogoFromFile className="h-8 w-auto" />
          </NHLink>
          <NHChip size="sm" variant="flat" color="secondary" className="ml-3">
            UI Kit v2.0
          </NHChip>
        </NHNavbarBrand>
      </NHNavbarContent>

      <NHNavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NHNavbarItem key={item.href} isActive={pathname === item.href}>
            <NHLink 
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
            >
              {item.label}
            </NHLink>
          </NHNavbarItem>
        ))}
      </NHNavbarContent>

      <NHNavbarContent justify="end">
        <NHNavbarItem>
          <NHButton
            isIconOnly
            variant="light"
            onPress={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {mounted && resolvedTheme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </NHButton>
        </NHNavbarItem>
      </NHNavbarContent>

      <NHNavbarMenu>
        {menuItems.map((item, index) => (
          <NHNavbarMenuItem key={`${item}-${index}`}>
            <NHLink
              color={pathname === item.href ? "primary" : "foreground"}
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </NHLink>
          </NHNavbarMenuItem>
        ))}
      </NHNavbarMenu>
    </NHNavbar>
  );
}