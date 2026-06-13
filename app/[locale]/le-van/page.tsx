import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { type Locale, isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { SITE_URL, IMAGES } from "@/lib/constants"
import { withLocale } from "@/lib/navigation"
import { services } from "@/lib/data/services"
import { habitatContent } from "@/lib/data/habitat"
import { PageHero } from "@/components/layout/page-hero"
import { Reveal } from "@/components/ui/reveal"
import { CtaBand } from "@/components/ui/cta-band"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.van.title,
    description: dict.meta.van.description,
    alternates: { canonical: `${SITE_URL}/${locale}/le-van` },
  }
}

export default async function VanPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[{ label: dict.breadcrumb.van, href: "/le-van" }]}
        eyebrow={dict.van.hero.eyebrow}
        title={dict.van.hero.title}
        subtitle={dict.van.hero.subtitle}
      />

      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="flex flex-col gap-16">
            {services.map((service, i) => {
              const content = service.content[l]
              const Icon = service.icon
              const reversed = i % 2 === 1
              return (
                <Reveal key={service.slug}>
                  <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className={reversed ? "lg:order-2" : ""}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                        <Image
                          src={service.heroImage || "/placeholder.svg"}
                          alt=""
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className={reversed ? "lg:order-1" : ""}>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h2 className="mt-5 font-heading text-2xl font-bold sm:text-3xl">{content.title}</h2>
                      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{content.fullDescription}</p>
                      <ul className="mt-6 flex flex-col gap-2">
                        {content.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={withLocale(l, `/le-van/${service.slug}`)}
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        {dict.van.explore}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Habitat feature banner */}
      <section className="bg-accent">
        <div className="container-premium section-padding">
          <Reveal>
            <Link
              href={withLocale(l, "/habitat")}
              className="group grid items-stretch overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src={IMAGES.habitatHero || "/placeholder.svg"}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
                  {habitatContent[l].hero.eyebrow}
                </span>
                <h2 className="mt-3 font-heading text-2xl font-bold sm:text-3xl">{habitatContent[l].hero.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{habitatContent[l].hero.subtitle}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {dict.common.learn_more}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        locale={l}
        title={dict.service_detail.cta_title}
        body={dict.service_detail.cta_body}
        buttonLabel={dict.common.contact_us}
      />
    </>
  )
}
