"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
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

export default function Home() {
  const [showVideo] = useState(true);

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Min-h-screen hero section */}
      <section className="relative min-h-screen border-b border-zinc-200 flex flex-col justify-center px-0">
        <div className="w-full max-w-none relative overflow-hidden min-h-screen flex items-center pt-20">

          {/* Background Video starting at top screen boundary */}
          <div className="absolute inset-0 z-0 bg-black">
            <AnimatePresence mode="wait">
              {showVideo ? (
                <motion.video
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  src="/av-website-hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover absolute inset-0"
                />
              ) : null}
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 pointer-events-none" />
          </div>

          {/* Foreground Text Overlay */}
          <div className="zoom-responsive relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
            <motion.div
              className="flex flex-col items-start text-left gap-5 text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <motion.p
                variants={fadeInUp}
                className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#e05252]"
              >
                NATIONAL CENTRE OF ARTIFICIAL INTELLIGENCE – NED UNIVERSITY
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="mt-4 font-sans text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                NCAI - {" "}
                <span className="text-[#e05252] text-[45px]">
                  Autonomous Intelligence. Driverless Innovation.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xs sm:text-sm leading-relaxed text-zinc-300"
              >
                NCAI Autonomous's aim is to be the home of practical self-driving research at NED University — NCAI Autonomous bridges academic AI engineering with industrial innovation. We empower bright minds to deploy autonomous software on full-scale vehicles as we build Pakistan's first self-driving car.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-2 flex w-full flex-row flex-nowrap items-stretch gap-2 sm:w-auto sm:flex-wrap sm:items-center sm:gap-2.5"
              >
                <Link
                  href="/about/meet-the-team"
                  className="inline-flex flex-1 items-center justify-center border border-[#8a1d1d] bg-[#8a1d1d] px-1.5 py-2 text-center text-xs font-bold uppercase leading-tight tracking-normal text-white sm:tracking-wider transition-all duration-200 hover:bg-red-700 sm:flex-initial sm:min-w-[120px] sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  Discover More
                </Link>

                <Link
                  href="/be-part-of-it/contact-join-our-team"
                  className="inline-flex flex-1 items-center justify-center border border-white/30 bg-black/40 px-1.5 py-2 text-center text-xs font-bold uppercase leading-tight tracking-normal text-white sm:tracking-wider backdrop-blur-md transition-all duration-200 hover:bg-black sm:flex-initial sm:min-w-[120px] sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  Let's Work Together
                </Link>

                <Link
                  href="/be-part-of-it/sponsorship-form"
                  className="inline-flex flex-1 items-center justify-center border border-white/30 bg-black/40 px-1.5 py-2 text-center text-xs font-bold uppercase leading-tight tracking-normal text-white sm:tracking-wider backdrop-blur-md transition-all duration-200 hover:bg-black sm:flex-initial sm:min-w-[120px] sm:px-4 sm:py-2.5 sm:text-xs"
                >
                  Become a Sponsor
                </Link>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}