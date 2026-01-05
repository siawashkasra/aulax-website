"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Star icon
const StarIcon = () => (
  <svg width="15.75" height="14" viewBox="0 0 16 14" fill="#fbbf24">
    <path d="M8 0l2.245 4.552 5.021.73-3.633 3.541.858 5.002L8 11.572l-4.491 2.253.858-5.002L.734 5.282l5.021-.73L8 0z" />
  </svg>
);

// Calendar icon
const CalendarIcon = () => (
  <svg width="15.75" height="18" viewBox="0 0 16 18" fill="white">
    <path d="M12 2V0h-2v2H6V0H4v2H0v16h16V2h-4zM2 16V6h12v10H2z" />
  </svg>
);

// Checkmark icon for the note
const CheckmarkNoteIcon = () => (
  <svg width="17.5" height="14" viewBox="0 0 18 14" fill="#006a4e">
    <path d="M6 11.17L1.83 7l-1.42 1.41L6 14 18 2l-1.41-1.41L6 11.17z" />
  </svg>
);

// Apple icon
const AppleIcon = () => (
  <svg width="22.5" height="30" viewBox="0 0 23 30" fill="white">
    <path d="M18.71 15.825c-.03-2.9 2.36-4.29 2.47-4.36-1.35-1.98-3.45-2.25-4.2-2.28-1.79-.18-3.49 1.05-4.4 1.05-.91 0-2.31-1.02-3.8-1-1.95.03-3.75 1.14-4.76 2.89-2.03 3.52-.52 8.75 1.46 11.61.97 1.4 2.11 2.97 3.63 2.91 1.45-.06 2-1 3.76-.94 1.75 0 2.25.94 3.77.91 1.57-.03 2.55-1.42 3.5-2.83 1.1-1.61 1.56-3.18 1.59-3.26-.03-.02-3.05-1.17-3.08-4.65l.06-.05zm-2.95-8.49c.8-.97 1.34-2.31 1.19-3.66-1.15.05-2.54.76-3.36 1.72-.74.86-1.39 2.22-1.21 3.54 1.28.1 2.59-.64 3.38-1.6z" />
  </svg>
);

// Google Play icon
const GooglePlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M3.61 1.49c-.34.35-.51.87-.51 1.53v18.01c0 .66.17 1.18.51 1.53l.08.07 10.08-10.08v-.24L3.69 1.42l-.08.07z" />
    <path d="M17.33 15.86l-3.36-3.36v-.24l3.36-3.36.07.04 3.98 2.26c1.14.65 1.14 1.71 0 2.36l-3.98 2.26-.07.04z" />
    <path d="M17.4 15.82L13.97 12.39 3.61 22.56c.37.39 1 .43 1.7.05l11.91-6.78.18-.01z" />
    <path d="M17.4 8.94L5.31 2.15c-.7-.39-1.33-.34-1.7.05l10.36 10.36 3.43-3.62z" />
  </svg>
);

