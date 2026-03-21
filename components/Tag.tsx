export default function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: "#F0F0EE",
        color: "#555555",
        border: "1px solid #E5E5E3",
        borderRadius: "4px",
        padding: "2px 8px",
        fontSize: "12px",
        fontFamily: "var(--font-inter), sans-serif",
        lineHeight: "1.6",
      }}
    >
      {label}
    </span>
  )
}
