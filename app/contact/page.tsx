"use client"

import { useState } from "react"

export default function ContactPage() {
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Contact</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">
            Have questions about the team, sponsorship, or collaboration? Reach out and our team will get back to you shortly.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <section className="space-y-8 rounded-[2rem] border border-gray-200 bg-zinc-50 p-8 shadow-sm">
            <div>
              <h2 className="text-3xl font-bold text-black">Get in touch</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Whether you&apos;re interested in joining the team, sponsoring our work, or collaborating on autonomous driving research, we&apos;re happy to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-red-600">Email</p>
                <p className="mt-2 text-gray-700">driverless-exec@mit.edu</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-red-600">Phone</p>
                <p className="mt-2 text-gray-700">Please contact us by email</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-red-600">Location</p>
                <p className="mt-2 text-gray-700">265 Massachusetts Avenue, Cambridge, MA 02139, USA</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-red-600">Follow us</p>
              <div className="flex items-center gap-3">
                {[
                  { label: "LinkedIn", href: "#" },
                  { label: "Instagram", href: "#" },
                  { label: "YouTube", href: "#" },
                  { label: "Facebook", href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-600 transition hover:bg-red-600 hover:text-white"
                  >
                    {item.label.slice(0, 1)}
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-3xl font-bold text-black">Send us a message</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Fill out the form and let us know how we can help. We typically reply within 1-2 business days.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-gray-700">
                  <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-red-600">First name</span>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  />
                </label>
                <label className="block text-sm text-gray-700">
                  <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-red-600">Last name</span>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  />
                </label>
              </div>

              <label className="block text-sm text-gray-700">
                <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-red-600">Email address</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </label>

              <label className="block text-sm text-gray-700">
                <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-red-600">Phone number</span>
                <input
                  type="text"
                  placeholder="Optional"
                  className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </label>

              <label className="block text-sm text-gray-700">
                <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-red-600">Message</span>
                <textarea
                  placeholder="Tell us about your inquiry"
                  className="h-36 w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-zinc-900"
              >
                Submit
              </button>

              {submitted && (
                <p className="rounded-3xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  Thanks! Your message has been sent.
                </p>
              )}
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}
