import CasePage from "@/components/CasePage"
import { cases } from "@/lib/cases"

export default function GlamoryPage() {
  const caso = cases.find((c) => c.slug === "glamory")!
  return <CasePage caso={caso} />
}
