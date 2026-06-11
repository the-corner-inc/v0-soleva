import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Target, Eye, Sparkles } from "lucide-react"
import { type Locale, isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { SITE_URL, IMAGES } from "@/lib/constants"
import { milestones } from "@/lib/data/milestones"
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
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: { canonical: `${SITE_URL}/${locale}/a-propos` },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const l = locale as Locale
  const dict = getDictionary(l)
  const a = dict.about

  return (
    <>
      <PageHero
        locale={l}
        homeLabel={dict.breadcrumb.home}
        crumbs={[{ label: dict.breadcrumb.about, href: "/a-propos" }]}
        eyebrow={a.hero.eyebrow}
        title={a.hero.title}
        subtitle={a.hero.subtitle}
        image={IMAGES.team}
      />

      {/* Mission / Vision */}
      <section className="bg-background">
        <div className="container-premium section-padding">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold">{a.mission_title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{a.mission_body}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Eye className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold">{a.vision_title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{a.vision_body}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-muted">
        <div className="container-premium section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={IMAGES.workshop || "/placeholder.svg"} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold sm:text-3xl">{a.story_title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{a.story_body}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background">
        <div className="container-premium section-padding">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">{a.timeline_title}</h2>
          </Reveal>
          <ol className="mt-10 flex flex-col gap-0">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.05}>
                <li className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-sm font-bold ${
                        m.status === "done"
                          ? "bg-secondary text-secondary-foreground"
                          : m.status === "current"
                            ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                            : "border-2 border-border bg-card text-muted-foreground"
                      }`}
                    >
                      {m.year.slice(2)}
                    </span>
                    {i < milestones.length - 1 && <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />}
                  </div>
                  <div className="pt-1.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{m.year}</p>
                    <h3 className="mt-1 font-heading text-lg font-semibold">{m.title[l]}</h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{m.description[l]}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted">
        <div className="container-premium section-padding text-center">
          <Reveal>
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">{a.team_title}</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">{a.team_subtitle}</p>
            <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-dashed border-border bg-card p-4 text-sm text-muted-foreground">
              {a.team_todo}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand locale={l} title={dict.home.cta.title} body={dict.home.cta.body} buttonLabel={dict.common.contact_us} />
    </>
  )
}
