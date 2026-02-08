"use client"
import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export const ProjectsSection = () => {
  const [projectCarouselApi, setProjectCarouselApi] = useState(null)
  const [projectSelectedIndex, setProjectSelectedIndex] = useState(0)

  useEffect(() => {
    if (!projectCarouselApi) return

    const onSelect = () => {
      setProjectSelectedIndex(projectCarouselApi.selectedScrollSnap())
    }

    projectCarouselApi.on("select", onSelect)
    projectCarouselApi.on("reInit", onSelect)
    onSelect()

    return () => {
      projectCarouselApi.off("select", onSelect)
      projectCarouselApi.off("reInit", onSelect)
    }
  }, [projectCarouselApi])

  return (
    <section className="mt-16 lg:mt-24">
        <div className="mb-6 lg:mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-primary text-left lg:text-left md:leading-28">Projects that speak <br />for themselves</h2>
        </div>
        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
          <Carousel
            opts={{ align: "start" }}
            setApi={setProjectCarouselApi}
            className="w-full"
          >
            <CarouselContent>
              {[1, 2, 3, 4].map((_, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <div className="bg-primary rounded-[30px] aspect-square"></div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3, 4].map((_, index) => (
                <button
                  key={index}
                  onClick={() => projectCarouselApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === projectSelectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="bg-primary rounded-[40px] aspect-square"></div>
          ))}
        </div>
      </section>
  )
}
