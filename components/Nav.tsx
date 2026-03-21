"use client"

import Link from "next/link"

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #1F1F1F",
        backgroundColor: "rgba(10, 10, 10, 0.85)",
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
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "20px",
            color: "#E5FF4A",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          CS
        </Link>

        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <NavLink href="/">trabalhos</NavLink>
          <NavLink href="/sobre">sobre</NavLink>
        </div>
      </div>
    </nav>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: "14px",
        color: "#888888",
        textDecoration: "none",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        ;(e.target as HTMLElement).style.color = "#F5F5F5"
      }}
      onMouseLeave={(e) => {
        ;(e.target as HTMLElement).style.color = "#888888"
      }}
    >
      {children}
    </Link>
  )
}
