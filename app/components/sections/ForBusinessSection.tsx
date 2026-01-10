import Link from "next/link";

// Checkmark icon
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

// Checkmark icon for dark background
const CheckIconLight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M16.667 5L7.5 14.167 3.333 10"
      stroke="#90ee90"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Shop icon
const ShopIcon = () => (
  <svg width="33.75" height="30" viewBox="0 0 34 30" fill="white">
    <path d="M30 10V28H4V10M0 0H34V10C34 12.21 32.21 14 30 14C27.79 14 26 12.21 26 10C26 12.21 24.21 14 22 14C19.79 14 18 12.21 18 10C18 12.21 16.21 14 14 14C11.79 14 10 12.21 10 10C10 12.21 8.21 14 6 14C3.79 14 2 12.21 2 10C2 12.21 0.21 14 -2 14C-4.21 14 -6 12.21 -6 10V0H0Z" />
  </svg>
);

// Analytics icon
const AnalyticsIcon = () => (
  <svg width="37.5" height="30" viewBox="0 0 38 30" fill="white">
    <path d="M5 0H33C35.75 0 38 2.25 38 5V25C38 27.75 35.75 30 33 30H5C2.25 30 0 27.75 0 25V5C0 2.25 2.25 0 5 0ZM10 22.5H7.5V12.5H10V22.5ZM20.25 22.5H17.75V7.5H20.25V22.5ZM30.5 22.5H28V17.5H30.5V22.5Z" />
  </svg>
);

// Sales icon
const SalesIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="white">
    <path d="M27.5 7.5L15 20L10 15L0 25V30H30V0L27.5 7.5ZM0 0V22.5L10 12.5L15 17.5L30 2.5V0H0Z" />
  </svg>
);

// Operations icon
const OperationsIcon = () => (
  <svg width="33.75" height="30" viewBox="0 0 34 30" fill="white">
    <path d="M17 10A5 5 0 1 0 17 20A5 5 0 0 0 17 10ZM29.5 13.75H27.35C27 12.25 26.4 10.85 25.55 9.6L27.1 8.05C27.88 7.28 27.88 6.03 27.1 5.25L24.75 2.9C23.98 2.12 22.72 2.12 21.95 2.9L20.4 4.45C19.15 3.6 17.75 3 16.25 2.65V0.5C16.25 -0.33 15.58 -1 14.75 -1H11.25C10.42 -1 9.75 -0.33 9.75 0.5V2.65C8.25 3 6.85 3.6 5.6 4.45L4.05 2.9C3.28 2.12 2.02 2.12 1.25 2.9L-1.1 5.25C-1.88 6.03 -1.88 7.28 -1.1 8.05L0.45 9.6C-0.4 10.85 -1 12.25 -1.35 13.75H-3.5C-4.33 13.75 -5 14.42 -5 15.25V18.75C-5 19.58 -4.33 20.25 -3.5 20.25H-1.35C-1 21.75 -0.4 23.15 0.45 24.4L-1.1 25.95C-1.88 26.72 -1.88 27.98 -1.1 28.75L1.25 31.1C2.02 31.88 3.28 31.88 4.05 31.1L5.6 29.55C6.85 30.4 8.25 31 9.75 31.35V33.5C9.75 34.33 10.42 35 11.25 35H14.75C15.58 35 16.25 34.33 16.25 33.5V31.35C17.75 31 19.15 30.4 20.4 29.55L21.95 31.1C22.72 31.88 23.98 31.88 24.75 31.1L27.1 28.75C27.88 27.98 27.88 26.72 27.1 25.95L25.55 24.4C26.4 23.15 27 21.75 27.35 20.25H29.5C30.33 20.25 31 19.58 31 18.75V15.25C31 14.42 30.33 13.75 29.5 13.75Z" />
  </svg>
);

// Loyalty icon
const LoyaltyIcon = () => (
  <svg width="37.5" height="30" viewBox="0 0 38 30" fill="#1e293b">
    <path d="M19 30C19 30 0 18.5 0 8.75C0 3.92 3.92 0 8.75 0C12.13 0 15.1 1.88 17 4.68C17.67 3.82 18.5 3.09 19.45 2.53C20.4 1.97 21.44 1.59 22.54 1.41C23.64 1.23 24.77 1.25 25.86 1.47C26.95 1.69 27.98 2.1 28.9 2.69C29.82 3.28 30.62 4.03 31.25 4.92C31.88 5.8 32.33 6.8 32.59 7.86C32.85 8.91 32.91 10.01 32.76 11.09C32.61 12.17 32.26 13.21 31.73 14.15L19 30Z" />
  </svg>
);

