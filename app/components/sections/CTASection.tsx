import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[104px] py-12 md:py-16 lg:py-24 text-center">
      <div className="max-w-[1280px] mx-auto rounded-2xl lg:rounded-3xl bg-[#1e293b] overflow-hidden flex flex-col items-center p-6 sm:p-8 md:p-12 lg:p-16 relative isolate gap-4">
        {/* Heading */}
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#90ee90] z-0 max-w-[600px]">
          Meet the future of local shopping
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-[#e5e7eb] pb-2 md:pb-4 z-[1] max-w-[643px] px-4">
          We&apos;re building the best way to discover and support local
          businesses. More convenience, more connection. Full speed.
        </p>

        {/* CTA Button */}
        <Link
          href="#"
          className="rounded-full bg-[#90ee90] px-6 md:px-8 py-3 z-[2] text-base md:text-lg leading-7 text-[#1e293b] font-bold hover:bg-[#7ed67e] transition-colors min-h-[44px] flex items-center justify-center"
        >
          Learn about our mission
        </Link>

        {/* Decorative Overlay - Top Right - smaller on mobile */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 absolute top-[-32px] sm:top-[-48px] md:top-[-64px] right-[-32px] sm:right-[-48px] md:right-[-64px] rounded-full bg-[rgba(144,238,144,0.2)] z-[3]" />

        {/* Decorative Overlay - Bottom Left - smaller on mobile */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 absolute bottom-[-48px] sm:bottom-[-64px] md:bottom-[-96px] left-[-32px] sm:left-[-48px] md:left-[-64px] rounded-full bg-[rgba(144,238,144,0.2)] z-[4]" />
      </div>
    </section>
  );
}
