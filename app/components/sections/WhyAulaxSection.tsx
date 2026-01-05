import Image from "next/image";
import Link from "next/link";

// Checkmark Icon - matches Figma exactly
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M16.667 5L7.5 14.167 3.333 10"
      stroke="#006a4e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Feature icons
const ShopIcon = () => (
  <svg width="37.5" height="30" viewBox="0 0 38 30" fill="white">
    <path d="M34 10V28C34 29.1 33.1 30 32 30H6C4.9 30 4 29.1 4 28V10" />
    <path d="M38 0H0V10C0 12.21 1.79 14 4 14C6.21 14 8 12.21 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 12.21 17.79 14 20 14C22.21 14 24 12.21 24 10C24 12.21 25.79 14 28 14C30.21 14 32 12.21 32 10C32 12.21 33.79 14 36 14C38.21 14 40 12.21 40 10V0H38Z" />
  </svg>
);

const OffersIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="white">
    <path d="M15 0L0 15L15 30L30 15L15 0ZM15 3L27 15L15 27L3 15L15 3Z" />
    <circle cx="15" cy="15" r="6" />
  </svg>
);

const MapIcon = () => (
  <svg width="33.75" height="30" viewBox="0 0 34 30" fill="white">
    <path d="M0 2.5V27.5L11.25 22.5L22.5 27.5L33.75 22.5V-2.5L22.5 2.5L11.25 -2.5L0 2.5ZM22.5 22.5L11.25 17.5V2.5L22.5 7.5V22.5Z" />
  </svg>
);

const RewardsIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="white">
    <path d="M15 0L19.5 10.5L30 12L22.5 19.5L24 30L15 24.5L6 30L7.5 19.5L0 12L10.5 10.5L15 0Z" />
  </svg>
);

const LeafIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="#1e293b">
    <path d="M27 3C27 3 24 0 15 0C6 0 3 6 3 15C3 24 9 27 9 27C9 27 6 18 15 15C24 12 27 3 27 3Z" />
    <path d="M3 27L15 15" stroke="#1e293b" strokeWidth="2" />
  </svg>
);

// Feature Card Component for reusability
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  checkItems: string[];
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
}

