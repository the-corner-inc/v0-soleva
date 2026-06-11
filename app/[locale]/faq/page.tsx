import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { type Locale, isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { SITE_URL } from "@/lib/constants"
import { withLocale } from "@/lib/navigation"
import { faqs } from "@/lib/data/faqs"
import { PageHero } from "@/components/layout/page-hero"
import { FaqList } from "@/components/faq/faq-list"
import { FaqJsonLd } from "@/components/seo/json-ld"
import { Button } from "@/components/ui/button"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.faq.title,
    description: dict.meta.faq.description,
    alternates: { canonical: `${SITE_URL}/${locale}/faq` },
  }
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)
  const fq = dict.faq

  const jsonLdItems = faqs.map((f) => ({ question: f.question[l], answer: f.answer[l] }))

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[{ label: dict.breadcrumb.faq, href: "/faq" }]}
        eyebrow={fq.hero.eyebrow}
        title={fq.hero.title}
        subtitle={fq.hero.subtitle}
      />

      <FaqJsonLd items={jsonLdItems} />

      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="mx-auto max-w-3xl">
            <FaqList locale={l} categoryLabels={fq.categories} />
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container-premium section-padding">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">{fq.cta.title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{fq.cta.body}</p>
            <Button
              size="lg"
              className="mt-6"
              render={<Link href={withLocale(l, "/contact")}>{fq.cta.button}</Link>}
            />
          </div>
        </div>
      </section>
    </>
  )
}
