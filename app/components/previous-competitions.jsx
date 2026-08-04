'use client'

import Link from 'next/link'

import Image from 'next/image'

export default function NewsLink() {
  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">

        {/* Top Centered Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
            NEWSROOM
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-black md:text-5xl">
            IN THE PRESS
          </h2>

          <Link
            href="/newsroom"
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#8a1d1d] transition-all hover:gap-3"
          >
            Full Newsroom overview
            <span aria-hidden="true">→</span>
          </Link>
      </div>



        {/* Featured Story Grid */}
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">

          {/* Left Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a1d1d]">
              FEATURED STORY
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-black md:text-3xl">
              The People's Autonomous Revolution
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-zinc-500 md:text-base">
              Karachi engineering students take a driverless car to Pakistan's roads for the first
              time — the story behind NCAI's autonomous vehicle program at NED University.
            </p>

            <p className="mt-8 text-xs font-bold uppercase tracking-wider text-zinc-400">
              UPDATED RECENTLY · COMMUNITY COVERAGE
            </p>
          </div>

          {/* Right Image Container */}
          <div className="relative min-h-[300px] w-full overflow-hidden rounded-sm bg-zinc-200 md:min-h-[340px]">
            <Image
              src="/images/press-featured.jpg"
              alt="The People's Autonomous Revolution - NCAI NED University"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* Subtle Bottom Divider */}
        <div className="mt-16 border-b border-zinc-200 md:mt-20" />

      </div>


      <div className="mx-auto max-w-6xl">
        
        {/* Clickable Red Card Container */}
        <Link
          href="/about" // Change to "/team" if your route is /team
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

      </div>
     
  

    </section>
  )
}