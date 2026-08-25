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
  // Set to true so the video is active by default
  const [showVideo, setShowVideo] = useState(true);

  return (
    <main className="w-full bg-white overflow-hidden">
      <section className="relative min-h-[calc(100vh-68px)] border-b border-zinc-200 flex flex-col justify-center px-0">
        {/* Full Hero Card Container */}
        <div className="w-full max-w-none relative overflow-hidden min-h-[550px] flex items-center">

          {/* Background Media with Dark Vignette Overlay */}
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
              ) : (
                /* 
                <motion.div
                  key="image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full bg-[length:900px] bg-no-repeat bg-[position:95%_center] absolute inset-0" style={{ backgroundImage: "url('/image.webp')" }}
                />
                */
                null  /* remove when car image as background also needed */
              )}
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 pointer-events-none" />
          </div>

          {/* Dynamic Toggle Arrow Button (Right Side) */}
          {/* 
          <button
            onClick={() => setShowVideo((prev) => !prev)}
            aria-label={showVideo ? "Show Background Image" : "Play Background Video"}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-black/50 hover:bg-[#8a1d1d] text-white rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 group shadow-lg cursor-pointer"
          >
            <span className="text-xl sm:text-2xl font-black transition-transform duration-300 group-hover:translate-x-0.5">
              {showVideo ? "‹" : "›"}
            </span>
          </button>
          */}

          {/* Foreground Text Overlay */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-2xl">
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
                className="mt-10 font-sans text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl"
              >
                We are{" "}
                <span className="text-[#e05252]">
                  NCAI Autonomous
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xs sm:text-sm leading-relaxed text-zinc-300"
              >
                NCAI Autonomous's aim is to be the home of practical
                self-driving research at NED University — NCAI Autonomous bridges academic
                AI engineering with industrial innovation. We empower bright
                minds to deploy autonomous software on full-scale vehicles as
                we build Pakistan's first self-driving car.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-2 flex flex-wrap items-center gap-2.5 sm:flex-row"
              >
                <Link
                  href="/about/who-we-are"
                  className="inline-flex min-w-[120px] items-center justify-center border border-[#8a1d1d] bg-[#8a1d1d] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-red-700"
                >
                  Discover More
                </Link>

                <Link
                  href="/get-involved/join-our-team"
                  className="inline-flex min-w-[120px] items-center justify-center border border-white/30 bg-black/40 backdrop-blur-md px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-black"
                >
                  Let's Work Together
                </Link>

                <Link
                  href="/get-involved/sponsorship-form"
                  className="inline-flex min-w-[120px] items-center justify-center border border-white/30 bg-black/40 backdrop-blur-md px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-black"
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