export default function PartnershipSection() {
  const [formData, setFormData] = useState({
    businessName: "",
    location: "",
    yourName: "",
    email: "",
    phone: "",
    challenges: "",
    meetingTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="partner"
      className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(130.74deg, rgba(161, 255, 194, 0.2) 0%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-12 md:mb-16">
          {/* Badge */}
          <div className="bg-[rgba(144,238,144,0.3)] px-4 py-2 rounded-full">
            <span className="font-semibold text-sm leading-5 text-[#1e293b]">
              Partner with Aulax
            </span>
          </div>

          {/* Heading */}
          <div className="max-w-[896px] text-center px-4">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#1e293b]">
              Hundreds of local businesses are already rewriting their success
              stories with Aulax. Your chapter starts with a simple
              conversation.
            </h2>
          </div>
        </div>

        {/* Main Content - Two columns */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start justify-center max-w-[1152px] mx-auto">
          {/* Left Column - Testimonials */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full lg:w-auto">
            {/* Top Image Placeholder */}
            <div className="w-full aspect-video lg:h-[320px] lg:aspect-auto rounded-2xl lg:rounded-3xl bg-gray-200 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#006a4e] to-[#1e293b] flex items-center justify-center">
                <span className="text-white/50 text-sm">
                  Partner Image Placeholder
                </span>
              </div>
            </div>

            {/* Testimonials Card */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
              <h3 className="font-bold text-xl md:text-2xl leading-8 text-[#1e293b] mb-4 md:mb-6">
                What Our Partners Say
              </h3>

              <div className="flex flex-col gap-4 md:gap-6">
                {/* Testimonial 1 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-[#90ee90] to-[#006a4e]" />
                  </div>
                  <div className="ml-3 md:ml-4 flex flex-col gap-2">
                    <div className="flex gap-1">
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <p className="font-normal text-sm md:text-base leading-6 text-[#374151]">
                      &quot;Aulax helped us reach 3x more customers in just 2
                      months. Best decision we made!&quot;
                    </p>
                    <p className="font-normal text-xs md:text-sm leading-5 text-[#6b7280]">
                      — Sarah M., Local Bakery Owner
                    </p>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-[#cffafe] to-[#006a4e]" />
                  </div>
                  <div className="ml-3 md:ml-4 flex flex-col gap-2">
                    <div className="flex gap-1">
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <p className="font-normal text-sm md:text-base leading-6 text-[#374151]">
                      &quot;The support team made onboarding so easy. We were
                      live in 48 hours!&quot;
                    </p>
                    <p className="font-normal text-xs md:text-sm leading-5 text-[#6b7280]">
                      — James T., Hardware Store
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Image Placeholder */}
            <div className="hidden lg:block w-full h-[256px] rounded-2xl lg:rounded-3xl bg-gray-200 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#006a4e] flex items-center justify-center">
                <span className="text-white/50 text-sm">Community Image Placeholder</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex-1 w-full lg:w-auto bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <h3 className="font-bold text-xl md:text-2xl leading-8 text-[#1e293b]">
              Book a Meeting
            </h3>
            <p className="font-normal text-sm md:text-base leading-6 text-[#4b5563] mt-2">
              Let&apos;s discuss how Aulax can help your business grow
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:gap-5 mt-4 md:mt-6"
            >
              {/* Row 1 - Business Name & Location */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-semibold text-sm leading-5 text-[#1e293b]">Business Name *</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Your Business Name" className="w-full px-4 py-3 md:py-4 border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]" required />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-semibold text-sm leading-5 text-[#1e293b]">Location *</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="City, Province" className="w-full px-4 py-3 md:py-4 border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]" required />
                </div>
              </div>

              {/* Your Name */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm leading-5 text-[#1e293b]">Your Name *</label>
                <input type="text" name="yourName" value={formData.yourName} onChange={handleChange} placeholder="Full Name" className="w-full px-4 py-3 md:py-4 border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]" required />
              </div>

              {/* Row 2 - Email & Phone */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-semibold text-sm leading-5 text-[#1e293b]">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 md:py-4 border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]" required />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="font-semibold text-sm leading-5 text-[#1e293b]">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 md:py-4 border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]" required />
                </div>
              </div>

              {/* Challenges */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm leading-5 text-[#1e293b]">What&apos;s holding you back from growing? *</label>
                <textarea name="challenges" value={formData.challenges} onChange={handleChange} placeholder="Tell us about your current challenges and goals..." rows={3} className="w-full px-4 py-3 border-2 border-[#e5e7eb] rounded-xl text-base text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent resize-none" required />
              </div>

              {/* Meeting Time */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm leading-5 text-[#1e293b]">Preferred Meeting Time</label>
                <select name="meetingTime" value={formData.meetingTime} onChange={handleChange} className="w-full px-4 py-3 border-2 border-[#e5e7eb] bg-[#efefef] rounded-xl text-base leading-5 text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#006a4e] focus:border-transparent min-h-[44px]">
                  <option value="">Select a time slot</option>
                  <option value="morning">Morning (9am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 8pm)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#1e293b] text-white font-bold text-base md:text-lg leading-7 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#334155] transition-colors min-h-[44px]">
                <CalendarIcon />
                I&apos;m Ready
              </button>

              {/* Note */}
              <div className="bg-[rgba(161,255,194,0.3)] rounded-xl md:rounded-2xl p-3 md:p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0"><CheckmarkNoteIcon /></div>
                  <p className="font-normal text-xs md:text-sm leading-5 text-[#374151]">
                    &quot;No pressure. No commitments. Just two neighbours talking about what&apos;s possible.&quot;
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Download Section */}
        <div className="flex flex-col gap-4 md:gap-6 items-center mt-12 md:mt-16">
          <h3 className="font-bold text-xl md:text-2xl leading-8 text-[#1e293b] text-center px-4">
            Download Aulax and Start Shopping Local
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="#" className="flex items-center bg-black px-5 md:px-6 py-3 rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-gray-900 transition-colors min-h-[44px]">
              <AppleIcon />
              <div className="ml-3">
                <p className="font-normal text-[10px] sm:text-xs leading-4 text-white">Download on the</p>
                <p className="font-semibold text-base sm:text-lg leading-6 sm:leading-7 text-white">App Store</p>
              </div>
            </Link>
            <Link href="#" className="flex items-center bg-black px-5 md:px-6 py-3 rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-gray-900 transition-colors min-h-[44px]">
              <GooglePlayIcon />
              <div className="ml-3">
                <p className="font-normal text-[10px] sm:text-xs leading-4 text-white">GET IT ON</p>
                <p className="font-semibold text-base sm:text-lg leading-6 sm:leading-7 text-white">Google Play</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
