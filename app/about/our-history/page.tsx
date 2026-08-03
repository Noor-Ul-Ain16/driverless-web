const historyImage = "https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1648072708637-L8NKIZXZOSNBDEZITSAA/GN3_8315.JPG?format=1500w";

export default function OurHistoryPage() {
  return (
    <div className="w-full bg-white">
      <div className="relative h-64 overflow-hidden md:h-[28rem]">
        <img
          src={historyImage}
          alt="Autonomous racing track"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.5em] text-red-400">
              Our Story
            </p>
            <h1 className="text-4xl font-bold sm:text-5xl">Our History</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <section className="mb-12 max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#8a1d1d] mb-4">
            Our Team
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The MIT Driverless team began as a small student effort with a clear ambition: build a full-scale autonomous racecar and compete with the best teams in the world. Through years of iteration, testing, and collaboration, we have grown into one of the leading student autonomy teams.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We continue to scale and push the edge of autonomous racing. We would not have achieved this without dedicated students, close collaboration across disciplines, and support from our industry partners.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-[#8a1d1d] mb-6">
            Our Target - A2RL
          </h2>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl bg-zinc-100 shadow-sm">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1761365797613-506FF1DN1VOS8Q4RRRTB/a2rl-season-launch.jpg?format=1200w"
                alt="Autonomous race car in garage"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6 text-gray-700">
              <p>
                The Abu Dhabi Autonomous Racing League (A2RL) is an innovative motorsport series featuring AI-driven, driverless cars competing at the Yas Marina Formula 1 Circuit. A2RL aims to advance autonomous vehicle technology and inspire future STEM talent.
              </p>
              <p>
                The inaugural event in April 2024 saw eight international teams compete for a $2.25m prize pool. We aim to enter and race at A2RL in 2026!
              </p>
              <p className="text-sm font-semibold text-black">
                NED Driverless is focused on pushing the envelope of autonomy, data-driven vehicle control, and real-world racing strategy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
