"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { RevealCta } from "@/components/RevealCta"
import { ContactDialog } from "@/components/contact-dialog"

export const ServicesSection = ({ services }) => {
  const [serviceCarouselApi, setServiceCarouselApi] = useState(null)
  const [serviceSelectedIndex, setServiceSelectedIndex] = useState(0)

  useEffect(() => {
    if (!serviceCarouselApi) return

    const onSelect = () => {
      setServiceSelectedIndex(serviceCarouselApi.selectedScrollSnap())
    }

    serviceCarouselApi.on("select", onSelect)
    serviceCarouselApi.on("reInit", onSelect)
    onSelect()

    return () => {
      serviceCarouselApi.off("select", onSelect)
      serviceCarouselApi.off("reInit", onSelect)
    }
  }, [serviceCarouselApi])

  return (
    <section className="mt-10 lg:mt-24">
        <div className="">
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-8 md:leading-14"> We don&apos;t sell packages. <br />We find <span className="text-accent">the right tools to <br className="hidden lg:block" /> reach your goals</span></h2>
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="mt-6 lg:hidden">
          <Carousel
            opts={{ align: "start" }}
            setApi={setServiceCarouselApi}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <div className="aspect-square relative group hover:bg-primary rounded-[40px] overflow-hidden">
                    <Image src={service.img} alt={`service ${index + 1}`} width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-center">
                      <h2 className="text-3xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">{service.title}</h2>
                      <p className="text-sm font-light group-hover:text-primary-foreground transition-colors duration-200">{service.desc}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => serviceCarouselApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === serviceSelectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>

          <div className="mt-8">
            <h2 className="text-xl font-light leading-8">We don&apos;t believe in one-size-fits-all solutions. You bring the request – we bring the mix of tools that will actually work.</h2>
            <div className="border border-primary rounded-full w-max my-4 flex items-center justify-center p-1">
              <RevealCta text="Find the right service" className="px-6 text-sm md:text-base" />
              <ContactDialog>
                <button className="cursor-pointer bg-linear-to-r from-purple-600 to-accent text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-full ">
                  <FaArrowRight className="text-lg md:text-xl text-primary" />
                </button>
              </ContactDialog>
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid mt-18 grid-cols-4 grid-rows-2 gap-4">
          {services.slice(0, 4).map((service, index) => (
            <div key={index} className="aspect-square relative group hover:bg-primary rounded-[50px] overflow-hidden">
              <Image src={service.img} alt={`service ${index + 1}`} width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-all duration-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-center">
                <h2 className="text-3xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">{service.title}</h2>
                <p className="text-sm font-light group-hover:text-primary-foreground transition-colors duration-200">{service.desc}</p>
              </div>
            </div>
          ))}

          <div className="col-span-2 flex items-end">
            <div className="w-2/3 pr-10">
              <h2 className="text-2xl font-light leading-8">We don&apos;t believe in one-size-fits-all solutions. You bring the request – we bring the mix of tools that will actually work.</h2>
              <div className="border border-primary rounded-full w-max my-8 flex items-center justify-center p-1">
                <RevealCta text="Find the right service" className="px-6 text-base" />
                <ContactDialog>
                  <button className="cursor-pointer  bg-linear-to-r from-purple-600 to-accent text-primary-foreground px-6 py-3 rounded-full ">
                    <FaArrowRight className="text-xl text-primary" />
                  </button>
                </ContactDialog>
              </div>
            </div>
          </div>

          {services.slice(4).map((service, index) => (
            <div key={index + 4} className="aspect-square relative group hover:bg-primary rounded-[50px] overflow-hidden">
              <Image src={service.img} alt={`service ${index + 5}`} width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-center">
                <h2 className="text-3xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">{service.title}</h2>
                <p className="text-sm font-light group-hover:text-primary-foreground transition-colors duration-200">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}
