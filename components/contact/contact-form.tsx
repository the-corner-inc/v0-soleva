"use client"

import { useActionState } from "react"
import { submitContact, type ContactState } from "@/app/[locale]/contact/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, AlertCircle } from "lucide-react"
import type { Dictionary } from "@/lib/i18n"

const initialState: ContactState = { status: "idle" }

export function ContactForm({ dict }: { dict: Dictionary }) {
  const f = dict.contact.form
  const [state, formAction, pending] = useActionState(submitContact, initialState)

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-primary/20 bg-primary/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
        <p className="mt-4 text-lg font-medium text-foreground">{f.success}</p>
      </div>
    )
  }

  const types = f.types as Record<string, string>

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName">{f.first_name}</Label>
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName">{f.last_name}</Label>
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">{f.email}</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="organization">
            {f.organization} <span className="text-muted-foreground">{f.organization_optional}</span>
          </Label>
          <Input id="organization" name="organization" autoComplete="organization" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="inquiryType">{f.inquiry_type}</Label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          defaultValue=""
          className="h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="" disabled>
            —
          </option>
          {Object.entries(types).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">{f.message}</Label>
        <Textarea id="message" name="message" required rows={6} />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-input text-primary focus-visible:ring-2 focus-visible:ring-ring"
        />
        <span>{f.consent}</span>
      </label>

      {state.status === "error" ? (
        <p className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          {f.error}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={pending} className="mt-2 self-start">
        {pending ? f.sending : f.submit}
      </Button>
    </form>
  )
}
