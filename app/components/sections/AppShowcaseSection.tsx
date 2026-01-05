import Image from "next/image";
import Link from "next/link";

// Verified Local Businesses icon
const VerifiedIcon = () => (
  <svg width="22.5" height="20" viewBox="0 0 23 20" fill="white">
    <path d="M11.25 0L13.5 2.5H18.75V7.5L21.25 10L18.75 12.5V17.5H13.5L11.25 20L9 17.5H3.75V12.5L1.25 10L3.75 7.5V2.5H9L11.25 0ZM9.75 13.75L16.5 7L15.25 5.75L9.75 11.25L7.25 8.75L6 10L9.75 13.75Z" />
  </svg>
);

// Secure Payment icon
const SecureIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
    <path d="M10 0L2 3.5V9.16667C2 14.2917 5.44 19.0667 10 20C14.56 19.0667 18 14.2917 18 9.16667V3.5L10 0ZM8.5 14.1667L4.75 10.4167L6.175 9L8.5 11.3333L13.825 6L15.25 7.41667L8.5 14.1667Z" />
  </svg>
);

// Community Rated icon
const CommunityIcon = () => (
  <svg width="22.5" height="20" viewBox="0 0 23 20" fill="white">
    <path d="M11.25 0L14.5 6.5L22.5 7.5L16.875 12.5L18.25 20L11.25 16.5L4.25 20L5.625 12.5L0 7.5L8 6.5L11.25 0Z" />
  </svg>
);

export default function AppShowcaseSection() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-0 py-12 md:py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-0 lg:px-6">
        {/* Main Content - Two feature blocks */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {/* Feature 1 - Single hub */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-center px-4 lg:px-0">
            {/* Left - Image */}
            <div className="flex-1 w-full aspect-[16/10] lg:h-[384px] lg:aspect-auto rounded-2xl overflow-hidden relative">
              <Image
                src="/images/a-single-hub-for-all-your-local-shopping.png"
                alt="A single hub for all your local shopping"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="font-bold text-2xl md:text-3xl leading-tight text-[#1e293b]">
                A single hub for all your local shopping
              </h3>

              <p className="font-normal text-base md:text-lg leading-relaxed text-[#4b5563]">
                Connect with your favorite local stores, manage orders, and
                discover new products seamlessly. Aulax brings the entire
                marketplace to your fingertips, making every shopping trip
                simple and enjoyable.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 pt-2 md:pt-4">
                <Link
                  href="#"
                  className="inline-block bg-[#90ee90] text-[#1e293b] font-bold text-base leading-6 px-5 md:px-6 py-2.5 rounded-full hover:bg-[#7de47d] transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Open an account
                </Link>
                <Link
                  href="#"
                  className="inline-block font-bold text-base leading-6 text-[#1e293b] hover:underline min-h-[44px] flex items-center"
                >
                  Explore features
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 2 - Recommendations */}
          <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-8 lg:gap-12 items-center justify-center px-4 lg:px-0">
            {/* Left - Content */}
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="font-bold text-2xl md:text-3xl leading-tight text-[#1e293b]">
                Get recommendations tailored for you
              </h3>

              <p className="font-normal text-base md:text-lg leading-relaxed text-[#4b5563]">
                Our smart engine learns your preferences to suggest products and
                businesses you&apos;ll love. Enjoy a truly personalized
                experience that helps you find hidden gems in your community.
              </p>

              <div className="pt-2">
                <Link
                  href="#"
                  className="inline-block bg-[#90ee90] text-[#1e293b] font-bold text-base leading-6 px-5 md:px-6 py-2.5 rounded-full hover:bg-[#7de47d] transition-colors min-h-[44px] flex items-center justify-center"
                >
                  Discover your feed
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex-1 w-full aspect-[16/10] lg:h-[384px] lg:aspect-auto rounded-2xl overflow-hidden relative">
              <Image
                src="/images/get-recommendations-tailored-for-you.png"
                alt="Get recommendations tailored for you"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-start justify-center mt-12 md:mt-16 lg:mt-20 px-4 lg:px-0">
          {/* Verified Local Businesses */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#006a4e] flex items-center justify-center">
              <VerifiedIcon />
            </div>
            <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center mt-4">
              Verified Local Businesses
            </h4>
            <p className="font-normal text-sm md:text-base leading-6 text-[#4b5563] text-center mt-1">
              We partner with trusted local sellers.
            </p>
          </div>

          {/* Secure Payment Network */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#006a4e] flex items-center justify-center">
              <SecureIcon />
            </div>
            <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center mt-4">
              Secure Payment Network
            </h4>
            <p className="font-normal text-sm md:text-base leading-6 text-[#4b5563] text-center mt-1">
              Your transactions are encrypted and safe.
            </p>
          </div>

          {/* Community Rated */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#006a4e] flex items-center justify-center">
              <CommunityIcon />
            </div>
            <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center mt-4">
              Community Rated
            </h4>
            <p className="font-normal text-sm md:text-base leading-6 text-[#4b5563] text-center mt-1">
              Read reviews from shoppers like you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
