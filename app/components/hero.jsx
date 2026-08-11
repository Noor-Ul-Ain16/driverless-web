"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // Common animation variants for text fade-in and slide-up
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="w-full bg-white">
      <section className="min-h-[calc(100vh-68px)] border-b border-zinc-200 px-6">
        <div className="mx-auto flex min-h-[calc(100vh-68px)] max-w-5xl items-center justify-center">
          <motion.div
            className="w-full max-w-3xl pb-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2, duration: 0.6 }}
          >
            {/* Organization Label */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a1d1d] sm:text-xs"
            >
              NATIONAL CENTRE OF ARTIFICIAL INTELLIGENCE – NED UNIVERSITY
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-[3.4rem]"
            >
              We are{" "}
              <span className="text-[#8a1d1d]">
                NCAI Autonomous
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-[11px] leading-5 text-zinc-600 sm:text-sm sm:leading-7.5"
            >
              NCAI Autonomous&apos; mission is to be the home of practical
              self-driving research at NED University — the place where the
              brightest engineering students learn to deploy AI on full-scale
              vehicles, and connect with industry partners looking for their
              next generation of talent. To do this, we&apos;re building
              Pakistan&apos;s first autonomous car and taking it to the road.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              <Link
                href="/about/who-we-are"
                className="inline-flex min-w-[108px] items-center justify-center 
                border border-black bg-black px-5 py-2.5 text-[9px] font-bold uppercase 
                tracking-wide !text-white transition-colors duration-200 hover:border-[#8a1d1d] 
                hover:bg-[#8a1d1d] hover:!text-white"
              >
                Learn More
              </Link>

              <Link
                href="/get-involved/join-our-team"
                className="inline-flex min-w-[108px] items-center justify-center border border-zinc-400 bg-white px-5 py-2.5 text-[9px] font-bold uppercase tracking-wide !text-black transition-colors duration-200 hover:border-black hover:bg-zinc-100 hover:!text-black"
              >
                Join the Team
              </Link>

              <Link
                href="/get-involved/sponsorship-form"
                className="inline-flex min-w-[108px] items-center justify-center border border-zinc-400 bg-white px-5 py-2.5 text-[9px] font-bold uppercase tracking-wide !text-black transition-colors duration-200 hover:border-black hover:bg-zinc-100 hover:!text-black"
              >
                Become a Sponsor
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}