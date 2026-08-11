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
      url: 'https://www.dw.com/en/pakistan-inside-an-ai-powered-driverless-car/video-75475114',
    },
    {
      title: 'Express live news',
      duration: '11:05',
      thumbnail: 'https://img.youtube.com/vi/_7UUt-FnDh0/hqdefault.jpg',
      url: 'https://youtu.be/_7UUt-FnDh0?si=cc',
    },
    {
      title: 'Express News (morning show)',
      duration: '07:14',
      thumbnail: 'https://img.youtube.com/vi/DGUjmhD1ERU/hqdefault.jpg',
      url: 'https://youtu.be/DGUjmhD1ERU?si=BZDrmb6iZfWGQzay',
    },
    {
      title: '92 news',
      duration: '05:25',
      thumbnail: 'https://img.youtube.com/vi/a1c-i3FRtHQ/hqdefault.jpg',
      url: 'https://youtu.be/a1c-i3FRtHQ?si=1iwZNrsftcZZR0iq',
    },
    {
      title: 'Aaj news',
      duration: '08:12',
      thumbnail: 'https://img.youtube.com/vi/VHYWY_5WGAs/hqdefault.jpg',
      url: 'https://youtu.be/VHYWY_5WGAs?si=QIqz4LUUsIcexVAy',
    },
    {
      title: 'ARY news',
      thumbnail: 'https://img.youtube.com/vi/wPhRGoNWpys/hqdefault.jpg',
      url: 'https://youtube.com/shorts/wPhRGoNWpys?si=SsdMtznnWU13wMoW',
    },
    {
      title: 'GTV',
      duration: '07:40',
      thumbnail: 'https://img.youtube.com/vi/ODpH0acv6iM/hqdefault.jpg',
      url: 'https://youtu.be/ODpH0acv6iM?si=Ibie3UiSi91u4Krx',
    },
    {
      title: 'Nukta',
      thumbnail: 'https://img.youtube.com/vi/osnWkBfsi_Y/hqdefault.jpg',
      url: 'https://youtube.com/shorts/osnWkBfsi_Y?si=osWXzqGEdFkubtU7',
    },
    {
      title: 'BOL news',
      duration: '03:55',
      thumbnail: 'https://img.youtube.com/vi/GaaCrI3dRx0/hqdefault.jpg',
      url: 'https://youtu.be/GaaCrI3dRx0?si=bPLoo3a8SYVdmQxQ',
    },
    {
      title: 'Startup pakistan',
      duration: '00:17',
      thumbnail: 'video-image1.jpg',
      url: 'https://www.facebook.com/StartupPakistanSP/videos/1939950670199972/',
    },
    {
      title: 'TNN TV',
      thumbnail: 'https://img.youtube.com/vi/JhdLrCFR0J4/hqdefault.jpg',
      url: 'https://youtube.com/shorts/JhdLrCFR0J4?si=tQ80SgZhbcGqdCWYQ',
    },
    {
      title: 'Karachi matters',
      duration: '03:24',
      thumbnail: 'video-image2.jpg',
      url: 'https://www.facebook.com/share/v/1D2hmwe1kG/',
    },
    {
      title: 'Public news',
      duration: '08:03',
      thumbnail: 'https://img.youtube.com/vi/VMucmTK9c1Q/hqdefault.jpg',
      url: 'https://youtu.be/VMucmTK9c1Q?si=faf48oLxvA7wRgVT',
    },
    {
      title: 'TOK (times of karachi)',
      duration: '06:13',
      thumbnail: 'https://img.youtube.com/vi/3546aRgtk8Q/hqdefault.jpg',
      url: 'https://youtu.be/3546aRgtk8Q?si=s5M75v5d2ZDOiLwF',
    },
    {
      title: 'ABN news',
      duration: '07:48',
      thumbnail: 'https://img.youtube.com/vi/zdakGkhKZJk/hqdefault.jpg',
      url: 'https://youtu.be/zdakGkhKZJk?si=j4NYcUGnShnT1PX4',
    },
    {
      title: 'Independent Urdu',
      duration: '02:13',
      thumbnail: 'https://img.youtube.com/vi/f-Y8yNjKhNc/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=f-Y8yNjKhNc',
    },
    {
      title: 'Morning Asia',
      duration: '10:20',
      thumbnail: 'video-image3.jpg',
      url: 'https://www.facebook.com/AsiaOneNewsOfficial/videos/morning-asia-pakistans-first-ai-driverless-car-test-drive-ned-university-dr-muha/1435405401627968/',
    },
    {
      title: 'Nukta',
      thumbnail: 'https://img.youtube.com/vi/osnWkBfsi_Y/hqdefault.jpg',
      url: 'https://www.youtube.com/shorts/osnWkBfsi_Y',
    },
    {
      title: 'Dawn',
      thumbnail: '',
      url: 'https://www.facebook.com/dawndotcom/videos/pakistans-first-ai-driverless-car-is-taking-shape-at-the-university-of-karachi-c/1875616206396455/',
    },
  ]

  // News Logos
  const sponsors = [
    { name: '92 News HD Plus', logo: '/92_News_HD_Plus_logo.png' },
    { name: 'ABN News', logo: '/abn news.jpeg' },
    { name: 'ARY News', logo: '/ary.png' },
    { name: 'Asia One', logo: '/asia one.png' },
    { name: 'BOL News', logo: '/bol.jpg' },
    { name: 'Dawn', logo: '/dawn.png' },
    { name: 'DW', logo: '/dw.jpg' },
    { name: 'Express News', logo: '/express-news-logo-png_seeklogo-390653.png' },
    { name: 'GTV News', logo: '/gtv news.jpeg' },
    { name: 'Independent Urdu', logo: '/independent urdu.png' },
    { name: 'Karachi Matters', logo: '/karachi matters.jpg' },
    { name: 'Aaj News', logo: '/no background_aaj-tv-aaj-news-logo-png.png' },
    { name: 'Nukta', logo: '/nukta.png' },
    { name: 'Public News', logo: '/public news.jpg' },
    { name: 'Startup Pakistan', logo: '/startup pakistan.jpeg' },
    { name: 'Times of Karachi', logo: '/times of karachi.jpeg' },
  ]

  return (
    <div className="relative w-full bg-white text-black pb-28">
      <div className="pt-20 pb-16 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mt-10 text-3xl font-black uppercase tracking-tight text-black sm:text-5xl">
            Get the Latest Updates
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base mx-auto">
            Join to receive the latest news, event announcements, career opportunities, team updates, and more.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 pb-20 md:px-12">
        {/* Social Media */}
        <section className="mb-16 rounded-2xl border border-zinc-200 bg-[#8a1d1d] p-6 md:p-8">
          <p className="text-xs text-center font-bold uppercase tracking-[0.25em] text-zinc-200">
            Follow Us on Social Media
          </p>

          <h2 className="mt-10 text-2xl text-center font-black uppercase tracking-tight text-white md:text-3xl">
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
                className="inline-flex bg-white border border-black px-3 py-3 text-xs 
                font-bold uppercase tracking-[0.2em] text-black transition hover:bg-zinc-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-20 rounded-2xl border border-zinc-200 bg-zinc-200 p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
                Newsletter
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl leading-tight text-left">
                Fill out this form to stay connected and receive our latest news/updates.
              </h2>
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

        {/* Videos */}
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

                  {video.duration && (
                    <span className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[10px] font-bold text-white">
                      {video.duration}
                    </span>
                  )}
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

      {/* CONSTANT FLOATING WHITE LOGO STRIP AT BOTTOM */}
      <div className="fixed bottom-0 left-0 z-50 w-full overflow-hidden border-t border-zinc-200 bg-zinc-100 py-3 shadow-md">
        <div className="animate-marquee-slow flex items-center gap-12">
          {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => {
            // Safety check: Skip rendering if item or logo is missing
            if (!sponsor || !sponsor.logo) return null;

            return (
              <div
                key={`${sponsor.name || 'sponsor'}-${index}`}
                className="flex h-12 w-28 shrink-0 items-center justify-center"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name || 'Sponsor Logo'}
                  
                  className="max-h-10 max-w-full object-contain grayscale opacity-100 transition duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>

  )
}