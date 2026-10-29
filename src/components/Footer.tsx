export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* Only "X" logo */}
        <div className="flex items-center justify-center">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 mx-auto max-w-2xl text-xs sm:text-sm leading-relaxed text-gray-500">
          Kinfi documentation is a concise build-ready baseline and is not a
          legal opinion, security audit, investment recommendation or guarantee
          of provider eligibility. Verify current documentation, pricing and
          protocol conditions before implementation and launch.
        </p>

        {/* Copyright */}
        <p className="mt-6 text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Kinfi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
