"use client";

import { useState } from "react";

export default function SponsorshipPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    jobTitle: "",
    sponsorshipInterest: "Corporate Sponsorship",
    interests: [] as string[],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const supportOptions = [
    { id: "hardware", label: "Hardware & Sensors (LiDAR, Radar, Cameras, GPUs)" },
    { id: "financial", label: "Direct Financial & Team Sponsorship" },
    { id: "compute", label: "Cloud & AI Compute Credits" },
    { id: "recruitment", label: "Student Internships & Recruitment Access" },
    { id: "events", label: "Event & Competition Travel Funding" },
    { id: "inkind", label: "In-Kind Tech Support & Software Licenses" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleCheckboxChange = (optionLabel: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(optionLabel);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== optionLabel) };
      } else {
        return { ...prev, interests: [...prev.interests, optionLabel] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/sponsorship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to send inquiry. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-[#8a1d1d]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#8a1d1d]">
            NCAI & NED Driverless
          </span>
          <h1 className="mt-10 text-2xl font-extrabold uppercase tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Sponsorship & Partnerships
          </h1>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl overflow-hidden">
          {submitted ? (
            /* Success Confirmation State */
            <div className="p-10 text-center space-y-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">Inquiry Received!</h2>
              <p className="text-sm text-zinc-600 max-w-md mx-auto">
                Thank you for reaching out, <span className="font-semibold text-zinc-900">{formData.firstName}</span>. Our team will review your partnership request and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#8a1d1d] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#6e1717]"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-[#8a1d1d] mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-[#8a1d1d] focus:ring-1 focus:ring-[#8a1d1d]"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-[#8a1d1d] mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-[#8a1d1d] focus:ring-1 focus:ring-[#8a1d1d]"
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#8a1d1d] mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="yourname@gmail.com"
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-[#8a1d1d] focus:ring-1 focus:ring-[#8a1d1d]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#8a1d1d] mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+92 312 3456789"
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-[#8a1d1d] focus:ring-1 focus:ring-[#8a1d1d]"
                  />
                </div>

                {/* Company / Organization */}
                <div>
                  <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#8a1d1d] mb-1">
                    Company / Organization <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Tech Solutions Ltd."
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-[#8a1d1d] focus:ring-1 focus:ring-[#8a1d1d]"
                  />
                </div>

                {/* Job Title */}
                <div>
                  <label htmlFor="jobTitle" className="block text-xs font-bold uppercase tracking-wider text-[#8a1d1d] mb-1">
                    Job Title / Designation
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    placeholder="Head of CSR / Lead Tech Partner"
                    className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-[#8a1d1d] focus:ring-1 focus:ring-[#8a1d1d]"
                  />
                </div>

                {/* Checkboxes */}
                <div className="col-span-full">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#8a1d1d] mb-3">
                    What are you interested in supporting? <span className="text-zinc-400 font-normal">(Select all that apply)</span>
                  </label>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {supportOptions.map((opt) => {
                      const isChecked = formData.interests.includes(opt.label);
                      return (
                        <label
                          key={opt.id}
                          onClick={() => handleCheckboxChange(opt.label)}
                          className={`flex items-start gap-3 rounded-lg border p-3.5 cursor-pointer transition select-none ${
                            isChecked
                              ? "border-[#8a1d1d] bg-[#8a1d1d]/5 text-zinc-900 ring-1 ring-[#8a1d1d]"
                              : "border-zinc-200 bg-zinc-50/50 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-100"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-[#8a1d1d] focus:ring-[#8a1d1d]"
                          />
                          <span className="text-xs font-medium leading-tight">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              <hr className="border-zinc-200" />

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#8a1d1d] mb-1">
                  Additional Notes or Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about how your organization would like to collaborate with NED Driverless..."
                  className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-[#8a1d1d] focus:ring-1 focus:ring-[#8a1d1d]"
                ></textarea>
              </div>

              {/* Error Message */}
              {error && (
                <p className="rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600 border border-red-200">
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#8a1d1d] py-3.5 px-6 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition hover:bg-[#6e1717] focus:ring-2 focus:ring-[#8a1d1d] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending Inquiry..." : "Submit Sponsorship Inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}