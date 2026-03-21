"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Tag from "./Tag"
import type { Case } from "@/lib/cases"

export default function CaseCard({ caso }: { caso: Case }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/cases/${caso.slug}`}
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article
        style={{
          backgroundColor: "#111111",
          border: "1px solid #1F1F1F",
          borderRadius: "12px",
          overflow: "hidden",
          transition: "border-color 0.2s ease",
          borderColor: hovered ? "#2F2F2F" : "#1F1F1F",
        }}
      >
        {/* Cover image */}
        <div
          style={{
            position: "relative",
            aspectRatio: "16/9",
            overflow: "hidden",
          }}
        >
          <Image
            src={caso.cover}
            alt={caso.title}
            fill
            style={{
              objectFit: "cover",
              transform: hovered ? "scale(1.02)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
              flexWrap: "wrap",
            }}
          >
            {caso.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <h2
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              color: "#F5F5F5",
              margin: "0 0 8px",
              lineHeight: "1.3",
            }}
          >
            {caso.title}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "14px",
              color: "#888888",
              margin: "0 0 16px",
              lineHeight: "1.5",
            }}
          >
            {caso.subtitle}
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "12px",
                color: "#888888",
              }}
            >
              {caso.ano}
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "12px",
                color: "#888888",
              }}
            >
              {caso.role}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
