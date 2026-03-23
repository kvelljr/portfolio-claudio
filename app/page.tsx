import Image from "next/image"
import Link from "next/link"
import CaseCard from "@/components/CaseCard"
import CasesModal from "@/components/CasesModal"
import CasesCarousel from "@/components/CasesCarousel"
import { cases } from "@/lib/cases"

const badges = [
  "4+ anos projetando e-commerce e produtos SaaS",
  "25% de redução no tempo de conclusão em fluxos críticos",
  "90% de sucesso em testes de usabilidade com usuários reais",
]

const ferramentas = [
  "Figma", "FigJam", "Miro", "Hotjar", "Microsoft Clarity",
  "Google Analytics", "Notion", "Zeplin",
]

export default function Home() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

      {/* ── HERO ── */}
      <section style={{ paddingTop: "40px", paddingBottom: "24px" }}>
        {/* Card branco */}
        <div style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E5E3",
          borderRadius: "20px",
          padding: "32px 36px",
          position: "relative",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "24px" }}>

            {/* Conteúdo esquerda */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", flex: 1 }}>

              {/* Badge */}
              <span style={{
                display: "inline-block",
                alignSelf: "flex-start",
                backgroundColor: "#CCFF00",
                color: "#111111",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                borderRadius: "999px",
                padding: "3px 12px",
              }}>
                PRODUCT DESIGNER
              </span>

              {/* H1 */}
              <h1 style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4vw, 48px)",
                color: "#111111",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                margin: 0,
              }}>
                End-to-end,<br />
                do discovery<br />
                ao handoff.
              </h1>

              {/* Parágrafo */}
              <p style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "15px",
                color: "#666666",
                lineHeight: "1.6",
                margin: 0,
                maxWidth: "420px",
              }}>
                E-commerce (VTEX · Shopify · Nuvemshop) e SaaS.<br />
                Pesquisa, prototipagem e handoff que movem métricas.
              </p>

              {/* Stat cards */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { num: "25%", label: "redução em tarefas críticas" },
                  { num: "90%", label: "sucesso em usabilidade" },
                  { num: "4+",  label: "anos em e-commerce" },
                ].map(({ num, label }) => (
                  <div key={num} style={{
                    backgroundColor: "#F5F5F3",
                    borderRadius: "10px",
                    padding: "12px 16px",
                    minWidth: "110px",
                  }}>
                    <p style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "26px",
                      fontWeight: 700,
                      color: "#111111",
                      margin: 0,
                      lineHeight: 1,
                    }}>{num}</p>
                    <p style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "11px",
                      color: "#999999",
                      margin: "4px 0 0",
                      lineHeight: 1.4,
                    }}>{label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
                <CasesModal label="Ver cases →" variant="primary" />
                <Link
                  href="https://linkedin.com/in/claudiojuniorkv"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    color: "#111111",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    padding: "9px 22px",
                    borderRadius: "999px",
                    border: "1px solid #111111",
                    textDecoration: "none",
                  }}
                >
                  LinkedIn
                </Link>
              </div>
            </div>

            {/* Foto — canto superior direito */}
            <div style={{
              flexShrink: 0,
              width: "130px",
              aspectRatio: "4/5",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid #E5E5E3",
            }}>
              <Image
                src="/claudio-souza.png"
                alt="Claudio Souza | Product Designer"
                width={130}
                height={163}
                style={{ objectFit: "cover", objectPosition: "top center", width: "100%", height: "100%" }}
                priority
              />
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
        <CasesCarousel casos={cases} />
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
            cargo="Product Designer"
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
