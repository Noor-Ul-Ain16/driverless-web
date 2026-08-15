"use client";


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function TechnologyPage() {
  // Active sensor track karne ke liye state
  const [activeTab, setActiveTab] = useState<"lidar" | "cameras" | "gps">("lidar");


  // Sensor data object (Video URLs, Titles, Descriptions)
  const sensors = {
    lidar: {
      id: "lidar",
      title: "LiDAR Perception",
      subtitle: "360° Real-time 3D Point Cloud Sensing",
      videoUrl: "", // Replace with your video URL
    },
    cameras: {
      id: "cameras",
      title: "Vision & Cameras",
      subtitle: "Multi-View Deep Learning Computer Vision",
      videoUrl: "", // Replace with your video URL
    },
    gps: {
      id: "gps",
      title: "GPS & IMU Localization",
      subtitle: "Sub-Centimeter Positioning & Odometry",
      videoUrl: "", // Replace with your video URL
    },
  };


  const activeSensor = sensors[activeTab];


  // Animation Variants
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
    <main className="w-full bg-white overflow-x-hidden">
      <section
        id="overview"
        className="scroll-mt-24 py-16 md:py-20"
      >
        <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
          {/* Main Header Container with Staggered Fade-in */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.15 }}
          >
            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl md:text-5xl"
            >
              Autonomous Drive System
            </motion.h1>


            {/* Road Testing Status */}
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-[#8a1d1d]"
            >
              In Road Testing – NED University Main Campus
            </motion.p>


            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-zinc-700 md:text-base"
            >
              The Autonomous Drive System is NCAI&apos;s flagship platform, in
              active development with NED University&apos;s engineering teams. It
              pairs LiDAR, radar, and camera perception with a deep-learning
              navigation stack, giving the vehicle a continuous read on the road
              around it — tuned for the unpredictable mix of traffic found on
              Pakistani streets, not just a closed test track.
            </motion.p>
          </motion.div>


          {/* Technology Capabilities List */}
          <motion.ul
            id="pillars"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listContainer}
            className="mx-auto mt-8 max-w-2xl space-y-3 text-left text-sm text-zinc-700 md:text-base"
          >
            {[
              "Deep-learning path and real-time decision making",
              "Multi-sensor fusion across LiDAR, radar, and vision",
              "ASIL-D-aligned, fail-operational control architecture",
              "HD live mapping and localization",
              "V2X connectivity for smart-city integration",
            ].map((capability, index) => (
              <motion.li key={index} variants={listItem} className="flex gap-3">
                <span className="text-[#8a1d1d]">•</span>
                <span>{capability}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>


        {/* --- 3-COLUMN SENSOR VIDEO SYSTEM WITH FULL-WIDTH RED BG --- */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          {/* 3 Boxes Grid - z-10 layered over red bg */}
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
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 text-left transition-all duration-300 shadow-xl ${isActive
                        ? "border-[#8a1d1d] bg-zinc-900 text-white ring-2 ring-zinc-800"
                        : "border-zinc-200 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50"
                      }`}
                  >
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">
                        {sensor.title}
                      </h3>
                      <p
                        className={`mt-1 text-xs font-medium ${isActive ? "text-zinc-300" : "text-zinc-500"
                          }`}
                      >
                        {sensor.subtitle}
                      </p>
                    </div>


                    <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                      <span>{isActive ? "Active Feed" : "Select Feed"}</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${isActive ? "translate-x-1 text-[#8a1d1d]" : "text-zinc-400 group-hover:translate-x-1"
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


          {/* Full-Width Red Background starting from half of the 3 boxes */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-[#8a1d1d] -mt-24 pt-32 pb-16">
            <div className="mx-auto max-w-5xl px-6 md:px-12">
              {/* Selected Video Display Section */}
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
                      <div></div>
                    </div>


                    {/* Video Player */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                      <video
                        key={activeSensor.videoUrl}
                        controls
                        autoPlay
                        muted
                        loop
                        className="h-full w-full object-cover"
                      >
                        <source src={activeSensor.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
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