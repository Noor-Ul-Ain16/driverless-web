'use client'

export default function AutonomyStats() {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-zinc-200 px-6 py-10 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-12">

        <div className="px-6 py-5 text-center">
          <p className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            SAE Level 2
          </p>

          <p className="mt-10 text-lg font-semibold text-[#8a1d1d] ">
            Autonomy Achieved
          </p>
        </div>

        <div className="px-6 py-5 text-center">
          <p className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            Level 3
          </p>

          <p className="mt-10 text-lg font-semibold text-[#8a1d1d] ">
            In Progress
          </p>
        </div>

        <div className="px-6 py-5 text-center">
          <p className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            3
          </p>

          <p className="mt-10 text-lg font-semibold text-[#8a1d1d] ">
            Sensor Modalities Fused
          </p>
        </div>

      </div>
    </section>
  )
}