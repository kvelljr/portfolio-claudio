"use client"
import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import CaseCard from "@/components/CaseCard"
import type { Case } from "@/lib/cases"

export default function CasesCarousel({ casos }: { casos: Case[] }) {
  const [api, setApi] = useState<CarouselApi>()
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    const update = () => {
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
      setCurrent(api.selectedScrollSnap())
    }
    update()
    api.on("select", update)
    return () => { api.off("select", update) }
  }, [api])

  return (
    <div>
      {/* Controles */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginBottom: "16px" }}>
        <button
          onClick={() => api?.scrollPrev()}
          disabled={!canPrev}
          style={{
            width: "36px", height: "36px", borderRadius: "50%",
            border: "1px solid #E5E5E3", backgroundColor: "#FFFFFF",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: canPrev ? "pointer" : "default",
            opacity: canPrev ? 1 : 0.3, transition: "opacity 0.2s",
          }}
        >
          <ArrowLeft size={16} color="#111111" />
        </button>
        <button
          onClick={() => api?.scrollNext()}
          disabled={!canNext}
          style={{
            width: "36px", height: "36px", borderRadius: "50%",
            border: "1px solid #E5E5E3", backgroundColor: "#FFFFFF",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: canNext ? "pointer" : "default",
            opacity: canNext ? 1 : 0.3, transition: "opacity 0.2s",
          }}
        >
          <ArrowRight size={16} color="#111111" />
        </button>
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", dragFree: false }}>
        <CarouselContent className="-ml-6">
          {casos.map((caso) => (
            <CarouselItem key={caso.slug} className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
              <CaseCard caso={caso} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      {casos.length > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px" }}>
          {casos.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: "8px", height: "8px", borderRadius: "50%", border: "none",
                backgroundColor: current === i ? "#111111" : "#CCCCCC",
                cursor: "pointer", transition: "background-color 0.2s", padding: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
