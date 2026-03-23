"use client"

import Image from "next/image"
import Link from "next/link"
import type { Case } from "@/lib/cases"
import { Gallery4 } from "@/components/ui/gallery4"
import { cases } from "@/lib/cases"

export default function CasePage({ caso }: { caso: Case }) {
  const currentIndex = cases.findIndex((c) => c.slug === caso.slug)
  const prevCase = cases[currentIndex - 1] ?? null
  const nextCase = cases[currentIndex + 1] ?? null

  return (
    <div>
      {/* Cover image */}
      <div style={{ overflow: "hidden", maxHeight: "500px", lineHeight: 0, backgroundColor: "#F5F5F3" }}>
        <Image
          src={caso.cover}
          alt={caso.title}
          width={1200}
          height={630}
          style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", maxHeight: "500px" }}
          priority
        />
      </div>

      {/* Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>

        {/* Breadcrumb */}
        <div style={{ paddingTop: "40px", marginBottom: "32px" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              color: "#AAAAAA",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { ;(e.target as HTMLElement).style.color = "#111111" }}
            onMouseLeave={(e) => { ;(e.target as HTMLElement).style.color = "#AAAAAA" }}
          >
            ← Trabalhos
          </Link>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 48px)",
            color: "#111111",
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
          }}
        >
          {caso.title}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "18px",
            color: "#666666",
            lineHeight: "1.6",
            margin: "0 0 48px",
          }}
        >
          {caso.subtitle}
        </p>

        {/* Metadata grid */}
        <div
          className="case-meta-grid"
          style={{
            marginBottom: "48px",
            padding: "28px",
            backgroundColor: "#F7F7F5",
            border: "1px solid #E5E5E3",
            borderRadius: "16px",
          }}
        >
          <MetaItem label="Empresa" value={caso.empresa} />
          <MetaItem label="Meu papel" value={caso.role} />
          <MetaItem label="Ferramentas" value={caso.ferramentas.join(", ")} />
          <MetaItem label="Ano" value={caso.ano} />
        </div>

        <Divider />

        <Section label="Contexto">
          <p style={bodyStyle}>{caso.contexto}</p>
        </Section>

        <Divider />

        <Section label="O desafio">
          <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {caso.desafios.map((d, i) => (
              <li key={i} style={{ ...bodyStyle, margin: 0 }}>{d}</li>
            ))}
          </ul>
        </Section>

        <Divider />

        <Section label="Meu papel">
          <p style={{ ...bodyStyle, marginBottom: "20px" }}>{caso.meuPapel.intro}</p>
          <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {caso.meuPapel.atividades.map((a, i) => (
              <li key={i} style={{ ...bodyStyle, margin: 0 }}>{a}</li>
            ))}
          </ul>
        </Section>

        <Divider />

        <Section label="Abordagem de design">
          <p style={{ ...bodyStyle, marginBottom: "32px" }}>{caso.abordagem}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {caso.processo.map((p) => (
              <div
                key={p.numero}
                style={{
                  backgroundColor: "#F7F7F5",
                  border: "1px solid #E5E5E3",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: "28px",
                    color: "#CCCCCC",
                    display: "block",
                    lineHeight: "1",
                    marginBottom: "12px",
                  }}
                >
                  {p.numero}
                </span>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 600, fontSize: "15px", color: "#111111", margin: "0 0 8px" }}>
                  {p.titulo}
                </p>
                <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: "#777777", lineHeight: "1.6", margin: 0 }}>
                  {p.descricao}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        <Section label="Solução">
          <p style={bodyStyle}>{caso.solucao}</p>
        </Section>

        {/* Protótipo Figma */}
        {caso.figmaEmbed && (
          <>
            <Divider />
            <Section label="Protótipo interativo">
              <div style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #E5E5E3",
                backgroundColor: "#F5F5F3",
                lineHeight: 0,
              }}>
                <iframe
                  src={caso.figmaEmbed}
                  width="100%"
                  height="600"
                  style={{ border: "none", display: "block" }}
                  allowFullScreen
                />
              </div>
            </Section>
          </>
        )}

        {/* Galeria de imagens */}
        {caso.imagens && caso.imagens.length > 0 && (
          <>
            <Divider />
            <Section label="Imagens do projeto">
              <Gallery4
                items={caso.imagens.map((src, i) => ({
                  id: String(i),
                  image: src,
                  alt: `${caso.title} imagem ${i + 1}`,
                }))}
              />
            </Section>
          </>
        )}

        <Divider />

        <Section label="Resultados e impacto">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "24px", textAlign: "center", marginBottom: "40px" }}>
            {caso.metricas.map((m) => (
              <div key={m.descricao}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(40px, 6vw, 56px)",
                    color: "#111111",
                    lineHeight: "1",
                    marginBottom: "12px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {m.valor}
                </span>
                <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: "#777777", lineHeight: "1.4" }}>
                  {m.descricao}
                </span>
              </div>
            ))}
          </div>
          <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {caso.resultadosBullets.map((r, i) => (
              <li key={i} style={{ ...bodyStyle, margin: 0 }}>{r}</li>
            ))}
          </ul>
        </Section>

        <Divider />

        <Section label="Aprendizados">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {caso.aprendizados.map((a, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#F7F7F5",
                  border: "1px solid #E5E5E3",
                  borderRadius: "12px",
                  padding: "24px 28px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#111111",
                    margin: "0 0 8px",
                    lineHeight: "1.5",
                  }}
                >
                  {a.titulo}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "14px",
                    color: "#777777",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {a.descricao}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <div
          style={{
            borderTop: "1px solid #E5E5E3",
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
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: "#AAAAAA", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => { ;(e.target as HTMLElement).style.color = "#111111" }}
              onMouseLeave={(e) => { ;(e.target as HTMLElement).style.color = "#AAAAAA" }}
            >
              ← {prevCase.empresa}
            </Link>
          ) : <span />}

          {nextCase ? (
            <Link
              href={`/cases/${nextCase.slug}`}
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: "#AAAAAA", textDecoration: "none", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => { ;(e.target as HTMLElement).style.color = "#111111" }}
              onMouseLeave={(e) => { ;(e.target as HTMLElement).style.color = "#AAAAAA" }}
            >
              {nextCase.empresa} →
            </Link>
          ) : <span />}
        </div>
      </div>
    </div>
  )
}

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "16px",
  color: "#555555",
  lineHeight: "1.75",
  margin: 0,
}

function Divider() {
  return <div style={{ height: "1px", backgroundColor: "#E5E5E3", margin: "56px 0" }} />
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#AAAAAA",
          margin: "0 0 16px",
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
      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#AAAAAA", margin: "0 0 6px" }}>
        {label}
      </p>
      <p style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px", color: "#111111", margin: 0, lineHeight: "1.5" }}>
        {value}
      </p>
    </div>
  )
}
