'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GalleryItem {
  id: number
  title: string
  category:
    | 'Autonomous Car Design'
    | 'Simulation and Real-World Testing'
    | 'Visual Data Processing'
    | 'Mapping and Data Collection'
  image: string
  caption: string
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Autonomous Car Design')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  // Driverless Car Project Gallery Data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Driverless Car',
      caption: 'Driverless Car',
      category: 'Autonomous Car Design',
      image: '/project_car_image1.jpg',
    },
    {
      id: 2,
      title: 'Driverless Car',
      caption: 'Driverless Car',
      category: 'Autonomous Car Design',
      image: '/project_car_image2.jpg',
    },
    {
      id: 3,
      title: 'Driverless Car',
      caption: 'Driverless Car',
      category: 'Autonomous Car Design',
      image: '/project_car_image3.jpg',
    },
    {
      id: 4,
      title: 'Driverless Car',
      caption: 'Driverless Car',      
      category: 'Autonomous Car Design',
      image: '/project_car_image4.jpg',
    },
    {
      id: 5,
      title: 'Driverless Car',
      caption: 'Driverless Car',      
      category: 'Autonomous Car Design',
      image: '/project_car_image5.jpg',
    },
    {
      id: 6,
      title: 'Driverless Car',
      caption: 'Driverless Car',      
      category: 'Autonomous Car Design',
      image: '/project_car_image6.jpg',
    },
    {
      id: 7,
      title: 'Driverless Car',
      caption: 'Driverless Car',        
      category: 'Visual Data Processing',
      image: '/visual data processing (object and lane detection) image1.PNG',
    },
    {
      id: 8,
      title: 'Driverless Car',
      caption: 'Driverless Car',        
      category: 'Visual Data Processing',
      image: '/visual data processing (object detection_or_avoidance) image2.PNG',
    },
    {
      id: 9,
      title: 'Driverless Car',
      caption: 'Driverless Car',        
      category: 'Simulation and Real-World Testing',
      image: '/simulation-image1.PNG',
    },
    {
      id: 10,
      title: 'Driverless Car',
      caption: 'Driverless Car',        
      category: 'Simulation and Real-World Testing',
      image: '/simulation-image2.PNG',
    },
    {
      id: 11,
      title: 'Driverless Car',
      caption: 'Driverless Car',        
      category: 'Mapping and Data Collection',
      image: '/mapping and data collection image1.PNG',
    },
    {
      id: 12,
      title: 'Driverless Car',
      caption: 'Driverless Car',        
      category: 'Mapping and Data Collection',
      image: '/mapping and data collection image2.PNG',
    },
  ]

  const categories = [
    { label: 'Autonomous Car Design', value: 'Autonomous Car Design' },
    { label: 'Simulation and Real-World Testing', value: 'Simulation and Real-World Testing' },
    { label: 'Visual Data Processing', value: 'Visual Data Processing' },
    { label: 'Mapping and Data Collection', value: 'Mapping and Data Collection' },
  ]

  const filteredItems = galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* Header Section with Background Image */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-20 pb-20 px-6 text-center"
        style={{ backgroundImage: "url('/image.webp')" }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl">
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
            className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl"
          >
            Project Gallery
          </motion.h1>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="px-6 my-10">
        <div className="mx-auto max-w-6xl flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 border ${
                activeCategory === cat.value
                  ? 'bg-[#8a1d1d] text-white border-[#8a1d1d]'
                  : 'bg-zinc-100 text-black border-zinc-200 hover:border-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden border border-zinc-200 bg-zinc-50"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Click to Expand ↗
                    </span>
                  </div>
                </div>
                <div className="p-4 border-t border-zinc-200">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-black group-hover:text-[#8a1d1d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox / Modal View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full bg-zinc-900 overflow-hidden border border-zinc-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-[#8a1d1d] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider hover:bg-[#6d0f0f]"
              >
                Close ✕
              </button>

              <div className="relative max-h-[70vh] w-full flex items-center justify-center bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="p-6 bg-zinc-900 text-white">
                <h2 className="text-lg font-black uppercase tracking-wide text-white">
                  {selectedImage.title}
                </h2>
                <p className="mt-2 text-xs text-zinc-300 sm:text-sm">
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