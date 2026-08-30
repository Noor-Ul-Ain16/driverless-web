'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function TechnologySection() {
  const pillars = [
    {
      title: 'Multi-sensor fusion',
      label: 'Sense',
      description:
        'LiDAR, radar, and camera streams are fused into a single environmental model, giving the vehicle redundant, all-weather awareness of everything around it.',
    },
    {
      title: 'Neural navigation',
      label: 'Decide',
      description:
        'A deep-learning stack handles path prediction and split-second decisions in dense, unstructured traffic — trained and validated in simulation before every road test.',
    },
    {
      title: 'Safety-rated control',
      label: 'Act',
      description:
        'A fail-operational control architecture, aligned with ASIL-D principles, keeps the vehicle in a safe state even when a component underperforms.',
    },
  ]

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Limited to 3 images with distinct default widths (50%, 30%, 20%)
  const mediaItems = [
    { 
      src: '/AV interior (Autonomous Vehicle Interior).png', 
      alt: 'Autonomous vehicle interior', 
      initialWidth: '20%' 
    },
    { 
      src: '/Live Perception.png', 
      alt: 'Live perception', 
      initialWidth: '60%' 
    },
    {
      src: '/GPS and Localization.jpeg',
      alt: 'GPS and Localization',
      initialWidth: '20%'
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Dynamic width calculation on hover
  const getWidth = (idx) => {
    if (hoveredIndex === null) {
      return mediaItems[idx].initialWidth // Different default sizes before hover
    }
    if (hoveredIndex === idx) {
      return '60%' // Active image expands to 60%
    }
    return '20%' // Inactive images contract to 20%
  }

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20 overflow-hidden">
      <div className="zoom-responsive mx-auto max-w-6xl space-y-16">

        {/* Top Header Section */}
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15, duration: 0.5 }}
        >
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#a82d27]"
          >
            Technology
          </motion.p>

          <motion.h2 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-3xl font-black uppercase tracking-tight text-black md:text-5xl leading-tight"
          >
            Built on three research pillars
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-sm text-zinc-500 md:text-base"
          >
            Everything the vehicle does traces back to how it senses, decides, and moves.{' '}
            <Link
              href="/technology/overview_and_stack"
              style={{ color: '#8a1d1d' }}
              className="font-bold hover:opacity-80 inline-flex items-center gap-1"
            >
              Full technology overview <span aria-hidden="true">→</span>
            </Link>
          </motion.p>
        </motion.div>

        {/* 3 Pillars Grid Section */}
        <motion.div 
          className="grid grid-cols-1 divide-y divide-zinc-200 border border-zinc-200 md:grid-cols-3 md:divide-x md:divide-y-0 bg-white"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar) => (
            <motion.article 
              key={pillar.label} 
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="p-8 text-left flex flex-col justify-between"
            >
              <div>
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#a82d27]">
                  {pillar.label}
                </p>

                <h3 className="text-xl font-bold text-black tracking-tight mb-4">
                  {pillar.title}
                </h3>

                <p className="text-xs leading-relaxed text-zinc-500">
                  {pillar.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* 3 Joined Images Layout with Asymmetric Sizes & Hover Sliding */}
        <div className="flex w-full overflow-hidden border border-zinc-200 bg-zinc-100 h-[300px]">
          {mediaItems.map((media, idx) => (
            <motion.div
              key={idx}
              className="relative h-full cursor-pointer overflow-hidden border-r border-zinc-200 last:border-r-0"
              initial={{ width: media.initialWidth }}
              animate={{ width: getWidth(idx) }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 24,
              }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex((prev) => (prev === idx ? null : idx))}
            >
              <Image
                src={media.src}
                alt={media.alt}
                fill
                unoptimized
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}