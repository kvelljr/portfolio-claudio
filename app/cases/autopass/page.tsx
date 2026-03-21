import CasePage from "@/components/CasePage"
import { cases } from "@/lib/cases"

export default function AutopassPage() {
  const caso = cases.find((c) => c.slug === "autopass")!
  return <CasePage caso={caso} />
}
