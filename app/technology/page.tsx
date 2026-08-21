"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState<"lidar" | "cameras" | "gps">("lidar");
  const [activeMedia, setActiveMedia] = useState<
    "default" | "high_perf" | "high_performance_system" | "lidar"
  >("default");

  const sensors = {
    lidar: {
      id: "lidar",
      title: "LiDAR Perception",
      subtitle: "360° Real-time 3D Point Cloud Sensing",
      videoUrl: "",
    },
    cameras: {
      id: "cameras",
      title: "Vision & Cameras",
      subtitle: "Multi-View Deep Learning Computer Vision",
      videoUrl: "",
    },
    gps: {
      id: "gps",
      title: "GPS & IMU Localization",
      subtitle: "Sub-Centimeter Positioning & Odometry",
      videoUrl: "",
    },
  };

  const activeSensor = sensors[activeTab];

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <main className="relative min-h-screen w-full bg-[#020813] text-white overflow-hidden">
      {/* --- REGION 1: OVERVIEW SECTION --- */}
      <section
        id="overview"
        className="relative z-10 scroll-mt-24 overflow-hidden py-14 md:py-20 bg-white text-slate-900"
      >
        {/* Soft radial glow for light background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_35%,rgba(14,116,144,0.08),rgba(255,255,255,1))]" />

        {/* Ambient fine grid overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px), linear-gradient(to right, rgba(2,132,199,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,132,199,0.08) 1px, transparent 1px)`,
            backgroundSize: `40px 40px, 20px 20px, 20px 20px`,
          }}
        />

        {/* Dynamic Animated Constellation Network - Compact & Fine Scale */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* --- LEFT CONSTELLATION CLUSTER (SCALED DOWN) --- */}
            <motion.g
              animate={{
                y: [0, -4, 3, 0],
                x: [0, 3, -3, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Thinner Network Lines */}
              <g stroke="rgba(2,132,199,0.35)" strokeWidth="0.5">
                <line x1="30" y1="220" x2="70" y2="160" />
                <line x1="70" y1="160" x2="130" y2="200" />
                <line x1="30" y1="220" x2="80" y2="270" />
                <line x1="70" y1="160" x2="80" y2="270" />
                <line x1="130" y1="200" x2="80" y2="270" />

                <line x1="130" y1="200" x2="180" y2="245" />
                <line x1="80" y1="270" x2="150" y2="330" />
                <line x1="130" y1="200" x2="150" y2="330" />
                <line x1="180" y1="245" x2="150" y2="330" />

                <line x1="30" y1="220" x2="35" y2="350" />
                <line x1="80" y1="270" x2="35" y2="350" />
                <line x1="35" y1="350" x2="90" y2="450" />
                <line x1="80" y1="270" x2="90" y2="450" />
                <line x1="150" y1="330" x2="90" y2="450" />

                <line x1="150" y1="330" x2="140" y2="420" />
                <line x1="90" y1="450" x2="140" y2="420" />
                <line x1="140" y1="420" x2="195" y2="380" />
                <line x1="150" y1="330" x2="195" y2="380" />
                <line x1="180" y1="245" x2="195" y2="380" />

                <line x1="70" y1="160" x2="105" y2="100" opacity="0.35" />
                <line x1="130" y1="200" x2="210" y2="150" opacity="0.35" />
                <line x1="35" y1="350" x2="15" y2="420" opacity="0.35" />
                <line x1="90" y1="450" x2="55" y2="505" opacity="0.35" />
                <line x1="140" y1="420" x2="180" y2="490" opacity="0.35" />
              </g>

              {/* Smaller Glowing Nodes */}
              <g fill="#0284c7" filter="url(#nodeGlow)">
                <circle cx="30" cy="220" r="1.5" />
                <circle cx="70" cy="160" r="2" />
                <circle cx="130" cy="200" r="2.2" />
                <circle cx="80" cy="270" r="2" />
                <circle cx="180" cy="245" r="1.5" />

                {/* Primary Left Focal Node */}
                <motion.circle
                  cx="150"
                  cy="330"
                  r="3.2"
                  fill="#0369a1"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                <circle cx="35" cy="350" r="1.2" />
                <circle cx="90" cy="450" r="2.2" />
                <circle cx="140" cy="420" r="2" />
                <circle cx="195" cy="380" r="1.2" />
                <circle cx="105" cy="100" r="1" />
                <circle cx="210" cy="150" r="1" />
                <circle cx="15" cy="420" r="1" />
                <circle cx="55" cy="505" r="1.2" />
                <circle cx="180" cy="490" r="1.2" />
              </g>
            </motion.g>

            {/* --- RIGHT CONSTELLATION CLUSTER (SCALED DOWN) --- */}
            <motion.g
              animate={{
                y: [0, 5, -3, 0],
                x: [0, -3, 3, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Thinner Network Lines */}
              <g stroke="rgba(2,132,199,0.35)" strokeWidth="0.5">
                <line x1="860" y1="80" x2="900" y2="135" />
                <line x1="900" y1="135" x2="960" y2="90" />
                <line x1="900" y1="135" x2="865" y2="200" />
                <line x1="960" y1="90" x2="975" y2="170" />
                <line x1="900" y1="135" x2="975" y2="170" />

                <line x1="865" y1="200" x2="930" y2="250" />
                <line x1="975" y1="170" x2="930" y2="250" />
                <line x1="900" y1="135" x2="930" y2="250" />
                <line x1="865" y1="200" x2="815" y2="245" />
                <line x1="930" y1="250" x2="815" y2="245" />

                <line x1="975" y1="170" x2="985" y2="290" />
                <line x1="930" y1="250" x2="985" y2="290" />
                <line x1="930" y1="250" x2="905" y2="350" />
                <line x1="815" y1="245" x2="905" y2="350" />

                <line x1="905" y1="350" x2="960" y2="370" />
                <line x1="985" y1="290" x2="960" y2="370" />
                <line x1="905" y1="350" x2="865" y2="440" />
                <line x1="960" y1="370" x2="920" y2="480" />
                <line x1="865" y1="440" x2="920" y2="480" />

                <line x1="815" y1="245" x2="760" y2="210" opacity="0.35" />
                <line x1="860" y1="80" x2="810" y2="55" opacity="0.35" />
                <line x1="960" y1="370" x2="990" y2="440" opacity="0.35" />
              </g>

              {/* Smaller Glowing Nodes */}
              <g fill="#0284c7" filter="url(#nodeGlow)">
                <circle cx="860" cy="80" r="2" />
                <circle cx="900" cy="135" r="2.2" />
                <circle cx="960" cy="90" r="1.5" />
                <circle cx="975" cy="170" r="2" />
                <circle cx="865" cy="200" r="1.5" />

                {/* Primary Right Focal Node */}
                <motion.circle
                  cx="930"
                  cy="250"
                  r="3.2"
                  fill="#0369a1"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />

                <circle cx="815" cy="245" r="1.5" />
                <circle cx="985" cy="290" r="1.2" />
                <circle cx="905" cy="350" r="2.2" />
                <circle cx="960" cy="370" r="2" />
                <circle cx="865" cy="440" r="1.2" />
                <circle cx="920" cy="480" r="1.2" />
                <circle cx="760" cy="210" r="1" />
                <circle cx="810" cy="55" r="1" />
                <circle cx="990" cy="440" r="1" />
              </g>
            </motion.g>

            {/* --- FINE TWINKLING BACKGROUND DUST --- */}
            {[
              { cx: 280, cy: 190, r: 0.8, d: 2.8 },
              { cx: 250, cy: 420, r: 0.7, d: 4.1 },
              { cx: 340, cy: 250, r: 1, d: 3.2 },
              { cx: 420, cy: 90, r: 0.7, d: 2.4 },
              { cx: 640, cy: 110, r: 0.8, d: 3.6 },
              { cx: 750, cy: 180, r: 1, d: 2.2 },
              { cx: 710, cy: 410, r: 0.7, d: 4.5 },
              { cx: 780, cy: 480, r: 0.8, d: 3.0 },
            ].map((star, idx) => (
              <motion.circle
                key={idx}
                cx={star.cx}
                cy={star.cy}
                r={star.r}
                fill="#0284c7"
                animate={{
                  opacity: [0.25, 0.85, 0.25],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: star.d,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        </div>

        {/* --- SECTION CONTENT --- */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center scale-90 transform-gpu origin-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-[28px] font-extrabold uppercase tracking-wider text-slate-900 sm:text-[34px] md:text-[40px]"
            >
              Autonomous Drive System
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-3 text-[15px] font-bold uppercase tracking-[0.25em] text-[#d32f2f]"
            >
              In Road Testing – NED University Main Campus
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-600 md:text-[18px]"
            >
              The Autonomous Drive System is NCAI&apos;s flagship platform, in
              active development with NED University&apos;s engineering teams[cite: 1]. It
              pairs LiDAR, radar, and camera perception with a deep-learning
              navigation stack, giving the vehicle a continuous read on the road
              around it — tuned for the unpredictable mix of traffic found on
              Pakistani streets, not just a closed test track[cite: 1].
            </motion.p>
          </motion.div>

          <motion.ul
            id="pillars"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listContainer}
            className="mx-auto mt-9 max-w-xl space-y-3.5 text-left text-base text-slate-700 md:text-[18px]"
          >
            {[
              "Deep-learning path and real-time decision making",
              "Multi-sensor fusion across LiDAR, radar, and vision",
              "ASIL-D-aligned, fail-operational control architecture",
              "HD live mapping and localization",
              "V2X connectivity for smart-city integration",
            ].map((capability, index) => (
              <motion.li key={index} variants={listItem} className="flex items-center gap-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-sky-600 shadow-[0_0_10px_rgba(2,132,199,0.15)]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <span>{capability}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* --- REGION 2: OUR SETUP SECTION --- */}
      <section className="relative w-full bg-[#1e1e20] py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          className="relative mx-auto max-w-6xl px-4 sm:px-6"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-zinc-700/50 bg-[#1e1e20] shadow-2xl">
            <AnimatePresence mode="wait">
              {activeMedia === "default" && (
                <motion.div
                  key="default-gif"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src="/av_website.gif"
                    alt="Autonomous Vehicle Setup"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Hotspot 1: High Performance Circuitry */}
                  <button
                    onClick={() => setActiveMedia("high_perf")}
                    aria-label="High Performance Circuitry"
                    title="High Performance Circuitry"
                    className="group absolute top-[46%] left-[45%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none z-10"
                  >
                    <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-zinc-400 opacity-75"></span>
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-zinc-300 bg-zinc-700 text-white shadow-lg group-hover:bg-zinc-600">
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-100 transition-transform group-hover:scale-125" />
                    </span>
                  </button>

                  {/* Hotspot 2: High Performance System */}
                  <button
                    onClick={() => setActiveMedia("high_performance_system")}
                    aria-label="High Performance System"
                    title="High Performance System"
                    className="group absolute top-[52%] left-[61%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none z-10"
                  >
                    <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-zinc-400 opacity-75"></span>
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-zinc-300 bg-zinc-700 text-white shadow-lg group-hover:bg-zinc-600">
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-100 transition-transform group-hover:scale-125" />
                    </span>
                  </button>

                  {/* Hotspot 3: Roof LiDAR Module */}
                  <button
                    onClick={() => setActiveMedia("lidar")}
                    aria-label="Roof LiDAR Module"
                    title="Roof LiDAR Module"
                    className="group absolute top-[32%] left-[56%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform hover:scale-110 focus:outline-none z-10"
                  >
                    <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-zinc-400 opacity-75"></span>
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-zinc-300 bg-zinc-700 text-white shadow-lg group-hover:bg-zinc-600">
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-100 transition-transform group-hover:scale-125" />
                    </span>
                  </button>
                </motion.div>
              )}

              {activeMedia === "high_perf" && (
                <motion.div
                  key="high-perf-gif"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src="/high_perf.gif"
                    alt="High Performance Circuitry"
                    fill
                    className="object-cover"
                    unoptimized
                  />

                  <button
                    onClick={() => setActiveMedia("default")}
                    className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-lg border border-zinc-600 bg-zinc-900/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-zinc-800"
                  >
                    ← Back to Overview
                  </button>
                </motion.div>
              )}

              {activeMedia === "high_performance_system" && (
                <motion.div
                  key="high-performance-system-gif"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src="/high_performance_system2.gif"
                    alt="High Performance System"
                    fill
                    className="object-cover"
                    unoptimized
                  />

                  <button
                    onClick={() => setActiveMedia("default")}
                    className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-lg border border-zinc-600 bg-zinc-900/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-zinc-800"
                  >
                    ← Back to Overview
                  </button>
                </motion.div>
              )}

              {activeMedia === "lidar" && (
                <motion.div
                  key="lidar-gif"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src="/lidar.gif"
                    alt="LiDAR Roof Sensors"
                    fill
                    className="object-cover"
                    unoptimized
                  />

                  <button
                    onClick={() => setActiveMedia("default")}
                    className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-lg border border-zinc-600 bg-zinc-900/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-zinc-800"
                  >
                    ← Back to Overview
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* --- REGION 3: 3-COLUMN SENSOR VIDEO SYSTEM --- */}
      <section className="relative w-full bg-[#1e1e20]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {Object.values(sensors).map((sensor) => {
                const isActive = activeTab === sensor.id;
                return (
                  <motion.button
                    key={sensor.id}
                    onClick={() => setActiveTab(sensor.id as "lidar" | "cameras" | "gps")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 text-left transition-all duration-300 shadow-xl backdrop-blur-sm ${
                      isActive
                        ? "border-[#d32f2f] bg-zinc-900 text-white ring-2 ring-zinc-800"
                        : "border-zinc-700/80 bg-zinc-900/90 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800"
                    }`}
                  >
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">
                        {sensor.title}
                      </h3>
                      <p
                        className={`mt-1 text-xs font-medium ${
                          isActive ? "text-[#38bdf8]" : "text-zinc-400"
                        }`}
                      >
                        {sensor.subtitle}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <span>{isActive ? "Active Feed" : "Select Feed"}</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          isActive ? "translate-x-1 text-[#d32f2f]" : "text-zinc-400 group-hover:translate-x-1"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="relative w-full bg-[#d32f2f] -mt-24 pt-32 pb-16">
            <div className="mx-auto max-w-5xl px-6 md:px-12">
              <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-4 shadow-2xl md:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSensor.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-4 text-white">
                      <h4 className="text-lg font-bold">{activeSensor.title}</h4>
                      <span className="rounded bg-red-950/60 px-2.5 py-1 text-xs font-semibold text-red-300 border border-red-800/40">
                        {activeSensor.subtitle}
                      </span>
                    </div>

                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-900 flex items-center justify-center">
                      <p className="text-sm text-zinc-500">Feed content for {activeSensor.title}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}