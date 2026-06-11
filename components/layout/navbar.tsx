"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { type Locale, locales, localeNames, localeShort } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n"
import { mainNav, withLocale } from "@/lib/navigation"

export function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Strip the current locale prefix to build switcher links that preserve the path.
  const pathWithoutLocale = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "") || "/"

  const isActive = (href: string) => {
    const full = withLocale(locale, href)
    if (href === "/") return pathname === full
    return pathname === full || pathname.startsWith(full + "/")
  }

  const navLabel = (key: string) => (dict.nav as Record<string, string>)[key] ?? key

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent",
      )}
    >
      <nav className="container-premium flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href={withLocale(locale, "/")}
          className="flex items-center"
          aria-label="Soleva"
        >
          <span className="flex items-center rounded-xl bg-[#0a0a0a] px-3 py-1.5">
            <Image
              src="/images/soleva-logo.webp"
              alt="Soleva — The Solar Electric Van"
              width={651}
              height={281}
              priority
              className="h-8 w-auto md:h-9"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <li key={item.key}>
              <Link
                href={withLocale(locale, item.href)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.href) ? "text-primary" : "text-foreground/80",
                )}
              >
                {navLabel(item.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="ghost" size="sm" className="gap-1 px-2" aria-label={dict.nav.language} />
              }
            >
              {localeShort[locale]}
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {locales.map((l) => (
                <DropdownMenuItem
                  key={l}
                  render={
                    <Link
                      href={`/${l}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
                      className={cn("cursor-pointer", l === locale && "font-semibold text-primary")}
                    />
                  }
                >
                  {localeNames[l]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            size="sm"
            className="hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex"
            render={<Link href={withLocale(locale, "/contact")} />}
          >
            {dict.common.contact_us}
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label={dict.nav.menu} />
              }
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetTitle className="sr-only">{dict.nav.menu}</SheetTitle>
              <div className="flex flex-col gap-1 px-4 pt-16">
                {mainNav.map((item) => (
                  <SheetClose
                    key={item.key}
                    render={
                      <Link
                        href={withLocale(locale, item.href)}
                        className={cn(
                          "rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-muted",
                          isActive(item.href) ? "text-primary" : "text-foreground",
                        )}
                      />
                    }
                  >
                    {navLabel(item.key)}
                  </SheetClose>
                ))}
                <SheetClose
                  render={
                    <Button
                      className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                      render={<Link href={withLocale(locale, "/soutenir")} />}
                    />
                  }
                >
                  {dict.common.support_project}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
