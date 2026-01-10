import Image from "next/image";
import Link from "next/link";

export default function VisionSection() {
  return (
    <section
      className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[104px] py-12 md:py-16 lg:py-24 relative"
      style={{
        backgroundImage:
          "linear-gradient(151.19deg, rgba(161, 255, 194, 0.2) 0%, rgba(207, 250, 254, 0.3) 100%)",
      }}
    >
      {/* Main Container - responsive layout */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center w-full max-w-[1280px] mx-auto">
        {/* Left Column - Content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 w-full lg:w-auto">
          {/* Our Vision Badge */}
          <div>
            <div className="inline-block bg-[rgba(144,238,144,0.3)] px-4 py-2 rounded-full">
              <span className="font-semibold text-sm leading-5 text-[#1e293b]">
                Our Vision
              </span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#1e293b]">
              Revolutionising the local
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              marketplace
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="font-normal text-base md:text-lg leading-relaxed text-[#374151] max-w-[577px]">
              Aulax is redefining the local marketplace through a ubiquitous
              connected experience that bridges people and businesses, creating
              more convenient and personalised shopping journeys.
            </p>

            <p className="font-normal text-base md:text-lg leading-relaxed text-[#374151] max-w-[553px]">
              It empowers shoppers to find the right value while enabling local
              businesses to understand and serve their customers with greater
              care and personalisation.
            </p>
          </div>

          {/* Become a Partner Button */}
          <div className="pt-2 md:pt-4">
            <Link
              href="#partner"
              className="inline-block bg-[#1e293b] px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#334155] transition-colors min-h-[44px]"
            >
              <span className="font-bold text-base md:text-lg leading-7 text-white">
                Become a Partner
              </span>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-start pt-4 md:pt-6">
            {/* Stat 1 - Local Businesses */}
            <div className="flex flex-col gap-1 min-w-[100px] sm:min-w-[140px]">
              <span className="font-bold text-2xl md:text-3xl leading-9 text-[#006a4e]">
                100+
              </span>
              <span className="font-normal text-sm leading-5 text-[#4b5563]">
                Businesses
              </span>
            </div>

            {/* Stat 2 - Active Shoppers */}
            <div className="flex flex-col gap-1 min-w-[100px] sm:min-w-[140px]">
              <span className="font-bold text-2xl md:text-3xl leading-9 text-[#006a4e]">
                150+
              </span>
              <span className="font-normal text-sm leading-5 text-[#4b5563]">
                Users
              </span>
            </div>

            {/* Stat 3 - Satisfaction Rate - COMMENTED OUT
            <div className="flex flex-col gap-1 min-w-[100px] sm:min-w-[140px]">
              <span className="font-bold text-2xl md:text-3xl leading-9 text-[#006a4e]">
                99%
              </span>
              <span className="font-normal text-sm leading-5 text-[#4b5563]">
                Satisfaction Rate
              </span>
            </div>
            */}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 relative w-full lg:w-auto mt-8 lg:mt-0">
          {/* Main Image Container */}
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[500px] xl:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/vision-section.png"
              alt="Our Vision - Revolutionising the local marketplace"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom-right blur decoration - hidden on mobile */}
          <div
            className="hidden md:block absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 w-24 lg:w-32 h-24 lg:h-32 rounded-2xl lg:rounded-3xl bg-[#90ee90] opacity-50"
            style={{ filter: "blur(20px)" }}
          />

          {/* Top-left blur decoration - hidden on mobile */}
          <div
            className="hidden md:block absolute -top-4 lg:-top-6 -left-4 lg:-left-6 w-28 lg:w-40 h-28 lg:h-40 rounded-full bg-[#cffafe] opacity-40"
            style={{ filter: "blur(20px)" }}
          />
        </div>
      </div>
    </section>
  );
}
