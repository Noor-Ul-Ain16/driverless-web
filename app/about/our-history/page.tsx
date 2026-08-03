import Link from 'next/link'

export default function OurHistoryPage() {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 text-zinc-900">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-600 mb-3">About Us</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black">Our History</h1>
          
          {/* Sub-navigation Tabs */}
          <div className="flex justify-center gap-4 mt-8 text-xs font-bold uppercase tracking-widest">
            <Link href="/about/who-we-are" className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 hover:border-black hover:text-black transition">
              Who We Are
            </Link>
            <span className="px-5 py-2.5 rounded-full bg-black text-white">Our History</span>
          </div>
        </div>

        {/* History Header Image */}
        <div className="w-full h-64 sm:h-96 rounded-3xl overflow-hidden mb-12 border border-gray-200 bg-zinc-100 flex items-center justify-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0eSUrQx-YkqSCVo9ANXVJjWgsbV4iuIrr-Ii_dzA87VhkQLJkfxMeqQc&s=10" 
            alt="NCAI Autonomous Vehicle History" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Narrative Section */}
        <section className="space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
          <div className="border-l-4 border-red-600 pl-6 py-2">
            <h2 className="text-2xl font-bold text-black mb-2">Building Pakistan&apos;s First Autonomous Car</h2>
            <p className="text-gray-600 text-sm">National Centre of Artificial Intelligence — NED University</p>
          </div>

          <p>
            NCAI Autonomous&apos; mission is to be the home of practical self-driving research at NED University — the place where the brightest engineering students learn to deploy AI on full-scale vehicles, and connect with industry partners looking for their next generation of talent.
          </p>

          <p>
            The Autonomous Drive System is NCAI&apos;s flagship platform, in active development with NED University&apos;s engineering teams. It pairs LiDAR, radar, and camera perception with a deep-learning navigation stack, giving the vehicle a continuous read on the road around it — tuned for the unpredictable mix of traffic found on Pakistani streets, not just a closed test track.
          </p>

          <div className="my-12 p-8 rounded-3xl bg-zinc-50 border border-gray-200">
            <h3 className="text-xl font-bold text-black mb-4">Milestones Achieved</h3>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-red-600 mt-2 shrink-0" />
                <span><strong>SAE Level 2 Autonomy:</strong> Successfully deployed real-time perception and steering control models on campus test vehicles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-red-600 mt-2 shrink-0" />
                <span><strong>In-Road Testing:</strong> Active dataset collection and autonomous driving navigation tests at NED University Main Campus.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-red-600 mt-2 shrink-0" />
                <span><strong>International Publications:</strong> Academic publications accepted across international journals and IEEE conferences.</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}