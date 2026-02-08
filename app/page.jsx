
import { HeroSection } from "@/components/home/HeroSection"
import { ProcessSection } from "@/components/home/ProcessSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { ProjectsSection } from "@/components/home/ProjectsSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { FaqSection } from "@/components/home/FaqSection"

export const metadata = {
  title: "Art Beetle Studio | Digital Experiences & Branding",
  description: "Art Beetle Studio functions as your strategic co-pilot to transform complex business challenges into seamless digital experiences. Services include Logo Design, Branding, Web Development, and more.",
  openGraph: {
    title: "Art Beetle Studio | Digital Experiences & Branding",
    description: "Transforming complex business challenges into seamless digital experiences.",
    url: "https://artbeetlestudio.com",
    siteName: "Art Beetle Studio",
    images: [
      {
        url: "/beetle.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
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

  return (
    <div className=" mx-auto px-6 md:px-16 lg:px-32 ">
      <HeroSection heroBoxes={heroBoxes} />
      <ProcessSection numberCards={numberCards} />
      <ServicesSection services={services} />
      <ProjectsSection />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  )
}
