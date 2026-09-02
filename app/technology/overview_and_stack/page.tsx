"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom Cursor Glow Component
const CursorGlow = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 hidden md:block"
      style={{
        background: `radial-gradient(200px circle at ${cursorPosition.x}px ${cursorPosition.y}px,
         #c2bebe, transparent 20%)`,
      }}
    />
  );
};

// Visible Grey Floating Particles Component
const ParticleBackground = () => {
  const particles = Array.from({ length: 99 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => {
        const size = Math.random() * 3 + 2; // 2px to 5px for good visibility
        // Shades of grey for particle visibility on light background
        const isDarkGrey = i % 2 === 0;
        const color = isDarkGrey ? "#475569" : "#64748b"; 
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const duration = Math.random() * 12 + 8;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${initialY}%`,
              left: `${initialX}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              boxShadow: `0 0 6px ${color}80`,
            }}
            animate={{
              y: [0, Math.random() * -60 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.35, 0.85, 0.35],
              scale: [0.9, 1.3, 0.9],
            }}
            transition={{
              duration: duration/2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

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
      videoUrl: "/LiDAR Perception.mp4",
    },
    cameras: {
      id: "cameras",
      title: "Vision & Cameras",
      subtitle: "Multi-View Deep Learning Computer Vision",
      videoUrl: "/Camera-Vision.mp4",
    },
    gps: {
      id: "gps",
      title: "GPS & IMU Localization",
      subtitle: "Sub-Centimeter Positioning & Odometry",
      videoUrl: "/GPS.mp4",
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
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <main className="relative min-h-screen w-full bg-[#f1f5f9] text-slate-900 overflow-hidden">
      {/* Cursor Glow Overlay */}
      <CursorGlow />

      {/* --- REGION 1: OVERVIEW SECTION --- */}
      <section
        id="overview"
        className="relative z-10 scroll-mt-24 overflow-hidden flex flex-col items-center pt-28 pb-12 md:min-h-[100svh] md:justify-center md:pt-20 md:pb-20 bg-[#f1f5f9] text-slate-900 text-center"
      >
        {/* Dynamic Moving Grey Tiny Particles Overlay */}
        <ParticleBackground />

        {/* --- SECTION CONTENT --- */}
        <div className="zoom-responsive relative z-10 w-full mx-auto max-w-4xl px-6 text-center sm:scale-90 min-[1441px]:scale-100 transform-gpu origin-center">
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
              className="mt-3 text-[15px] font-bold uppercase tracking-[0.25em] text-[#8a1d1d]"
            >
              In Campus Road Testing – NED University Main Campus
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-700 md:text-[18px]"
            >
              
              The Autonomous Drive System is NCAI's flagship platform, in active development with 
              NED University's engineering teams. It pairs LiDAR, radar, and camera perception with a 
              deep-learning navigation stack, giving the vehicle a continuous read on the road 
              around it — tuned for the unpredictable mix of traffic found on Pakistani streets, not just
               a closed test track.
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
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm">
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

      {/* --- REGION 2: OUR SETUP SECTION (Background matched to Light Grey with Grey Particles) --- */}
      <section className="relative w-full bg-[#f1f5f9] pt-6 pb-14 md:py-20 overflow-hidden">
        {/* Same floating grey particles background */}
        <ParticleBackground />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
          className="zoom-responsive relative z-10 mx-auto max-w-6xl px-0 sm:px-6"
        >
          {/* Main media container - looping muted video clips */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden rounded-none border-x-0 border-y sm:rounded-2xl sm:border border-slate-300 bg-black shadow-2xl">
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
                  <video
                    src="/av_website.mp4"
                    aria-label="Autonomous Vehicle Setup"
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-fill sm:object-cover"
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
                  <video
                    src="/high_perf.mp4"
                    aria-label="High Performance Circuitry"
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-fill sm:object-cover"
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
                  <video
                    src="/high_performance_system2.mp4"
                    aria-label="High Performance System"
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-fill sm:object-cover"
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
                  <video
                    src="/lidar.mp4"
                    aria-label="LiDAR Roof Sensors"
                    autoPlay
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-fill sm:object-cover"
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
      <section className="mt-16 md:mt-30 relative w-full bg-[#f1f5f9] pb-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="zoom-responsive relative z-10 mx-auto max-w-5xl px-6 md:px-12">
            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              {Object.values(sensors).map((sensor) => {
                const isActive = activeTab === sensor.id;
                return (
                  <motion.button
                    key={sensor.id}
                    onClick={() => setActiveTab(sensor.id as "lidar" | "cameras" | "gps")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-2.5 sm:p-6 text-left transition-all duration-300 shadow-lg ${
                      isActive
                        ? "border-[#d32f2f] bg-white text-slate-900 ring-2 #8a1d1d"
                        : "border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-white"
                    }`}
                  >
                    <div>
                      <h3 className="text-[11px] leading-tight sm:text-xl font-bold tracking-tight">
                        {sensor.title}
                      </h3>
                      <p
                        className={`mt-1 hidden sm:block text-xs font-medium ${
                          isActive ? "text-[#8a1d1d]" : "text-slate-500"
                        }`}
                      >
                        {sensor.subtitle}
                      </p>
                    </div>

                    <div className="mt-3 sm:mt-6 flex items-center gap-2 text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                      <span className="hidden sm:inline">{isActive ? "Active Feed" : "Select Feed"}</span>
                      <span className="sm:hidden">{isActive ? "Active" : "Select"}</span>
                      <svg
                        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform ${
                          isActive ? "translate-x-1 text-[#8a1d1d]" : "text-slate-400 group-hover:translate-x-1"
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

          <div className="relative w-full bg-[#8a1d1d] -mt-10 pt-20 pb-16 md:-mt-24 md:pt-32">
            <div className="zoom-responsive mx-auto max-w-5xl px-0 md:px-12">
              <div className="overflow-hidden rounded-none border-x-0 border-y sm:rounded-2xl sm:border border-zinc-800 bg-zinc-950 p-2 sm:p-4 shadow-2xl md:p-6">
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
                      {activeSensor.videoUrl ? (
                        <video
                          key={activeSensor.videoUrl}
                          src={activeSensor.videoUrl}
                          className="h-full w-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                          controls
                        />
                      ) : (
                        <p className="text-sm text-zinc-400">Feed content for {activeSensor.title}</p>
                      )}
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