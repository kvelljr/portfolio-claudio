"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import Tag from "./Tag"
import { cases } from "@/lib/cases"

export default function CasesModal({ label = "Cases", variant = "nav" }: { label?: string; variant?: "nav" | "primary" }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const font = "var(--font-inter), sans-serif"

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={variant === "primary" ? {
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#111111",
          color: "#FFFFFF",
          fontFamily: font,
          fontWeight: 500,
          fontSize: "14px",
          padding: "10px 22px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
        } : {
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: font,
          fontSize: "14px",
          color: "#777777",
          padding: 0,
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          if (variant !== "primary") (e.currentTarget as HTMLElement).style.color = "#111111"
        }}
        onMouseLeave={(e) => {
          if (variant !== "primary") (e.currentTarget as HTMLElement).style.color = "#777777"
        }}
      >
        {label}
      </button>

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
                  zIndex: 10,
                }}
              >
                ×
              </button>
            </div>

            {/* Modal card */}
            <div style={{
              backgroundColor: "#F5F5F3",
              borderRadius: "24px",
              padding: "32px",
            }}>
              {/* Header */}
              <div style={{ marginBottom: "24px" }}>
                <p style={{
                  fontFamily: font,
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#AAAAAA",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  margin: "0 0 6px",
                }}>
                  Portfólio
                </p>
                <h2 style={{
                  fontFamily: font,
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#111111",
                  margin: 0,
                }}>
                  Trabalhos selecionados
                </h2>
              </div>

              {/* Cases — lista linear */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {cases.map((caso) => (
                  <Link
                    key={caso.slug}
                    href={`/cases/${caso.slug}`}
                    onClick={() => setOpen(false)}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{
                      backgroundColor: "#FFFFFF",
                      borderRadius: "16px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "row",
                      transition: "box-shadow 0.2s ease",
                      cursor: "pointer",
                    }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                    >
                      {/* Thumb */}
                      <div style={{
                        flexShrink: 0,
                        width: "180px",
                        aspectRatio: "16/9",
                        position: "relative",
                        overflow: "hidden",
                      }}>
                        <Image
                          src={caso.cover}
                          alt={caso.title}
                          fill
                          style={{ objectFit: "cover", objectPosition: "top" }}
                        />
                      </div>

                      {/* Info */}
                      <div style={{
                        padding: "20px 24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "8px",
                        flex: 1,
                      }}>
                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                          {caso.tags.map((tag) => (
                            <Tag key={tag} label={tag} />
                          ))}
                        </div>

                        <p style={{
                          fontFamily: font,
                          fontWeight: 700,
                          fontSize: "17px",
                          color: "#111111",
                          margin: 0,
                          lineHeight: 1.3,
                        }}>
                          {caso.title}
                        </p>

                        <p style={{
                          fontFamily: font,
                          fontSize: "13px",
                          color: "#777777",
                          margin: 0,
                          lineHeight: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}>
                          {caso.subtitle}
                        </p>

                        <div style={{ display: "flex", gap: "14px" }}>
                          <span style={{ fontFamily: font, fontSize: "12px", color: "#AAAAAA" }}>{caso.ano}</span>
                          <span style={{ fontFamily: font, fontSize: "12px", color: "#AAAAAA" }}>{caso.role}</span>
                        </div>
                      </div>

                      {/* Seta */}
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        paddingRight: "24px",
                        color: "#CCCCCC",
                        fontSize: "20px",
                        flexShrink: 0,
                      }}>
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
