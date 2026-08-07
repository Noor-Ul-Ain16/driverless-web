'use client'

import { useState } from 'react'

export default function NewsroomPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const sampleVideos = [
    {
      title: 'DW news',
      duration: '03:05',
      thumbnail: 'https://static.dw.com/image/75475114_604.jpg',
      url: 'https://www.dw.com/en/pakistan-inside-an-ai-powered-driverless-car/video-75475114 '
    },
    {
      title: 'Express live news',
      duration: '11:05',
      thumbnail: 'https://img.youtube.com/vi/_7UUt-FnDh0/hqdefault.jpg',
      url: 'https://youtu.be/_7UUt-FnDh0?si=cc'
    },
    {
      title: 'Express News (morning show)',
      duration: '07:14',
      thumbnail: 'https://img.youtube.com/vi/DGUjmhD1ERU/hqdefault.jpg',
      url: 'https://youtu.be/DGUjmhD1ERU?si=BZDrmb6iZfWGQzay	'
    },
    {
      title: '92 news',
      duration: '05:25',
      thumbnail: 'https://img.youtube.com/vi/a1c-i3FRtHQ/hqdefault.jpg',
      url: 'https://youtu.be/a1c-i3FRtHQ?si=1iwZNrsftcZZR0iq'
    },

    {
      title: 'Aaj news',
      duration: '08:12',
      thumbnail: 'https://img.youtube.com/vi/VHYWY_5WGAs/hqdefault.jpg',
      url: 'https://youtu.be/VHYWY_5WGAs?si=QIqz4LUUsIcexVAy'
    },

    {
      title: 'ARY news',
      thumbnail: 'https://img.youtube.com/vi/wPhRGoNWpys/hqdefault.jpg',
      url: 'https://youtube.com/shorts/wPhRGoNWpys?si=SsdMtznnWU13wMoW'
    },

    {
      title: 'GTV',
      duration: '07:40',
      thumbnail: 'https://img.youtube.com/vi/ODpH0acv6iM/hqdefault.jpg',
      url: 'https://youtu.be/ODpH0acv6iM?si=Ibie3UiSi91u4Krx'
    },

    {
      title: 'Nukta',
      thumbnail: 'https://img.youtube.com/vi/osnWkBfsi_Y/hqdefault.jpg',
      url: 'https://youtube.com/shorts/osnWkBfsi_Y?si=osWXzqGEdFkubtU7'
    },

    {
      title: 'BOL news',
      duration: '03:55',
      thumbnail: 'https://img.youtube.com/vi/GaaCrI3dRx0/hqdefault.jpg',
      url: 'https://youtu.be/GaaCrI3dRx0?si=bPLoo3a8SYVdmQxQ'
    },

    {
      title: 'Startup pakistan',
      duration: '00:17',
      thumbnail: 'video-image1.jpg',
      url: 'https://www.facebook.com/StartupPakistanSP/videos/1939950670199972/'
    },

    {
      title: 'TNN TV',
      thumbnail: 'https://img.youtube.com/vi/JhdLrCFR0J4/hqdefault.jpg',
      url: 'https://youtube.com/shorts/JhdLrCFR0J4?si=tQ80SgZhbcGqdCWYQ'
    },

    {
      title: 'Karachi matters',
      duration: '03:24',
      thumbnail: 'video-image2.jpg',
      url: 'https://www.facebook.com/share/v/1D2hmwe1kG/'
    },

    {
      title: 'Public news',
      duration: '08:03',
      thumbnail: 'https://img.youtube.com/vi/VMucmTK9c1Q/hqdefault.jpg',
      url: 'https://youtu.be/VMucmTK9c1Q?si=faf48oLxvA7wRgVT'
    },

    {
      title: 'TOK (times of karachi)',
      duration: '06:13',
      thumbnail: 'https://img.youtube.com/vi/3546aRgtk8Q/hqdefault.jpg',
      url: 'https://youtu.be/3546aRgtk8Q?si=s5M75v5d2ZDOiLwF'
    },

    {
      title: 'ABN news ',
      duration: '07:48',
      thumbnail: 'https://img.youtube.com/vi/zdakGkhKZJk/hqdefault.jpg',
      url: 'https://youtu.be/zdakGkhKZJk?si=j4NYcUGnShnT1PX4 '
    },

    {
      title: 'Independent Urdu',
      duration: '02:13',
      thumbnail: 'https://img.youtube.com/vi/f-Y8yNjKhNc/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=f-Y8yNjKhNc '
    },

    {
      title: 'Morning Asia',
      duration: '10:20',
      thumbnail: 'video-image3.jpg',
      url: 'https://www.facebook.com/AsiaOneNewsOfficial/videos/morning-asia-pakistans-first-ai-driverless-car-test-drive-ned-university-dr-muha/1435405401627968/ '
    },

    {
      title: 'Nukta',
      thumbnail: 'https://img.youtube.com/vi/osnWkBfsi_Y/hqdefault.jpg',
      url: 'https://www.youtube.com/shorts/osnWkBfsi_Y'
    }

  ]

  return (
    <div className="w-full bg-white text-black">
      <div className="pt-20 pb-16 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
            Newsroom
          </p>
          <h1 className="mt-10 text-3xl font-black uppercase tracking-tight text-black sm:text-5xl">
            Join Our Mailing List
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base mx-auto">
            Join the mailing list to receive emails about upcoming events, team updates, job opportunities, and more.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 pb-20 md:px-12">
        <section className="mb-16 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 md:p-8">
          <p className="text-xs text-center font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
            Follow Us on Social Media
          </p>
          <h2 className="mt-2 text-2xl text-center font-black uppercase tracking-tight text-black md:text-3xl">
            Additional Links
          </h2>
          <div className="mt-6 justify-center flex flex-wrap gap-4">
            {[
              { label: 'LinkedIn', href: '' },
              { label: 'Instagram', href: '' },
              { label: 'YouTube', href: '' },
              { label: 'Facebook', href: '' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex bg-[#fffff] border border-black px-3 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section className="mb-20 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
                Newsletter
              </p>
              <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-black sm:text-4xl">
                Fill out this simple form to subscribe
              </h2>
              <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
                We promise we will not spam you.
              </p>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-black">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition focus:border-[#8a1d1d]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-black">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition focus:border-[#8a1d1d]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-black">
                    Message
                  </span>
                  <textarea
                    placeholder="Optional"
                    className="h-28 w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-black placeholder-zinc-400 outline-none transition focus:border-[#8a1d1d]"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center bg-[#8a1d1d] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#6d0f0f]"
                >
                  Subscribe
                </button>

                {submitted && (
                  <p className="border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-xs font-semibold text-emerald-700">
                    Thanks for subscribing.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
            Media
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-black md:text-3xl">
            Videos
          </h2>

          <div className="mt-6 flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-zinc-300">
            {sampleVideos.map((video, idx) => (
              <a
                key={idx}
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="group block w-[280px] shrink-0 border border-zinc-200 bg-white p-3 transition hover:border-[#8a1d1d]"
              >
                <div className="relative h-40 w-full overflow-hidden bg-zinc-100">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[10px] font-bold text-white">
                    {video.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-black tracking-tight group-hover:text-[#8a1d1d]">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>
        </section>

        {/* Archive Section */}
        <section>
          <p className="text-left text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
            Newsletter Archive
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <p className="max-w-2xl text-left text-[11px] leading-5 text-zinc-600 sm:text-sm sm:leading-6">
              Newsletters coming soon
            </p>

          </div>
        </section>
      </main>
    </div>
  )
}