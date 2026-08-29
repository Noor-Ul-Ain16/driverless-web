"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/smart-city-lab-ncai-ned-uet/home/ ", iconPath: "/linkedin_icon__.png" },
  { label: "YouTube", href: "https://www.youtube.com/@SmartCityLab ", iconPath: "/youtube_icon.png" },
  { label: "Facebook", href: "https://www.facebook.com/SMARTCITYLAB.NCAI/ #", iconPath: "/facebook_icon.png" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Clear previous messages when user starts editing again
    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);

      // Clear form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Failed to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <motion.div
        className="px-6 bg-[#8a1d1d] pb-16 pt-20 text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15, duration: 0.5 }}
      >
        <div className="zoom-responsive mx-auto max-w-4xl">
          
          <motion.h1 
            variants={fadeInUp}
            className="mt-10 text-3xl font-black uppercase tracking-tight text-[#ffffff] sm:text-5xl"
          >
            Contact Us
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#ffffff] sm:text-base"
          >
            Have questions about the team, sponsorship, or collaboration?
            Reach out and our team will get back to you shortly.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="mx-auto px-6 py-16 md:px-12">
        <div className="zoom-responsive grid gap-12 lg:grid-cols-[0.7fr_1.1fr] lg:items-start max-w-6xl mx-auto">
          {/* Left Section - Info */}
          <motion.section 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 rounded-[2rem] border border-gray-200 bg-zinc-50 p-8 shadow-sm"
          >
            <div>
              <h2 className="text-3xl font-bold text-black">
                Get in touch
              </h2>

              <p className="mt-4 leading-relaxed text-gray-700">
                Whether you&apos;re interested in joining the team, sponsoring
                our work, or collaborating on autonomous driving research,
                we&apos;re happy to hear from you.
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100"
              >
                <p className="mb-2 text-xs font-bold uppercase text-[#8a1d1d]">
                  EMAIL
                </p>
                <p className="text-gray-700 text-sm">
                  smartcitylabncained@gmail.com.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100"
              >
                <p className="mb-2 text-xs font-bold uppercase text-[#8a1d1d]">
                  PHONE
                </p>
                <p className="text-gray-700 text-sm">
                  +92 335 3046110
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100"
              >
                <p className="mb-2 text-xs font-bold uppercase text-[#8a1d1d]">
                  LOCATION
                </p>
                <p className="text-gray-700 text-sm">
                  1st Floor, CIS Department, NED University of Engineering and Technology, 
                  University Road, Karachi, Sindh - 75270, Pakistan

                </p>
              </motion.div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                Follow us
              </p>

              <div className="flex items-center gap-8">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center"
                  >
                    <Image
                      src={item.iconPath}
                      alt={item.label}
                      width={50}
                      height={50}
                      className="h-10 w-10 object-contain"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Right Section - Contact Form */}
          <motion.section 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm sm:p-10"
          >
            <h2 className="text-3xl font-bold text-black">
              Send us a message
            </h2>

            <p className="mt-4 leading-relaxed text-gray-700">
              Fill out the form and let us know how we can help. We typically
              reply within 1-2 business days.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* First Name + Last Name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-gray-700">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
                    First name
                  </span>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-[#8a1d1d] focus:ring-2 focus:ring-[#8a1d1d]/20"
                  />
                </label>

                <label className="block text-sm text-gray-700">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
                    Last name
                  </span>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-[#8a1d1d] focus:ring-2 focus:ring-[#8a1d1d]/20"
                  />
                </label>
              </div>

              {/* Email */}
              <label className="block text-sm text-gray-700">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
                  Email address
                </span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-[#8a1d1d] focus:ring-2 focus:ring-[#8a1d1d]/20"
                />
              </label>

              {/* Phone */}
              <label className="block text-sm text-gray-700">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
                  Phone number
                </span>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="w-full rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-[#8a1d1d] focus:ring-2 focus:ring-[#8a1d1d]/20"
                />
              </label>

              {/* Message */}
              <label className="block text-sm text-gray-700">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-[#8a1d1d]">
                  Message
                </span>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your inquiry"
                  required
                  className="h-36 w-full resize-none rounded-3xl border border-gray-300 bg-zinc-50 px-4 py-3 outline-none transition focus:border-[#8a1d1d] focus:ring-2 focus:ring-[#8a1d1d]/20"
                />
              </label>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.01 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#8a1d1d] px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit"}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-3xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                >
                  Thanks! Your message has been sent successfully.
                </motion.p>
              )}

              {/* Error Message */}
              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-3xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                >
                  {error}
                </motion.p>
              )}
            </form>
          </motion.section>
        </div>
      </main>
    </div>
  );
}