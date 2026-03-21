"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1F1F1F",
        marginTop: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "32px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              color: "#F5F5F5",
              margin: 0,
            }}
          >
            Claudio Souza
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "13px",
              color: "#888888",
              margin: "2px 0 0",
            }}
          >
            Product Designer
          </p>
        </div>

        <Link
          href="https://linkedin.com/in/claudiojuniorkv"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "13px",
            color: "#888888",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            ;(e.target as HTMLElement).style.color = "#E5FF4A"
          }}
          onMouseLeave={(e) => {
            ;(e.target as HTMLElement).style.color = "#888888"
          }}
        >
          LinkedIn →
        </Link>
      </div>
    </footer>
  )
}
