"use client"

import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full bg-white text-black">

      <div className="pt-20 pb-16 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">CONTACT</p>
          <h1 className="mt-10 text-3xl font-black uppercase tracking-tight text-black sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base mx-auto">
            Have questions about the team, sponsorship, or collaboration? Reach out and our team will get back to you shortly.          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <section className="space-y-8 rounded-[2rem] border border-gray-200 bg-zinc-50 p-8 shadow-sm">
            <div>
              <h2 className="text-3xl font-bold text-black">Get in touch</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Whether you're interested in joining the team, sponsoring our work, or collaborating on autonomous driving research, we&apos;re happy to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="mb-4 text-xs font-bold uppercase text-[#8a1d1d]">
                  EMAIL
                </p>                
                <p className="mt-2 text-gray-700"></p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="mb-4 text-xs font-bold uppercase text-[#8a1d1d]">
                  PHONE
                </p>               
                 <p className="mt-2 text-gray-700">Please contact us by email</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="mb-4 text-xs font-bold uppercase text-[#8a1d1d]">
                  LOCATION
                </p>                
                <p className="mt-2 text-gray-700"></p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase font-bold tracking-[0.3em]">Follow us</p>
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
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full 
                    border border-gray-200 bg-white text-sm font-semibold text-gray-600 transition
                     hover:bg-[#81d1d] hover:text-white"
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
                  <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">First name</span>
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  />
                </label>
                <label className="block text-sm text-gray-700">
                  <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">Last name</span>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  />
                </label>
              </div>

              <label className="block text-sm text-gray-700">
                <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">Email address</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </label>

              <label className="block text-sm text-gray-700">
                <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">Phone number</span>
                <input
                  type="text"
                  placeholder="Optional"
                  className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </label>

              <label className="block text-sm text-gray-700">
                <span className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">Message</span>
                <textarea
                  placeholder="Tell us about your inquiry"
                  className="h-36 w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#8a1d1d] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-zinc-900"
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
