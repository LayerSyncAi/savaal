import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

import { INSTAGRAM_URL } from "@/lib/constants";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-light)] bg-[var(--secondary)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:flex-row lg:items-start lg:justify-between lg:px-12">
        <div className="flex">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-light)] text-[var(--primary)] transition hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--secondary)]"
            aria-label="Savaal on Instagram"
          >
            <FiInstagram className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-10 text-sm sm:grid-cols-2">
          <div className="space-y-4">
            <p className="text-base font-semibold text-[var(--primary-dark)]">
              Explore
            </p>
            <ul className="space-y-3 text-[var(--muted-dark)]">
              <li>
                <Link
                  href="/guide"
                  className="transition hover:text-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--secondary)]"
                >
                  Guide
                </Link>
              </li>
              <li>
                <a
                  href="http://localhost:3000/events"
                  className="transition hover:text-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--secondary)]"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/partnerships"
                  className="transition hover:text-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--secondary)]"
                >
                  Partnerships
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-base font-semibold text-[var(--primary-dark)]">
              Ecosystem
            </p>
            <ul className="space-y-3 text-[var(--muted-dark)]">
              <li>
                <a
                  href="http://localhost:3000/judging"
                  className="transition hover:text-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--secondary)]"
                >
                  The Standard
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/about-us/academy-training"
                  className="transition hover:text-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--secondary)]"
                >
                  The Academy
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/contact"
                  className="transition hover:text-[var(--primary-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--secondary)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-[var(--border-light)]" />
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-[var(--muted-dark)] lg:px-12">
        © {currentYear} Savaal. All rights reserved.
      </div>
    </footer>
  );
};
