"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import CasesCarousel from "./CasesCarousel"
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

              {/* Cases — carousel */}
              <CasesCarousel casos={cases} />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
