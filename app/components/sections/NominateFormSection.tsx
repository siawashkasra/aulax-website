"use client";

import { useState } from "react";
import Link from "next/link";

// Clock icon for Quick Response
const ClockIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" fill="#006a4e" />
    <circle cx="24" cy="24" r="16" fill="#90ee90" />
    <path
      d="M24 14V24L30 28"
      stroke="#006a4e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Settings/Gear icon for Easy Onboarding
const GearIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" fill="#006a4e" />
    <path
      d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M24 14V16M24 32V34M34 24H32M16 24H14M31.07 16.93L29.66 18.34M18.34 29.66L16.93 31.07M31.07 31.07L29.66 29.66M18.34 18.34L16.93 16.93"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Gift/Star icon for Get Rewarded
const GiftIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" fill="#006a4e" />
    <path
      d="M24 16L26 22H32L27 26L29 32L24 28L19 32L21 26L16 22H22L24 16Z"
      fill="#90ee90"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);

// Arrow icon for button
const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
    <path
      d="M3.75 9H14.25M14.25 9L9 3.75M14.25 9L9 14.25"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function NominateFormSection() {
  const [formData, setFormData] = useState({
    shopName: "",
    location: "",
    businessContact: "",
    whyRecognition: "",
    yourName: "",
    yourContact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nomination form submitted:", formData);
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-24">
      <div className="max-w-[896px] mx-auto flex flex-col gap-8 md:gap-12">
        {/* Content Container */}
        <div className="flex flex-col items-center gap-6">
          {/* Header */}
          <div className="w-full text-center">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#1e293b]">
              Help Us Write the Next Chapter
            </h2>
          </div>

          {/* Subtext */}
          <div className="max-w-[672px] text-center px-4">
            <p className="text-base md:text-lg leading-7 text-[#374151]">
              You know your neighborhood best. Nominate a local shop you love
              and help them shine in our marketplace.
            </p>
          </div>

          {/* Form Card */}
          <div
            className="w-full rounded-2xl lg:rounded-3xl shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(161, 255, 194, 0.2) 0%, rgba(207, 250, 254, 0.3) 100%)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 md:gap-6"
            >
              {/* Shop Name */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm leading-5 text-[#1e293b]">
                  Shop Name *
                </label>
                <input
                  type="text"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  placeholder="Enter business name"
                  required
                  className="w-full px-4 py-3 md:py-3.5 bg-white border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]"
                />
                <span className="text-xs leading-4 text-[#6b7280]">
                  Start typing to search from Google Maps
                </span>
              </div>

              {/* Location/Address */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm leading-5 text-[#1e293b]">
                  Location/Address *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="123 Main Street, Toronto, ON"
                  required
                  className="w-full px-4 py-3 md:py-3.5 bg-white border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]"
                />
              </div>

              {/* Business Contact */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm leading-5 text-[#1e293b]">
                  Business Contact *
                </label>
                <input
                  type="text"
                  name="businessContact"
                  value={formData.businessContact}
                  onChange={handleChange}
                  placeholder="Phone number or email"
                  required
                  className="w-full px-4 py-3 md:py-3.5 bg-white border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]"
                />
              </div>

              {/* Why they deserve recognition */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm leading-5 text-[#1e293b]">
                  Why they deserve recognition (optional)
                </label>
                <textarea
                  name="whyRecognition"
                  value={formData.whyRecognition}
                  onChange={handleChange}
                  placeholder="Tell us what makes this business special..."
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent resize-none"
                />
              </div>

              {/* Your Name & Your Contact - Stack on mobile, side by side on larger screens */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pb-2 md:pb-4">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-semibold text-sm leading-5 text-[#1e293b]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 md:py-3.5 bg-white border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-semibold text-sm leading-5 text-[#1e293b]">
                    Your Contact *
                  </label>
                  <input
                    type="text"
                    name="yourContact"
                    value={formData.yourContact}
                    onChange={handleChange}
                    placeholder="Phone or email"
                    required
                    className="w-full px-4 py-3 md:py-3.5 bg-white border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1e293b] text-white font-bold text-base md:text-lg leading-7 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#334155] transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <ArrowIcon />
                <span>Nominate a Local Hero</span>
              </button>

              {/* Terms */}
              <div className="text-center">
                <p className="text-xs leading-4 text-[#4b5563]">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="#"
                    className="text-[#006a4e] underline hover:text-[#005540]"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="text-[#006a4e] underline hover:text-[#005540]"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Feature Cards - Stack on mobile, row on larger screens */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {/* Quick Response */}
            <div className="bg-[#f9fafb] rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4">
              <ClockIcon />
              <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center">
                Quick Response
              </h4>
              <p className="text-sm leading-5 text-[#4b5563] text-center">
                We reach out within 48 hours
              </p>
            </div>

            {/* Easy Onboarding */}
            <div className="bg-[#f9fafb] rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4">
              <GearIcon />
              <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center">
                Easy Onboarding
              </h4>
              <p className="text-sm leading-5 text-[#4b5563] text-center">
                We handle all the setup
              </p>
            </div>

            {/* Get Rewarded */}
            <div className="bg-[#f9fafb] rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4">
              <GiftIcon />
              <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center">
                Get Rewarded
              </h4>
              <p className="text-sm leading-5 text-[#4b5563] text-center">
                Earn bonus points when they join
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
