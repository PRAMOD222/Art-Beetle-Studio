"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function ContactDialog({ children }) {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here (e.g., API call)
    console.log("Form submitted")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#191921] text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Get in Touch</DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              required
              className="flex h-10 w-full rounded-md border border-gray-700 bg-black/20 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="flex h-10 w-full rounded-md border border-gray-700 bg-black/20 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="name@example.com"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="flex h-10 w-full rounded-md border border-gray-700 bg-black/20 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="service" className="text-sm font-medium">
              Service
            </label>
            <select
              id="service"
              className="flex h-10 w-full rounded-md border border-gray-700 bg-black/20 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="" className="bg-[#191921]">Select a service</option>
              <option value="logo" className="bg-[#191921]">Logo Design & Animation</option>
              <option value="branding" className="bg-[#191921]">Branding & Visual Identity</option>
              <option value="social" className="bg-[#191921]">Social Media Handling</option>
              <option value="video" className="bg-[#191921]">Video Editing & Motion Graphics</option>
              <option value="website" className="bg-[#191921]">Website Designing & Development</option>
              <option value="3d" className="bg-[#191921]">3D Modeling & Animation</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              required
              className="flex min-h-[80px] w-full rounded-md border border-gray-700 bg-black/20 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Tell us about your project..."
            />
          </div>
          <div className="flex justify-end mt-4">
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
