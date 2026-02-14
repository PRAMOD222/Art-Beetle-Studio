"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const ProcessSection = ({ numberCards }) => {
  const [carouselApi, setCarouselApi] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!carouselApi) return

    const onSelect = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap())
    }

    carouselApi.on("select", onSelect)
    carouselApi.on("reInit", onSelect)
    onSelect()

    return () => {
      carouselApi.off("select", onSelect)
      carouselApi.off("reInit", onSelect)
    }
  }, [carouselApi])

  const visibleCount = 4
  const totalSlides = numberCards.length
  const maxIndex = Math.max(totalSlides - visibleCount, 0)
  const clampedIndex = Math.min(selectedIndex, maxIndex)

  const windowFraction =
    totalSlides === 0 ? 1 : Math.min(visibleCount / totalSlides, 1)

  const accentWidth = windowFraction * 100
  const progress = maxIndex === 0 ? 0 : clampedIndex / maxIndex
  const accentOffset = (100 - accentWidth) * progress

  const accentStyle = {
    width: `${accentWidth}%`,
    transform: `translateX(${accentOffset}%)`,
  }

  return (
    <section className="mt-16 lg:mt-24 relative ">

        <div className="absolute inset-y-0 left-0 w-[40%] md:w-[20%] opacity-10 -z-10">
          <Image
            src="/beetle.svg"
            alt="background beetle"
            width={800}
            height={800}
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="flex gap-10 w-full lg:w-2/3 ml-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 lg:mb-12 leading-8 md:leading-14"> Art Beetle Studio moves beyond the brief, functioning as your{" "} <span className="text-accent">strategic co-pilot</span> to transform complex business challenges into seamless{" "} <span className="text-accent">digital experiences.</span> </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch ">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
            setApi={setCarouselApi}
            className="flex flex-col lg:flex-row items-stretch justify-center w-full gap-8 lg:gap-0"
          >
            <div className="w-full lg:w-1/3 relative flex justify-end lg:block px-4 lg:px-0 order-2 lg:order-1">
              <CarouselPrevious className='w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary text-primary-foreground hidden lg:flex items-center justify-center static lg:absolute lg:top-full lg:-translate-y-full lg:left-0 mr-4 lg:mr-0' />
              <CarouselNext className='w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary text-primary-foreground hidden lg:flex items-center justify-center static lg:absolute lg:top-full lg:left-20 lg:-translate-y-full' />
            </div>
            <div className="w-full lg:w-2/3 order-1 lg:order-2 relative">
              <CarouselContent>
                {numberCards.map((card, index) => (
                  <CarouselItem key={index} className="basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="bg-[#191921] aspect-square rounded-[30px] lg:rounded-[40px] p-6 lg:p-8 flex flex-col justify-between group hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-grab active:cursor-grabbing select-none">
                      <h2 className="text-4xl lg:text-5xl text-primary group-hover:text-accent">
                        {card.id}
                      </h2>
                      <p className="text-base lg:text-lg leading-5">
                        {card.before}
                        <span className="text-secondary group-hover:text-accent transition-colors">
                          {card.highlight}
                        </span>
                        {card.after}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-accent opacity-10 blur-2xl rounded-full -z-10 md:hidden"></div>


              <div className="mt-8 h-px w-full bg-white/20 rounded-full overflow-hidden hidden lg:block">
                <div
                  className="h-full bg-linear-to-r from-purple-600 to-accent rounded-full transition-transform duration-300"
                  style={accentStyle}
                />
              </div>

              <div className="flex justify-center gap-2 mt-6 lg:hidden">
                {numberCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => carouselApi?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </Carousel>
        </div>
      </section>
  )
}
