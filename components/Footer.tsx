"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #E5E5E3", marginTop: "120px" }}>
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
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: "15px",
              color: "#111111",
              margin: 0,
            }}
          >
            Claudio Souza
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              color: "#777777",
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
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
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
          LinkedIn →
        </Link>
      </div>
    </footer>
  )
}
