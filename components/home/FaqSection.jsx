"use client"
import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export const FaqSection = ({ faqs = [] }) => {

  const [faqCarouselApi, setFaqCarouselApi] = useState(null)
  const [faqSelectedIndex, setFaqSelectedIndex] = useState(0)

  useEffect(() => {
    if (!faqCarouselApi) {
      return
    }

    faqCarouselApi.on("select", () => {
      setFaqSelectedIndex(faqCarouselApi.selectedScrollSnap())
    })
  }, [faqCarouselApi])

  if (!faqs.length) return null

  return (
    <section className="mt-6 ">
      <div className="lg:hidden ">
        <Carousel
          opts={{ align: "start" }}
          setApi={setFaqCarouselApi}
          className="w-full"
        >
          <CarouselContent>
            {[0, 1].map((i) => (
              <CarouselItem key={i} className="basis-full">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.slice(i * Math.ceil(faqs.length / 2), (i + 1) * Math.ceil(faqs.length / 2)).map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border-b-0 overflow-hidden rounded-2xl bg-primary text-primary-foreground"
                    >
                      <AccordionTrigger className="p-6 font-normal flex items-center justify-between gap-4 hover:no-underline">
                        <span className="pr-4 text-lg">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-sm text-primary-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2">
            {[0, 1].map((_, index) => (
              <button
                key={index}
                onClick={() => faqCarouselApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === faqSelectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex gap-6">
        <Accordion type="single" collapsible className="space-y-4 w-1/2">
          {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-b-0 overflow-hidden rounded-2xl bg-primary text-primary-foreground"
            >
              <AccordionTrigger className="p-6 text-base font-normal flex items-center justify-between gap-4 hover:no-underline">
                <span className="pr-4 text-xl">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-sm text-primary-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>

          ))}
        </Accordion>
        <Accordion type="single" collapsible className="space-y-4 w-1/2">
          {faqs.slice(Math.ceil(faqs.length / 2)).map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-b-0 overflow-hidden rounded-2xl bg-primary text-primary-foreground"
            >
              <AccordionTrigger className="p-6 text-base font-normal flex items-center justify-between gap-4 hover:no-underline">
                <span className="pr-4 text-xl">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-sm text-primary-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>

          ))}
        </Accordion>
      </div>
    </section>
  )
}
