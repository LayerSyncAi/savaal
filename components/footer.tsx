import Link from "next/link";
import { SiInstagram } from "react-icons/si";

import { INSTAGRAM_URL } from "@/lib/constants";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Follow Savaal on Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <SiInstagram className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid w-full gap-10 sm:grid-cols-2 md:max-w-xl">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Explore
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/guide"
                  className="text-[var(--muted)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Guide
                </Link>
              </li>
              <li>
                <a
                  href="http://localhost:3000/events"
                  className="text-[var(--muted)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/partnerships"
                  className="text-[var(--muted)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Partnerships
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Ecosystem
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="http://localhost:3000/judging"
                  className="text-[var(--muted)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  The Standard
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/about-us/academy-training"
                  className="text-[var(--muted)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  The Academy
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/contact"
                  className="text-[var(--muted)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-8">
        <hr className="border-[var(--border)]" />
        <p className="mt-6 text-xs text-[var(--muted)]">
          © {currentYear} Savaal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
