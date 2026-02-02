 "use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/cases', label: 'Cases' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="sticky top-0 z-50 border-b shadow-accent ">
        {/* Desktop & Mobile Header Bar */}
        <div className="flex justify-between bg-background items-center px-6 md:px-16 lg:px-32 py-4 ">
            {/* Logo */}
            <div className="z-50">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={200} height={200} className="w-32 md:w-40 lg:w-52" />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
                <nav>
                    <ul className='flex justify-between items-center gap-2 lg:gap-6 border border-primary rounded-full p-1'>
                        {navItems.map((item) => {
                          const isActive = pathname === item.href

                          return (
                            <li
                              key={item.href}
                              className={`text-center px-4 lg:px-6 py-2 cursor-pointer rounded-full transition-colors text-sm lg:text-base ${
                                isActive
                                  ? 'bg-primary text-primary-foreground'
                                  : 'text-secondary hover:text-primary'
                              }`}
                            >
                              <Link href={item.href}>{item.label}</Link>
                            </li>
                          )
                        })}
                    </ul>
                </nav>
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
                <Link href="/contact" className='bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm lg:text-base'>Contact Us</Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden z-50">
                <button 
                    onClick={toggleMenu}
                    className="p-2 text-primary focus:outline-none"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>
        </div>
        
        {/* Mobile Menu Shutter */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "100vh" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed top-0 left-0 w-full bg-background z-40 overflow-hidden flex flex-col pt-24"
                >
                    <div className="absolute top-0 left-0 w-[80vw] h-[80vw] bg-purple-600 rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none border border-primary" />
                    <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] bg-accent rounded-full blur-[100px] opacity-20 translate-x-1/2 translate-y-1/2 pointer-events-none border border-primary" />

                    <div className="flex flex-col items-center gap-8 px-6 relative z-10">
                        <nav className="w-full">
                            <ul className="flex flex-col items-center gap-6">
                                {navItems.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <li key={item.href} className="w-full text-center">
                                            <Link 
                                                href={item.href} 
                                                onClick={() => setIsOpen(false)}
                                                className={`text-2xl font-medium block py-2 ${
                                                    isActive ? 'text-primary' : 'text-secondary'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                        
                        <div className="mt-4">
                            <Link 
                                href="/contact" 
                                onClick={() => setIsOpen(false)}
                                className='bg-primary text-primary-foreground px-8 py-3 rounded-full text-xl inline-block'
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default NavBar
