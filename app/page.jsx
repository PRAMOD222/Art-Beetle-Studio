"use client"

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactDialog } from "@/components/contact-dialog"


export default function Home() {
  const [carouselApi, setCarouselApi] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [serviceCarouselApi, setServiceCarouselApi] = useState(null)
  const [serviceSelectedIndex, setServiceSelectedIndex] = useState(0)
  const [projectCarouselApi, setProjectCarouselApi] = useState(null)
  const [projectSelectedIndex, setProjectSelectedIndex] = useState(0)
  const [faqCarouselApi, setFaqCarouselApi] = useState(null)
  const [faqSelectedIndex, setFaqSelectedIndex] = useState(0)
  const [testimonialCarouselApi, setTestimonialCarouselApi] = useState(null)
  const [testimonialSelectedIndex, setTestimonialSelectedIndex] = useState(0)

  const services = [
    {
      img: "/gradient/gradient-01.webp",
      title: <>Logo Design &<br /> Logo Animation</>,
      desc: "Identity that reflects your meaning"
    },
    {
      img: "/gradient/gradient-02.webp",
      title: <>Branding &<br /> Visual Identity</>,
      desc: "Identity that reflects your meaning"
    },
    {
      img: "/gradient/gradient-03.webp",
      title: <>Social Media<br /> Handling</>,
      desc: "Identity that reflects your meaning"
    },
    {
      img: "/gradient/gradient-04.webp",
      title: <>Video Editing &<br /> Motion Graphics</>,
      desc: "Identity that reflects your meaning"
    },
    {
      img: "/gradient/gradient-05.webp",
      title: <>Website Designing<br /> & Development</>,
      desc: "Identity that reflects your meaning"
    },
    {
      img: "/gradient/gradient-06.webp",
      title: <>3D Modeling<br /> & Animation</>,
      desc: "Identity that reflects your meaning"
    },
  ]

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

  const testimonials = [
    {
      role: "Graphic Designer",
      name: "Pravin Patole",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."
    },
    {
      role: "Graphic Designer",
      name: "Pravin Patole",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."
    },
    {
      role: "Graphic Designer",
      name: "Pravin Patole",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."
    },
    {
      role: "Graphic Designer",
      name: "Pravin Patole",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."
    },
    {
      role: "Graphic Designer",
      name: "Pravin Patole",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."
    },
  ]

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

  useEffect(() => {
    if (!faqCarouselApi) return

    const onSelect = () => {
      setFaqSelectedIndex(faqCarouselApi.selectedScrollSnap())
    }

    faqCarouselApi.on("select", onSelect)
    faqCarouselApi.on("reInit", onSelect)
    onSelect()

    return () => {
      faqCarouselApi.off("select", onSelect)
      faqCarouselApi.off("reInit", onSelect)
    }
  }, [faqCarouselApi])

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
    <div className="px-6 md:px-16 lg:px-32 ">

      <section className=" relative py-10 lg:py-0">
        <Image className="w-[80%] md:w-[60%] lg:w-[40%] absolute top-[55%] left-[50%] lg:left-[60%] -translate-x-1/2 -translate-y-1/2 opacity-35 -z-20" src="/beetle.svg" alt="hero" width={1000} height={1000} />
        <div className="w-[80%] md:w-[60%] lg:w-[40%] aspect-square absolute top-[55%] left-[50%] lg:left-[60%] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] -z-10 rounded-full bg-blue-500 "></div>

        <div className="mt-10 lg:mt-14 z-30 w-full md:w-4/5 lg:w-2/3 2xl:w-1/2 ">
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-left">Artistry Meets <br /> Brand Logic</h2>
          <div className="border border-primary rounded-full w-max  my-8 flex items-center justify-center p-1">
            <h2 className="px-6 text-sm md:text-base">Get a Free Consultation</h2>
            <ContactDialog>
              <button className="cursor-pointer bg-linear-to-r from-purple-600 to-accent text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-full ">
                <FaArrowRight className="text-lg md:text-xl text-primary" />
              </button>
            </ContactDialog>
          </div>

          <div className="boxes flex flex-col sm:flex-row gap-4 w-full mt-16 lg:mt-32  md:w-4/5 xl:w-2/3 2xl:w-4/5">
            {heroBoxes.map((box, index) => (
              <div className="bg-primary text-primary-foreground rounded-[30px] lg:rounded-[40px] p-6 w-2/3 aspect-square" key={index}>
                <h2 className="text-4xl md:text-5xl text-accent text-end">{box.value}</h2>
                <h2 className="text-xl md:text-2xl text-end">{box.title}</h2>
                <p className="mt-4 leading-5 text-sm md:text-base">{box.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 lg:mb-12"> Art Beetle Studio moves beyond the brief, functioning as your{" "} <span className="text-accent">strategic co-pilot</span> to transform complex business challenges into seamless{" "} <span className="text-accent">digital experiences.</span> </h2>
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
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
              <CarouselContent>
                {numberCards.map((card, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="bg-[#191921] aspect-square rounded-[30px] lg:rounded-[40px] p-6 lg:p-8 flex flex-col justify-between group hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
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
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </Carousel>
        </div>
      </section>

      <section className="mt-16 lg:mt-24">
        <div className="text">
          <h2 className="text-4xl md:text-6xl lg:text-8xl "> We don&apos;t sell packages. <br />We find <span className="text-accent">the right tools to <br /> reach your goals</span></h2>
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="mt-10 lg:hidden">
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
                      <h2 className="text-2xl font-medium mb-2 text-accent group-hover:text-primary-foreground transition-colors duration-200">{service.title}</h2>
                      <p className="text-xs font-light group-hover:text-primary-foreground transition-colors duration-200">{service.desc}</p>
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === serviceSelectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>

          <div className="mt-8">
            <h2 className="text-xl font-light leading-8">We don&apos;t believe in one-size-fits-all solutions. You bring the request – we bring the mix of tools that will actually work.</h2>
            <div className="border border-primary rounded-full w-max my-8 flex items-center justify-center p-1">
              <h2 className="px-6 text-sm md:text-base">Find the right service</h2>
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
              <Image src={service.img} alt={`service ${index + 1}`} width={500} height={500} className="h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-200" />
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
                <h2 className="px-6 text-base">Find the right service</h2>
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

      <section className="mt-16 lg:mt-24">

        <div className="bg-primary rounded-[30px] lg:rounded-[40px] px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
          <div className="flex justify-start lg:justify-end">
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] text-primary-foreground text-left lg:text-end mb-10 lg:mb-16 leading-[1.1] lg:leading-[1]">
              We do our best
              <br />
              work with
            </h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">

            <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
              <p className="text-6xl sm:text-8xl lg:text-[13rem] leading-none sm:leading-44 text-secondary w-auto sm:w-[45%]">
                01
              </p>
              <div className="space-y-3 w-full sm:w-[60%]">
                <h3 className="text-3xl md:text-4xl text-primary-foreground">
                  Personal brands
                  <br />
                  and influencers
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-4">
                  For experts, creators and public figures looking to define their
                  online identity, craft a strong message, and show up with
                  clarity, style, and direction.
                </p>
              </div>
            </div>

            <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
              <p className="text-6xl sm:text-8xl lg:text-[13rem] leading-none sm:leading-44 text-secondary w-auto sm:w-[45%]">
                02
              </p>
              <div className="space-y-3 w-full sm:w-[60%]">
                <h3 className="text-3xl md:text-4xl text-primary-foreground">
                  Small &amp; medium
                  <br />
                  sized businesses
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-4">
                  For experts, creators and public figures looking to define their
                  online identity, craft a strong message, and show up with
                  clarity, style, and direction.
                </p>
              </div>
            </div>

            <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
              <p className="text-6xl sm:text-8xl lg:text-[13rem] leading-none sm:leading-44 text-secondary w-auto sm:w-[45%]">
                03
              </p>
              <div className="space-y-3 w-full sm:w-[60%]">
                <h3 className="text-3xl md:text-4xl text-primary-foreground">
                  Founders and
                  <br />
                  startup teams
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-4">
                  For experts, creators and public figures looking to define their
                  online identity, craft a strong message, and show up with
                  clarity, style, and direction.
                </p>
              </div>
            </div>

            <div className="flex sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
              <p className="text-6xl sm:text-8xl lg:text-[13rem] leading-none sm:leading-44 text-secondary w-auto sm:w-[45%]">
                04
              </p>
              <div className="space-y-3 w-full sm:w-[60%]">
                <h3 className="text-3xl md:text-4xl text-primary-foreground">
                  Enterprise-level
                  <br />
                  businesses
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-4">
                  For experts, creators and public figures looking to define their
                  online identity, craft a strong message, and show up with
                  clarity, style, and direction.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="mt-16 lg:mt-24">
        <div className="mb-10 lg:mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-primary text-left lg:text-left">Projects that speak <br />for themselves</h2>
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === projectSelectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="bg-primary rounded-[40px] aspect-square"></div>
          ))}
        </div>
      </section>

      <section className="mt-16 lg:mt-24">
        <div className="flex justify-start lg:justify-end">
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-primary text-left lg:text-end mb-10 lg:mb-16">Trust that started <br />with the first project </h2>
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
        <div className="md:hidden mt-10">
          <Carousel
            opts={{ align: "start" }}
            setApi={setTestimonialCarouselApi}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full">
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
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === testimonialSelectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
          
          <div className="mt-12 space-y-2">
            <h2 className="text-5xl text-primary text-start">You asked</h2>
            <h2 className="text-5xl text-primary text-end"> We answered</h2>
          </div>
        </div>

      </section>

      <section className="mt-12">
        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden">
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
            <div className="flex justify-center gap-2 mt-6">
              {[0, 1].map((_, index) => (
                <button
                  key={index}
                  onClick={() => faqCarouselApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === faqSelectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
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

    </div>
  );
}
