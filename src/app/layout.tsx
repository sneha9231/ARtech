import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Precision Laser Cutting Services | High-Quality Metal Cutting",
  description:
    "Professional laser cutting services with high-precision fiber laser technology. Custom metal cutting, sheet metal fabrication, and fast turnaround times.",
  keywords: "laser cutting, metal cutting, fiber laser, precision cutting, sheet metal, custom parts, manufacturing",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
