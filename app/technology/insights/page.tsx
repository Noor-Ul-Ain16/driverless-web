"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TechnologyInsightsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const sections = [
    {
      tag: "Data Collection & Mapping",
      title: "Data Collection & 3D High-Definition Mapping",
      description:
        "Data collection and mapping are fundamental processes in the development of self-driving cars, enabling the vehicle to perceive its surroundings, make decisions, and navigate autonomously. These processes involve gathering vast amounts of sensor data, building detailed maps of the environment, and continuously updating that information to ensure safe and efficient driving.",
      images: [
        "/mapping and data collection image1.png",
        "/mapping and data collection image2.png",
      ],
      subsections: [
        {
          heading: "Data Collection for Self-Driving Cars",
          bullets: [
            {
              label: "LiDAR (Light Detection and Ranging)",
              desc: "Emits laser pulses creating a 3D point cloud for spatial data to identify obstacles, boundaries, and objects.",
            },
            {
              label: "Cameras",
              desc: "Captures visual images of road signs, lane markings, traffic lights, and pedestrians to interpret visual cues.",
            },
            {
              label: "Radar",
              desc: "Detects speed and distance of nearby objects across all weather conditions, useful for vehicle tracking.",
            },
            {
              label: "GPS and IMUs",
              desc: "High-precision GPS (e.g. Reach Rover RS2) pinpoints location; IMUs measure acceleration and rotation.",
            },
            {
              label: "Ultrasonic Sensors",
              desc: "Provides short-range proximity detection for tight spaces and parking maneuvers.",
            },
          ],
        },
        {
          heading: "3D Mapping in Autonomous Driving",
          bullets: [
            {
              label: "Creation of HD Maps",
              desc: "Stores lane-level accuracy, road geometry, slopes, curves, dynamic signs, signals, and rules of the road.",
            },
            {
              label: "SLAM Engine",
              desc: "Simultaneous Localization and Mapping tracks location while building live maps without external references.",
            },
            {
              label: "Data Fusion & Processing",
              desc: "Combines multi-sensor inputs into machine learning models to classify conditions and predict reactions.",
            },
          ],
        },
      ],
    },
    {
      tag: "Coordinate Tracking",
      title: "How Coordinates Collection Works & Importance",
      description:
        "Self-driving cars rely on a combination of technologies to collect accurate location coordinates. Sub-centimeter coordinate tracking guarantees pinpoint lane guidance, dynamic trajectory alignment, and resilient dead reckoning during signal loss.",
      images: [
        "/GPS image1.png",
        "/GPS image2.png",
        "/GPS image3.png",          
      ],
      subsections: [
        {
          heading: "Coordinate Systems & Tracking Methods",
          bullets: [
            {
              label: "Global Positioning System (GPS)",
              desc: "High-precision systems like Reach Rover RS2 pinpoint location down to centimeter accuracy.",
            },
            {
              label: "RTK (Real-Time Kinematic) GPS",
              desc: "Enhances precision using base station corrections to eliminate satellite atmospheric distortion.",
            },
            {
              label: "Inertial Measurement Units (IMUs)",
              desc: "Estimates vehicle trajectory via dead reckoning during GPS blackouts in tunnels or urban canyons.",
            },
            {
              label: "Wheel Encoders",
              desc: "Tracks physical wheel rotation counts to maintain accurate distance estimates when GPS is lost.",
            },
          ],
        },
        {
          heading: "Importance, Real-Time Updates & Challenges",
          bullets: [
            {
              label: "Core Importance",
              desc: "Enables accurate Localization, dynamic Route Navigation, Obstacle Avoidance, and Map Matching.",
            },
            {
              label: "Real-Time Collection",
              desc: "Continuously streams satellite data and sensors multiple times per second for dynamic decisions.",
            },
            {
              label: "Signal & Multipath Challenges",
              desc: "Overcomes signal loss, urban signal bouncing (multipath), processing latency, and adverse weather.",
            },
          ],
        },
      ],
    },
    {
      tag: "Visual Sensors & Processing",
      title: "Cameras, Visual Data Processing & ROS Scenarios",
      description:
        "Computer vision pipelines identify objects, lanes, and signals, driving automated ROS state publishing and depth-based braking scenarios for obstacle avoidance.",
      images: [
        "/visual data processing (object and lane detection) image1.png",
        "/visual data processing (object detection_or_avoidance) image2.png",
      ],
      subsections: [
        {
          heading: "Cameras and Visual Sensors",
          bullets: [
            {
              label: "Front-Facing Cameras",
              desc: "Wide-angle road views for detecting lane markings, signals, road signs, and forward vehicles.",
            },
            {
              label: "Side & Rear Cameras",
              desc: "Monitors blind spots, pedestrians, and cyclists for safe merging, lane changing, and parking.",
            },
            {
              label: "360-Degree Systems",
              desc: "Provides total omnidirectional low-speed navigation coverage in complex or crowded urban areas.",
            },
            {
              label: "Stereo Cameras",
              desc: "Dual-lens spatial vision offering human-like depth perception for distance and size estimation.",
            },
          ],
        },
        {
          heading: "Visual Processing & Worked Scenarios",
          bullets: [
            {
              label: "Object & Lane Detection",
              desc: "Uses ML models and Canny edge/Hough transform inside ROI for lanes and traffic signal recognition.",
            },
            {
              label: "Traffic Light Scenarios (ROS)",
              desc: "RED Light: Applies brakes (PWM=0), checks proximity warning, publishes state to ROS topic. GREEN Light: Proceeds forward.",
            },
            {
              label: "Depth Estimation Scenarios",
              desc: "Threshold stop / Emergency stop (≤1m) / Gradual slow down; Gradual speed up when clear; Zebra crossing braking.",
            },
            {
              label: "Sensor Fusion & Challenges",
              desc: "Combines optics with LiDAR/Radar; handles poor lighting, extreme weather, and complex urban occlusions.",
            },
          ],
        },
      ],
    },
    {
      tag: "Hardware & Testing",
      title: "RoboSense RubyPlus LiDAR & Real-World Integration",
      description:
        "Deployment of cutting-edge solid-state LiDAR sensors, AI integration, CARLA MPC control, and real-world campus testing on electric vehicles.",
      images: [
        "/simulation_image1.png",
        "/simulation-image3.png",
        "/simulation-image2.png",
      ],
      subsections: [
        {
          heading: "RoboSense RubyPlus LiDAR Capabilities",
          bullets: [
            {
              label: "High Resolution & 360° Coverage",
              desc: "High-resolution 3D point cloud data with full 360-degree coverage for precise omnidirectional perception.",
            },
            {
              label: "Long-Range & Weather Resilience",
              desc: "Senses several hundred meters ahead and performs reliably in adverse rain, fog, and dust conditions.",
            },
            {
              label: "Solid-State & High Frequency",
              desc: "Durable solid-state design, high-frequency real-time data output, and direct AI algorithm integration.",
            },
          ],
        },
        {
          heading: "Simulation & Campus Deployment",
          bullets: [
            {
              label: "NED Campus Mapping",
              desc: "Conducted 3D SLAM mapping at NED University Main Campus using Jinpeng Electric Car to capture GNSS, IMU, and 3D data.",
            },
            {
              label: "ROS Actuation & Failsafes",
              desc: "ROS integration for real-world actuators; GPS virtual trajectory tracking with automatic pull-over safety responses.",
            },
            {
              label: "CARLA Simulation & MPC",
              desc: "Implemented Model Predictive Controller (MPC) in CARLA for precise throttle/brake ROS microcontroller communication.",
            },
            {
              label: "YOLOv5m Perception Model",
              desc: "Fine-tuned YOLOv5m classes (Vehicles, Pedestrians, Signs) evaluated via Precision and Recall metrics.",
            },
          ],
        },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-slate-100 text-slate-900 pt-8 pb-24 selection:bg-[#8a1d1d] selection:text-white">
      {/* SUBTLE VERY LIGHT GREY TECHNICAL GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e140_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e140_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* BACK LINK */}
        <div className="mb-8 mt-10">
          <Link
            href="/technology/overview_and_stack"
            className="group inline-flex items-center gap-2.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 shadow-sm transition-all duration-300 hover:border-[#8a1d1d] hover:bg-[#8a1d1d] hover:text-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#8a1d1d]"
          >
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Technology Overview</span>
          </Link>
        </div>

        {/* HEADER HERO BANNER WITH CIRCUIT BOARD TRACES BACKGROUND */}
        <div className="relative mx-auto max-w-4xl mb-14 overflow-hidden rounded-3xl border border-slate-300 bg-white p-8 sm:p-12 shadow-xl text-center">
          
          {/* Subtle Glow Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100/60 via-transparent to-transparent pointer-events-none" />

          {/* LEFT SIDE CIRCUIT TRACES (Strictly Contained) */}
          <div className="absolute left-0 top-0 w-52 sm:w-72 h-full pointer-events-none overflow-hidden opacity-25 sm:opacity-35 text-[#8a1d1d]">
            <svg className="w-full h-full" viewBox="0 0 280 200" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M0 20 L70 20 L95 45 L170 45" />
              <path d="M0 45 L50 45 L70 65 L140 65" />
              <path d="M0 70 L35 70 L55 90 L120 90 L140 110 L180 110" />
              <path d="M0 100 L75 100 L95 120 L135 120" />
              <path d="M0 130 L40 130 L60 150 L150 150" />
              <path d="M0 160 L90 160 L110 180 L170 180" />

              <circle cx="170" cy="45" r="3" fill="currentColor" />
              <circle cx="140" cy="65" r="3" fill="currentColor" />
              <circle cx="180" cy="110" r="3.5" fill="currentColor" />
              <circle cx="135" cy="120" r="2.5" fill="currentColor" />
              <circle cx="150" cy="150" r="3" fill="currentColor" />
              <circle cx="170" cy="180" r="2.5" fill="currentColor" />

              <circle cx="100" cy="25" r="1.5" fill="currentColor" />
              <circle cx="150" cy="80" r="1" fill="currentColor" />
              <circle cx="80" cy="135" r="1.5" fill="currentColor" />
            </svg>
          </div>

          {/* RIGHT SIDE CIRCUIT TRACES (Strictly Contained) */}
          <div className="absolute right-0 top-0 w-52 sm:w-72 h-full pointer-events-none overflow-hidden opacity-25 sm:opacity-35 text-[#8a1d1d]">
            <svg className="w-full h-full" viewBox="0 0 280 200" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M280 20 L210 20 L185 45 L110 45" />
              <path d="M280 45 L230 45 L210 65 L140 65" />
              <path d="M280 70 L245 70 L225 90 L160 90 L140 110 L100 110" />
              <path d="M280 100 L205 100 L185 120 L145 120" />
              <path d="M280 130 L240 130 L220 150 L130 150" />
              <path d="M280 160 L190 160 L170 180 L110 180" />

              <circle cx="110" cy="45" r="3" fill="currentColor" />
              <circle cx="140" cy="65" r="3" fill="currentColor" />
              <circle cx="100" cy="110" r="3.5" fill="currentColor" />
              <circle cx="145" cy="120" r="2.5" fill="currentColor" />
              <circle cx="130" cy="150" r="3" fill="currentColor" />
              <circle cx="110" cy="180" r="2.5" fill="currentColor" />

              <circle cx="180" cy="25" r="1.5" fill="currentColor" />
              <circle cx="130" cy="80" r="1" fill="currentColor" />
              <circle cx="200" cy="135" r="1.5" fill="currentColor" />
            </svg>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="relative z-10 mx-auto max-w-3xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-[0.2em] text-white bg-[#8a1d1d] rounded-full px-4 py-1.5 shadow-sm"
            >
              Technical Overview
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="mt-5 text-3xl sm:text-4xl md:text-[2.75rem] font-black tracking-tight text-slate-900 leading-[1.1]"
            >
              Technology Insights & System Deep Dive
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
            >
              A technical analysis of our autonomous perception stack — RTK-GPS mapping, computer vision pipelines, ROS scenario engines, and real-world vehicle testing.
            </motion.p>
          </motion.div>
        </div>

        {/* SECTIONS GRID */}
        <div className="space-y-10">
          {sections.map((item, index) => {
            const isEven = index % 2 === 0;
            const imageList = item.images || [];

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-300 bg-white p-6 sm:p-8 shadow-sm hover:border-[#8a1d1d]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

                  {/* TEXT COLUMN */}
                  <div
                    className={`lg:col-span-7 max-h-[500px] lg:max-h-[580px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent space-y-6 ${
                      !isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <span className="inline-block rounded-md bg-[#8a1d1d]/10 border border-[#8a1d1d]/20 px-3 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#8a1d1d]">
                        {item.tag}
                      </span>
                      <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 leading-snug">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="space-y-6 pt-2">
                      {item.subsections.map((sub, sIndex) => (
                        <div key={sIndex} className="space-y-3">
                          <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1.5 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#8a1d1d]" />
                            {sub.heading}
                          </h3>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {sub.bullets.map((bullet, bIndex) => (
                              <div
                                key={bIndex}
                                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-200 hover:border-[#8a1d1d]/40 hover:bg-white shadow-2xs"
                              >
                                <span className="block text-sm sm:text-base font-extrabold text-slate-900">
                                  {bullet.label}
                                </span>
                                <span className="block mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                                  {bullet.desc}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* MEDIA COLUMN */}
                  <div
                    className={`lg:col-span-5 flex items-center ${
                      !isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div
                      className={`w-full grid gap-2.5 h-[400px] sm:h-[480px] ${
                        imageList.length === 2
                          ? "grid-cols-1 grid-rows-2"
                          : imageList.length === 3
                          ? "grid-cols-2 grid-rows-2"
                          : "grid-cols-1"
                      }`}
                    >
                      {imageList.map((imgSrc, imgIndex) => {
                        const isTopFullWidth = imageList.length === 3 && imgIndex === 0;

                        return (
                          <div
                            key={imgIndex}
                            className={`relative overflow-hidden rounded-xl group/img ${
                              isTopFullWidth ? "col-span-2" : ""
                            }`}
                          >
                            <img
                              src={imgSrc}
                              alt={`${item.title} visual reference ${imgIndex + 1}`}
                              className="h-full w-full object-contain transition-transform duration-500 group-hover/img:scale-105"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}