"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import CaseCard from "./CaseCard"
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
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            overflowY: "auto",
            padding: "40px 16px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#F5F5F3",
              borderRadius: "24px",
              padding: "32px",
              width: "100%",
              maxWidth: "860px",
              position: "relative",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
              <div>
                <p style={{ fontFamily: font, fontSize: "11px", fontWeight: 600, color: "#AAAAAA", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 4px" }}>
                  Portfólio
                </p>
                <h2 style={{ fontFamily: font, fontSize: "22px", fontWeight: 700, color: "#111111", margin: 0 }}>
                  Trabalhos selecionados
                </h2>
              </div>

              {/* Fechar */}
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E5E3",
                  borderRadius: "999px",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#555555",
                  flexShrink: 0,
                }}
              >
                ×
              </button>
            </div>

            {/* Cases grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}>
              {cases.map((caso) => (
                <CaseCard key={caso.slug} caso={caso} />
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
