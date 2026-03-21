import CasePage from "@/components/CasePage"
import { cases } from "@/lib/cases"

export default function MarconPage() {
  const caso = cases.find((c) => c.slug === "marcon")!
  return <CasePage caso={caso} />
}
