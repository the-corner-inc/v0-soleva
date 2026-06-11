import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { type Locale, isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { SITE_URL } from "@/lib/constants"
import { PageHero } from "@/components/layout/page-hero"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.legal.title,
    description: dict.meta.legal.description,
    alternates: { canonical: `${SITE_URL}/${locale}/mentions-legales` },
    robots: { index: false, follow: true },
  }
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)
  const lg = dict.legal

  const sections = [
    { title: lg.editor_title, body: lg.editor_body },
    { title: lg.form_title, body: lg.form_body },
    { title: lg.hosting_title, body: lg.hosting_body },
    { title: lg.credits_title, body: lg.credits_body },
  ]

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[{ label: dict.breadcrumb.legal, href: "/mentions-legales" }]}
        title={lg.title}
      />

      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-heading text-xl font-bold">{s.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
            <p className="rounded-2xl border border-dashed border-border bg-muted p-4 text-sm text-muted-foreground">
              {lg.todo}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
