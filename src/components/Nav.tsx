"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Product", href: "#product" },
  { label: "Safety", href: "#safety" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav className="relative z-10 mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          aria-label="Kinfi"
          className="flex items-center transition-opacity hover:opacity-90 -translate-x-1 sm:-translate-x-2 md:-translate-x-4 lg:-translate-x-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 371 120"
            className="h-7 w-auto sm:h-8"
            aria-hidden="true"
          >
            <rect x="24" y="16" width="20" height="88" rx="10" fill="#F5F5F6" />
            <path
              d="M50 70 L86 26"
              stroke="#F5F5F6"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <circle cx="82" cy="86" r="16" fill="#FFA15A" />
            <svg x="136" y="12" width="235.3" height="104" viewBox="0 0 4028 1780">
              <g transform="translate(40 1700) scale(1 -1)">
                <g fill="#F5F5F6">
                  <path
                    transform="translate(0 0)"
                    d="M112 0H364V353L460 452L806 0H1107L652 600L1081 1056H778L367 628H364V1490H112Z"
                  />
                  <path transform="translate(1088 0)" d="M112 0H364V1056H112Z" />
                  <path
                    transform="translate(1554 0)"
                    d="M364 597C364 777 463 856 595 856C730 856 808 775 808 620V0H1061V660C1061 931 905 1077 684 1077C539 1077 432 1013 360 894V1056H112V0H364Z"
                  />
                  <path
                    transform="translate(2717 0)"
                    d="M675 1056H460V1168C460 1254 492 1287 578 1287H675V1490H528C319 1490 207 1392 207 1210V1056H17V853H207V0H460V853H675Z"
                  />
                  <path transform="translate(3482 0)" d="M112 0H364V1056H112Z" />
                </g>
                <circle cx="1326.0" cy="1320.6" r="126.0" fill="#F5F5F6" />
                <circle cx="3720.0" cy="1320.6" r="163.8" fill="#FFA15A" />
              </g>
            </svg>
          </svg>
        </a>

        {/* Desktop Links (centered in the navbar) */}
        <div className="hidden items-center gap-8 md:flex md:absolute md:left-1/2 md:-translate-x-1/2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="relative z-20 border-b border-white/10 bg-primary/95 px-4 py-6 backdrop-blur-xl sm:px-6 md:hidden">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
