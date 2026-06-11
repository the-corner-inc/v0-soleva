import type { Metadata } from "next"
import Link from "next/link"
import { isLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { SITE_URL, KEY_FIGURES } from "@/lib/constants"
import { withLocale } from "@/lib/navigation"
import { PageHero } from "@/components/layout/page-hero"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/ui/cta-band"
import { Heart, Handshake, Users, Share2, ArrowRight } from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.support.title,
    description: dict.meta.support.description,
    alternates: { canonical: `${SITE_URL}/${locale}/soutenir` },
  }
}

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)
  const t = dict.support

  const ways = [
    { icon: Heart, title: t.ways.donate_title, desc: t.ways.donate_desc, cta: t.ways.donate_cta, href: "/contact" },
    { icon: Handshake, title: t.ways.sponsor_title, desc: t.ways.sponsor_desc, cta: t.ways.sponsor_cta, href: "/contact" },
    { icon: Users, title: t.ways.volunteer_title, desc: t.ways.volunteer_desc, cta: t.ways.volunteer_cta, href: "/contact" },
    { icon: Share2, title: t.ways.share_title, desc: t.ways.share_desc, cta: null, href: null },
  ]

  const cf = t.crowdfunding

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[{ label: dict.breadcrumb.support, href: "/soutenir" }]}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        image="/images/support.png"
      />

      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="grid gap-6 md:grid-cols-2">
            {ways.map((way, i) => {
              const Icon = way.icon
              return (
                <Reveal key={way.title} delay={i * 0.06}>
                  <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 font-heading text-xl font-bold text-foreground">{way.title}</h2>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">{way.desc}</p>
                    {way.cta && way.href ? (
                      <Link
                        href={withLocale(l, way.href)}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        {way.cta}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ) : null}
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-dark text-dark-foreground">
        <div className="container-premium section-padding">
          <SectionHeading inverted title={cf.title} subtitle={cf.body} />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: cf.goal, value: KEY_FIGURES.crowdfundingGoal },
              { label: cf.raised, value: KEY_FIGURES.crowdfundingAmount },
              { label: cf.percent, value: KEY_FIGURES.crowdfundingPercent },
              { label: cf.backers, value: String(KEY_FIGURES.crowdfundingBackers) },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-dark-foreground/5 p-6 text-center">
                <p className="font-heading text-3xl font-extrabold text-secondary">{stat.value}</p>
                <p className="mt-2 text-sm text-dark-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              render={
                <a href={KEY_FIGURES.crowdfundingUrl} target="_blank" rel="noopener noreferrer">
                  {cf.link}
                </a>
              }
            />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm italic text-dark-foreground/60">{cf.todo}</p>
        </div>
      </section>

      {/* IBAN Donation */}
      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <h2 className="font-heading text-center text-2xl font-bold sm:text-3xl">{t.iban.title}</h2>
              <p className="mt-3 text-center leading-relaxed text-muted-foreground">{t.iban.body}</p>
            </Reveal>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto]">
              <div className="rounded-3xl border border-border bg-card p-8">
                <dl className="grid gap-4">
                  <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-4">
                    <dt className="text-sm font-semibold text-muted-foreground">{t.iban.account_holder}</dt>
                    <dd className="text-sm text-foreground">ASSOCIATION SOLEVA</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-4">
                    <dt className="text-sm font-semibold text-muted-foreground">{t.iban.address}</dt>
                    <dd className="text-sm text-foreground">Rue de Lausanne 64, 1020 Renens VD</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-4">
                    <dt className="text-sm font-semibold text-muted-foreground">{t.iban.iban_label}</dt>
                    <dd className="font-mono text-sm text-foreground">CH36 0076 7000 L553 2228 7</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-4">
                    <dt className="text-sm font-semibold text-muted-foreground">{t.iban.bic_label}</dt>
                    <dd className="font-mono text-sm text-foreground">BCVLCH2LXXX</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-4">
                    <dt className="text-sm font-semibold text-muted-foreground">{t.iban.bank_label}</dt>
                    <dd className="text-sm text-foreground">Banque Cantonale Vaudoise</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-4">
                    <dt className="text-sm font-semibold text-muted-foreground">{t.iban.description_label}</dt>
                    <dd className="font-mono text-sm text-foreground">{t.iban.description_value}</dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-6">
                <img
                  src="https://d1oh1gq3c6bbc1.cloudfront.net/public/media/e659e5c6e16cb7fa809013fadb5a4b8670cf2a456e020b890259596134acc4ac-211082.webp"
                  alt="QR Code pour don bancaire Soleva"
                  width={180}
                  height={180}
                  className="rounded-xl"
                />
                <p className="mt-3 text-xs text-muted-foreground text-center">Scannez pour payer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand locale={l} title={dict.home.cta.title} body={dict.home.cta.body} buttonLabel={dict.common.contact_us} />
    </>
  )
}
