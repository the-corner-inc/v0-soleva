"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { type Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n"
import { withLocale } from "@/lib/navigation"
import { Button } from "@/components/ui/button"
import { COOKIE_CONSENT_KEY } from "@/lib/constants"

const OPEN_EVENT = "soleva:open-cookie-settings"

function applyConsent(granted: boolean) {
  if (typeof window === "undefined") return
  // Google Consent Mode v2
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
    })
  }
}

export function CookieBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!stored) {
      setVisible(true)
    } else {
      applyConsent(stored === "granted")
    }
    const openHandler = () => setVisible(true)
    window.addEventListener(OPEN_EVENT, openHandler)
    return () => window.removeEventListener(OPEN_EVENT, openHandler)
  }, [])

  const decide = useCallback((granted: boolean) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, granted ? "granted" : "denied")
    applyConsent(granted)
    setVisible(false)
  }, [])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur"
    >
      <div className="container-premium flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {dict.cookies.message}{" "}
          <Link href={withLocale(locale, "/confidentialite")} className="font-medium text-primary underline underline-offset-2">
            {dict.cookies.learn_more}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <Button variant="outline" size="sm" onClick={() => decide(false)}>
            {dict.cookies.decline}
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => decide(true)}
          >
            {dict.cookies.accept}
          </Button>
        </div>
      </div>
    </div>
  )
}

export function ManageCookiesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="text-left text-dark-foreground/70 hover:text-secondary"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      {label}
    </button>
  )
}
