import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowRight, Check } from "lucide-react"
import { type Locale, isLocale, locales } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { SITE_URL } from "@/lib/constants"
import { withLocale } from "@/lib/navigation"
import { services, getServiceBySlug, getRelatedServices } from "@/lib/data/services"
import { PageHero } from "@/components/layout/page-hero"
import { Reveal } from "@/components/ui/reveal"
import { CtaBand } from "@/components/ui/cta-band"
import { FaqJsonLd } from "@/components/seo/json-ld"

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const service = getServiceBySlug(slug)
  if (!service) return {}
  const content = service.content[locale as Locale]
  return {
    title: content.title,
    description: content.shortDescription,
    keywords: service.seoKeywords,
    alternates: { canonical: `${SITE_URL}/${locale}/le-van/${slug}` },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const dict = getDictionary(l)
  const content = service.content[l]
  const related = getRelatedServices(slug)
  const Icon = service.icon

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[
          { label: dict.breadcrumb.van, href: "/le-van" },
          { label: content.shortTitle, href: `/le-van/${slug}` },
        ]}
        eyebrow={dict.breadcrumb.van}
        title={content.title}
        subtitle={content.shortDescription}
      />

      <FaqJsonLd items={content.faqs} />

      {/* Overview */}
      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={service.heroImage || "/placeholder.svg"}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold sm:text-3xl">{content.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{content.fullDescription}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted">
        <div className="container-premium section-padding">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">{dict.service_detail.features_title}</h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.features.map((feature, i) => (
              <Reveal key={feature} delay={i * 0.05}>
                <li className="flex items-start gap-3 rounded-2xl bg-card p-5 shadow-sm">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">{feature}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background">
        <div className="container-premium section-padding">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">{dict.service_detail.process_title}</h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08}>
                <li className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <span className="font-heading text-4xl font-bold text-primary/20">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted">
        <div className="container-premium section-padding">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">{dict.service_detail.faq_title}</h2>
          </Reveal>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-4">
            {content.faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.05}>
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

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-background">
          <div className="container-premium section-padding">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">{dict.service_detail.related_title}</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((rel) => {
                const RelIcon = rel.icon
                const relContent = rel.content[l]
                return (
                  <Link
                    key={rel.slug}
                    href={withLocale(l, `/le-van/${rel.slug}`)}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <RelIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-semibold">{relContent.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{relContent.shortDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {dict.van.explore}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <p className="container-premium pb-6 text-center text-xs text-muted-foreground">{dict.service_detail.disclaimer}</p>

      <CtaBand
        locale={l}
        title={dict.service_detail.cta_title}
        body={dict.service_detail.cta_body}
        buttonLabel={dict.common.contact_us}
      />
    </>
  )
}
