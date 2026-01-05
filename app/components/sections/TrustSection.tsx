import Link from "next/link";
import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[104px] py-12 md:py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto rounded-2xl lg:rounded-3xl bg-[#cffafe] flex flex-col md:flex-row items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 gap-8 md:gap-12">
        {/* Content Container */}
        <div className="flex-1 flex flex-col items-start gap-4 order-2 md:order-1">
          {/* Heading */}
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#1e293b]">
            Your trust is our priority
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-[#374151] pb-2 md:pb-4 max-w-[525px]">
            We are committed to protecting your data and ensuring every
            transaction is secure. Our dedicated fraud and security teams work
            around the clock to keep your account safe, so you can shop with
            complete peace of mind.
          </p>

          {/* Learn More Button */}
          <Link
            href="#"
            className="rounded-full bg-[#1e293b] px-6 md:px-8 py-3 text-base font-bold leading-6 text-white hover:bg-[#334155] transition-colors min-h-[44px] flex items-center justify-center"
          >
            Learn more
          </Link>
        </div>

        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center order-1 md:order-2 w-full md:w-auto">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <Image
              src="/images/your-trust-is-our-priority.png"
              alt="Your trust is our priority"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
