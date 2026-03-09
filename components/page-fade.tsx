"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export function PageFade({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main key={pathname} className={`${isHome ? "" : "pt-28"} page-fade`}>
      {children}
    </main>
  );
}
