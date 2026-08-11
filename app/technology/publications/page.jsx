'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PublicationsPage() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har publication card ek ke baad ek animated hoga
      },
    },
  }

  return (
    <main id="publications" className="mx-auto max-w-4xl px-6 py-16 text-zinc-900 overflow-hidden">
      {/* Page Title */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold uppercase tracking-wide mb-10 border-b border-zinc-200 pb-4"
      >
        Publications
      </motion.h1>

      {/* Journal Publications */}
      <section className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-[#8a1d1d] mb-6"
        >
          Journal Publications
        </motion.h2>

        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1 */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-sm flex flex-col sm:flex-row gap-6 items-start transition-all duration-300"
          >
            <div className="w-full sm:w-40 h-28 relative flex-shrink-0 bg-zinc-200 rounded overflow-hidden">
              <Image 
                src="/images/pub1.jpg" 
                alt="Advancing Road Safety publication thumbnail" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-2">
                Advancing Road Safety: A Comprehensive Evaluation of Object Detection Models for Commercial Driver Monitoring Systems.
              </h3>
              <p className="text-xs text-zinc-600 mb-3">
                Huma Zia, Imtiaz ul Hassan, Muhammad Khurram, Nicholas Harris, Fatima Shah and Nimra Imran. <em>Future Transp.</em> 2025, 5(1), 2.
              </p>
              <a
                href="https://doi.org/10.3390/futuretransp5010002"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#8a1d1d] hover:underline inline-flex items-center gap-1"
              >
                DOI: 10.3390/futuretransp5010002 (Open Access) →
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-sm flex flex-col sm:flex-row gap-6 items-start transition-all duration-300"
          >
            <div className="w-full sm:w-40 h-28 relative flex-shrink-0 bg-zinc-200 rounded overflow-hidden">
              <Image 
                src="/images/pub2.jpg" 
                alt="Predict Steering Angle publication thumbnail" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-2">
                A Lightweight Convolutional Neural Network to Predict Steering Angle for Autonomous Driving Using CARLA Simulator
              </h3>
              <p className="text-xs text-zinc-600 mb-1">
                Imtiaz Ul Hassan; Zia, Huma; Fatima, H Sundus; Yusuf, Syed Adnan; Muhammad Khurram. <em>Modelling and Simulation in Engineering</em>; New York Vol. 2022, (2022).
              </p>
              <p className="text-xs text-zinc-500 mb-3">Publisher: Wiley Online Library</p>
              <a
                href="https://doi.org/10.1155/2022/5716820"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#8a1d1d] hover:underline inline-flex items-center gap-1"
              >
                DOI: 10.1155/2022/5716820 →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Conference Proceedings */}
      <section>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xl font-bold text-[#8a1d1d] mb-6"
        >
          Conference Proceedings
        </motion.h2>

        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 3 */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-sm flex flex-col sm:flex-row gap-6 items-start
             transition-all duration-300"
          >
            <div className="w-full sm:w-40 h-28 relative flex-shrink-0 bg-zinc-200 rounded overflow-hidden">
              <Image 
                src="/images/pub3.jpg"
                alt="Autonomous vehicle navigation publication thumbnail" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-2">
                Autonomous vehicle navigation using high-definition maps through CARLA-ROS simulator bridge
              </h3>
              <p className="text-xs text-zinc-600 mb-1">
                H. S. Fatima, A. N. Abbas, F. Bawany, H. Zia, S. A. Yusuf, M. Khurram. <em>Journal of Physics: Conference Series</em>, Vol. 2330, 012016 (2022).
              </p>
              <p className="text-xs text-zinc-500 mb-3">Publisher: IOP Publishing - SIUSAI-2022</p>
              <a
                href="https://doi.org/10.1088/1742-6596/2330/1/012016"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#8a1d1d] hover:underline inline-flex items-center gap-1"
              >
                DOI: 10.1088/1742-6596/2330/1/012016 (Open Access) →
              </a>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-sm flex flex-col sm:flex-row gap-6 items-start
             transition-all duration-300"
          >
            <div className="w-full sm:w-40 h-28 relative flex-shrink-0 bg-zinc-200 rounded overflow-hidden">
              <Image 
                src="/images/pub4.jpg"
                alt="Out-Cabin ADAS publication thumbnail" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base mb-2">
                An Integrated Vision-Based Automated Detection and Monitoring System for Out-Cabin ADAS in Intelligent Transportation Systems
              </h3>
              <p className="text-xs text-zinc-600 mb-1">
                Aleema Saleem; Fatima Saud; Inzamam Ul Haq; Muhammad Khurram. <em>2026 International Conference on Integrated Intelligence and Cognitive Engineering (ICIICE)</em>, Dubai, UAE, 2026, pp. 1-6.
              </p>
              <p className="text-xs text-zinc-500 mb-3">Publisher: IEEE</p>
              <a
                href="https://doi.org/10.1109/ICIICE69672.2026.11565080"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#8a1d1d] hover:underline inline-flex items-center gap-1"
              >
                DOI: 10.1109/ICIICE69672.2026.11565080 →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}