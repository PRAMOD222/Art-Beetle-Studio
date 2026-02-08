"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RevealCta } from "@/components/RevealCta"
import { ContactDialog } from "@/components/contact-dialog"
import { FaArrowRight } from "react-icons/fa6"

export const FaqSection = ({ faqs }) => {
  return (
    <section className="mt-16 lg:mt-24">
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-primary text-left mb-6 lg:mb-16">FAQs</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/20 px-0">
              <AccordionTrigger className="text-xl md:text-2xl hover:text-accent hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-gray-400 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 lg:mt-24 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">Ready to start your project?</h2>
          <div className="border border-primary rounded-full w-max mx-auto flex items-center justify-center p-1">
            <RevealCta text="Let's talk" className="px-6 md:px-10 text-lg md:text-xl" />
            <ContactDialog>
              <button className="cursor-pointer bg-linear-to-r from-purple-600 to-accent text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-full ">
                <FaArrowRight className="text-xl md:text-2xl text-primary" />
              </button>
            </ContactDialog>
          </div>
        </div>
      </section>
  )
}
