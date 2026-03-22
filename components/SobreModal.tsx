"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

const ferramentas = [
  "Figma", "FigJam", "Miro", "Notion",
  "Hotjar", "Microsoft Clarity", "Maze / Useberry", "ChatGPT / IA",
]

const habilidades = [
  {
    titulo: "Product Design",
    descricao:
      "Criação de interfaces digitais com foco em usabilidade, hierarquia visual e consistência de experiência do usuário.",
  },
  {
    titulo: "UX Research",
    descricao:
      "Condução de entrevistas, testes de usabilidade e análise de comportamento para embasar decisões de design.",
  },
  {
    titulo: "Design Systems",
    descricao:
      "Construção de bibliotecas de componentes escaláveis que agilizam o desenvolvimento e garantem consistência.",
  },
  {
    titulo: "Discovery",
    descricao:
      "Mapeamento de problemas, definição de personas e priorização de oportunidades com base em dados reais.",
  },
]

const experiencias = [
  {
    empresa: "RockFly Performance",
    cargo: "Designer UX/UI",
    periodo: "mar 2024 – jan 2026",
  },
  {
    empresa: "Eficaz Marketing e Tecnologia",
    cargo: "Product Designer",
    periodo: "dez 2021 – fev 2024",
  },
]

const FERR_PAGE_SIZE = 4
const ferrPages = Math.ceil(ferramentas.length / FERR_PAGE_SIZE)

