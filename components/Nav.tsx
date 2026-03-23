"use client"

import Link from "next/link"
import SobreModal from "./SobreModal"
import ContatoModal from "./ContatoModal"

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #E5E5E3",
        backgroundColor: "#FFFFFF",
        position: "relative" as const,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 16px",
          height: "56px",
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

        {/* Links centrados */}
        <div style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}>
          <NavLink href="/#trabalhos">Cases</NavLink>
          <SobreModal label="Sobre" />
        </div>

        {/* Contato à direita */}
        <ContatoModal />
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
