import Link from "next/link"
import { defaultLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"

export default function NotFound() {
  const dict = getDictionary(defaultLocale)
  const nf = dict.not_found

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center">
      <p className="font-heading text-7xl font-extrabold text-primary/20">404</p>
      <h1 className="mt-4 text-balance font-heading text-2xl font-bold sm:text-3xl">{nf.title}</h1>
      <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{nf.subtitle}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {nf.button}
      </Link>
    </main>
  )
}
