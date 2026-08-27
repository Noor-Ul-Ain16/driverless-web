'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Single-Pass Counter Component (Ek Baar Count Hoker Target Par Stop)
function SinglePassCounter({ targetValue, speed = 60, steps = 12 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      if (currentStep >= steps) {
        setDisplayValue(targetValue);
        clearInterval(interval);
        return;
      }

      // Final step se pehle random fast numbers display honge
      const randomVal = Math.floor(Math.random() * 9) + 1;
      setDisplayValue(randomVal);
    }, speed);

    return () => clearInterval(interval);
  }, [isInView, targetValue, speed, steps]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function AutonomyStats() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Sub-header Animation */}
        <motion.div
          className="mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a1d1d] sm:text-xs">
            CURRENT PROGRAM
          </p>
        </motion.div>

        {/* Stats Container with Cards Animation */}
        <motion.div
          className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="grid grid-cols-1 divide-y divide-zinc-200 bg-[#8a1d1d] px-6 py-6 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Stat 1 */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="px-6 py-5 text-center"
            >
              <p className="text-4xl font-bold tracking-tight text-[#ffffff] md:text-5xl">
                SAE Level <SinglePassCounter targetValue={2} steps={10} speed={50} />
              </p>

              <p className="mt-10 text-lg font-semibold text-[#ffffff]">
                Autonomy Achieved
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="px-6 py-5 text-center"
            >
              <p className="text-4xl font-bold tracking-tight text-[#ffffff] md:text-5xl">
                Level <SinglePassCounter targetValue={3} steps={14} speed={50} />
              </p>

              <p className="mt-10 text-lg font-semibold text-[#ffffff]">
                In Progress
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="px-6 py-5 text-center"
            >
              <p className="text-4xl font-bold tracking-tight text-[#ffffff] md:text-5xl">
                <SinglePassCounter targetValue={3} steps={18} speed={50} />
              </p>

              <p className="mt-10 text-lg font-semibold text-[#ffffff]">
                Sensor Modalities Fused
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}