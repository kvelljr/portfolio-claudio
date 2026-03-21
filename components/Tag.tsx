export default function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: "#1A1A1A",
        color: "#888888",
        border: "1px solid #1F1F1F",
        borderRadius: "4px",
        padding: "2px 8px",
        fontSize: "12px",
        fontFamily: "var(--font-dm-sans), sans-serif",
        lineHeight: "1.6",
      }}
    >
      {label}
    </span>
  )
}
