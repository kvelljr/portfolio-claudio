"use client"

import Image from "next/image"
import Link from "next/link"

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
      {/* Header */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#888888",
          margin: "0 0 16px",
        }}
      >
        Sobre
      </p>

      <h1
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontWeight: 800,
          fontSize: "clamp(32px, 5vw, 48px)",
          color: "#F5F5F5",
          lineHeight: "1.1",
          letterSpacing: "-0.03em",
          margin: "0 0 64px",
        }}
      >
        Designer que resolve problemas
        <br />com intenção e evidência.
      </h1>

      {/* Two columns */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "64px",
          alignItems: "start",
          marginBottom: "80px",
        }}
      >
        {/* Photo */}
        <div>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #1F1F1F",
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
        </div>

        {/* Text */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "16px",
              color: "#AAAAAA",
              lineHeight: "1.75",
            }}
          >
            <p style={{ margin: "0 0 20px" }}>
              Sou Product Designer com mais de 4 anos de experiência
              projetando produtos digitais em ecossistemas de e-commerce
              e SaaS.
            </p>

            <p style={{ margin: "0 0 20px" }}>
              Ao longo da minha trajetória, trabalhei com plataformas como
              VTEX, Shopify e Nuvemshop, resolvendo problemas complexos
              com decisões intencionais e atenção à experiência do usuário.
            </p>

            <p style={{ margin: "0 0 20px" }}>
              O que me move é a conexão entre pesquisa, interface e resultado
              real. Reduzi em 25% o tempo de conclusão de tarefas em fluxos
              críticos e alcancei 90% de taxa de sucesso em testes de
              usabilidade — não como métricas isoladas, mas como
              consequência de um processo que respeita o usuário e o
              negócio ao mesmo tempo.
            </p>

            <p style={{ margin: 0 }}>
              Tenho experiência em todo o ciclo de produto: do discovery
              e entrevistas com usuários até o handoff de alta fidelidade e
              acompanhamento com times de engenharia.
            </p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <section style={{ marginBottom: "64px" }}>
        <div
          style={{
            borderTop: "1px solid #1F1F1F",
            paddingTop: "48px",
          }}
        >
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

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
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

      {/* Competências */}
      <section style={{ marginBottom: "64px" }}>
        <div
          style={{
            borderTop: "1px solid #1F1F1F",
            paddingTop: "48px",
          }}
        >
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

      {/* LinkedIn CTA */}
      <div>
        <Link
          href="https://linkedin.com/in/claudiojuniorkv"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "15px",
            color: "#E5FF4A",
            textDecoration: "none",
            fontWeight: 500,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.opacity = "0.7"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.opacity = "1"
          }}
        >
          Ver meu LinkedIn →
        </Link>
      </div>
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
        paddingBottom: "32px",
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
