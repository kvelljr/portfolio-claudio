import CasePage from "@/components/CasePage"
import { cases } from "@/lib/cases"

export default function ForceCoffePage() {
  const caso = cases.find((c) => c.slug === "forcecoffe")!
  return <CasePage caso={caso} />
}
