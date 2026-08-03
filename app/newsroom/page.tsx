"use client"

import { useState } from "react"

export default function NewsroomPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full bg-white">
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black md:h-[28rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Newsroom</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Join Our Mailing List</h1>
          <p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">
            Join the mailing list to receive emails about upcoming events, team updates, job opportunities, and more.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <section className="rounded-[2rem] border border-gray-200 bg-zinc-950 p-8 text-white shadow-sm sm:p-10 mb-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Newsletter</p>
              <h2 className="mt-3 text-3xl font-bold">Fill out this simple form to subscribe</h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                We promise we will not spam you.
              </p>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-sm text-gray-200">
                  <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-red-400">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-black outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  />
                </label>
                <label className="block text-sm text-gray-200">
                  <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-red-400">Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-black outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  />
                </label>
                <label className="block text-sm text-gray-200">
                  <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-red-400">Message</span>
                  <textarea
                    placeholder="Optional"
                    className="h-32 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-black outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700"
                >
                  Subscribe
                </button>
                {submitted && (
                  <p className="rounded-3xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                    Thanks for subscribing.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a1d1d]">Follow Us on Social Media</p>
          <h2 className="mt-3 text-3xl font-bold text-black">Additional Links</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/company/mit-driverless/?viewAsMember=true" },
              { label: "Instagram", href: "https://www.instagram.com/mitdriverless/" },
              { label: "YouTube", href: "https://www.youtube.com/channel/UCLQjUhp1RPtsWAH0BgDxPxw" },
              { label: "Facebook", href: "https://www.facebook.com/mitdriverless" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex bg-[#8a1d1d] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#6d0f0f]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8a1d1d]">Newsletter Archive</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { label: "February 2020 Newsletter", href: "https://mailchi.mp/3e49cde4a52b/mit-driverless-newsletter-feb-2020" },
              { label: "April 2020 Newsletter", href: "https://mailchi.mp/07ec2d296e40/mit-driverless-newsletter-2699937" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-gray-200 bg-zinc-50 px-6 py-5 text-sm font-semibold text-zinc-700 transition hover:border-[#8a1d1d] hover:text-[#8a1d1d]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
