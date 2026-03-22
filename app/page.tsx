import Image from "next/image"
import Link from "next/link"
import CaseCard from "@/components/CaseCard"
import { cases } from "@/lib/cases"

const badges = [
  "+4 anos em Product Design",
  "Experiência em e-commerce e SaaS — VTEX, Shopify, Nuvemshop",
  "Projetos com impacto direto em conversão e experiência do usuário",
]

const ferramentas = ["Figma", "FigJam", "Miro", "Notion", "Maze / Useberry", "ChatGPT / IA"]

export default function Home() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

      {/* ── HERO ── */}
      <section style={{ paddingTop: "80px", paddingBottom: "96px" }}>
        <div className="hero-grid">
          {/* Foto */}
          <div className="hero-photo">
            <Image
              src="/claudio-souza.png"
              alt="Claudio Souza — Product Designer"
              width={220}
              height={391}
              style={{ objectFit: "cover", objectPosition: "top center", width: "100%", height: "100%" }}
              priority
            />
          </div>

          {/* Conteúdo */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h1
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 300,
                fontSize: "clamp(28px, 3.2vw, 40px)",
                color: "#111111",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Olá, sou o Cláudio.<br />
              Product Designer focado em<br />
              e-commerce e produtos SaaS.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "16px",
                color: "#666666",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              Projeto produtos digitais conectando pesquisa, interface e resultado real.
              Do discovery ao handoff, com atenção à experiência do usuário e aos
              objetivos do negócio.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {badges.map((badge) => (
                <span
                  key={badge}
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    backgroundColor: "#F5F5F3",
                    border: "1px solid #E5E5E3",
                    borderRadius: "100px",
                    padding: "8px 18px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "14px",
                    color: "#444444",
                    lineHeight: "1.4",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: "10px 22px",
                  borderRadius: "100px",
                  textDecoration: "none",
                }}
              >
                LinkedIn →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASES ── */}
      <section id="trabalhos" style={{ paddingBottom: "80px" }}>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#AAAAAA",
            margin: "0 0 32px",
          }}
        >
          Trabalhos selecionados
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {cases.map((caso) => (
            <CaseCard key={caso.slug} caso={caso} />
          ))}
        </div>
      </section>

      {/* ── EXPERIÊNCIA ── */}
      <section style={{ paddingBottom: "64px", borderTop: "1px solid #E5E5E3", paddingTop: "64px" }}>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#AAAAAA",
            margin: "0 0 32px",
          }}
        >
          Experiência
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <ExperienceItem
            empresa="RockFly Performance"
            cargo="Designer UX/UI"
            periodo="mar. 2024 – jan. 2026"
            local="Marília, SP"
          />
          <ExperienceItem
            empresa="Eficaz Marketing e Tecnologia"
            cargo="Product Designer"
            periodo="dez. 2021 – fev. 2024"
            local="Marília, SP"
          />
        </div>
      </section>

      {/* ── FERRAMENTAS ── */}
      <section style={{ paddingBottom: "80px", borderTop: "1px solid #E5E5E3", paddingTop: "64px" }}>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "#AAAAAA",
            margin: "0 0 24px",
          }}
        >
          Ferramentas que uso
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {ferramentas.map((f) => (
            <span
              key={f}
              style={{
                backgroundColor: "#F5F5F3",
                border: "1px solid #E5E5E3",
                borderRadius: "8px",
                padding: "8px 16px",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                color: "#555555",
              }}
            >
              {f}
            </span>
          ))}
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
        padding: "24px 0",
        borderBottom: "1px solid #E5E5E3",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            color: "#111111",
            margin: "0 0 3px",
          }}
        >
          {empresa}
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "14px",
            color: "#777777",
            margin: 0,
          }}
        >
          {cargo}
        </p>
      </div>
      <div style={{ textAlign: "right" }}>
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "#AAAAAA", margin: "0 0 2px" }}>
          {periodo}
        </p>
        <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px", color: "#AAAAAA", margin: 0 }}>
          {local}
        </p>
      </div>
    </div>
  )
}
