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
    <main
      id="publications"
      className="mx-auto max-w-4xl 2xl:max-w-6xl min-[1920px]:max-w-[95rem] min-[2560px]:max-w-[125rem] px-4 sm:px-6 2xl:px-12 min-[1920px]:px-16 pt-24 sm:pt-28 2xl:pt-36 pb-16 2xl:pb-28 text-zinc-900 overflow-hidden"
    >
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-3xl 2xl:text-5xl min-[1920px]:text-6xl min-[2560px]:text-7xl font-bold uppercase tracking-wide mb-6 sm:mb-10 2xl:mb-16 border-b border-zinc-200 pb-3 sm:pb-4 2xl:pb-8"
      >
        Publications
      </motion.h1>

      {/* Journal Publications */}
      <section className="mb-8 sm:mb-12 2xl:mb-24 min-[1920px]:mb-32">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-base sm:text-xl 2xl:text-3xl min-[1920px]:text-4xl font-bold text-[#8a1d1d] mb-4 sm:mb-6 2xl:mb-10"
        >
          Journal Publications
        </motion.h2>

        <motion.div 
          className="space-y-4 sm:space-y-6 2xl:space-y-12 min-[1920px]:space-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1 */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="p-3 sm:p-6 2xl:p-10 min-[1920px]:p-12 rounded-sm flex flex-row gap-3 sm:gap-6 2xl:gap-12 min-[1920px]:gap-16 items-start transition-all duration-300"
          >
            <div className="w-24 sm:w-40 2xl:w-72 min-[1920px]:w-96 min-[2560px]:w-[28rem] h-20 sm:h-28 2xl:h-48 min-[1920px]:h-60 min-[2560px]:h-72 relative flex-shrink-0 bg-zinc-200 rounded overflow-hidden">
              <Image 
                src="/1_Advancing Road Safety.png" 
                alt="Advancing Road Safety publication thumbnail" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base 2xl:text-2xl min-[1920px]:text-3xl min-[2560px]:text-4xl mb-1.5 sm:mb-2 2xl:mb-4">
                Advancing Road Safety: A Comprehensive Evaluation of Object Detection Models for Commercial Driver Monitoring Systems.
              </h3>
              <p className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl text-zinc-600 mb-2.5 sm:mb-3 2xl:mb-4">
                Huma Zia, Imtiaz ul Hassan, Muhammad Khurram, Nicholas Harris, Fatima Shah and Nimra Imran. <em>Future Transp.</em> 2025, 5(1), 2.
              </p>
              <a
                href="https://doi.org/10.3390/futuretransp5010002"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl font-semibold text-[#8a1d1d] hover:underline inline-flex flex-wrap items-center gap-1 break-words"
              >
                DOI: 10.3390/futuretransp5010002 (Open Access) →
              </a>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="p-3 sm:p-6 2xl:p-10 min-[1920px]:p-12 rounded-sm flex flex-row gap-3 sm:gap-6 2xl:gap-12 min-[1920px]:gap-16 items-start transition-all duration-300"
          >
            <div className="w-24 sm:w-40 2xl:w-72 min-[1920px]:w-96 min-[2560px]:w-[28rem] h-20 sm:h-28 2xl:h-48 min-[1920px]:h-60 min-[2560px]:h-72 relative flex-shrink-0 bg-zinc-200 rounded overflow-hidden">
              <Image 
                src="/2_Lightweight Convolutional Neural Network.png" 
                alt="Predict Steering Angle publication thumbnail" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base 2xl:text-2xl min-[1920px]:text-3xl min-[2560px]:text-4xl mb-1.5 sm:mb-2 2xl:mb-4">
                A Lightweight Convolutional Neural Network to Predict Steering Angle for Autonomous Driving Using CARLA Simulator
              </h3>
              <p className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl text-zinc-600 mb-1 2xl:mb-2">
                Imtiaz Ul Hassan; Zia, Huma; Fatima, H Sundus; Yusuf, Syed Adnan; Muhammad Khurram. <em>Modelling and Simulation in Engineering</em>; New York Vol. 2022, (2022).
              </p>
              <p className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl text-zinc-500 mb-2.5 sm:mb-3 2xl:mb-4">Publisher: Wiley Online Library</p>
              <a
                href="https://doi.org/10.1155/2022/5716820"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl font-semibold text-[#8a1d1d] hover:underline inline-flex flex-wrap items-center gap-1 break-words"
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
          className="text-base sm:text-xl 2xl:text-3xl min-[1920px]:text-4xl font-bold text-[#8a1d1d] mb-4 sm:mb-6 2xl:mb-10"
        >
          Conference Proceedings
        </motion.h2>

        <motion.div 
          className="space-y-4 sm:space-y-6 2xl:space-y-12 min-[1920px]:space-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 3 */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="p-3 sm:p-6 2xl:p-10 min-[1920px]:p-12 rounded-sm flex flex-row gap-3 sm:gap-6 2xl:gap-12 min-[1920px]:gap-16 items-start transition-all duration-300"
          >
            <div className="w-24 sm:w-40 2xl:w-72 min-[1920px]:w-96 min-[2560px]:w-[28rem] h-20 sm:h-28 2xl:h-48 min-[1920px]:h-60 min-[2560px]:h-72 relative flex-shrink-0 bg-zinc-200 rounded overflow-hidden">
              <Image 
                src="/high-definition maps.png"
                alt="Autonomous vehicle navigation publication thumbnail" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base 2xl:text-2xl min-[1920px]:text-3xl min-[2560px]:text-4xl mb-1.5 sm:mb-2 2xl:mb-4">
                Autonomous vehicle navigation using high-definition maps through CARLA-ROS simulator bridge
              </h3>
              <p className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl text-zinc-600 mb-1 2xl:mb-2">
                H. S. Fatima, A. N. Abbas, F. Bawany, H. Zia, S. A. Yusuf, M. Khurram. <em>Journal of Physics: Conference Series</em>, Vol. 2330, 012016 (2022).
              </p>
              <p className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl text-zinc-500 mb-2.5 sm:mb-3 2xl:mb-4">Publisher: IOP Publishing - SIUSAI-2022</p>
              <a
                href="https://doi.org/10.1088/1742-6596/2330/1/012016"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl font-semibold text-[#8a1d1d] hover:underline inline-flex flex-wrap items-center gap-1 break-words"
              >
                DOI: 10.1088/1742-6596/2330/1/012016 (Open Access) →
              </a>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.4 }}
            className="p-3 sm:p-6 2xl:p-10 min-[1920px]:p-12 rounded-sm flex flex-row gap-3 sm:gap-6 2xl:gap-12 min-[1920px]:gap-16 items-start transition-all duration-300"
          >
            <div className="w-24 sm:w-40 2xl:w-72 min-[1920px]:w-96 min-[2560px]:w-[28rem] h-20 sm:h-28 2xl:h-48 min-[1920px]:h-60 min-[2560px]:h-72 relative flex-shrink-0 bg-zinc-200 rounded overflow-hidden">
              <Image 
                src="/An Integrated Vision-Based Automated Detection.png"
                alt="Out-Cabin ADAS publication thumbnail" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base 2xl:text-2xl min-[1920px]:text-3xl min-[2560px]:text-4xl mb-1.5 sm:mb-2 2xl:mb-4">
                An Integrated Vision-Based Automated Detection and Monitoring System for Out-Cabin ADAS in Intelligent Transportation Systems
              </h3>
              <p className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl text-zinc-600 mb-1 2xl:mb-2">
                Aleema Saleem; Fatima Saud; Inzamam Ul Haq; Muhammad Khurram. <em>2026 International Conference on Integrated Intelligence and Cognitive Engineering (ICIICE)</em>, Dubai, UAE, 2026, pp. 1-6.
              </p>
              <p className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl text-zinc-500 mb-2.5 sm:mb-3 2xl:mb-4">Publisher: IEEE</p>
              <a
                href="https://doi.org/10.1109/ICIICE69672.2026.11565080"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] sm:text-xs 2xl:text-base min-[1920px]:text-lg min-[2560px]:text-xl font-semibold text-[#8a1d1d] hover:underline inline-flex flex-wrap items-center gap-1 break-words"
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