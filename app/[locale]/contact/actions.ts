"use server"

export type ContactState = {
  status: "idle" | "success" | "error"
}

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const firstName = String(formData.get("firstName") ?? "").trim()
  const lastName = String(formData.get("lastName") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  const inquiryType = String(formData.get("inquiryType") ?? "").trim()
  const consent = formData.get("consent")

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  if (!firstName || !lastName || !emailValid || !message || !inquiryType || !consent) {
    return { status: "error" }
  }

  // TODO: Wire up real delivery (email service / CRM) once Soleva provides credentials.
  // For now we log server-side so submissions are observable in development.
  console.log("[v0] Contact submission:", {
    firstName,
    lastName,
    email,
    inquiryType,
    organization: formData.get("organization"),
    message,
  })

  // Simulate async work
  await new Promise((resolve) => setTimeout(resolve, 600))

  return { status: "success" }
}
