import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Claudio Souza — Product Designer",
  description:
    "Portfólio de Claudio Souza, Product Designer especializado em UX/UI, Design Systems e e-commerce. São Paulo, Brasil.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${dmSans.variable}`}
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0A0A0A",
          color: "#F5F5F5",
          fontFamily: "var(--font-dm-sans), sans-serif",
          margin: 0,
        }}
      >
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
