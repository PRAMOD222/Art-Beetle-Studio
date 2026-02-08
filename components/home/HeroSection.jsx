"use client"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"
import { RevealCta } from "@/components/RevealCta"
import { ContactDialog } from "@/components/contact-dialog"

export const HeroSection = ({ heroBoxes }) => {
  return (
    <section className=" relative  md:py-10 ">
        <Image className="w-[80%] md:w-[60%] lg:w-[40%] absolute top-[55%] left-[50%] lg:left-[70%] -translate-x-1/2 -translate-y-1/2 opacity-35 -z-20" src="/beetle.svg" alt="hero" width={1000} height={1000} />
        <div className="w-[80%] md:w-[60%] lg:w-[40%] aspect-square absolute top-[55%] left-[50%] lg:left-[70%] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] -z-10 rounded-full bg-blue-500 "></div>

        <div className=" mt-4 lg:mt-14 z-30 w-full md:w-4/5 lg:w-2/3 2xl:w-1/2 ">
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-left md:leading-28">Artistry Meets <br /> Brand Logic</h2>
          <div className="border border-primary rounded-full w-max my-6 md:my-8 flex items-center justify-center p-1">
            <RevealCta text="Get a Free Consultation" className="px-6 text-sm md:text-base" />
            <ContactDialog>
              <button className="cursor-pointer bg-linear-to-r from-purple-600 to-accent text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-full ">
                <FaArrowRight className="text-lg md:text-xl text-primary" />
              </button>
            </ContactDialog>
          </div>

          <div className="boxes flex flex-col sm:flex-row gap-4 w-full mt-16 lg:mt-32  md:w-4/5 xl:w-2/3 2xl:w-4/5">
            {heroBoxes.map((box, index) => (
              <div className="bg-primary flex flex-col justify-between text-primary-foreground rounded-[30px] lg:rounded-[40px] p-6 w-2/3 aspect-square" key={index}>
                <div>
                  <h2 className="text-4xl md:text-5xl text-accent text-end">{box.value}</h2>
                  <h2 className="text-xl md:text-2xl text-end">{box.title}</h2>
                </div>
                <p className="mt-4 leading-5 text-sm md:text-base ">{box.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
  )
}