export default function SobreModal() {
  const [open, setOpen] = useState(false)
  const [habAtual, setHabAtual] = useState(0)
  const [ferrPage, setFerrPage] = useState(0)
  const [ferrVisible, setFerrVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Auto-advance ferramentas com fade
  useEffect(() => {
    if (!open) return
    const t = setInterval(() => {
      setFerrVisible(false)
      setTimeout(() => {
        setFerrPage((p) => (p + 1) % ferrPages)
        setFerrVisible(true)
      }, 300)
    }, 2800)
    return () => clearInterval(t)
  }, [open])

  const font = "var(--font-inter), sans-serif"

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: font,
          fontSize: "14px",
          color: "#777777",
          padding: 0,
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111111")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#777777")}
      >
        sobre mim
      </button>

      {/* Overlay — renderizado via portal no body para escapar do backdrop-filter do Nav */}
      {open && mounted && createPortal(
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1000,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "24px",
            overflowY: "auto",
          }}
        >
          {/* Modal wrapper — stop propagation */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", width: "100%", maxWidth: "920px", margin: "auto 0", paddingTop: "8px" }}
          >
            {/* X Button */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <button
                onClick={() => setOpen(false)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid #D0D0D0",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  color: "#555555",
                  lineHeight: 1,
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#F2F2F0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF")}
              >
                ×
              </button>
            </div>

            {/* Bento Grid */}
            <div
              className="bento-grid"
              style={{
                backgroundColor: "#ECECEA",
                borderRadius: "24px",
                padding: "8px",
                overflowY: "visible",
              }}
            >
              {/* ── Coluna esquerda: Sobre mim + Experiência ── */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>

                {/* Card 1: Sobre mim */}
                <div style={{ backgroundColor: "#FFFFFF", borderRadius: "18px", padding: "32px", flex: 1 }}>
                  <h2
                    style={{
                      fontFamily: font,
                      fontWeight: 700,
                      fontSize: "22px",
                      color: "#111111",
                      margin: "0 0 18px",
                    }}
                  >
                    Sobre mim
                  </h2>
                  <hr style={{ border: "none", borderTop: "1px solid #EBEBEB", marginBottom: "18px" }} />
                  <p
                    style={{
                      fontFamily: font,
                      fontSize: "11px",
                      color: "#AAAAAA",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "12px",
                    }}
                  >
                    Minha história
                  </p>
                  <p
                    style={{
                      fontFamily: font,
                      fontSize: "15px",
                      lineHeight: "1.8",
                      color: "#444444",
                      margin: 0,
                    }}
                  >
                    Sou Product Designer com mais de 4 anos de experiência projetando produtos digitais em
                    ecossistemas de e-commerce e SaaS. Ao longo da minha trajetória, trabalhei com plataformas
                    como VTEX, Shopify e Nuvemshop, resolvendo problemas complexos com decisões intencionais e
                    atenção à experiência do usuário. O que me move é a conexão entre pesquisa, interface e
                    resultado real.
                  </p>
                </div>

                {/* Card 3: Experiência */}
                <div style={{ backgroundColor: "#FFFFFF", borderRadius: "18px", padding: "32px" }}>
                  <p
                    style={{
                      fontFamily: font,
                      fontSize: "11px",
                      color: "#AAAAAA",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "20px",
                    }}
                  >
                    Experiência
                  </p>
                  {experiencias.map((exp, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        paddingBottom: i < experiencias.length - 1 ? "16px" : 0,
                        marginBottom: i < experiencias.length - 1 ? "16px" : 0,
                        borderBottom: i < experiencias.length - 1 ? "1px solid #F2F2F0" : "none",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: font,
                            fontWeight: 500,
                            fontSize: "14px",
                            color: "#111111",
                            margin: "0 0 3px",
                          }}
                        >
                          {exp.empresa}
                        </p>
                        <p style={{ fontFamily: font, fontSize: "13px", color: "#999999", margin: 0 }}>
                          {exp.cargo}
                        </p>
                      </div>
                      <p
                        style={{
                          fontFamily: font,
                          fontSize: "12px",
                          color: "#BBBBBB",
                          margin: 0,
                          whiteSpace: "nowrap",
                          paddingLeft: "12px",
                        }}
                      >
                        {exp.periodo}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* ── Coluna direita: O que faço melhor + Ferramentas + Foto/CTA ── */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>

                {/* Card 2: O que faço melhor (swipeable) */}
                <div
                  style={{ backgroundColor: "#FFFFFF", borderRadius: "18px", padding: "32px", cursor: "grab", userSelect: "none" }}
                  onTouchStart={(e) => { (e.currentTarget as HTMLElement).dataset.touchX = String(e.touches[0].clientX) }}
                  onTouchEnd={(e) => {
                    const startX = Number((e.currentTarget as HTMLElement).dataset.touchX)
                    const diff = startX - e.changedTouches[0].clientX
                    if (Math.abs(diff) > 40) {
                      if (diff > 0) setHabAtual((h) => (h + 1) % habilidades.length)
                      else setHabAtual((h) => (h - 1 + habilidades.length) % habilidades.length)
                    }
                  }}
                  onMouseDown={(e) => { (e.currentTarget as HTMLElement).dataset.mouseX = String(e.clientX); (e.currentTarget as HTMLElement).style.cursor = "grabbing" }}
                  onMouseUp={(e) => {
                    const startX = Number((e.currentTarget as HTMLElement).dataset.mouseX)
                    const diff = startX - e.clientX;
                    (e.currentTarget as HTMLElement).style.cursor = "grab"
                    if (Math.abs(diff) > 40) {
                      if (diff > 0) setHabAtual((h) => (h + 1) % habilidades.length)
                      else setHabAtual((h) => (h - 1 + habilidades.length) % habilidades.length)
                    }
                  }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.cursor = "grab" }}
                >
                  <p style={{ fontFamily: font, fontSize: "11px", color: "#AAAAAA", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "14px" }}>
                    O que faço melhor
                  </p>
                  <h3 style={{ fontFamily: font, fontWeight: 700, fontSize: "20px", color: "#111111", margin: "0 0 12px" }}>
                    {habilidades[habAtual].titulo}
                  </h3>
                  <p style={{ fontFamily: font, fontSize: "15px", lineHeight: "1.7", color: "#666666", margin: "0 0 28px", minHeight: "60px" }}>
                    {habilidades[habAtual].descricao}
                  </p>
                  {/* Dots */}
                  <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                    {habilidades.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setHabAtual(i)}
                        style={{
                          width: i === habAtual ? "22px" : "8px",
                          height: "8px",
                          borderRadius: "100px",
                          backgroundColor: i === habAtual ? "#111111" : "#DDDDDD",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          transition: "all 0.25s ease",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Card 5: Ferramentas que uso — carrossel 4 por vez */}
                <div style={{ backgroundColor: "#FFFFFF", borderRadius: "18px", padding: "28px 32px" }}>
                  <p style={{ fontFamily: font, fontSize: "11px", color: "#AAAAAA", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
                    Ferramentas que uso
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "nowrap",
                      opacity: ferrVisible ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      minHeight: "34px",
                      alignItems: "center",
                    }}
                  >
                    {ferramentas
                      .slice(ferrPage * FERR_PAGE_SIZE, ferrPage * FERR_PAGE_SIZE + FERR_PAGE_SIZE)
                      .map((f) => (
                        <span
                          key={f}
                          style={{
                            fontFamily: font,
                            fontSize: "13px",
                            color: "#444444",
                            backgroundColor: "#F5F5F3",
                            border: "1px solid #E5E5E3",
                            borderRadius: "100px",
                            padding: "6px 16px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                  </div>
                  {/* Dots */}
                  <div style={{ display: "flex", gap: "6px", marginTop: "14px" }}>
                    {Array.from({ length: ferrPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setFerrPage(i); setFerrVisible(true) }}
                        style={{
                          width: i === ferrPage ? "20px" : "7px",
                          height: "7px",
                          borderRadius: "100px",
                          backgroundColor: i === ferrPage ? "#111111" : "#DDDDDD",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          transition: "all 0.25s ease",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Foto + CTA */}
                <div className="bento-sub-grid">
                  {/* Foto */}
                  <div style={{ borderRadius: "18px", overflow: "hidden", minHeight: "180px" }}>
                    <Image
                      src="/claudio-souza.png"
                      alt="Claudio Souza"
                      width={220}
                      height={300}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                    />
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "18px",
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "16px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: font,
                        fontWeight: 700,
                        fontSize: "18px",
                        color: "#111111",
                        margin: 0,
                        lineHeight: 1.35,
                      }}
                    >
                      Tem um projeto em mente?
                    </h3>
                    <a
                      href="https://linkedin.com/in/claudiojuniorkv"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        backgroundColor: "#F2F2F0",
                        borderRadius: "10px",
                        padding: "12px 16px",
                        fontFamily: font,
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#111111",
                        textAlign: "center",
                        textDecoration: "none",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#E5E5E3")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#F2F2F0")}
                    >
                      Ver LinkedIn →
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
