"use client"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export interface Gallery4Item {
  id: string
  image: string
  alt?: string
}

interface Gallery4Props {
  items: Gallery4Item[]
}

const Gallery4 = ({ items }: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!carouselApi) return
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }
    update()
    carouselApi.on("select", update)
    return () => { carouselApi.off("select", update) }
  }, [carouselApi])

  return (
    <div className="w-full">
      {/* Controles */}
      <div className="flex justify-end gap-2 mb-4">
        <Button
          size="icon"
          variant="outline"
          onClick={() => carouselApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="h-9 w-9 rounded-full border-[#E5E5E3] disabled:opacity-30"
        >
          <ArrowLeft className="size-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => carouselApi?.scrollNext()}
          disabled={!canScrollNext}
          className="h-9 w-9 rounded-full border-[#E5E5E3] disabled:opacity-30"
        >
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <Carousel setApi={setCarouselApi} opts={{ align: "start", dragFree: false }}>
        <CarouselContent className="-ml-4">
          {items.map((item) => (
            <CarouselItem key={item.id} className="pl-4 basis-full md:basis-[85%]">
              <div className="overflow-hidden rounded-2xl bg-[#F5F5F3] border border-[#E5E5E3]">
                <img
                  src={item.image}
                  alt={item.alt ?? ""}
                  className="w-full h-auto object-cover block"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => carouselApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === i ? "bg-[#111111]" : "bg-[#CCCCCC]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { Gallery4 }
