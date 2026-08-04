export default function TechnologyPage() {



  return (
    <main className="w-full bg-white">
      <section
        id="overview"
        className="scroll-mt-24 px-6 py-16 md:px-12 md:py-20"
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Heading */}
          <h1 className="text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl md:text-5xl">
            Autonomous Drive System
          </h1>

          {/* Road Testing Status */}
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#8a1d1d]">
            In Road Testing – NED University Main Campus
          </p>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base">
            The Autonomous Drive System is NCAI&apos;s flagship platform, in
            active development with NED University&apos;s engineering teams. It
            pairs LiDAR, radar, and camera perception with a deep-learning
            navigation stack, giving the vehicle a continuous read on the road
            around it — tuned for the unpredictable mix of traffic found on
            Pakistani streets, not just a closed test track.
          </p>

          {/* Technology Capabilities */}
          <ul
            id="pillars"
            className="mx-auto mt-8 max-w-2xl space-y-3 text-left text-sm text-zinc-700 md:text-base"
          >
            <li className="flex gap-3">
              <span className="text-[#8a1d1d]">•</span>
              <span>Deep-learning path and real-time decision making</span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#8a1d1d]">•</span>
              <span>
                Multi-sensor fusion across LiDAR, radar, and vision
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#8a1d1d]">•</span>
              <span>
                ASIL-D-aligned, fail-operational control architecture
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#8a1d1d]">•</span>
              <span>HD live mapping and localization</span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#8a1d1d]">•</span>
              <span>V2X connectivity for smart-city integration</span>
            </li>
          </ul>


          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-sm border border-zinc-200">
              <img
                src="https://placehold.co/800x500?text=Autonomous+Vehicle+Interior"
                alt="Autonomous vehicle interior"
                className="h-52 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-sm border border-zinc-200">
              <img
                src="https://placehold.co/800x500?text=AI+Control+Panel"
                alt="AI control panel"
                className="h-52 w-full object-cover"
              />
            </div>


            <div className="overflow-hidden rounded-sm border border-zinc-200">
              <img
                src="https://placehold.co/800x500?text=Night+Driving+Test"
                alt="Night driving test"
                className="h-52 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-sm border border-zinc-200">
              <img
                src="https://placehold.co/800x500?text=Live+Perception+Visualization"
                alt="Live perception visualization"
                className="h-52 w-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}