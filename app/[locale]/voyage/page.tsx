import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { isLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { SITE_URL, KEY_FIGURES } from "@/lib/constants"
import { withLocale } from "@/lib/navigation"
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { CtaBand } from "@/components/ui/cta-band"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.voyage.title,
    description: dict.meta.voyage.description,
    alternates: { canonical: `${SITE_URL}/${locale}/voyage` },
  }
}

const STOPS = ["Lausanne", "Genève", "Sion", "Bern", "Zürich", "Lugano", "Davos", "Basel"]

export default async function VoyagePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)
  const t = dict.voyage

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[{ label: dict.breadcrumb.voyage, href: "/voyage" }]}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image="/images/journey.png"
      />

      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/images/soleva-hero.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <SectionHeading align="left" title={t.tour_title} subtitle={t.tour_body} />
                <dl className="mt-8 grid grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-muted p-5">
                    <dt className="text-sm text-muted-foreground">{dict.home.figures.communes}</dt>
                    <dd className="mt-1 font-heading text-3xl font-extrabold text-primary">
                      {KEY_FIGURES.communesVisited}
                    </dd>
                  </div>
                  <div className="rounded-2xl bg-muted p-5">
                    <dt className="text-sm text-muted-foreground">{dict.home.figures.autonomy}</dt>
                    <dd className="mt-1 font-heading text-3xl font-extrabold text-primary">
                      {KEY_FIGURES.autonomy}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-muted/50">
        <div className="container-premium section-padding">
          <SectionHeading title={t.stops_title} />
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {STOPS.map((stop, i) => (
              <Reveal key={stop} delay={i * 0.04}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground">
                  <MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />
                  {stop}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-background">
        <div className="container-premium section-padding">
          <SectionHeading title={t.events_title} />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              { name: "Avant-première documentaire", location: "Lausanne", date: "04.10.2024" },
              { name: "Vanlife Expo Grenoble (Coup de cœur)", location: "Grenoble", date: "04-05.05.2024" },
              { name: "Congrès photovoltaïque Suisse", location: "Suisse", date: "03.2024" },
              { name: "Roadtrip Expo", location: "Suisse", date: "11.2023" },
            ].map((event, i) => (
              <Reveal key={event.name} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-lg font-semibold">{event.name}</h3>
                  <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{event.location}</span>
                    <span>{event.date}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              render={<Link href={withLocale(l, "/contact")}>{t.events_cta}</Link>}
            />
          </div>
        </div>
      </section>

      {/* Polar Steps */}
      <section className="bg-muted">
        <div className="container-premium section-padding text-center">
          <SectionHeading title={t.polar_title} subtitle={t.polar_body} />
          <div className="mx-auto mt-8 max-w-2xl rounded-3xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Retrouvez le suivi en direct sur{" "}
              <a href="https://www.polarsteps.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Polar Steps
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        locale={l}
        title={t.invite_title}
        body={t.invite_body}
        buttonLabel={t.invite_cta}
      />
    </>
  )
}
