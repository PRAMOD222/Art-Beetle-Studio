import { Puzzle, Lightbulb, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto py-12 md:py-20 space-y-24 mt-10">
      
      {/* About Us Section */}
      <section className="space-y-8 mx-6 md:mx-auto md:max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-normal text-primary border-b-2 border-primary w-max  pb-2">
          About us
        </h1>
        <div className="space-y-6 text-lg text-primary leading-7">
          <p>
            Art Beetle Studio is a full-service creative agency dedicated to
            building bold, meaningful, and visually impactful brands. We transform
            ideas into powerful visual identities through a blend of strategy,
            creativity, and technology.
          </p>
          <p>
            Our services include branding, logo design, video editing, motion
            graphics, 3D modeling, and animation, enabling us to deliver
            end-to-end creative solutions tailored to today&apos;s fast-moving
            digital world. From concept to execution, every project is crafted
            with precision and purpose.
          </p>
          <p>
            We collaborate with personal brands and influencers, small and
            medium-sized businesses, founders and startup teams, as well as
            enterprise-level organizations. Regardless of scale, we focus on
            understanding each client&apos;s vision and translating it into
            visuals that resonate, engage, and perform.
          </p>
          <p>
            At Art Beetle Studio, creativity meets structure. We don&apos;t just
            design visuals. We create brand experiences that stand out, scale
            with growth, and leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Our Aim Section */}
      <section className="space-y-8 mx-6 md:mx-auto md:max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-normal text-primary border-b-2 border-primary w-max pb-2">
          Our Aim
        </h2>
        <p className="text-lg text-primary leading-7">
          To empower brands with impactful visual identities and creative
          solutions that drive growth, recognition, and long-term value.
        </p>
      </section>

      {/* Our Goal Section */}
      <section className="space-y-12 mx-6 md:mx-auto md:max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-normal text-primary border-b-2 border-primary w-max pb-2 ">
          Our Goal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
          {/* Goal 1 */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="relative">
              <Image src="/icons-01.svg" width={100} height={100} alt="Build Distinctive Brands" className="w-24 h-24" />
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-accent opacity-50 blur-xl rounded-full -z-10"></div> */}
            </div>
            <h3 className="text-2xl font-semibold text-primary">
              Build Distinctive Brands
            </h3>
            <p className="text-primary text-sm max-w-xs">
              Create strong, memorable brand identities that stand out and
              connect with the right audience.
            </p>
          </div>

          {/* Goal 2 */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="relative">
              <Image src="/icons-02.svg" width={100} height={100} alt="Deliver End-to-End Creative Solutions" className="w-24 h-24" />
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-accent opacity-50 blur-xl rounded-full -z-10"></div> */}
            </div>
            <h3 className="text-2xl font-semibold text-primary">
              Deliver End-to-End <br /> Creative Solutions
            </h3>
            <p className="text-primary text-sm max-w-xs">
              Offer complete creative services—from branding and design to
              motion, video, and 3D—with consistent quality.
            </p>
          </div>

          {/* Goal 3 */}
          <div className="flex flex-col items-center text-center space-y-1">
            <div className="relative">
              <Image src="/icons-03.svg" width={100} height={100} alt="Grow With Our Clients" className="w-24 h-24" />
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-accent opacity-50 blur-xl rounded-full -z-10"></div> */}
            </div>
            <h3 className="text-2xl font-semibold text-primary">
              Grow With Our Clients
            </h3>
            <p className="text-primary text-sm max-w-xs">
              Support personal brands, startups, businesses, and enterprises
              with scalable, results-driven creative partnerships.
            </p>
          </div>
        </div>
        
      </section>

    </div>
  );
}

