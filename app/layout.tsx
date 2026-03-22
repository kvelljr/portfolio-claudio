import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Claudio Souza — Product Designer",
  description:
    "Portfólio de Claudio Souza, Product Designer especializado em UX/UI, Design Systems e e-commerce. São Paulo, Brasil.",
  openGraph: {
    title: "Claudio Souza — Product Designer",
    description:
      "Portfólio de Claudio Souza, Product Designer especializado em UX/UI, Design Systems e e-commerce.",
    url: "https://portfolio-claudio-five.vercel.app",
    siteName: "Claudio Souza",
    images: [
      {
        url: "https://portfolio-claudio-five.vercel.app/claudio-souza.png",
        width: 1536,
        height: 1956,
        alt: "Claudio Souza — Product Designer",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudio Souza — Product Designer",
    description:
      "Portfólio de Claudio Souza, Product Designer especializado em UX/UI, Design Systems e e-commerce.",
    images: ["https://portfolio-claudio-five.vercel.app/claudio-souza.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} style={{ backgroundColor: "#FFFFFF" }}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          color: "#111111",
          fontFamily: "var(--font-inter), sans-serif",
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
