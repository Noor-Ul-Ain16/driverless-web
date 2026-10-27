'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  caption: string
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  // Complete Driverless Car Project Gallery Data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Autonomous Vehicle Architecture',
      caption: 'Main sensor-integrated electric vehicle platform for autonomous navigation.',
      category: 'Autonomous Car Design',
      image: '/project_car_image1.jpg',
    },
    {
      id: 2,
      title: 'Solid-State LiDAR Integration',
      caption: 'Roof-mounted RoboSense RubyPlus LiDAR configuration for 360-degree point-cloud perception.',
      category: 'Autonomous Car Design',
      image: '/project_car_image2.jpg',
    },
    {
      id: 3,
      title: 'Drive-By-Wire Actuation Control',
      caption: 'Low-level electronic throttle and steering system interface.',
      category: 'Autonomous Car Design',
      image: '/project_car_image3.jpg',
    },
    {
      id: 4,
      title: 'Field Testing & Calibration',
      caption: 'Sensor calibration and real-time path execution tests on track.',
      category: 'Autonomous Car Design',
      image: '/project_car_image4.jpg',
    },
    {
      id: 5,
      title: 'On-Board Processing Rig',
      caption: 'High-performance GPU cluster processing ROS 2 node communications.',
      category: 'Autonomous Car Design',
      image: '/project_car_image5.jpg',
    },
    {
      id: 6,
      title: 'AV Success Story',
      caption: 'AV Success Story.',
      category: 'AV Success Story',
      image: '/AV Success Story.png',
    },
    {
      id: 7,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image1.png',
    },
    {
      id: 8,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image2.png',
    },
    {
      id: 9,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image3.png',
    },
    {
      id: 10,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image4.png',
    },
    {
      id: 11,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image5.png',
    },
    {
      id: 12,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image6.png',
    },
    {
      id: 13,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image7.png',
    },
    {
      id: 14,
      title: 'Glimpse of our work',
      caption: 'Glimpse of our work.',
      category: 'Glimpse of our work',
      image: '/Glimpse of our work image8.png',
    },
    {
      id: 15,
      title: 'Campus Trial Operations',
      caption: 'Real-world trajectory evaluation on main campus roadways.',
      category: 'Autonomous Car Design',
      image: '/project_car_image6.jpg',
    },
  ]

  // Top 3 Featured Cards
  const featuredLeft = galleryItems[0]
  const featuredCenter = galleryItems[1]
  const featuredRight = galleryItems[2]

  // Remaining Items for the Collage Grid
  const gridCollageItems = galleryItems.slice(3)

  return (
    <div className="relative min-h-screen bg-slate-100 text-slate-900 selection:bg-[#8a1d1d] selection:text-white">

      {/* HEADER SECTION */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-32 sm:pt-36 lg:pt-40 2xl:pt-44 pb-20 sm:pb-24 lg:pb-28 px-6 sm:px-8 lg:px-12 2xl:px-16 text-center"
        style={{ backgroundImage: "url('/image.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto w-full max-w-5xl 2xl:max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff4d4d]"
          >
            Visual Showcase
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl 2xl:text-7xl"
          >
            Project Gallery
          </motion.h1>
        </div>
      </section>

      {/* GALLERY CONTAINER */}
      <main className="mx-auto w-full max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 py-12 sm:py-16 lg:py-20 2xl:py-28 space-y-16 sm:space-y-20 lg:space-y-24 2xl:space-y-32">

        {/* FEATURED PROJECT SHOWCASE */}
        <section className="relative left-1/2 w-screen max-w-none -translate-x-1/2 overflow-hidden border-y border-slate-300/80 bg-slate-200/50 p-6 shadow-inner sm:p-10 lg:p-14 2xl:p-20">

          {/* BACKGROUND COLLAGE */}
          <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-3 gap-2 overflow-hidden opacity-30 blur-[2px] sm:grid-cols-4">
            {galleryItems.map((item) => (
              <div
                key={`bg-collage-${item.id}`}
                className="relative h-full w-full overflow-hidden"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* BACKGROUND OVERLAY */}
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-slate-100/90 via-slate-100/70 to-slate-100/95" />

          {/* FOREGROUND CONTENT */}
          <div className="relative z-10 mx-auto w-full max-w-[1800px]">

            <div className="mb-10 text-center lg:mb-14 2xl:mb-16">
              <span className="inline-block rounded-full border border-[#8a1d1d]/20 bg-[#8a1d1d]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#8a1d1d]">
                Featured Highlights
              </span>

              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl 2xl:text-5xl">
                Primary Project Vehicle &amp; Telemetry
              </h2>
            </div>

            <div className="relative mx-auto flex min-h-[380px] max-w-6xl items-center justify-center overflow-visible px-4 sm:min-h-[460px] sm:px-8 lg:min-h-[560px] lg:px-12 2xl:min-h-[680px] 2xl:max-w-[1500px]">

              {/* LEFT CARD */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImage(featuredLeft)}
                className="absolute left-4 z-10 aspect-[4/3] w-[60%] cursor-pointer rounded-2xl border-2 border-slate-300 bg-white p-2 shadow-xl transition-transform duration-300 hover:z-30 hover:scale-105 sm:left-12 sm:w-[48%] lg:left-16 2xl:left-24"
              >
                <div className="group relative h-full w-full overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src={featuredLeft.image}
                    alt={featuredLeft.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-5 lg:p-7">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 sm:text-xs">
                      {featuredLeft.category}
                    </span>

                    <h3 className="text-sm font-black leading-snug text-white sm:text-base lg:text-xl">
                      {featuredLeft.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs text-slate-300 sm:text-sm">
                      {featuredLeft.caption}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT CARD */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedImage(featuredRight)}
                className="absolute right-4 z-10 aspect-[4/3] w-[60%] cursor-pointer rounded-2xl border-2 border-slate-300 bg-white p-2 shadow-xl transition-transform duration-300 hover:z-30 hover:scale-105 sm:right-12 sm:w-[48%] lg:right-16 2xl:right-24"
              >
                <div className="group relative h-full w-full overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src={featuredRight.image}
                    alt={featuredRight.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-5 lg:p-7">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-400 sm:text-xs">
                      {featuredRight.category}
                    </span>

                    <h3 className="text-sm font-black leading-snug text-white sm:text-base lg:text-xl">
                      {featuredRight.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs text-slate-300 sm:text-sm">
                      {featuredRight.caption}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CENTER CARD */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={() => setSelectedImage(featuredCenter)}
                className="relative z-20 aspect-[4/3] w-[72%] cursor-pointer rounded-2xl border-4 border-[#8a1d1d] bg-white p-2 shadow-2xl transition-transform duration-300 hover:scale-105 sm:w-[54%] lg:w-[50%] 2xl:w-[48%]"
              >
                <div className="group relative h-full w-full overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src={featuredCenter.image}
                    alt={featuredCenter.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-6 lg:p-8">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-300">
                      {featuredCenter.category}
                    </span>

                    <h3 className="mt-1 text-lg font-black text-white sm:text-xl lg:text-2xl 2xl:text-3xl">
                      {featuredCenter.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs text-slate-300 sm:text-sm lg:text-base">
                      {featuredCenter.caption}
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="space-y-6 lg:space-y-8 2xl:space-y-10">

          <div className="border-b border-slate-300 pb-4 lg:pb-6">
            <h3 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl lg:text-3xl 2xl:text-4xl">
              Work Behind the Drive
            </h3>

            <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm lg:text-base">
              A closer look at experiments, the breakthroughs, and everything in between
            </p>
          </div>

          <div className="grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-3 lg:gap-7 2xl:auto-rows-[320px] 2xl:grid-cols-4 2xl:gap-8">
            {gridCollageItems.map((item, idx) => {
              const isTall = idx % 4 === 0

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-300 bg-white p-2 shadow-sm transition-all duration-300 hover:border-[#8a1d1d] hover:shadow-xl ${
                    isTall ? 'sm:row-span-2' : 'row-span-1'
                  }`}
                >
                  <div className="group relative h-full w-full overflow-hidden rounded-xl bg-slate-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* HOVER TEXT OVERLAY */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:p-6 2xl:p-8">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-400 sm:text-xs">
                        {item.category}
                      </span>

                      <h4 className="mt-1 text-base font-extrabold text-white lg:text-lg 2xl:text-xl">
                        {item.title}
                      </h4>

                      <p className="mt-1 line-clamp-3 text-xs font-normal leading-relaxed text-slate-300 sm:text-sm">
                        {item.caption}
                      </p>

                      <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-300">
                        <span>Expand Image</span>

                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

      </main>

      {/* LIGHTBOX / MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 rounded-lg bg-[#8a1d1d] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#6d0f0f]"
              >
                Close ✕
              </button>

              <div className="relative flex max-h-[72vh] w-full items-center justify-center bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>

              <div className="border-t border-slate-800 bg-slate-900 p-6 text-white lg:p-8">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400">
                  {selectedImage.category}
                </span>

                <h2 className="mt-1 text-xl font-black uppercase tracking-wide text-white sm:text-2xl">
                  {selectedImage.title}
                </h2>

                <p className="mt-2 text-xs font-normal leading-relaxed text-slate-300 sm:text-sm">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
