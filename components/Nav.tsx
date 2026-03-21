"use client"

import Link from "next/link"

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #E5E5E3",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            backgroundColor: "#E5FF4A",
            borderRadius: "8px",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            color: "#111111",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          CS
        </Link>

        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <NavLink href="/">trabalhos</NavLink>
          <Link
            href="https://linkedin.com/in/claudiojuniorkv"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#111111",
              color: "#FFFFFF",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              padding: "7px 16px",
              borderRadius: "100px",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = "#333333"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.backgroundColor = "#111111"
            }}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "14px",
        color: "#777777",
        textDecoration: "none",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        ;(e.target as HTMLElement).style.color = "#111111"
      }}
      onMouseLeave={(e) => {
        ;(e.target as HTMLElement).style.color = "#777777"
      }}
    >
      {children}
    </Link>
  )
}
