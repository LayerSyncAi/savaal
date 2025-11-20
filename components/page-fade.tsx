"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export function PageFade({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <main key={pathname} className="pt-28 page-fade">
      {children}
    </main>
  );
}
