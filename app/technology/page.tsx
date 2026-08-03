export default function TechnologyPage() {
  return (
    <div className="w-full bg-white">
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black md:h-[28rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Technology</p>
          <h1 className="text-4xl font-bold sm:text-5xl">Technical Papers</h1>
          <p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">
            MIT Driverless develops the full autonomy stack for high-speed racing and shares selected technical insights through publications and talks.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <section className="rounded-[2rem] border border-gray-200 bg-zinc-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-black">Perception</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our perception stack fuses camera, LiDAR, and radar data to detect track boundaries, obstacles, and dynamic objects in real time.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>• Multi-sensor fusion</li>
              <li>• Computer vision with YOLO and custom neural nets</li>
              <li>• Low-latency object tracking</li>
            </ul>
          </section>

          <section className="rounded-[2rem] border border-gray-200 bg-zinc-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-black">State Estimation</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We localize the vehicle with high accuracy using sensor fusion, IMU integration, and pose estimation for fast cornering and stable trajectory tracking.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>• Kalman filtering</li>
              <li>• GPS/INS integration</li>
              <li>• Real-time pose prediction</li>
            </ul>
          </section>

          <section className="rounded-[2rem] border border-gray-200 bg-zinc-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-black">Controls</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our control system converts perception and planning outputs into smooth, aggressive commands for steering, throttle, and braking.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>• Model predictive control</li>
              <li>• Trajectory optimization</li>
              <li>• Safety-aware planning</li>
            </ul>
          </section>
        </div>

        <section className="mt-16 rounded-[2rem] border border-gray-200 bg-white p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-black">Our stack in action</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We engineer the full autonomous pipeline for racing: perception for the environment, estimation for vehicle state, planning for racing lines, and controls for high-speed execution.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-zinc-950 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-red-400">Core capabilities</p>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-200">
                <li>• Real-time sensor processing at 100+ Hz</li>
                <li>• End-to-end autonomous race strategy</li>
                <li>• Robust software for track variation and dynamic obstacles</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
