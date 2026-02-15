"use client";

import { useEffect, useState, useRef, startTransition } from "react";
import { usePathname } from "next/navigation";

export function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPathRef = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    if (pathname !== prevPathRef.current) {
      // Navigation completed — jump to 100% and fade out
      prevPathRef.current = pathname;
      clearInterval(timerRef.current);
      setProgress(100);
      const timeout = setTimeout(() => {
        startTransition(() => {
          setVisible(false);
          setProgress(0);
        });
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  useEffect(() => {
    // Listen for click on internal links to start the progress bar
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) return;
      if (anchor.target === "_blank") return;
      if (href === prevPathRef.current) return;

      // Start progress animation
      setVisible(true);
      setProgress(20);
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(timerRef.current);
            return 90;
          }
          return prev + Math.random() * 10;
        });
      }, 300);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      clearInterval(timerRef.current);
    };
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-amber-500 transition-all duration-300 ease-out"
      style={{
        width: `${progress}%`,
        opacity: progress >= 100 ? 0 : 1,
      }}
    />
  );
}
