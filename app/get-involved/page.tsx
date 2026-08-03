"use client"

import { useRef } from "react"

export default function GetInvolvedPage() {
  const formRef = useRef<HTMLDivElement>(null)

  const scrollToRoles = () => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <div className="w-full bg-white">
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black md:h-[28rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Get Involved</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Join the team!</h1>
          <p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">
            Become part of a team dedicated to making an autonomous race car capable of high-speed head-to-head races.
          </p>
          <button
            type="button"
            onClick={scrollToRoles}
            className="mt-8 inline-flex rounded-full bg-red-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-red-700"
          >
            Apply Now
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-black">Join the team</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                MIT Driverless is looking for talented and passionate engineers to be a part of a team dedicated to making an autonomous race car capable of high-speed, head-to-head racing.
              </p>
            </div>

            <div className="space-y-6 rounded-3xl border border-gray-200 bg-zinc-50 p-8 shadow-sm">
              <div>
                <h3 className="text-xl font-semibold text-black">What we value</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Technical skills are important, but so is curiosity, teamwork, and a willingness to learn. Our team spends time collaborating over code, hardware, and design while building strong friendships that last beyond our time together.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black">Career pathways</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Our teammates go on to companies like Motional, Waymo, Aptiv, Tesla, and Zoox. Being part of MIT Driverless gives you real autonomy experience and a strong path into the autonomous vehicle industry.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">Currently recruiting</p>
              <h3 className="mt-3 text-2xl font-bold text-black">Roles we are hiring for</h3>
            </div>

            <ul className="space-y-4 text-gray-700">
              <li className="rounded-3xl border border-gray-200 bg-zinc-50 p-5">
                <p className="font-semibold text-black">State Estimation</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Responsible for accurately estimating vehicle pose and kinematic state using GPS, IMU, cameras, and sensor fusion.
                </p>
              </li>
              <li className="rounded-3xl border border-gray-200 bg-zinc-50 p-5">
                <p className="font-semibold text-black">Perception</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Ensure accurate, fast, and robust perception during high-speed racing with camera, LiDAR, and radar data.
                </p>
              </li>
              <li className="rounded-3xl border border-gray-200 bg-zinc-50 p-5">
                <p className="font-semibold text-black">Simulation</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Design and run race scenarios, validate control logic, and test autonomous systems in simulation.
                </p>
              </li>
              <li className="rounded-3xl border border-gray-200 bg-zinc-50 p-5">
                <p className="font-semibold text-black">Controls</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Develop model predictive control and planning algorithms for safe, aggressive vehicle behavior.
                </p>
              </li>
              <li className="rounded-3xl border border-gray-200 bg-zinc-50 p-5">
                <p className="font-semibold text-black">Infrastructure</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Ensure the integrity and dependability of ROS, cloud infrastructure, and CI testing workflows.
                </p>
              </li>
              <li className="rounded-3xl border border-gray-200 bg-zinc-50 p-5">
                <p className="font-semibold text-black">Path Planning</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Develop multi-agent planning algorithms to maneuver around other vehicles at similar speeds.
                </p>
              </li>
              <li className="rounded-3xl border border-gray-200 bg-zinc-50 p-5">
                <p className="font-semibold text-black">Biz Ops</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Support sponsor management, marketing, event planning, and other business initiatives.
                </p>
              </li>
            </ul>
          </aside>
        </div>

        <div className="mt-12 rounded-3xl border border-gray-200 bg-zinc-50 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8a1d1d]">2025-2026 Recruiting Timeline</p>
          <p className="mt-3 text-gray-700">
            Applications are reviewed on a rolling basis. Click the Apply Now button to begin.
          </p>
        </div>

        <div ref={formRef} className="mt-16 rounded-3xl bg-zinc-950 px-6 py-10 text-white shadow-2xl sm:px-10">
          <div className="flex items-center justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Application</p>
              <h2 className="mt-3 text-3xl font-bold">Apply to join</h2>
              <p className="mt-3 max-w-2xl text-sm text-zinc-300 sm:text-base">
                Use the official MIT Driverless application form for current open positions.
              </p>
            </div>
            <a
              href="https://forms.office.com/r/ERMaXyCwyq"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-zinc-200"
            >
              Open Form
            </a>
          </div>
          <p className="mt-8 text-sm text-zinc-300">
            We will contact you with information about open positions after your submission is reviewed.
          </p>
        </div>
      </main>
    </div>
  )
}
