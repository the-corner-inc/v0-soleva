import { HabitatHero } from "@/components/habitat/habitat-hero"
import { Breadcrumb } from "@/components/layout/breadcrumb"
import { FaqJsonLd } from "@/components/seo/json-ld"
import { Reveal } from "@/components/ui/reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { IMAGES, KEY_FIGURES, SITE_URL } from "@/lib/constants"
import { habitatContent, habitatSeoKeywords } from "@/lib/data/habitat"
import { getDictionary } from "@/lib/i18n"
import { type Locale, isLocale, locales } from "@/lib/i18n/config"
import { ArrowUpRight, Check } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"

const SUPPORT_URL = KEY_FIGURES.crowdfundingUrl
const DISCOVER_URL = SITE_URL

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const c = habitatContent[locale as Locale]
  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords: habitatSeoKeywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}/habitat`,
      languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}/habitat`])),
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      images: [{ url: IMAGES.habitatHero }],
    },
  }
}

export default async function HabitatPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)
  const c = habitatContent[l]

  return (
    <>
      <HabitatHero
        breadcrumb={
          <Breadcrumb
            locale={l}
            homeLabel={dict.breadcrumb.home}
            items={[
              { label: dict.breadcrumb.van, href: "/le-van" },
              { label: dict.breadcrumb.habitat, href: "/habitat" },
            ]}
          />
        }
        hero={c.hero}
        image={IMAGES.habitatHero}
        supportHref={SUPPORT_URL}
        discoverHref={DISCOVER_URL}
      />

      <FaqJsonLd items={c.faq.items} />

      {/* Concept */}
      <section className="bg-muted">
        <div className="container-premium section-padding">
          <Reveal>
            <SectionHeading eyebrow={c.concept.eyebrow} title={c.concept.title} subtitle={c.concept.intro} align="left" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.concept.points.map((point, i) => {
              const Icon = point.icon
              return (
                <Reveal key={point.title} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-dark text-dark-foreground">
        <div className="container-premium section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <figure className="m-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={IMAGES.habitatFeatures}
                    alt={c.sustainability.imageCaption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw "
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-dark-foreground/60">{c.sustainability.imageCaption}</figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <SectionHeading
                  eyebrow={c.sustainability.eyebrow}
                  title={c.sustainability.title}
                  subtitle={c.sustainability.body}
                  align="left"
                  inverted
                />
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {c.sustainability.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-dark-foreground/85">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/25 text-secondary">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comfort */}
      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow={c.comfort.eyebrow}
                  title={c.comfort.title}
                  subtitle={c.comfort.body}
                  align="left"
                />
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {c.comfort.points.map((point, i) => {
                    const Icon = point.icon
                    return (
                      <Reveal key={point.title} delay={i * 0.06}>
                        <div className="flex h-full flex-col rounded-2xl bg-muted p-5">
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <h3 className="mt-4 font-heading text-base font-semibold">{point.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                        </div>
                      </Reveal>
                    )
                  })}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl lg:aspect-[4/5]">
                <Image
                  src={IMAGES.habitatInterior}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technical / Autonomy */}
      <section className="bg-muted">
        <div className="container-premium section-padding">
          <Reveal>
            <SectionHeading
              eyebrow={c.technical.eyebrow}
              title={c.technical.title}
              subtitle={c.technical.body}
            />
          </Reveal>
          <dl className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.technical.specs.map((spec, i) => (
              <Reveal key={spec.label} delay={i * 0.05}>
                <div className="flex flex-col rounded-2xl border border-border bg-card p-6 text-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{spec.label}</dt>
                  <dd className="mt-2 font-heading text-xl font-bold text-foreground">{spec.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="container-premium section-padding">
          <Reveal>
            <SectionHeading eyebrow={c.faq.eyebrow} title={c.faq.title} />
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4">
            {c.faq.items.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.04}>
                <details className="group rounded-2xl border border-border bg-card p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {faq.question}
                    <span className="ml-4 text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-20">
          <Image src={IMAGES.habitatHero} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="container-premium section-padding">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight sm:text-4xl">{c.cta.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">{c.cta.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SUPPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
              >
                {c.cta.primary}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={DISCOVER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                {c.cta.secondary}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
