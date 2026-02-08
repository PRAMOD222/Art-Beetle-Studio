"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export const TestimonialsSection = ({ testimonials }) => {
  const [testimonialCarouselApi, setTestimonialCarouselApi] = useState(null)
  const [testimonialSelectedIndex, setTestimonialSelectedIndex] = useState(0)

  useEffect(() => {
    if (!testimonialCarouselApi) return

    const onSelect = () => {
      setTestimonialSelectedIndex(testimonialCarouselApi.selectedScrollSnap())
    }

    testimonialCarouselApi.on("select", onSelect)
    testimonialCarouselApi.on("reInit", onSelect)
    onSelect()

    return () => {
      testimonialCarouselApi.off("select", onSelect)
      testimonialCarouselApi.off("reInit", onSelect)
    }
  }, [testimonialCarouselApi])

  return (
    <section className="mt-16 lg:mt-24">
        <div className="flex justify-start lg:justify-end">
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-primary text-left lg:text-end mb-6 lg:mb-16">Trust that started <br />with the first project </h2>
        </div>

        <div className="relative h-[50vh] md:h-[60vh] lg:h-[120vh] hidden md:block">

          <div className=" bg-[#221822] p-5 rounded-[30px] w-[40%] lg:w-[20%] space-y-4 absolute top-0 left-1/2 -translate-x-1/2">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-black/40" > </div>
              <div>
                <h3 className="text-xs text-gray-400">Graphic Designer</h3>
                <h2 className="text-xl text-primary">Pravin Patole</h2>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.
              </p>
            </div>
          </div>

          <div className=" bg-[#221822] p-5 rounded-[30px] w-[40%] lg:w-[20%] space-y-4 absolute top-1/2 left-0 -translate-y-1/2">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-black/40" > </div>
              <div>
                <h3 className="text-xs text-gray-400">Graphic Designer</h3>
                <h2 className="text-xl text-primary">Pravin Patole</h2>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.
              </p>
            </div>
          </div>

          <div className=" bg-[#221822] p-5 rounded-[30px] w-[40%] lg:w-[20%] space-y-4 absolute top-1/2 right-0 -translate-y-1/2">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-black/40" > </div>
              <div>
                <h3 className="text-xs text-gray-400">Graphic Designer</h3>
                <h2 className="text-xl text-primary">Pravin Patole</h2>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.
              </p>
            </div>
          </div>

          <div className=" bg-[#221822] p-5 rounded-[30px] w-[20%] space-y-4 absolute top-[20%] left-1/4 -translate-x-1/2 -translate-y-1/2 ">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-black/40" > </div>
              <div>
                <h3 className="text-xs text-gray-400">Graphic Designer</h3>
                <h2 className="text-xl text-primary">Pravin Patole</h2>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.
              </p>
            </div>
          </div>

          <div className=" bg-[#221822] p-5 rounded-[30px] w-[20%] space-y-4 absolute top-[20%] left-3/4 -translate-x-1/2 -translate-y-1/2 ">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-black/40" > </div>
              <div>
                <h3 className="text-xs text-gray-400">Graphic Designer</h3>
                <h2 className="text-xl text-primary">Pravin Patole</h2>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.
              </p>
            </div>
          </div>

          <Image className="w-[38%] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20" src="/beetle.svg" alt="hero" width={1000} height={1000} />

          <h2 className="text-8xl text-primary text-start absolute bottom-10 left-0 -translate-y-1/2">You <br />asked</h2>

          <h2 className="text-8xl text-primary text-end absolute bottom-0 right-0 "> We <br /> answered</h2>

        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="md:hidden mt-2">
          <Carousel
            opts={{ align: "start" }}
            setApi={setTestimonialCarouselApi}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full shadow shadow-[#221822]">
                  <div className="bg-[#221822] p-5 rounded-[30px] space-y-4">
                    <div className="flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-black/40"></div>
                      <div>
                        <h3 className="text-xs text-gray-400">{testimonial.role}</h3>
                        <h2 className="text-xl text-primary">{testimonial.name}</h2>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">
                        {testimonial.desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => testimonialCarouselApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === testimonialSelectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>

          <div className="mt-16 space-y-2">
            <h2 className="text-5xl text-primary text-start">You asked</h2>
            <h2 className="text-5xl text-primary text-end"> We answered</h2>
          </div>
        </div>

      </section>
  )
}
