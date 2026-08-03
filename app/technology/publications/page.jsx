'use client'

export default function PublicationsPage() {
  return (
    <main id="publications" className="mx-auto max-w-4xl px-6 py-16 text-zinc-900">
      <h1 className="text-3xl font-bold uppercase tracking-wide mb-10 border-b border-zinc-200 pb-4">
        Publications
      </h1>

      {/* Journal Publications */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-red-700 mb-6">Journal Publications</h2>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-sm">
            <h3 className="font-semibold text-base mb-2">
              Advancing Road Safety: A Comprehensive Evaluation of Object Detection Models for Commercial Driver Monitoring Systems.
            </h3>
            <p className="text-xs text-zinc-600 mb-3">
              Huma Zia, Imtiaz ul Hassan, Muhammad Khurram, Nicholas Harris, Fatima Shah and Nimra Imran. <em>Future Transp.</em> 2025, 5(1), 2.
            </p>
            <a
              href="https://doi.org/10.3390/futuretransp5010002"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-red-700 hover:underline inline-flex items-center gap-1"
            >
              DOI: 10.3390/futuretransp5010002 (Open Access) →
            </a>
          </div>

          <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-sm">
            <h3 className="font-semibold text-base mb-2">
              A Lightweight Convolutional Neural Network to Predict Steering Angle for Autonomous Driving Using CARLA Simulator
            </h3>
            <p className="text-xs text-zinc-600 mb-1">
              Imtiaz Ul Hassan; Zia, Huma; Fatima, H Sundus; Yusuf, Syed Adnan; Muhammad Khurram. <em>Modelling and Simulation in Engineering</em>; New York Vol. 2022, (2022).
            </p>
            <p className="text-xs text-zinc-500 mb-3">Publisher: Wiley Online Library</p>
            <a
              href="https://doi.org/10.1155/2022/5716820"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-red-700 hover:underline inline-flex items-center gap-1"
            >
              DOI: 10.1155/2022/5716820 →
            </a>
          </div>
        </div>
      </section>

      {/* Conference Proceedings */}
      <section>
        <h2 className="text-xl font-bold text-red-700 mb-6">Conference Proceedings</h2>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-sm">
            <h3 className="font-semibold text-base mb-2">
              Autonomous vehicle navigation using high-definition maps through CARLA-ROS simulator bridge
            </h3>
            <p className="text-xs text-zinc-600 mb-1">
              H. S. Fatima, A. N. Abbas, F. Bawany, H. Zia, S. A. Yusuf, M. Khurram. <em>Journal of Physics: Conference Series</em>, Vol. 2330, 012016 (2022).
            </p>
            <p className="text-xs text-zinc-500 mb-3">Publisher: IOP Publishing - SIUSAI-2022</p>
            <a
              href="https://doi.org/10.1088/1742-6596/2330/1/012016"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-red-700 hover:underline inline-flex items-center gap-1"
            >
              DOI: 10.1088/1742-6596/2330/1/012016 (Open Access) →
            </a>
          </div>

          <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-sm">
            <h3 className="font-semibold text-base mb-2">
              An Integrated Vision-Based Automated Detection and Monitoring System for Out-Cabin ADAS in Intelligent Transportation Systems
            </h3>
            <p className="text-xs text-zinc-600 mb-1">
              Aleema Saleem; Fatima Saud; Inzamam Ul Haq; Muhammad Khurram. <em>2026 International Conference on Integrated Intelligence and Cognitive Engineering (ICIICE)</em>, Dubai, UAE, 2026, pp. 1-6.
            </p>
            <p className="text-xs text-zinc-500 mb-3">Publisher: IEEE</p>
            <a
              href="https://doi.org/10.1109/ICIICE69672.2026.11565080"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-red-700 hover:underline inline-flex items-center gap-1"
            >
              DOI: 10.1109/ICIICE69672.2026.11565080 →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}