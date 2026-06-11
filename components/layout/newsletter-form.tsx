"use client"

import type { Dictionary } from "@/lib/i18n"

export function NewsletterForm({ dict }: { dict: Dictionary }) {
  return (
    <div className="mt-8">
      <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-dark-foreground/90">
        {dict.footer.newsletter_title}
      </h3>
      <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder={dict.footer.newsletter_placeholder}
          className="h-9 flex-1 rounded-lg border border-dark-foreground/20 bg-dark-foreground/5 px-3 text-sm text-dark-foreground placeholder:text-dark-foreground/40 outline-none focus:border-secondary"
        />
        <button
          type="submit"
          className="h-9 rounded-lg bg-secondary px-4 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
        >
          {dict.footer.newsletter_button}
        </button>
      </form>
    </div>
  )
}
