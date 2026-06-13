import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import type { HabitatContent } from "@/lib/data/habitat"

export function HabitatLiving({ living }: { living: HabitatContent["living"] }) {
  return (
    <section className="bg-background">
      <div className="container-premium section-padding">
        <Reveal>
          <SectionHeading
            eyebrow={living.eyebrow}
            title={living.title}
            subtitle={living.subtitle}
            align="left"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {living.spaces.map((space, i) => {
            const Icon = space.icon
            return (
              <Reveal key={space.title} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={space.image || "/placeholder.svg"}
                      alt={space.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background/90 text-primary backdrop-blur">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold">{space.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{space.body}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
