"use client"

import Image from "next/image"
import Link from "next/link"
import type { Case } from "@/lib/cases"
import { cases } from "@/lib/cases"

export default function CasePage({ caso }: { caso: Case }) {
  const currentIndex = cases.findIndex((c) => c.slug === caso.slug)
  const prevCase = cases[currentIndex - 1] ?? null
  const nextCase = cases[currentIndex + 1] ?? null

  return (
    <div>
      {/* Cover image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxHeight: "500px",
          height: "50vw",
          overflow: "hidden",
          backgroundColor: "#111111",
        }}
      >
        <Image
          src={caso.cover}
          alt={caso.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Breadcrumb */}
        <div style={{ paddingTop: "40px", marginBottom: "32px" }}>
          <Link
            href="/"
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
            ← Trabalhos
          </Link>
        </div>

        {/* Title block */}
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 5vw, 48px)",
            color: "#F5F5F5",
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
            margin: "0 0 16px",
          }}
        >
          {caso.title}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "18px",
            color: "#888888",
            lineHeight: "1.6",
            margin: "0 0 48px",
          }}
        >
          {caso.subtitle}
        </p>

        {/* Metadata grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "48px",
            padding: "32px",
            backgroundColor: "#111111",
            border: "1px solid #1F1F1F",
            borderRadius: "12px",
          }}
        >
          <MetaItem label="Empresa" value={caso.empresa} />
          <MetaItem label="Meu papel" value={caso.role} />
          <MetaItem label="Ferramentas" value={caso.ferramentas.join(", ")} />
          <MetaItem label="Ano" value={caso.ano} />
        </div>

        <Divider />

        {/* Contexto */}
        <Section label="Contexto">
          <p style={bodyStyle}>{caso.contexto}</p>
        </Section>

        <Divider />

        {/* Problema */}
        <Section label="O problema">
          <p style={bodyStyle}>{caso.problema}</p>
        </Section>

        <Divider />

        {/* Processo */}
        <Section label="Processo">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {caso.processo.map((p) => (
              <div
                key={p.numero}
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #1F1F1F",
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 800,
                    fontSize: "32px",
                    color: "#E5FF4A",
                    display: "block",
                    lineHeight: "1",
                    marginBottom: "12px",
                  }}
                >
                  {p.numero}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#F5F5F5",
                    margin: "0 0 8px",
                  }}
                >
                  {p.titulo}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "14px",
                    color: "#AAAAAA",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {p.descricao}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Solução */}
        <Section label="Solução">
          <p style={bodyStyle}>{caso.solucao}</p>
        </Section>

        <Divider />

        {/* Resultados */}
        <Section label="Resultados">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "24px",
              textAlign: "center",
            }}
          >
            {caso.metricas.map((m) => (
              <div key={m.descricao}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(40px, 6vw, 56px)",
                    color: "#E5FF4A",
                    lineHeight: "1",
                    marginBottom: "12px",
                  }}
                >
                  {m.valor}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "14px",
                    color: "#888888",
                    lineHeight: "1.4",
                  }}
                >
                  {m.descricao}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Aprendizados */}
        <Section label="Aprendizados">
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {caso.aprendizados.map((a, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "16px",
                  color: "#AAAAAA",
                  lineHeight: "1.75",
                  paddingLeft: "20px",
                  borderLeft: "2px solid #E5FF4A",
                }}
              >
                {a}
              </li>
            ))}
          </ul>
        </Section>

        {/* Navigation */}
        <div
          style={{
            borderTop: "1px solid #1F1F1F",
            paddingTop: "40px",
            paddingBottom: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {prevCase ? (
            <Link
              href={`/cases/${prevCase.slug}`}
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
              ← {prevCase.empresa}
            </Link>
          ) : (
            <span />
          )}

          {nextCase ? (
            <Link
              href={`/cases/${nextCase.slug}`}
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
              {nextCase.empresa} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  )
}

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans), sans-serif",
  fontSize: "16px",
  color: "#AAAAAA",
  lineHeight: "1.75",
  margin: 0,
}

function Divider() {
  return (
    <div
      style={{
        height: "1px",
        backgroundColor: "#1F1F1F",
        margin: "56px 0",
      }}
    />
  )
}

function Section({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <section>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#888888",
          margin: "0 0 12px",
        }}
      >
        {label}
      </p>
      {children}
    </section>
  )
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#888888",
          margin: "0 0 8px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "14px",
          color: "#F5F5F5",
          margin: 0,
          lineHeight: "1.5",
        }}
      >
        {value}
      </p>
    </div>
  )
}
