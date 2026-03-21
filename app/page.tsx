import CaseCard from "@/components/CaseCard"
import { cases } from "@/lib/cases"

const ferramentas = [
  "Figma",
  "FigJam",
  "Miro",
  "Notion",
  "Maze / Useberry",
  "ChatGPT / IA",
]

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      {/* Hero */}
      <section style={{ paddingTop: "96px", paddingBottom: "80px" }}>
        <h1
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px, 6vw, 64px)",
            color: "#F5F5F5",
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
            maxWidth: "800px",
          }}
        >
          Design é tornar
          <br />a tecnologia acessível
          <br />para as pessoas.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "16px",
            color: "#888888",
            margin: 0,
            lineHeight: "1.6",
          }}
        >
          Claudio Souza · Product Designer
          <br />
          São Paulo, Brasil ·{" "}
          <span style={{ color: "#E5FF4A" }}>Disponível para novos projetos</span>
        </p>
      </section>

      {/* Cases grid */}
      <section style={{ paddingBottom: "80px" }}>
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

      {/* Ferramentas */}
      <section
        style={{
          paddingBottom: "80px",
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
          Ferramentas que uso
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {ferramentas.map((f) => (
            <span
              key={f}
              style={{
                backgroundColor: "#111111",
                border: "1px solid #1F1F1F",
                borderRadius: "6px",
                padding: "8px 16px",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "14px",
                color: "#888888",
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
