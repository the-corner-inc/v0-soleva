import type { ReactNode } from 'react'
import './globals.css'

// Root layout is a pass-through. The <html> and <body> tags are rendered in
// app/[locale]/layout.tsx so that the `lang` attribute can be set dynamically.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
