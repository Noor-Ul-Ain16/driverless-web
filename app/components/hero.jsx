import Link from 'next/link'


export default function Home() {
  return (
    <main className="w-full bg-white">
      <section className="min-h-[calc(100vh-68px)] border-b border-zinc-200 px-6">
        <div className="mx-auto flex min-h-[calc(100vh-68px)] max-w-5xl items-center justify-center">
          <div className="w-full max-w-3xl pb-10 text-center">

            {/* Organization Label */}
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a1d1d] sm:text-xs">
              NATIONAL CENTRE OF ARTIFICIAL INTELLIGENCE – NED UNIVERSITY
            </p>

            {/* Main Heading */}
            <h1 className="font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-5xl md:text-[3.4rem]">
              We are{" "}
              <span className="text-[#8a1d1d]">
                NCAI Autonomous
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-[11px] leading-5 text-zinc-600 sm:text-sm sm:leading-6">
              NCAI Autonomous&apos; mission is to be the home of practical
              self-driving research at NED University — the place where the
              brightest engineering students learn to deploy AI on full-scale
              vehicles, and connect with industry partners looking for their
              next generation of talent. To do this, we&apos;re building
              Pakistan&apos;s first autonomous car and taking it to the road.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Link
                href="/about/our-history"
                className="inline-flex min-w-[108px] items-center justify-center border border-black bg-black px-5 py-2.5 text-[9px] font-bold uppercase tracking-wide !text-white transition-colors duration-200 hover:border-[#8a1d1d] hover:bg-[#8a1d1d] hover:!text-white"
              >
                Learn More
              </Link>

              <Link
                href="/get-involved"
                className="inline-flex min-w-[108px] items-center justify-center border border-zinc-400 bg-white px-5 py-2.5 text-[9px] font-bold uppercase tracking-wide !text-black transition-colors duration-200 hover:border-black hover:bg-zinc-100 hover:!text-black"
              >
                Join the Team
              </Link>

              <Link
                href="/sponsorship-inquiry"
                className="inline-flex min-w-[108px] items-center justify-center border border-zinc-400 bg-white px-5 py-2.5 text-[9px] font-bold uppercase tracking-wide !text-black transition-colors duration-200 hover:border-black hover:bg-zinc-100 hover:!text-black"
              >
                Become a Sponsor
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}