// Partner icon
const PartnerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="#1e293b">
    <path d="M9 0L11.25 2.25H15.75V6.75L18 9L15.75 11.25V15.75H11.25L9 18L6.75 15.75H2.25V11.25L0 9L2.25 6.75V2.25H6.75L9 0Z" />
  </svg>
);

// Contact icon
const ContactIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="#1e293b">
    <path d="M16 0H2C0.9 0 0 0.9 0 2V18L4 14H16C17.1 14 18 13.1 18 12V2C18 0.9 17.1 0 16 0Z" />
  </svg>
);

// Icons for bottom cards
const NoFeeIcon = () => (
  <svg width="12.5" height="20" viewBox="0 0 13 20" fill="#1e293b">
    <path d="M6.25 0C2.8 0 0 2.8 0 6.25C0 9.7 2.8 12.5 6.25 12.5C9.7 12.5 12.5 9.7 12.5 6.25C12.5 2.8 9.7 0 6.25 0ZM6.25 10C4.18 10 2.5 8.32 2.5 6.25C2.5 4.18 4.18 2.5 6.25 2.5C8.32 2.5 10 4.18 10 6.25C10 8.32 8.32 10 6.25 10Z" />
  </svg>
);

const TrainingIcon = () => (
  <svg width="25" height="20" viewBox="0 0 25 20" fill="#1e293b">
    <path d="M12.5 0L0 7.5L12.5 15L22.73 9.34V16.25H25V7.5L12.5 0ZM12.5 12.06L4.09 7.5L12.5 2.94L20.91 7.5L12.5 12.06Z" />
  </svg>
);

const SupportIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#1e293b">
    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 17H9V15H11V17ZM13.07 9.25L12.17 10.17C11.45 10.9 11 11.5 11 13H9V12.5C9 11.4 9.45 10.4 10.17 9.67L11.41 8.41C11.78 8.05 12 7.55 12 7C12 5.9 11.1 5 10 5C8.9 5 8 5.9 8 7H6C6 4.79 7.79 3 10 3C12.21 3 14 4.79 14 7C14 7.88 13.64 8.68 13.07 9.25Z" />
  </svg>
);

const QuickSetupIcon = () => (
  <svg width="17.5" height="20" viewBox="0 0 18 20" fill="#1e293b">
    <path d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0ZM9 16C5.13 16 2 12.87 2 9C2 5.13 5.13 2 9 2C12.87 2 16 5.13 16 9C16 12.87 12.87 16 9 16ZM9.5 4.5H8V10L12.75 12.85L13.5 11.62L9.5 9.25V4.5Z" />
  </svg>
);

