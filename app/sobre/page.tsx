"use client"

import Image from "next/image"
import Link from "next/link"

const badges = [
  "+4 anos em Product Design",
  "Experiência em e-commerce e SaaS — VTEX, Shopify, Nuvemshop",
  "Projetos com impacto direto em conversão e experiência do usuário",
]

const competencias = [
  "Product Design",
  "UX/UI",
  "Design Systems",
  "Discovery",
  "Pesquisa com Usuários",
  "Testes de Usabilidade",
  "Prototipagem",
  "Handoff",
  "VTEX",
  "Shopify",
  "Nuvemshop",
  "Figma",
  "FigJam",
  "Miro",
  "Notion",
  "Hotjar",
  "JTBD",
  "Scrum",
  "OKRs",
]

export default function Sobre() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      {/* ── HERO ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: "56px",
          alignItems: "start",
          marginBottom: "96px",
        }}
      >
        {/* Foto */}
        <div
          style={{
            position: "relative",
            width: "260px",
            height: "260px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #1F1F1F",
            flexShrink: 0,
          }}
        >
          <Image
            src="/foto-claudio.jpg"
            alt="Claudio Souza — Product Designer"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Conteúdo direito */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              color: "#F5F5F5",
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Product Designer focado em e-commerce e produtos SaaS.
          </h1>

          {/* Descrição */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              color: "#AAAAAA",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Projeto produtos digitais conectando pesquisa, interface e resultado real.
            Do discovery ao handoff, com atenção à experiência do usuário e aos
            objetivos do negócio.
          </p>

          {/* Badges */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {badges.map((badge) => (
              <span
                key={badge}
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  backgroundColor: "#111111",
                  border: "1px solid #2A2A2A",
                  borderRadius: "100px",
                  padding: "8px 18px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "14px",
                  color: "#CCCCCC",
                  lineHeight: "1.4",
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div>
            <Link
              href="https://linkedin.com/in/claudiojuniorkv"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#F5F5F5",
                color: "#0A0A0A",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                padding: "10px 20px",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = "#E5FF4A"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = "#F5F5F5"
              }}
            >
              LinkedIn →
            </Link>
          </div>
        </div>
      </div>

      {/* ── EXPERIÊNCIA ── */}
      <section style={{ marginBottom: "64px" }}>
        <div style={{ borderTop: "1px solid #1F1F1F", paddingTop: "48px" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#888888",
              margin: "0 0 32px",
            }}
          >
            Experiência
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <ExperienceItem
              empresa="RockFly Performance"
              cargo="Designer UX/UI"
              periodo="março 2024 – janeiro 2026"
              local="Marília, SP"
            />
            <ExperienceItem
              empresa="Eficaz Marketing e Tecnologia"
              cargo="Product Designer"
              periodo="dezembro 2021 – fevereiro 2024"
              local="Marília, SP"
            />
          </div>
        </div>
      </section>

      {/* ── COMPETÊNCIAS ── */}
      <section>
        <div style={{ borderTop: "1px solid #1F1F1F", paddingTop: "48px" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#888888",
              margin: "0 0 24px",
            }}
          >
            Competências
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {competencias.map((c) => (
              <span
                key={c}
                style={{
                  backgroundColor: "#1A1A1A",
                  border: "1px solid #1F1F1F",
                  borderRadius: "4px",
                  padding: "4px 12px",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "13px",
                  color: "#888888",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ExperienceItem({
  empresa,
  cargo,
  periodo,
  local,
}: {
  empresa: string
  cargo: string
  periodo: string
  local: string
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "8px",
        padding: "28px 0",
        borderBottom: "1px solid #1F1F1F",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            color: "#F5F5F5",
            margin: "0 0 4px",
          }}
        >
          {empresa}
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "14px",
            color: "#888888",
            margin: 0,
          }}
        >
          {cargo}
        </p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "13px",
            color: "#888888",
            margin: "0 0 2px",
          }}
        >
          {periodo}
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "13px",
            color: "#888888",
            margin: 0,
          }}
        >
          {local}
        </p>
      </div>
    </div>
  )
}
