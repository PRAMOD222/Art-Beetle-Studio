"use client"

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export default function Home() {
  const [carouselApi, setCarouselApi] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const heroBoxes = [
    {
      value: "30+",
      title: "Services",
      description: "We close the full cycle: frompositioningto advertising"
    },
    {
      value: "08+",
      title: "Projects",
      description: "We close the full cycle: frompositioningto advertising"
    }
  ]
  const numberCards = [
    {
      id: "01",
      before: "Structured flow and open ",
      highlight: "dialogue –",
      after: " every step of the way",
    },
    {
      id: "02",
      before: "Deep discovery and strategic ",
      highlight: "co-thinking –",
      after: " turning insight into action",
    },
    {
      id: "03",
      before: "Proactive check-ins that keep ",
      highlight: "momentum",
      after: " without sacrificing craft",
    },
    {
      id: "04",
      before: "Clear next steps and ",
      highlight: "transparent decisions",
      after: " at every milestone",
    },
    {
      id: "05",
      before: "Clear next steps and ",
      highlight: "transparent decisions",
      after: " at every milestone",
    },
    {
      id: "06",
      before: "Clear next steps and ",
      highlight: "transparent decisions",
      after: " at every milestone",
    },
    {
      id: "07",
      before: "Clear next steps and ",
      highlight: "transparent decisions",
      after: " at every milestone",
    },
    {
      id: "08",
      before: "Clear next steps and ",
      highlight: "transparent decisions",
      after: " at every milestone",
    },
  ]

  const faqs = [
    {
      id: "faq-1",
      question: "What services does your creative agency offer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "faq-2",
      question: "Who do you work with?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "faq-3",
      question: "How does your creative process work?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "faq-4",
      question: "How long does a project usually take?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "faq-5",
      question: "Do you offer custom design solutions?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "faq-6",
      question: "How many revisions do you provide?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "faq-7",
      question: "What information do you need to start a project?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "faq-8",
      question: "How can I get started with your agency?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  useEffect(() => {
    if (!carouselApi) return

    const onSelect = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap())
    }

    carouselApi.on("select", onSelect)
    onSelect()

    return () => {
      carouselApi.off("select", onSelect)
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
    <div className="container mx-auto ">

      <section className=" relative">
        <Image className="w-[40%] absolute top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2 opacity-35 -z-20" src="/beetle.svg" alt="hero" width={1000} height={1000} />
        <div className="w-[40%] aspect-square absolute top-[55%] left-[60%] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] -z-10 rounded-full bg-blue-500 "></div>

        <div className=" mt-14 z-30  w-1/2">
          <h2 className="text-8xl ">Artistry Meets <br /> Brand Logic</h2>
          <div className="border border-primary rounded-full w-max my-8 flex items-center justify-center p-1">
            <h2 className="px-6 ">Get a Free Consultation</h2>
            <button className="bg-linear-to-r from-purple-600 to-accent text-primary-foreground px-6 py-3 rounded-full ">
              <FaArrowRight className="text-xl text-primary" />
            </button>
          </div>

          <div className="boxes flex gap-4 items-center w-2/3 mt-32">
            {heroBoxes.map((box, index) => (
              <div className="bg-primary text-primary-foreground rounded-[40px] p-6 " key={index}>
                <h2 className="text-5xl text-accent text-end">{box.value}</h2>
                <h2 className="text-2xl text-end">{box.title}</h2>
                <p className="mt-4 leading-5">{box.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="mt-24 relative ">

        <div className="absolute inset-y-0 left-0 w-[20%] opacity-10 -z-10">
          <Image
            src="/beetle.svg"
            alt="background beetle"
            width={800}
            height={800}
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="flex gap-10  w-2/3 ml-auto">
          <h2 className="text-5xl mb-12"> Art Beetle Studio moves beyond the brief, functioning as your{" "} <span className="text-accent">strategic co-pilot</span> to transform complex business challenges into seamless{" "} <span className="text-accent">digital experiences.</span> </h2>
        </div>

        <div className="flex items-stretch ">



          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
            setApi={setCarouselApi}
            className="flex items-stretch justify-center"
          >
            <div className="w-1/3 relative">
              <CarouselPrevious className='w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center absolute top-full -translate-y-full left-0 ' />
              <CarouselNext className='w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center absolute top-full left-20 -translate-y-full' />
            </div>
            <div className="w-2/3 ">
              <CarouselContent>
                {numberCards.map((card, index) => (
                  <CarouselItem key={index} className="basis-1/4">
                    <div className="bg-[#191921] aspect-square rounded-[40px] p-8 flex flex-col justify-between group hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                      <h2 className="text-5xl text-primary group-hover:text-accent">
                        {card.id}
                      </h2>
                      <p className="text-lg leading-5">
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

              <div className="mt-8 h-px w-full bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-purple-600 to-accent rounded-full transition-transform duration-300"
                  style={accentStyle}
                />
              </div>
            </div>

          </Carousel>
        </div>
      </section>

      <section className="mt-24">
        <div className="text">
          <h2 className="text-8xl "> We don&apos;t sell packages. <br />We find <span className="text-accent">the right tools to <br /> reach your goals</span></h2>
        </div>

        <div className=" mt-18 grid grid-cols-4 grid-rows-2 gap-4">
          <div className="aspect-square relative group hover:bg-primary rounded-[50px] overflow-hidden">
            <Image src="/gradient/gradient-01.webp" alt="service 1" width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-center">
              <h2 className="text-3xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">Logo Design &<br /> Logo Animation</h2>
              <p className="text-sm font-light group-hover:text-primary-foreground transition-colors duration-200">Identity that reflects your meaning</p>
            </div>
          </div>

          {/* Branding & Visual Identity */}
          <div className="aspect-square relative group hover:bg-primary rounded-[50px] overflow-hidden">
            <Image src="/gradient/gradient-02.webp" alt="service 2" width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-center">
              <h2 className="text-3xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">Branding &<br /> Visual Identity</h2>
              <p className="text-sm font-light group-hover:text-primary-foreground transition-colors duration-200">Identity that reflects your meaning</p>
            </div>
          </div>

          <div className="aspect-square relative group hover:bg-primary rounded-[50px] overflow-hidden">
            <Image src="/gradient/gradient-03.webp" alt="service 3" width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-center">
              <h2 className="text-3xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">Social Media<br /> Handling</h2>
              <p className="text-sm font-light group-hover:text-primary-foreground transition-colors duration-200">Identity that reflects your meaning</p>
            </div>
          </div>

          <div className="aspect-square relative group hover:bg-primary rounded-[50px] overflow-hidden">
            <Image src="/gradient/gradient-04.webp" alt="service 4" width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-center">
              <h2 className="text-3xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">Video Editing &<br /> Motion Graphics</h2>
              <p className="text-sm font-light group-hover:text-primary-foreground transition-colors duration-200">Identity that reflects your meaning</p>
            </div>
          </div>

          <div className=" col-span-2 flex items-end">
            <div className=" w-2/3 pr-10">
              <h2 className="text-2xl font-light leading-8">We don&apos;t believe in one-size-fits-all solutions. You bring the request – we bring the mix of tools that will actually work.</h2>

              <div className="border border-primary rounded-full w-max my-8 flex items-center justify-center p-1">
                <h2 className="px-6 ">Find the right service</h2>
                <button className="bg-linear-to-r from-purple-600 to-accent text-primary-foreground px-6 py-3 rounded-full ">
                  <FaArrowRight className="text-xl text-primary" />
                </button>
              </div>
            </div>
          </div>

          <div className="aspect-square relative group hover:bg-primary rounded-[50px] overflow-hidden">
            <Image src="/gradient/gradient-05.webp" alt="service 5" width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-center">
              <h2 className="text-3xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">Website Designing<br /> & Development</h2>
              <p className="text-sm font-light group-hover:text-primary-foreground transition-colors duration-200">Identity that reflects your meaning</p>
            </div>
          </div>

          <div className="aspect-square relative group hover:bg-primary rounded-[50px] overflow-hidden">
            <Image src="/gradient/gradient-06.webp" alt="service 6" width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-center">
              <h2 className="text-3xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">3D Modeling<br /> & Animation</h2>
              <p className="text-sm font-light group-hover:text-primary-foreground transition-colors duration-200">Identity that reflects your meaning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 ">

        <div className="bg-primary rounded-[40px] px-8 py-12 md:px-16 md:py-16">
          <div className=" flex justify-end">
            <h2 className="text-[7rem] text-primary-foreground text-end mb-16 leading-[1]">
              We do our best
              <br />
              work with
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-10">

            <div className="flex ">
              <p className="text-[14rem] leading-44 text-secondary  w-[40%]">
                01
              </p>
              <div className="space-y-3 w-[60%]">
                <h3 className="text-5xl text-primary-foreground">
                  Personal brands
                  <br />
                  and influencers
                </h3>
                <p className="text-sm text-muted-foreground leading-4">
                  For experts, creators and public figures looking to define their
                  online identity, craft a strong message, and show up with
                  clarity, style, and direction.
                </p>
              </div>
            </div>

            <div className="flex ">
              <p className="text-[14rem] leading-44 text-secondary w-[40%]">
                02
              </p>
              <div className="space-y-3 w-[60%]">
                <h3 className="text-5xl text-primary-foreground">
                  Small &amp; medium
                  <br />
                  sized businesses
                </h3>
                <p className="text-sm text-muted-foreground leading-4">
                  For experts, creators and public figures looking to define their
                  online identity, craft a strong message, and show up with
                  clarity, style, and direction.
                </p>
              </div>
            </div>

            <div className="flex ">
              <p className="text-[14rem] leading-44 text-secondary w-[40%]">
                03
              </p>
              <div className="space-y-3 w-[60%]">
                <h3 className="text-5xl text-primary-foreground">
                  Founders and
                  <br />
                  startup teams
                </h3>
                <p className="text-sm text-muted-foreground leading-4">
                  For experts, creators and public figures looking to define their
                  online identity, craft a strong message, and show up with
                  clarity, style, and direction.
                </p>
              </div>
            </div>

            <div className="flex ">
              <p className="text-[14rem] leading-44 text-secondary w-[40%]">
                04
              </p>
              <div className="space-y-3 w-[60%]">
                <h3 className="text-5xl text-primary-foreground">
                  Enterprise-level
                  <br />
                  businesses
                </h3>
                <p className="text-sm text-muted-foreground leading-4">
                  For experts, creators and public figures looking to define their
                  online identity, craft a strong message, and show up with
                  clarity, style, and direction.
                </p>
              </div>
            </div>
          </div>
        </div>




      </section>

      <section className="mt-24">
        <div className=" mb-16">
          <h2 className="text-8xl text-primary ">Projects that speak <br />for themselves</h2>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-primary rounded-[40px] aspect-square"></div>
          <div className="bg-primary rounded-[40px] aspect-square"></div>
          <div className="bg-primary rounded-[40px] aspect-square"></div>
          <div className="bg-primary rounded-[40px] aspect-square"></div>
        </div>
      </section>

      <section className="mt-24">
        <div className=" flex justify-end">
          <h2 className="text-8xl text-primary text-end mb-16">Trust that started <br />with the first project </h2>
        </div>

        <div className="relative h-screen ">

          <div className=" bg-[#221822] p-5 rounded-[30px] w-[20%] space-y-4 absolute top-0 left-1/2 -translate-x-1/2 ">
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

          <div className=" bg-[#221822] p-5 rounded-[30px] w-[20%] space-y-4 absolute top-1/2 left-0 -translate-y-1/2 ">
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

          <div className=" bg-[#221822] p-5 rounded-[30px] w-[20%] space-y-4 absolute top-1/2 right-0 -translate-y-1/2 ">
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

      </section>

      <section className="mt-12">
        <div className="mx-24 ">
          <Accordion type="single" collapsible className="grid grid-cols-2 gap-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b-0 overflow-hidden rounded-2xl bg-primary text-primary-foreground"
              >
                <AccordionTrigger className="p-6 text-base font-normal flex items-center justify-between gap-4 hover:no-underline">
                  <span className="pr-4 text-2xl">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm text-primary-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
              
            ))}
          </Accordion>
        </div>
      </section>



    </div>
  );
}
