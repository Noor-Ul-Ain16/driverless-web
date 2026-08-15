"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const carDriveIn = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.1 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI2U0ZTRlNyIvPjwvc3ZnPg==";

export default function Home() {
  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-68px)] border-b border-zinc-200 flex items-center justify-center pt-4 pb-12 lg:pt-8 lg:pb-16">
        
        {/* Main Container */}
        <div className="w-full pl-0 pr-6 lg:pl-0 lg:pr-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* Content Section - -mt-6 sm:-mt-8 lg:-mt-12 for a slight upward boost */}
          <motion.div
            className="flex flex-col items-start text-left lg:w-1/2 pl-0 sm:pl-4 lg:pl-6 gap-3 -mt-6 sm:-mt-8 lg:-mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Organization Label */}
            <motion.p
              variants={fadeInUp}
              className="m-0 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#8a1d1d]"
            >
              NATIONAL CENTRE OF ARTIFICIAL INTELLIGENCE – NED UNIVERSITY
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="m-0 max-w-2xl font-sans text-3xl font-extrabold leading-[1.1] tracking-tight text-black sm:text-4xl md:text-5xl"
            >
              We are{" "}
              <span className="text-[#8a1d1d]">
                NCAI Autonomous
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="m-0 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-zinc-600"
            >
              NCAI Autonomous&apos; mission is to be the home of practical
              self-driving research at NED University — the place where the
              brightest engineering students learn to deploy AI on full-scale
              vehicles, and connect with industry partners looking for their
              next generation of talent. To do this, we&apos;re building
              Pakistan&apos;s first autonomous car and taking it to the road.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-2 flex flex-wrap items-center justify-start gap-2.5 sm:flex-row"
            >
              <Link
                href="/about/who-we-are"
                className="inline-flex min-w-[120px] items-center justify-center border border-black bg-black px-4 py-2.5 text-xs font-bold uppercase tracking-wider !text-white transition-colors duration-200 hover:border-[#8a1d1d] hover:bg-[#8a1d1d]" 
              >
                Learn More
              </Link>

              <Link
                href="/get-involved/join-our-team"
                className="inline-flex min-w-[120px] items-center justify-center border border-zinc-400 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors duration-200 hover:border-black hover:bg-zinc-100"
              >
                Join the Team
              </Link>

              <Link
                href="/get-involved/sponsorship-form"
                className="inline-flex min-w-[120px] items-center justify-center border border-zinc-400 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors duration-200 hover:border-black hover:bg-zinc-100"
              >
                Become a Sponsor
              </Link>
            </motion.div>
          </motion.div>

          {/* Car Section */}
          <motion.div 
            variants={carDriveIn}
            initial="hidden"
            animate="visible"
            className="relative flex w-full justify-center lg:w-1/2 lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[580px]">
              {/* Ground Shadow */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/20 blur-lg rounded-[100%]" />
              
              <div className="relative z-10 drop-shadow-xl">
                <Image
                  src="/image.webp"
                  alt="NCAI Autonomous Vehicle Project Hero Image"
                  width={1200}
                  height={800}
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}