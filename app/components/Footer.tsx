import Link from "next/link";

// Email icon
const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#4b5563">
    <path d="M14 3H2C1.45 3 1 3.45 1 4V12C1 12.55 1.45 13 2 13H14C14.55 13 15 12.55 15 12V4C15 3.45 14.55 3 14 3ZM14 5L8 8.5L2 5V4L8 7.5L14 4V5Z" />
  </svg>
);

// Location icon
const LocationIcon = () => (
  <svg width="12" height="16" viewBox="0 0 12 16" fill="#4b5563">
    <path d="M6 0C2.69 0 0 2.69 0 6C0 10.5 6 16 6 16S12 10.5 12 6C12 2.69 9.31 0 6 0ZM6 8C4.9 8 4 7.1 4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.1 8 6 8Z" />
  </svg>
);

// Twitter/X icon
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#4b5563">
    <path d="M15.27 1.67H18.08L11.94 8.67L19.17 18.33H13.51L9.08 12.5L4.03 18.33H1.21L7.78 10.86L0.83 1.67H6.63L10.63 7.01L15.27 1.67ZM14.27 16.67H15.83L5.83 3.27H4.14L14.27 16.67Z" />
  </svg>
);

// Instagram icon
const InstagramIcon = () => (
  <svg width="17.5" height="20" viewBox="0 0 18 20" fill="#4b5563">
    <path d="M9 2.24c2.4 0 2.69.01 3.64.05 2.44.11 3.58 1.27 3.69 3.69.04.95.05 1.24.05 3.64s-.01 2.69-.05 3.64c-.11 2.42-1.25 3.58-3.69 3.69-.95.04-1.24.05-3.64.05s-2.69-.01-3.64-.05c-2.44-.11-3.58-1.27-3.69-3.69C1.63 12.31 1.62 12.02 1.62 9.62s.01-2.69.05-3.64c.11-2.42 1.25-3.58 3.69-3.69C6.31 2.25 6.6 2.24 9 2.24zM9 .38C6.56.38 6.25.39 5.29.43 1.74.6.6 1.74.43 5.29.39 6.25.38 6.56.38 9s.01 2.75.05 3.71c.17 3.55 1.31 4.69 4.86 4.86.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c3.55-.17 4.69-1.31 4.86-4.86.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71c-.17-3.55-1.31-4.69-4.86-4.86C11.75.39 11.44.38 9 .38z" />
    <path d="M9 4.77a4.85 4.85 0 100 9.7 4.85 4.85 0 000-9.7zm0 8a3.15 3.15 0 110-6.3 3.15 3.15 0 010 6.3z" />
    <circle cx="14.14" cy="4.48" r="1.13" />
  </svg>
);

// Facebook icon
const FacebookIcon = () => (
  <svg width="17.5" height="20" viewBox="0 0 18 20" fill="#4b5563">
    <path d="M18 10.04c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.99 3.66 9.12 8.44 9.88v-6.99H4.9v-2.89h2.54V7.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C14.34 19.16 18 15.03 18 10.04z" />
  </svg>
);

// LinkedIn icon
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#4b5563">
    <path d="M18.52 0H1.48C.66 0 0 .64 0 1.44v17.12c0 .8.66 1.44 1.48 1.44h17.04c.82 0 1.48-.64 1.48-1.44V1.44C20 .64 19.34 0 18.52 0zM5.93 17H2.97V7.5h2.96V17zM4.45 6.2c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.72.77 1.72 1.72-.77 1.72-1.72 1.72zM17 17h-2.96v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44V17H7.76V7.5h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.54 1.97 3.54 4.53V17z" />
  </svg>
);

// YouTube icon
const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="#4b5563">
    <path d="M19.58 5.2c-.23-.86-.9-1.53-1.75-1.76C16.25 3 10 3 10 3s-6.25 0-7.83.42c-.85.23-1.52.9-1.75 1.76C0 6.77 0 10.07 0 10.07s0 3.3.42 4.87c.23.86.9 1.53 1.75 1.76 1.58.44 7.83.44 7.83.44s6.25 0 7.83-.44c.85-.23 1.52-.9 1.75-1.76.42-1.57.42-4.87.42-4.87s0-3.3-.42-4.87zM8 13.07V7.07l5.2 3-5.2 3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#f9fafb] pt-12 md:pt-16 pb-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
      <div className="max-w-[1280px] mx-auto">
        {/* Footer Links - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6 mb-12 md:mb-16">
          {/* Company - COMMENTED OUT
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-base leading-6 text-[#1f2937]">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          */}

          {/* Aulax Products - COMMENTED OUT
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-base leading-6 text-[#1f2937]">
              Aulax Products
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Personal Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Business Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Aulax Platform
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>
          */}

          {/* Resources - COMMENTED OUT
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-base leading-6 text-[#1f2937]">
              Resources
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Service Status
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  API Docs
                </Link>
              </li>
            </ul>
          </div>
          */}

          {/* Contact Us */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-base leading-6 text-[#1f2937]">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <EmailIcon />
                <Link
                  href="mailto:enquiry@aulax.app"
                  className="font-normal text-sm md:text-base leading-6 text-[#4b5563] hover:text-[#1f2937] transition-colors break-all"
                >
                  enquiry@aulax.app
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <LocationIcon />
                <span className="font-normal text-sm md:text-base leading-6 text-[#4b5563]">
                  London, UK
                </span>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-base leading-6 text-[#1f2937]">
              Follow us
            </h4>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="#"
                className="text-[#4b5563] hover:text-[#1f2937] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="YouTube"
              >
                <YouTubeIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e5e7eb] pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left side */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/"
                className="font-bold text-xl md:text-2xl leading-8 text-[#1e293b]"
              >
                Aulax
              </Link>
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <Link
                  href="#"
                  className="font-normal text-sm leading-5 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Legal
                </Link>
                <Link
                  href="#"
                  className="font-normal text-sm leading-5 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="font-normal text-sm leading-5 text-[#4b5563] hover:text-[#1f2937] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Right side */}
            <p className="font-normal text-sm leading-5 text-[#6b7280] text-center md:text-right">
              © 2026 Aulax. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
