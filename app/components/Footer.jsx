import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"

const Footer = () => {
  const primaryLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
  ]

  const secondaryLinks = [
    { href: "/cases", label: "Cases" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <footer className="border-t mt-24 bg-primary text-primary-foreground">
      <div className="mx-6 md:mx-16 lg:mx-32 py-10 lg:py-14 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image src="/logoblack.png" alt="Art Beetle Studio" width={500} height={500} className="h-14 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {["F", "X", "In", "Be"].map((item) => (
                <div
                  key={item}
                  className="h-8 w-8 rounded-xl border flex items-center justify-center text-xs"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 Artbeetle Studio. All rights reserved.
          </p>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
            You bring the idea.
            <br />
            We&apos;ll bring the plan.
          </p>
        </div>

        <div className="flex  gap-8">
          <div className="flex gap-10 text-sm">
            <ul className="space-y-2">
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">

          <div className="text-sm">
            <p>patole.pravin94.05@gmail.com</p>
          </div>

          <div className="border rounded-full w-max flex items-center justify-center p-1">
            <button className="px-6 text-sm">Get a consultation</button>
            <div className="bg-linear-to-r from-purple-600 to-accent text-primary-foreground px-4 py-2 rounded-full flex items-center justify-center">
              <FaArrowRight className="text-lg text-primary" />
            </div>
          </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

