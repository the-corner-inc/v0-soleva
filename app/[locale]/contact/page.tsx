import type { Metadata } from "next"
import { isLocale, type Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { SITE_URL, CONTACT } from "@/lib/constants"
import { PageHero } from "@/components/layout/page-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MapPin, Share2 } from "lucide-react"
import { SOCIALS } from "@/lib/constants"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dict = getDictionary(locale)
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    alternates: { canonical: `${SITE_URL}/${locale}/contact` },
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)
  const t = dict.contact

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[{ label: dict.breadcrumb.contact, href: "/contact" }]}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
      />

      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <ContactForm dict={dict} />
            </div>

            <aside className="flex flex-col gap-8">
              <h2 className="font-heading text-xl font-bold text-foreground">{t.info.title}</h2>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.info.email_label}</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.info.location_label}</p>
                  <p className="text-sm text-muted-foreground">
                    {CONTACT.address.city}, {CONTACT.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Share2 className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.info.follow_label}</p>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">Instagram</a>
                    <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">Facebook</a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">LinkedIn</a>
                    <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-primary">YouTube</a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
