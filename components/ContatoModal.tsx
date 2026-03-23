"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

const contatos = [
  {
    label: "E-mail",
    valor: "casjunior@outlook.com",
    href: "mailto:casjunior@outlook.com",
  },
  {
    label: "WhatsApp",
    valor: "+55 (14) 982256638",
    href: "https://wa.me/5514982256638",
  },
  {
    label: "LinkedIn",
    valor: "linkedin.com/in/claudiojuniorkv",
    href: "https://www.linkedin.com/in/claudiojuniorkv/",
  },
]

export default function ContatoModal() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const font = "var(--font-inter), sans-serif"

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#111111",
          color: "#FFFFFF",
          fontFamily: font,
          fontSize: "13px",
          fontWeight: 500,
          padding: "7px 16px",
          borderRadius: "100px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.2s ease",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#333333")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#111111")}
      >
        Contato
      </button>

      {/* Modal via portal */}
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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", width: "100%", maxWidth: "480px", paddingTop: "8px" }}
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

            {/* Card */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "24px",
                padding: "40px",
              }}
            >
              {/* Label */}
              <p
                style={{
                  fontFamily: font,
                  fontSize: "13px",
                  color: "#AAAAAA",
                  margin: "0 0 16px",
                }}
              >
                Contato
              </p>

              {/* Headline */}
              <h2
                style={{
                  fontFamily: font,
                  fontWeight: 700,
                  fontSize: "clamp(36px, 8vw, 52px)",
                  color: "#111111",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  margin: "0 0 24px",
                }}
              >
                Vamos
                <br />
                conversar
              </h2>

              {/* Descrição */}
              <p
                style={{
                  fontFamily: font,
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "#555555",
                  margin: "0 0 40px",
                }}
              >
                Interessado em falar sobre design e produto?
                <br />
                Entre em contato e vamos trocar ideias.
              </p>

              {/* Divider */}
              <div style={{ borderTop: "1px solid #EBEBEB", marginBottom: "8px" }} />

              {/* Itens de contato */}
              {contatos.map((c, i) => (
                <div key={i}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "18px 0",
                        cursor: "pointer",
                        transition: "opacity 0.15s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.65")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: font,
                            fontSize: "12px",
                            color: "#AAAAAA",
                            margin: "0 0 4px",
                          }}
                        >
                          {c.label}
                        </p>
                        <p
                          style={{
                            fontFamily: font,
                            fontWeight: 500,
                            fontSize: "16px",
                            color: "#111111",
                            margin: 0,
                          }}
                        >
                          {c.valor}
                        </p>
                      </div>
                      {/* Arrow */}
                      <span
                        style={{
                          fontSize: "20px",
                          color: "#AAAAAA",
                          transform: "rotate(-45deg)",
                          display: "inline-block",
                          lineHeight: 1,
                        }}
                      >
                        ↗
                      </span>
                    </div>
                  </a>
                  {i < contatos.length - 1 && (
                    <div style={{ borderTop: "1px solid #EBEBEB" }} />
                  )}
                </div>
              ))}

              {/* Divider final + Local */}
              <div style={{ borderTop: "1px solid #EBEBEB", paddingTop: "18px", marginTop: "8px" }}>
                <p style={{ fontFamily: font, fontSize: "12px", color: "#AAAAAA", margin: "0 0 4px" }}>
                  Local
                </p>
                <p style={{ fontFamily: font, fontWeight: 500, fontSize: "16px", color: "#111111", margin: 0 }}>
                  São Paulo, Brasil · remoto
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
