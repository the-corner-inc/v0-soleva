import { type Locale, isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { HomeHero } from "@/components/home/home-hero"
import { HomeFigures } from "@/components/home/home-figures"
import { HomeProblem } from "@/components/home/home-problem"
import { HomePillars } from "@/components/home/home-pillars"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/ui/cta-band"
import { withLocale } from "@/lib/navigation"
import { Camera, Aperture } from "lucide-react"

export default async function HomePage({
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
      <HomeHero locale={l} dict={dict} />
      <HomeProblem locale={l} dict={dict} />
      <HomePillars locale={l} dict={dict} />
      <HomeFigures locale={l} dict={dict} />

      {/* Nouveau départ */}
      <section className="bg-muted">
        <div className="container-premium section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/images/workshop.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Aperture className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 font-heading text-2xl font-bold sm:text-3xl">{dict.home.new_start.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{dict.home.new_start.body}</p>
                <p className="mt-4 font-medium text-foreground">{dict.home.new_start.subtitle}</p>
                <Button className="mt-6" size="lg" render={<Link href={withLocale(l, "/soutenir")}>{dict.home.new_start.cta}</Link>} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-background">
        <div className="container-premium section-padding">
          <Reveal>
            <h2 className="font-heading text-center text-2xl font-bold sm:text-3xl">{dict.home.partners.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center leading-relaxed text-muted-foreground">{dict.home.partners.subtitle}</p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {/* Partenaires techniques */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{dict.home.partners.technical}</h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  "CSEM",
                  "EPFL PV-Lab",
                  "Studer Innotec",
                  "BRUSA HyPower",
                ].map((name, i) => (
                  <Reveal key={name} delay={i * 0.06}>
                    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card p-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-xs font-bold text-muted-foreground">
                        {name.split(" ")[0].slice(0, 3).toUpperCase()}
                      </div>
                      <span className="text-sm font-semibold text-foreground">{name}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Soutiens institutionnels */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{dict.home.partners.institutional}</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  "Canton de Vaud",
                  "Services industriels de Lausanne (SiL)",
                ].map((name, i) => (
                  <Reveal key={name} delay={i * 0.06}>
                    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card p-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-xs font-bold text-muted-foreground">
                        {name.split(" ")[0].slice(0, 3).toUpperCase()}
                      </div>
                      <span className="text-center text-sm font-semibold text-foreground">{name}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Prix */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{dict.home.partners.awards}</h3>
              <div className="mt-4">
                <Reveal>
                  <div className="mx-auto flex max-w-xs flex-col items-center justify-center gap-2 rounded-2xl border border-secondary/30 bg-secondary/5 p-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/15 text-lg font-bold text-secondary">
                      EL
                    </div>
                    <span className="text-center text-sm font-bold text-secondary">Energy Lab Winner 2022</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentaire */}
      <section className="bg-dark text-dark-foreground">
        <div className="container-premium section-padding text-center">
          <Reveal>
            <span className="flex mx-auto h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20 text-secondary">
              <Camera className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-heading text-2xl font-bold sm:text-3xl">{dict.home.documentary.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-dark-foreground/70">{dict.home.documentary.subtitle}</p>
            <div className="mx-auto mt-8 max-w-3xl aspect-video overflow-hidden rounded-2xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/6ScnYhFPv5w"
                title="Soleva — L'aventure Soleva"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        locale={l}
        title={dict.home.cta.title}
        body={dict.home.cta.body}
        buttonLabel={dict.home.cta.button}
      />
    </>
  )
}
