import Link from "next/link";
import Image from "next/image";

export default function BusinessReadySection() {
  return (
    <section className="w-full bg-[#eaffe2] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-24">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-[1280px] mx-auto">
        {/* Image Container */}
        <div className="flex-1 flex items-center justify-center w-full md:w-auto">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[448px] lg:h-[448px]">
            <Image
              src="/images/ready-for-businesses-of-all-sizes.png"
              alt="Ready for businesses of all sizes"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          {/* Heading */}
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#1e293b]">
            Ready for businesses of all sizes
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-[#374151] pb-2 md:pb-4 max-w-[580px]">
            Connect with more customers in your area and grow your business.
            Join hundreds of local entrepreneurs who use Aulax to manage their
            presence and serve their community with care.
          </p>

          {/* CTA Button */}
          <Link
            href="#"
            className="rounded-full bg-[#1e293b] px-6 md:px-8 py-3 text-base font-bold leading-6 text-white hover:bg-[#334155] transition-colors min-h-[44px] flex items-center justify-center"
          >
            Explore Aulax Business
          </Link>
        </div>
      </div>
    </section>
  );
}
