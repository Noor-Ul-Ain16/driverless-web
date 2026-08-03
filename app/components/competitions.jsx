'use client'

export default function CompetitionsSection() {
  const competitions = [
    {
      id: 1,
      name: 'A2RL - Abu Dhabi Autonomous Racing League',
      logo: 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1689705937932-WL89UNN1L4W9P8351MCI/mitdriverless-logo-red.png?format=500w',
      description: 'MIT Driverless is aiming to enter The Abu Dhabi Autonomous Racing League (A2RL) in 2026! The race is held at the Yas Marina Formula 1 circuit in Abu Dhabi. We are currently recruiting for engineers (at all levels of experience) to develop autonomous driving software! Join the team using the link to the application form above!',
      images: [
        'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1734376686011-91DXC4BRTVS9ZQCR3YMI/gallery1.jpg?format=750w',
        'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1734376686904-BXXTD5O31MJ3FI63E10C/gallery2.jpeg?format=750w',
        'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1734376687099-AMSC5LGEQHN4W3U0IORD/gallery3.jpg?format=750w',
        'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1761365797613-506FF1DN1VOS8Q4RRRTB/a2rl-season-launch.jpg?format=750w',
      ]
    }
  ]

  return (
    <section className="w-full bg-white py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-[2.15rem] font-bold text-black text-center mb-12 tracking-[0.02em]">
          CURRENT COMPETITIONS
        </h2>

        {competitions.map((competition) => (
          <div key={competition.id} className="mb-14">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 mb-10 items-start">
              <div className="flex-shrink-0 w-full md:w-auto">
                <img
                  src={competition.logo}
                  alt={competition.name}
                  className="w-40 h-auto"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#8a1d1d] mb-3">
                  {competition.name}
                </h3>
                <p className="text-gray-700 text-[1.02rem] leading-relaxed">
                  {competition.description}
                </p>
              </div>
            </div>

            <hr className="mb-10 border-zinc-300" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {competition.images.map((image, idx) => (
                <div key={idx} className="overflow-hidden rounded-sm">
                  <img
                    src={image}
                    alt={`Competition ${idx + 1}`}
                    className="w-full h-52 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
