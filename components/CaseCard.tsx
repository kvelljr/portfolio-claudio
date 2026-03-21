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
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E5E3",
          borderRadius: "16px",
          overflow: "hidden",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          borderColor: hovered ? "#BBBBBB" : "#E5E5E3",
          boxShadow: hovered ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
        }}
      >
        {/* Cover image */}
        <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
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
          <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
            {caso.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <h2
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700,
              fontSize: "18px",
              color: "#111111",
              margin: "0 0 8px",
              lineHeight: "1.3",
            }}
          >
            {caso.title}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              color: "#777777",
              margin: "0 0 16px",
              lineHeight: "1.5",
            }}
          >
            {caso.subtitle}
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: "#AAAAAA" }}>
              {caso.ano}
            </span>
            <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "12px", color: "#AAAAAA" }}>
              {caso.role}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
