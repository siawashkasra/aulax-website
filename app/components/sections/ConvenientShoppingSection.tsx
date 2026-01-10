import Link from "next/link";

// Chevron down icon
const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#1f2937">
    <path
      d="M3.5 5.25L7 8.75l3.5-3.5"
      stroke="#1f2937"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Verified checkmark icon
const VerifiedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="#006a4e">
    <path
      d="M5.25 7l1.75 1.75 3.5-3.5"
      stroke="#006a4e"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="7" cy="7" r="6" stroke="#006a4e" strokeWidth="1" fill="none" />
  </svg>
);

// Lightning/instant icon
const InstantIcon = () => (
  <svg width="12.25" height="14" viewBox="0 0 13 14" fill="#006a4e">
    <path d="M7 0L0 8h6v6l7-8H7V0z" fill="#006a4e" />
  </svg>
);

export default function ConvenientShoppingSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-24 bg-[#eaffe2]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-center">
          {/* Left - Text Content */}
          <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#1e293b]">
              Convenient, personalized shopping
            </h2>

            <div className="pb-2 md:pb-4">
              <p className="font-normal text-base md:text-lg leading-relaxed text-[#374151]">
                Use our platform to find exactly what you&apos;re looking for
                from local sellers. Whether you need fresh produce, handmade
                crafts, or unique services, we connect you in seconds.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-block bg-[#1e293b] text-white font-bold text-base leading-6 px-6 md:px-8 py-3 rounded-full hover:bg-[#334155] transition-colors min-h-[44px]"
              >
                Learn how to shop
              </Link>
            </div>
          </div>

          {/* Right - Search Card */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none bg-white rounded-2xl p-4 sm:p-6 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
            {/* Search Query Section */}
            <div className="border-b border-[#e5e7eb] pb-4 flex flex-col gap-2">
              <span className="font-medium text-sm leading-5 text-[#6b7280]">
                You&apos;re looking for
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-semibold text-xl sm:text-2xl leading-8 text-[#1f2937]">
                  Artisanal Bread
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-red-100 flex items-center justify-center">
                    <span className="text-lg sm:text-xl">🍁</span>
                  </div>
                  <span className="font-semibold text-lg sm:text-xl leading-7 text-[#1f2937]">
                    CAD
                  </span>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="pt-4 flex flex-col gap-2">
              <span className="font-medium text-sm leading-5 text-[#6b7280]">
                Your location
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-semibold text-xl sm:text-2xl leading-8 text-[#1f2937]">
                  Toronto, ON
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                    <span className="text-lg sm:text-xl">📍</span>
                  </div>
                  <span className="font-semibold text-lg sm:text-xl leading-7 text-[#1f2937]">
                    Local
                  </span>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Features Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 py-4">
              <div className="flex items-center gap-1">
                <VerifiedIcon />
                <span className="font-normal text-sm leading-5 text-[#4b5563]">
                  Verified sellers
                </span>
              </div>
              <div className="flex items-center gap-1">
                <InstantIcon />
                <span className="font-normal text-sm leading-5 text-[#4b5563]">
                  Instant results
                </span>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-[#90ee90] text-[#1e293b] font-bold text-base md:text-lg leading-7 py-3 md:py-4 rounded-full hover:bg-[#7de47d] transition-colors min-h-[44px]">
              Find Businesses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
