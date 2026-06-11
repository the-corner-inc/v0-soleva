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
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
    alternates: { canonical: `${SITE_URL}/${locale}/confidentialite` },
    robots: { index: false, follow: true },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)
  const p = dict.privacy

  const sections = [
    { title: p.data_title, body: p.data_body },
    { title: p.analytics_title, body: p.analytics_body },
    { title: p.cookies_title, body: p.cookies_body },
    { title: p.rights_title, body: p.rights_body },
  ]

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[{ label: dict.breadcrumb.privacy, href: "/confidentialite" }]}
        title={p.title}
        subtitle={p.intro}
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
              {p.todo}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
