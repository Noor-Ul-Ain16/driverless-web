'use client'

export default function AnnouncementSection() {
  return (
    <section className="w-full bg-white py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto mb-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-[2.15rem] font-bold text-black leading-tight mb-4">
              We are working on something exciting for 2026...
            </h2>
            <p className="text-lg italic text-zinc-600">Hint: It&apos;s on an F1 Track!</p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1734376687099-AMSC5LGEQHN4W3U0IORD/gallery3.jpg?format=1000w"
              alt="Autonomous race car"
              className="w-full max-w-xl rounded-sm object-cover"
            />
          </div>
        </div>
      </div>

      <hr className="max-w-6xl mx-auto mb-14 border-zinc-300" />

      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-[2.15rem] font-bold text-black mb-6">
          We are MIT Driverless
        </h3>

        <p className="text-base md:text-lg text-zinc-700 leading-relaxed mb-12">
          MIT Driverless&apos; mission is to be the hub of practical autonomy at MIT - to be
          the place where the brightest minds come to learn about the challenges in
          deploying software on full scale autonomous vehicles, and to connect them with our
          industry partners as they look for their future engineering leaders. To do so, we
          build autonomous racecars and compete in competitions around the world.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/about/our-history"
            className="bg-[#8a1d1d] hover:bg-[#6d0f0f] text-white text-sm font-semibold py-3 px-7 transition"
          >
            Learn more
          </a>
          <a
            href="/get-involved"
            className="bg-[#8a1d1d] hover:bg-[#6d0f0f] text-white text-sm font-semibold py-3 px-7 transition"
          >
            Join the Team
          </a>
          <a
            href="https://driverless.mit.edu/sponsorship-inquiry"
            target="_blank"
            rel="noreferrer"
            className="bg-[#8a1d1d] hover:bg-[#6d0f0f] text-white text-sm font-semibold py-3 px-7 transition"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  )
}
