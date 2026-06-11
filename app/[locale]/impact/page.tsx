import type { Metadata } from "next"
import Image from "next/image"
import { isLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { SITE_URL, IMAGES } from "@/lib/constants"
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { CtaBand } from "@/components/ui/cta-band"
import { Recycle, Sun, Leaf, GraduationCap } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.impact.title,
    description: dict.meta.impact.description,
    alternates: { canonical: `${SITE_URL}/${locale}/impact` },
  }
}

export default async function ImpactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)
  const t = dict.impact

  const cards = [
    { icon: Leaf, title: t.cards.carbon_title, desc: t.cards.carbon_desc },
    { icon: Recycle, title: t.cards.circular_title, desc: t.cards.circular_desc },
    { icon: Sun, title: t.cards.solar_title, desc: t.cards.solar_desc },
    { icon: GraduationCap, title: t.cards.awareness_title, desc: t.cards.awareness_desc },
  ]

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[{ label: dict.breadcrumb.impact, href: "/impact" }]}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image={IMAGES.impact}
      />

      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card, i) => {
              const Icon = card.icon
              return (
                <Reveal key={card.title} delay={i * 0.06}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 font-heading text-xl font-bold text-foreground">{card.title}</h2>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{card.desc}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-sm italic text-muted-foreground">
            {t.disclaimer}
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-dark text-dark-foreground">
        <div className="absolute inset-0 -z-10">
          <Image src={IMAGES.journey} alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <div className="container-premium section-padding">
          <SectionHeading
            inverted
            title={t.hero.title}
            subtitle={t.hero.subtitle}
          />
        </div>
      </section>

      <CtaBand
        locale={l}
        title={dict.home.cta.title}
        body={dict.home.cta.body}
        buttonLabel={dict.common.contact_us}
      />
    </>
  )
}