export default function ForBusinessSection() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-6 items-center mb-12 md:mb-16">
          {/* Badge */}
          <div className="bg-[rgba(144,238,144,0.3)] px-4 py-2 rounded-full">
            <span className="font-semibold text-sm leading-5 text-[#1e293b] text-center">
              For Business Owners
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-[#1e293b] text-center px-4">
            Dear Shop Owners, it&apos;s time to be discovered!
          </h2>

          {/* Description */}
          <p className="font-normal text-base md:text-lg leading-relaxed text-[#4b5563] text-center max-w-[768px] px-4">
            Join Aulax and unlock powerful tools to grow your business, reach
            more customers, and thrive in the digital marketplace
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-32">
          {/* Feature 1 - Increase Visibility */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center">
            {/* Image */}
            <div className="flex-1 w-full aspect-[4/3] lg:h-[400px] xl:h-[500px] lg:aspect-auto rounded-2xl lg:rounded-3xl bg-gray-200 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#90ee90] to-[#006a4e] flex items-center justify-center">
                <span className="text-white/50 text-sm">
                  Shop Owner Image
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#006a4e] flex items-center justify-center flex-shrink-0">
                <ShopIcon />
              </div>
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-[#1e293b]">
                Increase Your Visibility
              </h3>
              <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-[#374151]">
                Get discovered by thousands of local shoppers actively searching
                for products and services like yours. Our platform puts your
                business front and center in your community.
              </p>
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">
                    Featured in local search results
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">
                    Showcase your products with rich media
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">
                    Reach customers 24/7 online
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Understand Customers */}
          <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center">
            {/* Content */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#006a4e] flex items-center justify-center flex-shrink-0">
                <AnalyticsIcon />
              </div>
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-[#1e293b]">
                Understand Your Customers
              </h3>
              <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-[#374151]">
                Access powerful insights about your customers&apos; preferences,
                shopping habits, and feedback. Make data-driven decisions to
                serve them better and build lasting relationships.
              </p>
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0"><CheckIcon /></div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">Real-time customer analytics</span>
                </div>
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0"><CheckIcon /></div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">Purchase history and preferences</span>
                </div>
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0"><CheckIcon /></div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">Customer feedback and reviews</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full aspect-[4/3] lg:h-[400px] xl:h-[500px] lg:aspect-auto rounded-2xl lg:rounded-3xl bg-gray-200 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#cffafe] to-[#006a4e] flex items-center justify-center">
                <span className="text-white/50 text-sm">Analytics Dashboard Image</span>
              </div>
            </div>
          </div>

          {/* Feature 3 - Boost Sales */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center">
            {/* Image */}
            <div className="flex-1 w-full aspect-[4/3] lg:h-[400px] xl:h-[500px] lg:aspect-auto rounded-2xl lg:rounded-3xl bg-gray-200 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#90ee90] to-[#1e293b] flex items-center justify-center">
                <span className="text-white/50 text-sm">Sales Growth Image</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#006a4e] flex items-center justify-center flex-shrink-0">
                <SalesIcon />
              </div>
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-[#1e293b]">
                Boost Your Sales
              </h3>
              <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-[#374151]">
                Drive more foot traffic and online orders with targeted
                promotions, special offers, and personalized marketing campaigns
                that reach the right customers at the right time.
              </p>
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0"><CheckIcon /></div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">Create custom promotions and deals</span>
                </div>
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0"><CheckIcon /></div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">Send targeted notifications to customers</span>
                </div>
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0"><CheckIcon /></div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">Increase repeat purchases with loyalty rewards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 - Simplify Operations */}
          <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center justify-center">
            {/* Content */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#006a4e] flex items-center justify-center flex-shrink-0">
                <OperationsIcon />
              </div>
              <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-[#1e293b]">
                Simplify Operations
              </h3>
              <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-[#374151]">
                Manage your inventory, orders, and customer communications all
                in one place. Our intuitive platform saves you time and reduces
                the complexity of running your business.
              </p>
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0"><CheckIcon /></div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">Easy inventory management</span>
                </div>
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0"><CheckIcon /></div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">Streamlined order processing</span>
                </div>
                <div className="flex items-start">
                  <div className="pt-1 flex-shrink-0"><CheckIcon /></div>
                  <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#374151]">Automated customer communications</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full aspect-[4/3] lg:h-[400px] xl:h-[500px] lg:aspect-auto rounded-2xl lg:rounded-3xl bg-gray-200 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[#1e293b] to-[#006a4e] flex items-center justify-center">
                <span className="text-white/50 text-sm">Operations Dashboard Image</span>
              </div>
            </div>
          </div>

          {/* Feature 5 - Build Customer Loyalty (Dark Banner) */}
          <div
            className="rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden relative"
            style={{
              background: "linear-gradient(90deg, #006a4e 0%, #1e293b 100%)",
            }}
          >
            {/* Decorative circles */}
            <div className="absolute top-[-64px] md:top-[-128px] right-[-64px] md:right-[-128px] w-32 md:w-64 h-32 md:h-64 rounded-full bg-[rgba(144,238,144,0.2)]" />
            <div className="absolute bottom-[-48px] md:bottom-[-96px] left-[-48px] md:left-[-96px] w-24 md:w-48 h-24 md:h-48 rounded-full bg-[rgba(144,238,144,0.2)]" />

            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-center relative z-10">
              {/* Content */}
              <div className="flex-1 flex flex-col gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#90ee90] flex items-center justify-center flex-shrink-0">
                  <LoyaltyIcon />
                </div>
                <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-white">
                  Build Customer Loyalty
                </h3>
                <p className="font-normal text-base md:text-lg lg:text-xl leading-relaxed text-[#e5e7eb]">
                  Create meaningful connections with your customers through
                  personalized service, loyalty programs, and community
                  engagement. Turn one-time shoppers into lifelong supporters.
                </p>
                <div className="flex flex-col gap-3 md:gap-4">
                  <div className="flex items-start">
                    <div className="pt-1 flex-shrink-0"><CheckIconLight /></div>
                    <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#e5e7eb]">Custom loyalty reward programs</span>
                  </div>
                  <div className="flex items-start">
                    <div className="pt-1 flex-shrink-0"><CheckIconLight /></div>
                    <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#e5e7eb]">Direct customer messaging</span>
                  </div>
                  <div className="flex items-start">
                    <div className="pt-1 flex-shrink-0"><CheckIconLight /></div>
                    <span className="ml-3 font-normal text-base md:text-lg leading-7 text-[#e5e7eb]">Community reviews and ratings</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col gap-2 items-center">
                    <span className="font-bold text-2xl md:text-4xl leading-tight text-[#90ee90] text-center">40%</span>
                    <span className="font-normal text-xs md:text-sm leading-5 text-[#d1d5db] text-center">Average Sales Increase</span>
                  </div>
                  <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col gap-2 items-center">
                    <span className="font-bold text-2xl md:text-4xl leading-tight text-[#90ee90] text-center">3x</span>
                    <span className="font-normal text-xs md:text-sm leading-5 text-[#d1d5db] text-center">More Customer Reach</span>
                  </div>
                  <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col gap-2 items-center">
                    <span className="font-bold text-2xl md:text-4xl leading-tight text-[#90ee90] text-center">95%</span>
                    <span className="font-normal text-xs md:text-sm leading-5 text-[#d1d5db] text-center">Partner Satisfaction</span>
                  </div>
                  <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col gap-2 items-center">
                    <span className="font-bold text-2xl md:text-4xl leading-tight text-[#90ee90] text-center">24/7</span>
                    <span className="font-normal text-xs md:text-sm leading-5 text-[#d1d5db] text-center">Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col gap-6 items-center pt-12 md:pt-16 lg:pt-20">
          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-[#1e293b] text-center px-4">
            Ready to grow your business with Aulax?
          </h3>
          <p className="font-normal text-base md:text-lg leading-relaxed text-[#4b5563] text-center max-w-[672px] px-4">
            Join hundreds of local businesses already thriving on our platform.
            Get started today with our easy onboarding process.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center pt-2 gap-3 sm:gap-4">
            <Link
              href="#partner"
              className="flex items-center gap-2 bg-[#90ee90] text-[#1e293b] font-bold text-base md:text-lg leading-7 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] hover:bg-[#7de47d] transition-colors min-h-[44px]"
            >
              <PartnerIcon />
              Become a Partner
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-2 border-2 border-[#1e293b] text-[#1e293b] font-bold text-base md:text-lg leading-7 px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              <ContactIcon />
              Talk to Our Team
            </Link>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          {/* No Setup Fees */}
          <div className="bg-[#f9fafb] rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4">
            <div className="w-12 h-12 rounded-full bg-[#90ee90] flex items-center justify-center">
              <NoFeeIcon />
            </div>
            <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center">No Setup Fees</h4>
            <p className="font-normal text-sm leading-5 text-[#4b5563] text-center">Get started for free</p>
          </div>

          {/* Dedicated Support */}
          <div className="bg-[#f9fafb] rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4">
            <div className="w-12 h-12 rounded-full bg-[#90ee90] flex items-center justify-center">
              <SupportIcon />
            </div>
            <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center">Dedicated Support</h4>
            <p className="font-normal text-sm leading-5 text-[#4b5563] text-center">Always here to help</p>
          </div>

          {/* Flexible Plans */}
          <div className="bg-[#f9fafb] rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4">
            <div className="w-12 h-12 rounded-full bg-[#90ee90] flex items-center justify-center">
              <TrainingIcon />
            </div>
            <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center">Flexible Plans</h4>
            <p className="font-normal text-sm leading-5 text-[#4b5563] text-center">Scale as you grow</p>
          </div>

          {/* Fast Onboarding */}
          <div className="bg-[#f9fafb] rounded-2xl p-4 md:p-6 flex flex-col items-center gap-3 md:gap-4">
            <div className="w-12 h-12 rounded-full bg-[#90ee90] flex items-center justify-center">
              <QuickSetupIcon />
            </div>
            <h4 className="font-bold text-base leading-6 text-[#1e293b] text-center">Fast Onboarding</h4>
            <p className="font-normal text-sm leading-5 text-[#4b5563] text-center">Live in 48 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
