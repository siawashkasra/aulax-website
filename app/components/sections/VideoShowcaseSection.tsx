import Link from "next/link";

// Play icon
const PlayIcon = () => (
  <svg width="22.5" height="30" viewBox="0 0 23 30" fill="#1e293b">
    <path d="M0 0V30L22.5 15L0 0Z" />
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

export default function VideoShowcaseSection() {
  return (
    <section
      className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(143deg, rgba(30, 41, 59, 1) 0%, rgba(17, 24, 39, 1) 100%)",
      }}
    >
      {/* Decorative blur circles - smaller on mobile */}
      <div className="absolute top-[-96px] md:top-[-192px] left-[-96px] md:left-[-192px] w-48 md:w-96 h-48 md:h-96 rounded-full bg-[rgba(144,238,144,0.1)] blur-[32px]" />
      <div className="absolute bottom-[-96px] md:bottom-[-192px] right-[-96px] md:right-[-192px] w-48 md:w-96 h-48 md:h-96 rounded-full bg-[rgba(207,250,254,0.1)] blur-[32px]" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center mb-8 md:mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white text-center">
            See Aulax in Action
          </h2>
          <p className="font-normal text-base md:text-lg leading-7 text-[#d1d5db] text-center max-w-[672px] px-4">
            Experience the seamless shopping journey that connects you to your
            local marketplace
          </p>
        </div>

        {/* Video Card - responsive width */}
        <div
          className="w-full max-w-[896px] mx-auto rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
          style={{
            backgroundImage:
              "linear-gradient(141deg, rgba(31, 41, 55, 1) 0%, rgba(17, 24, 39, 1) 100%)",
          }}
        >
          {/* Video Container */}
          <div className="relative aspect-video bg-[#374151] rounded-xl md:rounded-2xl overflow-hidden mb-6 md:mb-8">
            {/* Video placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#374151] to-[#1f2937] flex items-center justify-center">
              <span className="text-white/30 text-sm">
                App Demo Video Placeholder
              </span>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center">
              <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#90ee90] flex items-center justify-center shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] hover:bg-[#7de47d] transition-colors pl-1 min-h-[44px] min-w-[44px]">
                <PlayIcon />
              </button>
            </div>
          </div>

          {/* Download Section */}
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-bold text-xl md:text-2xl leading-8 text-white text-center">
              Download Aulax Today
            </h3>
            <p className="font-normal text-sm md:text-base leading-6 text-[#d1d5db] text-center">
              Join thousands of shoppers discovering their local marketplace
            </p>

            {/* App Store Buttons - stack on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              {/* App Store */}
              <Link
                href="#"
                className="flex items-center justify-center bg-black px-5 md:px-6 py-3 rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-gray-900 transition-colors min-h-[44px] w-full sm:w-auto"
              >
                <AppleIcon />
                <div className="ml-3">
                  <p className="font-normal text-[10px] sm:text-xs leading-4 text-white">
                    Download on the
                  </p>
                  <p className="font-semibold text-base sm:text-lg leading-6 sm:leading-7 text-white">
                    App Store
                  </p>
                </div>
              </Link>

              {/* Google Play */}
              <Link
                href="#"
                className="flex items-center justify-center bg-black px-5 md:px-6 py-3 rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-gray-900 transition-colors min-h-[44px] w-full sm:w-auto"
              >
                <GooglePlayIcon />
                <div className="ml-3">
                  <p className="font-normal text-[10px] sm:text-xs leading-4 text-white">
                    GET IT ON
                  </p>
                  <p className="font-semibold text-base sm:text-lg leading-6 sm:leading-7 text-white">
                    Google Play
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