function FeatureCard({
  icon,
  title,
  description,
  checkItems,
  imageSrc,
  imageAlt,
  imageFirst = false,
}: FeatureCardProps) {
  const content = (
    <div className="flex-1 flex flex-col gap-4 md:gap-6">
      {/* Icon */}
      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#006a4e] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>

      {/* Heading */}
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-[#1e293b]">
        {title}
      </h3>

      {/* Description */}
      <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-[#374151]">
        {description}
      </p>

      {/* List */}
      <div className="flex flex-col gap-3 md:gap-4">
        {checkItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="pt-1 flex-shrink-0">
              <CheckIcon />
            </div>
            <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const image = (
    <div className="flex-1 aspect-[4/3] md:aspect-[3/4] lg:h-[400px] xl:h-[500px] lg:aspect-auto rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
      <div className="relative w-full h-full">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center">
      {imageFirst ? (
        <>
          <div className="w-full lg:flex-1 order-2 lg:order-1">{image}</div>
          <div className="w-full lg:flex-1 order-1 lg:order-2">{content}</div>
        </>
      ) : (
        <>
          <div className="w-full lg:flex-1">{content}</div>
          <div className="w-full lg:flex-1">{image}</div>
        </>
      )}
    </div>
  );
}

export default function WhyAulaxSection() {
  return (
    <section
      id="why-aulax"
      className="bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-24"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-12 md:mb-16">
          {/* Why Aulax? Badge */}
          <div className="bg-[rgba(144,238,144,0.3)] px-4 py-2 rounded-full">
            <span className="font-semibold text-sm leading-5 text-[#1e293b]">
              Why Aulax?
            </span>
          </div>

          {/* User Benefits Heading */}
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#1e293b] text-center">
            User Benefits
          </h2>

          {/* Subtitle */}
          <p className="font-normal text-base md:text-lg leading-7 text-[#4b5563] text-center max-w-[600px] px-4">
            Experience smarter, faster, and more personalized local shopping
          </p>
        </div>

        {/* Feature Cards Container */}
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-32">
          {/* Feature 1 - Shop Smarter, Faster */}
          <FeatureCard
            icon={<ShopIcon />}
            title="Shop Smarter, Faster"
            description="Check stock before you go and order ahead so your items are ready when you arrive. No more wasted trips or waiting in line just grab and go!"
            checkItems={[
              "Real-time inventory checking",
              "Order ahead for quick pickup",
              "Skip the lines and save time",
            ]}
            imageSrc="/images/Shop-Smarter-Faster.jpg"
            imageAlt="Person checking product availability on smartphone in a local store aisle"
            imageFirst={true}
          />

          {/* Feature 2 - Exclusive Offers */}
          <FeatureCard
            icon={<OffersIcon />}
            title="Exclusive Offers"
            description="Get personalized deals and rewards from your favorite local shops. The more you shop, the better the offers—tailored to what you love!"
            checkItems={[
              "Exclusive personalized discounts",
              "Loyalty rewards that grow with you",
              "Flash deals from favorite stores",
            ]}
            imageSrc="/images/Exclusive-Offers.jpg"
            imageAlt="Mobile phone screen displaying personalized shopping offers and deals"
            imageFirst={false}
          />

          {/* Feature 3 - Discover Local Gems */}
          <FeatureCard
            icon={<MapIcon />}
            title="Discover Local Gems"
            description="Find hidden treasures in your neighborhood with real insights from your community. Explore new shops, read authentic reviews, and support local businesses you'll love."
            checkItems={[
              "Discover hidden neighborhood shops",
              "Read authentic community reviews",
              "Support local businesses easily",
            ]}
            imageSrc="/images/DiscoverLocalGems.jpg"
            imageAlt="Overhead view of a neighborhood map with colorful pins marking local shops"
            imageFirst={true}
          />

          {/* Feature 4 - Earn Rewards */}
          <FeatureCard
            icon={<RewardsIcon />}
            title="Earn Rewards"
            description="Collect cashback and loyalty rewards with every purchase. Track your earnings, redeem them at participating stores, and make every shopping trip more rewarding."
            checkItems={[
              "Cashback on every purchase",
              "Track all your rewards in one place",
              "Redeem at participating stores",
            ]}
            imageSrc="/images/EarnRewards.jpg"
            imageAlt="Digital wallet interface showing cashback rewards and points accumulation"
            imageFirst={false}
          />

          {/* Sustainability Banner */}
          <div
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-10 md:py-12 lg:py-16"
            style={{
              background: "linear-gradient(to right, #006a4e, #1e293b)",
            }}
          >
            {/* Top-right decoration */}
            <div className="absolute -top-16 md:-top-32 -right-16 md:-right-32 w-32 md:w-64 h-32 md:h-64 rounded-full bg-[rgba(144,238,144,0.2)]" />
            {/* Bottom-left decoration */}
            <div className="absolute -bottom-12 md:-bottom-24 -left-12 md:-left-24 w-24 md:w-48 h-24 md:h-48 rounded-full bg-[rgba(144,238,144,0.2)]" />

            {/* Content */}
            <div className="relative flex flex-col gap-4 md:gap-6 items-center max-w-[896px] mx-auto">
              {/* Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#90ee90] rounded-xl md:rounded-2xl flex items-center justify-center">
                <LeafIcon />
              </div>

              {/* Heading */}
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-white text-center">
                Shop Sustainably
              </h3>

              {/* Description */}
              <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-[#e5e7eb] text-center">
                Make eco-friendly choices with digital receipts and
                sustainability tracking. See the positive impact of supporting
                local businesses and help reduce waste in your community.
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 items-center justify-center pt-4 md:pt-6 w-full">
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#90ee90] text-center">
                    100%
                  </span>
                  <span className="font-normal text-sm md:text-base leading-6 text-[#d1d5db] text-center">
                    Digital Receipts
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#90ee90] text-center">
                    85%
                  </span>
                  <span className="font-normal text-sm md:text-base leading-6 text-[#d1d5db] text-center">
                    Waste Reduction
                  </span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#90ee90] text-center">
                    Local
                  </span>
                  <span className="font-normal text-sm md:text-base leading-6 text-[#d1d5db] text-center">
                    Community Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTA Section */}
        <div className="flex flex-col gap-6 items-center pt-4 mt-12 md:mt-16">
          {/* Heading */}
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-[#1e293b] text-center px-4">
            Ready to experience the future of local shopping?
          </h3>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#download"
              className="bg-[#90ee90] px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#7de87d] transition-colors min-h-[44px] flex items-center justify-center"
            >
              <span className="font-bold text-base md:text-lg leading-7 text-[#1e293b] text-center whitespace-nowrap">
                Download Aulax Now
              </span>
            </Link>
            <Link
              href="#learn-more"
              className="border-2 border-[#1e293b] px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#f1f5f9] transition-colors min-h-[44px] flex items-center justify-center"
            >
              <span className="font-bold text-base md:text-lg leading-7 text-[#1e293b] text-center">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
