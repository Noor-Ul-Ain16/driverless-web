'use client'

export default function AutonomyStats() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        
        <div className="mb-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a1d1d] sm:text-xs">
            CURRENT PROGRAM
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid bg-[#8a1d1d] grid-cols-1 divide-y divide-zinc-200 px-6 py-6 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-12">

            <div className="px-6 py-5 text-center">
              <p className="text-4xl font-bold tracking-tight text-black [text-shadow:_1px_1px_0_#fff,_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff] md:text-5xl">
                SAE Level 2
              </p>

              <p className="mt-10 text-lg font-semibold text-[#ffffff]">
                Autonomy Achieved
              </p>
            </div>

            <div className="px-6 py-5 text-center">
              <p className="text-4xl font-bold tracking-tight text-black [text-shadow:_1px_1px_0_#fff,_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff] md:text-5xl">
                Level 3
              </p>

              <p className="mt-10 text-lg font-semibold text-[#ffffff]">
                In Progress
              </p>
            </div>

            <div className="px-6 py-5 text-center">
              <p className="text-4xl font-bold tracking-tight text-black [text-shadow:_1px_1px_0_#fff,_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff] md:text-5xl">
                3
              </p>

              <p className="mt-10 text-lg font-semibold text-[#ffffff]">
                Sensor Modalities Fused
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}