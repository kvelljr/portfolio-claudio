import Image from "next/image"
import Link from "next/link"
import CaseCard from "@/components/CaseCard"
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
      <section style={{ paddingTop: "60px", paddingBottom: "72px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "48px", flexWrap: "wrap" }}>

          {/* Conteúdo — order 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", flex: "1 1 400px" }}>

            {/* Badge label */}
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
              fontSize: "42px",
              color: "#111111",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              margin: 0,
            }}>
              End-to-end, do discovery ao handoff.
            </h1>

            {/* Parágrafo */}
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "15px",
              color: "#666666",
              lineHeight: "1.6",
              margin: 0,
            }}>
              Especialista em e-commerce (VTEX · Shopify · Nuvemshop) e SaaS. Conduzo pesquisa com usuários, prototipo fluxos de alta fidelidade e entrego handoff que move métricas.
            </p>

            {/* Stat cards */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { num: "25%", label: "redução em tarefas críticas" },
                { num: "90%", label: "sucesso em usabilidade" },
                { num: "4+",  label: "anos em e-commerce" },
              ].map(({ num, label }) => (
                <div key={num} style={{
                  backgroundColor: "#F5F5F3",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  minWidth: "100px",
                }}>
                  <p style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#111111",
                    margin: 0,
                    lineHeight: 1,
                  }}>{num}</p>
                  <p style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "12px",
                    color: "#888888",
                    margin: "4px 0 0",
                    lineHeight: 1.4,
                  }}>{label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
              <Link
                href="/#trabalhos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#111111",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: "10px 22px",
                  borderRadius: "999px",
                  textDecoration: "none",
                }}
              >
                Ver cases →
              </Link>
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

          {/* Foto — order 2, lado direito */}
          <div style={{
            flex: "0 0 140px",
            width: "140px",
            aspectRatio: "9/16",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid #E5E5E3",
            alignSelf: "center",
          }}>
            <Image
              src="/claudio-souza.png"
              alt="Claudio Souza | Product Designer"
              width={140}
              height={249}
              style={{ objectFit: "cover", objectPosition: "top center", width: "100%", height: "100%" }}
              priority
            />
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
