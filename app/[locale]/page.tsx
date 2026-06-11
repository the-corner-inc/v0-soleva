import { type Locale, isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n"
import { notFound } from "next/navigation"
import { HomeHero } from "@/components/home/home-hero"
import { HomeFigures } from "@/components/home/home-figures"
import { HomeProblem } from "@/components/home/home-problem"
import { HomePillars } from "@/components/home/home-pillars"
import { CtaBand } from "@/components/ui/cta-band"

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
      <CtaBand
        locale={l}
        title={dict.home.cta.title}
        body={dict.home.cta.body}
        buttonLabel={dict.home.cta.button}
      />
    </>
  )
}
