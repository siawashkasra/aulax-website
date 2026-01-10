import Image from "next/image";
import Link from "next/link";

// Apple icon - matches Figma SVG exactly
const AppleIcon = () => (
  <svg width="18" height="24" viewBox="0 0 18 24" fill="white">
    <path d="M14.94 12.66c-.02-2.32 1.89-3.43 1.98-3.49-1.08-1.58-2.76-1.8-3.36-1.82-1.43-.14-2.79.84-3.52.84-.73 0-1.85-.82-3.04-.8-1.56.02-3 .91-3.81 2.31-1.62 2.82-.41 7 1.17 9.29.77 1.12 1.69 2.37 2.9 2.33 1.16-.05 1.6-.75 3.01-.75 1.4 0 1.8.75 3.02.73 1.25-.02 2.04-1.14 2.8-2.26.88-1.29 1.25-2.55 1.27-2.61-.03-.01-2.44-.94-2.46-3.72l.04-.05zM12.58 5.18c.64-.78 1.07-1.85.95-2.93-.92.04-2.03.61-2.69 1.38-.59.69-1.11 1.78-.97 2.83 1.02.08 2.07-.52 2.71-1.28z" />
  </svg>
);

// Google Play icon - matches Figma SVG exactly
const GooglePlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 512 512" fill="white">
    <path d="M48 59.49v393a4.33 4.33 0 007.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0048 59.49z" />
    <path d="M345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32z" />
    <path d="M84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95z" />
    <path d="M449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="bg-white pt-[72px]">
      {/* Main Content Container - responsive padding */}
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="max-w-[1280px] mx-auto">
          {/* Hero Content - Inner container */}
          <div className="px-0 md:px-6">
            {/* Heading Container - responsive padding and gap */}
            <div className="flex flex-col items-center gap-4 md:gap-6 pt-12 md:pt-16 lg:pt-24">
              {/* Main Heading - responsive typography */}
              <div className="max-w-[896px] text-center">
                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] lg:leading-[60px] text-[#1e293b]">
                  Connecting You to the Local
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Marketplace
                </h1>
              </div>

              {/* Subtitle - responsive */}
              <div className="max-w-[672px] text-center px-4 sm:px-0">
                <p className="font-normal text-base md:text-lg leading-6 md:leading-7 text-[#4b5563]">
                  Explore your local market with excitement! Aulax makes it easy and fun to
                  discover nearby shops and amazing deals at your favourite stores.
                </p>
              </div>

              {/* CTA Button Container */}
              <div className="pt-2 md:pt-4">
                <Link
                  href="#contact"
                  className="inline-block bg-[#90ee90] px-6 md:px-8 py-3 rounded-full font-bold text-base md:text-lg leading-6 md:leading-7 text-[#1e293b] text-center hover:bg-[#7de87d] transition-colors min-h-[44px]"
                >
                  Let&apos;s talk now!
                </Link>
              </div>
            </div>

            {/* Hero Image Container - responsive height */}
            <div className="mt-8 md:mt-12 pb-12 md:pb-16 lg:pb-24">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8] lg:h-[500px] lg:aspect-auto rounded-xl md:rounded-2xl overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                <Image
                  src="/images/a-vibrant-multicultural-group-of-friends-shopping-at-a-bustling-outdoor-local-market-smiling-and-interacting-with-vendors-cinematic-style.png"
                  alt="A vibrant, multicultural group of friends shopping at a bustling outdoor local market"
                  fill
                  className="object-cover"
                  priority
                />

                {/* App Store Badges - responsive positioning and layout */}
                <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  {/* App Store */}
                  <Link
                    href="#"
                    className="flex items-center bg-black px-4 py-2 rounded-lg hover:bg-[#333] transition-colors min-h-[44px]"
                  >
                    <div className="w-[18px] h-[24px] flex-shrink-0">
                      <AppleIcon />
                    </div>
                    <div className="ml-2">
                      <p className="font-normal text-[10px] sm:text-xs leading-4 text-white">
                        Download on the
                      </p>
                      <p className="font-semibold text-sm sm:text-lg leading-5 sm:leading-7 text-white">
                        App Store
                      </p>
                    </div>
                  </Link>

                  {/* Google Play */}
                  <Link
                    href="#"
                    className="flex items-center bg-black px-4 py-2 rounded-lg hover:bg-[#333] transition-colors min-h-[44px]"
                  >
                    <div className="w-5 h-5 flex-shrink-0">
                      <GooglePlayIcon />
                    </div>
                    <div className="ml-2">
                      <p className="font-normal text-[10px] sm:text-xs leading-4 text-white">
                        GET IT ON
                      </p>
                      <p className="font-semibold text-sm sm:text-lg leading-5 sm:leading-7 text-white">
                        Google Play
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Brand Logos Section - COMMENTED OUT
            <div className="mt-12 md:mt-16 pb-12 md:pb-16 lg:pb-24">
              <p className="text-center font-semibold text-xs md:text-sm leading-5 text-[#6b7280] uppercase tracking-wider mb-6 md:mb-8">
                Trusted by leading UK businesses
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-60 grayscale px-4">
                <div className="flex items-center h-10 md:h-12">
                  <Image
                    src="/icons/tesco.svg"
                    alt="Tesco"
                    width={27}
                    height={36}
                    className="object-contain w-5 md:w-7 h-auto"
                  />
                  <span className="ml-2 md:ml-3 font-bold text-lg md:text-2xl leading-7 md:leading-8 text-[#374151]">
                    Tesco
                  </span>
                </div>

                <div className="flex items-center h-10 md:h-12">
                  <Image
                    src="/icons/sainsbury's.svg"
                    alt="Sainsbury's"
                    width={40}
                    height={36}
                    className="object-contain w-7 md:w-10 h-auto"
                  />
                  <span className="ml-2 md:ml-3 font-bold text-lg md:text-2xl leading-7 md:leading-8 text-[#374151]">
                    Sainsbury&apos;s
                  </span>
                </div>

                <div className="hidden sm:flex items-center h-10 md:h-12">
                  <Image
                    src="/icons/waitrose.svg"
                    alt="Waitrose"
                    width={40}
                    height={36}
                    className="object-contain w-7 md:w-10 h-auto"
                  />
                  <span className="ml-2 md:ml-3 font-bold text-lg md:text-2xl leading-7 md:leading-8 text-[#374151]">
                    Waitrose
                  </span>
                </div>

                <div className="hidden md:flex items-center h-10 md:h-12">
                  <Image
                    src="/icons/co-up.svg"
                    alt="Co-op"
                    width={45}
                    height={36}
                    className="object-contain w-8 md:w-11 h-auto"
                  />
                  <span className="ml-2 md:ml-3 font-bold text-lg md:text-2xl leading-7 md:leading-8 text-[#374151]">
                    Co-op
                  </span>
                </div>

                <div className="hidden lg:flex items-center h-10 md:h-12">
                  <Image
                    src="/icons/morrisons.svg"
                    alt="Morrisons"
                    width={40}
                    height={36}
                    className="object-contain w-7 md:w-10 h-auto"
                  />
                  <span className="ml-2 md:ml-3 font-bold text-lg md:text-2xl leading-7 md:leading-8 text-[#374151]">
                    Morrisons
                  </span>
                </div>

                <div className="hidden lg:flex items-center h-10 md:h-12">
                  <Image
                    src="/icons/SVG (6).svg"
                    alt="Boots"
                    width={40}
                    height={36}
                    className="object-contain w-7 md:w-10 h-auto"
                  />
                  <span className="ml-2 md:ml-3 font-bold text-lg md:text-2xl leading-7 md:leading-8 text-[#374151]">
                    Boots
                  </span>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
