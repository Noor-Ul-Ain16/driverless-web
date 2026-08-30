'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function NewsLink() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20 overflow-hidden">
      <div className="zoom-responsive mx-auto max-w-6xl">

        {/* Top Centered Header */}
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15, duration: 0.5 }}
        >
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]"
          >
            NEWS STUDIO
          </motion.p>

          <motion.h2 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-3 text-4xl font-extrabold tracking-tight text-black md:text-5xl"
          >
            IN THE PRESS
          </motion.h2>

          <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
            <Link
              href="/media/news"
              style={{ color: '#8a1d1d' }}
              className="mt-10 font-bold hover:opacity-80 inline-flex items-center gap-1"
            >
              Full News Studio overview
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured Story Grid */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">

          {/* Left Text Content - Slides in from Left */}
          <motion.div 
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a1d1d]">
              FEATURED STORY
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-black md:text-3xl">
              The People&apos;s Autonomous Revolution
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-zinc-500 md:text-base">
              Karachi engineering students take a driverless car to Pakistan&apos;s roads for the first
              time — the story behind NCAI&apos;s autonomous vehicle program at NED University.
            </p>

            <p className="mt-8 text-xs font-bold uppercase tracking-wider text-zinc-400">
              UPDATED RECENTLY · COMMUNITY COVERAGE
            </p>
          </motion.div>

          {/* Right Image Container - Slides in from Right */}
          <motion.div 
            className="relative min-h-[300px] w-full overflow-hidden md:min-h-[340px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/The People's Autonomous Revolution.png"
              alt="The People's Autonomous Revolution - NCAI NED University"
              fill
              className="object-contain transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

        </div>

        {/* Subtle Bottom Divider */}
        <div className="mt-16 border-b border-zinc-200 md:mt-20" />

      </div>

      <div className="zoom-responsive mx-auto max-w-6xl mt-12 md:mt-16">

        {/* Clickable Red Card Container with Scale/Fade-up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/about/meet-the-team" 
            className="group flex flex-col justify-between gap-6 bg-[#8a1d1d] p-8 text-white transition-all duration-300 hover:bg-[#721818] hover:shadow-xl md:flex-row md:items-center md:p-12"
          >
            {/* Left Text Block */}
            <div className="max-w-2xl">
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-4xl">
                Meet the team
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-100 md:text-base">
                Researchers and engineers at NCAI, NED University, driving the program forward.
              </p>
            </div>

            {/* Right Arrow Icon & Action Badge */}
            <div className="flex items-center gap-3 self-start text-sm font-bold uppercase tracking-wider text-white md:self-center">
              <span>Explore Team</span>
              <span
                aria-hidden="true"
                className="text-2xl transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </div>
          </Link>
        </motion.div>

      </div>

    </section>
  )
}