import "server-only"

import fr from "./fr.json"
import en from "./en.json"
import de from "./de.json"
import it from "./it.json"
import { locales, defaultLocale, type Locale, isLocale } from "./config"

export { locales, defaultLocale, isLocale }
export type { Locale }

// og:locale values
export const ogLocales: Record<Locale, string> = {
  fr: "fr_CH",
  en: "en_US",
  de: "de_CH",
  it: "it_CH",
}

export type Dictionary = typeof fr

const dictionaries: Record<Locale, Dictionary> = {
  fr,
  en: en as Dictionary,
  de: de as Dictionary,
  it: it as Dictionary,
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}

/**
 * Resolve a dot-notation key (e.g. "nav.home") against a loaded dictionary.
 * Returns the key itself if not found (helps surface missing translations).
 */
export function t(dictionary: Dictionary, key: string): string {
  const value = key
    .split(".")
    .reduce<unknown>((acc, part) => {
      if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
        return (acc as Record<string, unknown>)[part]
      }
      return undefined
    }, dictionary)

  return typeof value === "string" ? value : key
}
