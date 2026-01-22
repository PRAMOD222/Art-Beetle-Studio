 "use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/cases', label: 'Cases' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <div>
        <div className="flex justify-between items-center mx-6 md:mx-16 lg:mx-32 my-14">
            <div>
                <Image src="/logo.png" alt="logo" width={200} height={200} />
            </div>
            <div>
                <nav>
                    <ul className='flex justify-between items-center gap-6 border border-primary rounded-full p-1'>
                        {navItems.map((item) => {
                          const isActive = pathname === item.href

                          return (
                            <li
                              key={item.href}
                              className={`text-center px-6 py-2 cursor-pointer rounded-full ${
                                isActive
                                  ? 'bg-primary text-primary-foreground'
                                  : 'text-secondary'
                              }`}
                            >
                              <Link href={item.href}>{item.label}</Link>
                            </li>
                          )
                        })}
                    </ul>
                </nav>
            </div>
            <div>
                <Link href="/contact" className='bg-primary text-primary-foreground px-6 py-2 rounded-full'>Contact Us</Link>
            </div>
        </div>
        
    </div>
  )
}

export default NavBar
