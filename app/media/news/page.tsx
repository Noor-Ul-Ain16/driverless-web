'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NewsroomPage() {
  const [isStuck, setIsStuck] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeModalVideo, setActiveModalVideo] = useState<{ title: string; url: string } | null>(null)
  const featuredRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!featuredRef.current) return
      const rect = featuredRef.current.getBoundingClientRect()

      if (rect.top <= window.innerHeight - 80) {
        setIsStuck(true)
      } else {
        setIsStuck(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper function to convert YouTube / Shorts / Facebook links into Embed URLs
  const getEmbedUrl = (url: string, muted = false) => {
    if (!url) return ''

    const muteParam = muted ? '&mute=1' : ''

    // 1. YouTube Shorts check
    if (url.includes('youtube.com/shorts/')) {
      const videoId = url.split('youtube.com/shorts/')[1]?.split('?')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1${muteParam}&playsinline=1`
    }
    // 2. YouTube standard links check
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1${muteParam}&playsinline=1`
    }
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(url.split('?')[1])
      const videoId = urlParams.get('v')
      return `https://www.youtube.com/embed/${videoId}?autoplay=1${muteParam}&playsinline=1`
    }
    // 3. Facebook Video Embed
    if (url.includes('facebook.com')) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=true`
    }

    // Default return original URL for direct web embeds
    return url
  }

  // Only YouTube / Facebook links can be embedded & autoplayed inline
  const isInlinePlayable = (url: string) =>
    !!url && (url.includes('youtu') || url.includes('facebook.com'))

  const sampleVideos = [
    {
      title: 'DW news',
      duration: '03:05',
      thumbnail: '/dw news thumbnail.png',
      url: 'https://www.facebook.com/share/v/18wxskjkSm/',
    },
    {
      title: 'Morning Asia',
      duration: '10:20',
      thumbnail: '/video-image3.jpg',
      url: 'https://www.facebook.com/AsiaOneNewsOfficial/videos/morning-asia-pakistans-first-ai-driverless-car-test-drive-ned-university-dr-muha/1435405401627968/',
    },
    {
      title: 'TOK (times of karachi)',
      duration: '06:13',
      thumbnail: 'https://img.youtube.com/vi/3546aRgtk8Q/hqdefault.jpg',
      url: 'https://youtu.be/3546aRgtk8Q?si=s5M75v5d2ZDOiLwF',
    },
    {
      title: 'Express live news',
      duration: '11:05',
      thumbnail: 'https://img.youtube.com/vi/_7UUt-FnDh0/hqdefault.jpg',
      url: 'https://youtu.be/_7UUt-FnDh0?si=cc',
    },
    {
      title: 'Express News (morning show)',
      duration: '07:14',
      thumbnail: 'https://img.youtube.com/vi/DGUjmhD1ERU/hqdefault.jpg',
      url: 'https://youtu.be/DGUjmhD1ERU?si=BZDrmb6iZfWGQzay',
    },
    {
      title: '92 news',
      duration: '05:25',
      thumbnail: 'https://img.youtube.com/vi/a1c-i3FRtHQ/hqdefault.jpg',
      url: 'https://youtu.be/a1c-i3FRtHQ?si=1iwZNrsftcZZR0iq',
    },
    {
      title: 'Aaj news',
      duration: '08:12',
      thumbnail: 'https://img.youtube.com/vi/VHYWY_5WGAs/hqdefault.jpg',
      url: 'https://youtu.be/VHYWY_5WGAs?si=QIqz4LUUsIcexVAy',
    },
    {
      title: 'ARY news',
      thumbnail: 'https://img.youtube.com/vi/wPhRGoNWpys/hqdefault.jpg',
      url: 'https://youtube.com/shorts/wPhRGoNWpys?si=SsdMtznnWU13wMoW',
    },
    {
      title: 'GTV',
      duration: '07:40',
      thumbnail: 'https://img.youtube.com/vi/ODpH0acv6iM/hqdefault.jpg',
      url: 'https://youtu.be/ODpH0acv6iM?si=Ibie3UiSi91u4Krx',
    },
    {
      title: 'Nukta',
      thumbnail: 'https://img.youtube.com/vi/osnWkBfsi_Y/hqdefault.jpg',
      url: 'https://youtube.com/shorts/osnWkBfsi_Y?si=osWXzqGEdFkubtU7',
    },
    {
      title: 'BOL news',
      duration: '03:55',
      thumbnail: 'https://img.youtube.com/vi/GaaCrI3dRx0/hqdefault.jpg',
      url: 'https://youtu.be/GaaCrI3dRx0?si=bPLoo3a8SYVdmQxQ',
    },
    {
      title: 'Startup pakistan',
      duration: '00:17',
      thumbnail: '/video-image1.jpg',
      url: 'https://www.facebook.com/StartupPakistanSP/videos/1939950670199972/',
    },
    {
      title: 'TNN TV',
      thumbnail: 'https://img.youtube.com/vi/JhdLrCFR0J4/hqdefault.jpg',
      url: 'https://youtube.com/shorts/JhdLrCFR0J4?si=tQ80SgZhbcGqdCWYQ',
    },
    {
      title: 'Karachi matters',
      duration: '03:24',
      thumbnail: '/video-image2.jpg',
      url: 'https://www.facebook.com/share/v/1D2hmwe1kG/',
    },
    {
      title: 'Public news',
      duration: '08:03',
      thumbnail: 'https://img.youtube.com/vi/VMucmTK9c1Q/hqdefault.jpg',
      url: 'https://youtu.be/VMucmTK9c1Q?si=faf48oLxvA7wRgVT',
    },
    {
      title: 'ABN news',
      duration: '07:48',
      thumbnail: 'https://img.youtube.com/vi/zdakGkhKZJk/hqdefault.jpg',
      url: 'https://youtu.be/zdakGkhKZJk?si=j4NYcUGnShnT1PX4',
    },
    {
      title: 'Independent Urdu',
      duration: '02:13',
      thumbnail: 'https://img.youtube.com/vi/f-Y8yNjKhNc/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=f-Y8yNjKhNc',
    },
    {
      title: 'Dawn',
      thumbnail: '/news_logo_6.png',
      url: 'https://www.facebook.com/dawndotcom/videos/pakistans-first-ai-driverless-car-is-taking-shape-at-the-university-of-karachi-c/1875616206396455/',
    },
  ]

  // Featured carousel: pick specific YouTube uploads whose owners allow embedding
  // (Express News clips have embedding disabled, so they can't autoplay inline)
  const featuredTitles = ['TOK (times of karachi)', '92 news', 'Aaj news']
  const featuredVideos = featuredTitles
    .map((t) => sampleVideos.find((v) => v.title === t))
    .filter((v): v is (typeof sampleVideos)[number] => Boolean(v))
  const featuredSet = new Set(featuredVideos)
  const remainingVideos = sampleVideos.filter((v) => !featuredSet.has(v))

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredVideos.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + featuredVideos.length) % featuredVideos.length)
  }

  const sponsors = [
    { name: '92 News HD Plus', logo: '/news_logo_1.jpg' },
    { name: 'ABN News', logo: '/news_logo_2.jpg' },
    { name: 'ARY News', logo: '/news_logo_3.jpg' },
    { name: 'Asia One', logo: '/news_logo_4(1).png' },
    { name: 'BOL News', logo: '/news_logo_5.jpg' },
    { name: 'Dawn', logo: '/news_logo_6.PNG' },
    { name: 'DW', logo: '/news_logo_7.jpg' },
    { name: 'Express News', logo: '/news_logo_8.png' },
    { name: 'GTV News', logo: '/news_logo_9.jpg' },
    { name: 'Independent Urdu', logo: '/news_logo_10(3).png' },
    { name: 'Karachi Matters', logo: '/news_logo_11.jpg' },
    { name: 'Aaj News', logo: '/news_logo_12(1).png' },
    { name: 'Nukta', logo: '/news_logo_13(1).png' },
    { name: 'Public News', logo: '/news_logo_14.png' },
    { name: 'Startup Pakistan', logo: '/news_logo_15(1).png' },
    { name: 'Times of Karachi', logo: '/news_logo_16.png' },
  ]

  const renderSponsorStrip = () => (
    <div className="w-full overflow-hidden border-y border-zinc-200 bg-white py-3 shadow-md">
      <div className="animate-marquee-slow flex items-center gap-12">
        {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => {
          if (!sponsor || !sponsor.logo) return null
          return (
            <div
              key={`${sponsor.name || 'sponsor'}-${index}`}
              className="flex h-12 w-28 shrink-0 items-center justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name || 'Sponsor Logo'}
                className="max-h-10 max-w-full object-contain grayscale opacity-100 transition duration-300 hover:grayscale-0 hover:opacity-100 mix-blend-multiply"
              />
            </div>
          )
        })}
      </div>
    </div>
  )

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="relative w-full bg-white text-black pb-0">
      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setActiveModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black border border-zinc-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4 bg-zinc-900/80">
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                  {activeModalVideo.title}
                </h3>
                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-[#8a1d1d] hover:text-white transition"
                >
                  ✕
                </button>
              </div>

              {/* Video Frame */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={getEmbedUrl(activeModalVideo.url)}
                  title={activeModalVideo.title}
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header Section */}
      <motion.div
        className="pt-20 pb-12 px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="zoom-responsive mx-auto max-w-4xl">
          <motion.h1
            className="mt-6 text-3xl font-black uppercase tracking-tight text-black sm:text-5xl"
            variants={fadeInUp}
          >
            Media & Newsroom
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base mx-auto"
            variants={fadeInUp}
          >
            Explore our latest media coverages, news highlights, and official announcements across platforms.
          </motion.p>
        </div>
      </motion.div>

      <main className="zoom-responsive mx-auto max-w-6xl px-6 pb-20 md:px-12">
        {/* Social Media Section */}
        <motion.section
          className="mb-16 rounded-2xl border border-zinc-200 bg-[#8a1d1d] p-6 md:p-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-200">
            Find Us on Social Media
          </p>

          <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
            Official Channels
          </h2>

          <motion.div
            className="mt-6 justify-center flex flex-wrap gap-4"
            variants={staggerContainer}
          >
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/smart-city-lab-ncai-ned-uet/home/' },
              { label: 'YouTube', href: 'https://www.youtube.com/@SmartCityLab ' },
              { label: 'Facebook', href: 'https://www.facebook.com/SMARTCITYLAB.NCAI/' },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex bg-white border border-black px-4 py-3 text-xs 
                font-bold uppercase tracking-[0.2em] text-black transition hover:bg-zinc-200"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* Highlighted Top 3 Videos Swipeable Carousel Section (ENLARGED) */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <div className="mb-6 flex items-center justify-between border-b border-zinc-200 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
                Featured Media
              </p>
              <h2 className="text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">
                Top Highlights
              </h2>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-black transition hover:border-[#8a1d1d] hover:bg-[#8a1d1d] hover:text-white"
                aria-label="Previous Video"
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-black transition hover:border-[#8a1d1d] hover:bg-[#8a1d1d] hover:text-white"
                aria-label="Next Video"
              >
                &#8594;
              </button>
            </div>
          </div>

          {/* Carousel Stack Container - Increased Height */}
          <div className="relative flex min-h-[400px] sm:min-h-[560px] w-full items-center justify-center overflow-hidden py-6">
            {featuredVideos.map((video, idx) => {
              const total = featuredVideos.length
              let position = (idx - activeIndex + total) % total

              let xOffset = 0
              let scale = 1
              let zIndex = 0

              if (position === 0) {
                // Center item - Significantly bigger
                xOffset = 0
                scale = 1.1
                zIndex = 30
              } else if (position === 1) {
                // Right item
                xOffset = 300
                scale = 0.85
                zIndex = 20
              } else if (position === 2) {
                // Left item
                xOffset = -300
                scale = 0.85
                zIndex = 10
              }

              return (
                <motion.div
                  key={idx}
                  className="absolute w-[85%] max-w-[360px] sm:max-w-[480px] cursor-pointer"
                  animate={{
                    x: xOffset,
                    scale: scale,
                    opacity: 1,
                    zIndex: zIndex,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset }) => {
                    if (offset.x < -40) handleNext()
                    if (offset.x > 40) handlePrev()
                  }}
                  onClick={() => {
                    if (position === 0) {
                      setActiveModalVideo(video)
                    } else {
                      setActiveIndex(idx)
                    }
                  }}
                >
                  <div
                    className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-md transition-all duration-300 ${
                      position === 0
                        ? 'border-[#8a1d1d] shadow-2xl ring-4 ring-[#8a1d1d]/20'
                        : 'border-zinc-300 shadow-lg hover:border-[#8a1d1d]'
                    }`}
                  >
                    {/* Video Frame / Thumbnail */}
                    <div className="relative h-72 sm:h-[420px] w-full overflow-hidden bg-zinc-900">
                      {position === 0 && isInlinePlayable(video.url) ? (
                        <iframe
                          src={getEmbedUrl(video.url, true)}
                          title={video.title || 'Video'}
                          className="h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <>
                          <img
                            src={video.thumbnail || '/placeholder.jpg'}
                            alt={video.title || 'Video Thumbnail'}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8a1d1d] text-white shadow-xl">
                              <svg className="h-7 w-7 fill-current ml-1" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>

                          {video.duration && (
                            <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2.5 py-1 text-xs font-bold text-white">
                              {video.duration}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Carousel Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {featuredVideos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === idx ? 'w-8 bg-[#8a1d1d]' : 'w-2.5 bg-zinc-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.section>

        {/* All Remaining Videos Section Grid */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeInUp}
        >
          <div className="mb-6 border-b border-zinc-200 pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
              Media Archive
            </p>
            <h2 className="text-xl font-black uppercase tracking-tight text-black sm:text-2xl">
              Media Archive
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {remainingVideos.map((video, idx) => (
              <motion.div
                key={idx}
                onClick={() => setActiveModalVideo(video)}
                whileHover={{ y: -4 }}
                className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-[#8a1d1d] hover:shadow-md cursor-pointer"
              >
                <div className="relative h-44 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={video.thumbnail || '/placeholder.jpg'}
                    alt={video.title || 'Video Thumbnail'}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8a1d1d] text-white shadow-md">
                      <svg className="h-4 w-4 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {video.duration && (
                    <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-bold text-white">
                      {video.duration}
                    </span>
                  )}
                </div>

                <div className="p-3.5">
                  <h3 className="text-xs sm:text-sm font-bold text-black group-hover:text-[#8a1d1d] transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Archive Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-left text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
            Newsletter Archive
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <p className="max-w-2xl text-left text-[11px] leading-5 text-zinc-600 sm:text-sm sm:leading-6">
              Newsletters coming soon
            </p>
          </div>
        </motion.section>
      </main>

      {/* FEATURED MEDIA COVERAGE SECTION */}
      <section className="mb-0">
        <div
          ref={featuredRef}
          className="relative w-full overflow-hidden bg-[#8a1d1d] pt-16 pb-0 sm:pt-20 sm:pb-0 shadow-xl"
        >
          {isStuck && (
            <div className="absolute top-0 left-0 z-20 w-full">
              {renderSponsorStrip()}
            </div>
          )}
        </div>
      </section>

      {!isStuck && (
        <div className="fixed bottom-0 left-0 z-50 w-full">
          {renderSponsorStrip()}
        </div>
      )}
    </div>
  )
}