export default function ContactPage() {
  return (
    <section className="bg-black min-h-screen pt-24 ">
      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-purple-600 rounded-full blur-[120px] opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none border border-primary" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-accent rounded-full blur-[120px] opacity-10 translate-x-1/2 translate-y-1/2 pointer-events-none border border-primary" />

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white">Contact Us</h1>
          <div className="h-1 w-24 bg-white mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-background border border-primary p-6 md:p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-secondary mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-xl bg-black/60 border border-primary/40 text-white px-4 py-3 focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-secondary mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl bg-black/60 border border-primary/40 text-white px-4 py-3 focus:outline-none focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-secondary mb-2">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl bg-black/60 border border-primary/40 text-white px-4 py-3 focus:outline-none focus:border-primary"
                  placeholder="+91 00000 00000"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm text-secondary mb-2">Service</label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl bg-black/60 border border-primary/40 text-white px-4 py-3 focus:outline-none focus:border-primary"
                  defaultValue=""
                >
                  <option value="" className="bg-background">Select a service</option>
                  <option value="logo" className="bg-background">Logo Design & Animation</option>
                  <option value="branding" className="bg-background">Branding & Visual Identity</option>
                  <option value="social" className="bg-background">Social Media Handling</option>
                  <option value="video" className="bg-background">Video Editing & Motion Graphics</option>
                  <option value="website" className="bg-background">Website Designing & Development</option>
                  <option value="3d" className="bg-background">3D Modeling & Animation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-xl bg-black/60 border border-primary/40 text-white px-4 py-3 focus:outline-none focus:border-primary resize-none"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-3xl bg-background border border-primary p-6 md:p-8 flex flex-col gap-6">
            <div>
              <h2 className="text-xl text-white mb-2">Studio</h2>
              <p className="text-secondary">Art Beetle Studio</p>
              <p className="text-secondary">Bengaluru, India</p>
            </div>
            <div>
              <h2 className="text-xl text-white mb-2">Contact</h2>
              <p className="text-secondary">hello@artbeetle.studio</p>
              <p className="text-secondary">+91 00000 00000</p>
            </div>
            <div className="mt-auto">
              <div className="h-px w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-purple-600 to-accent rounded-full w-2/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
