'use client'

import { useState } from 'react'

export default function PreviousCompetitionsSection() {
  const competitions = [
    {
      id: 1,
      name: 'The Indy Autonomous Challenge',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1650042554515-HY9TCQDF08D8M53GC38M/IAC-Logo-black.jpg?format=300w',
      description: 'The Indy Autonomous Challenge is a $1.5 million university prize competition to win the world\'s first head-to-head, high speed autonomous race at the famed Indianapolis Motor Speedway. Teams program a modified Dallara IL-15 racecar to out-race and out-maneuver fellow innovators in the world\'s first head-to-head, high-speed autonomous race at the Indianapolis Motor Speedway, the world\'s most famous racetrack.\n\nThe IAC is a broadly collaborative effort that brings together public, private and academic institutions to challenge university students around the world to imagine, invent and prove a new generation of automated vehicle software and inspire the next generation of STEM talent.',
      images: [
        'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1648072708637-L8NKIZXZOSNBDEZITSAA/GN3_8315.JPG?format=1200w',
        'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1662329118358-JI6B0KU4FYRQXFP2DG19/1641757080539.jpg?format=1000w',
        'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1673804227401-PBUGCUHMVVFOR4KF5URO/1.+Students-on-the-MIT-Pitt-team.jpg?format=750w',
        'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1673804235038-9B06LOVO67HL5O53LCMC/4.+iacstill.PNG?format=1200w',
      ]
    }
  ]

  return (
    <section className="w-full bg-white py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-[2.15rem] font-bold text-center mb-12">
          <a href="/about/our-history" className="text-[#8a1d1d] hover:text-[#6d0f0f]">
            PREVIOUS COMPETITIONS
          </a>
          <span className="text-black"> PREVIEW</span>
        </h2>

        {competitions.map((competition) => (
          <CompetitionCard key={competition.id} competition={competition} />
        ))}
      </div>
    </section>
  )
}

function CompetitionCard({ competition }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? competition.images.length - 1 : prev - 1
    )
  }

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === competition.images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10">
        <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
          <img
            src={competition.logo}
            alt={competition.name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-[#8a1d1d] mb-4">
            {competition.name}
          </h3>
          <p className="text-gray-600 text-[1.02rem] leading-relaxed whitespace-pre-line">
            {competition.description}
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="relative w-full h-96 md:h-full overflow-hidden rounded-sm">
          <img
            src={competition.images[currentImageIndex]}
            alt={`Competition image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          <button
            onClick={goToPreviousImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/45 hover:bg-black/65 text-white w-11 h-11 rounded-full flex items-center justify-center transition duration-200"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/45 hover:bg-black/65 text-white w-11 h-11 rounded-full flex items-center justify-center transition duration-200"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="text-center mt-4 text-zinc-500 text-sm">
          {currentImageIndex + 1} / {competition.images.length}
        </div>
      </div>
    </div>
  )
}
