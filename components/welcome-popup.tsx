"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const STORAGE_KEY = "savaal_welcome_popup_seen";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem(STORAGE_KEY);
    if (!hasSeenPopup) {
      // Small delay to let the page load first
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) return;

    setIsSubmitting(true);

    // Simulate API call - in production, connect to your email service
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Close popup after showing success
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative rounded-lg bg-white p-8 shadow-2xl">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 p-2 text-gray-400 transition-colors hover:text-gray-600"
                aria-label="Close popup"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>

              {submitted ? (
                /* Success State */
                <div className="py-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
                  >
                    <svg
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Thank you for subscribing!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We&apos;ll keep you inspired with the latest in luxury travel.
                  </p>
                </div>
              ) : (
                /* Form State */
                <>
                  <div className="mb-6 text-center">
                    <h2 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
                      Dreaming of your next trip?
                    </h2>
                    <p className="text-sm text-gray-500 md:text-base">
                      Let us inspire you with stories about what&apos;s new and
                      exciting in luxury travel.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email input with arrow button */}
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ENTER YOUR EMAIL"
                        className="w-full rounded-full border border-gray-300 px-5 py-3 pr-14 text-sm tracking-wider text-gray-700 placeholder-gray-400 transition-colors focus:border-[--tertiary] focus:outline-none focus:ring-1 focus:ring-[--tertiary]"
                        required
                      />
                      <button
                        type="submit"
                        disabled={!email || !agreed || isSubmitting}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-400 transition-colors hover:text-[--tertiary] disabled:cursor-not-allowed disabled:opacity-50"
                        aria-label="Submit email"
                      >
                        {isSubmitting ? (
                          <svg
                            className="h-5 w-5 animate-spin"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        ) : (
                          <ArrowRight className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    {/* Consent checkbox */}
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 text-[--tertiary] focus:ring-[--tertiary]"
                      />
                      <span className="text-xs leading-relaxed text-gray-500">
                        I agree to the Savaal Guide{" "}
                        <a
                          href="/privacy-policy"
                          className="text-[--tertiary] hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Privacy Policy
                        </a>
                        ,{" "}
                        <a
                          href="/terms"
                          className="text-[--tertiary] hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Terms
                        </a>
                        , and{" "}
                        <a
                          href="/cookie-policy"
                          className="text-[--tertiary] hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Cookie Policy
                        </a>
                        . I understand I can withdraw my consent at any time.
                      </span>
                    </label>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
