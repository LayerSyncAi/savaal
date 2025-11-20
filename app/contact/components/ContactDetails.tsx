"use client";

import React, { MouseEvent } from "react";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { SiInstagram } from "react-icons/si";

const contactLinks: { label: string; href: string; Icon: IconType; badge: string }[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/savaal_guide",
    Icon: SiInstagram,
    badge: "Social",
  },
  {
    label: "Email",
    href: "mailto:partners@savaalguide.com",
    Icon: HiOutlineMail,
    badge: "Message",
  },
];

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

export const ContactDetails = () => {
  return (
    <section className="space-y-8 rounded-3xl border border-(--border) bg-white/80 p-8 shadow-lg backdrop-blur">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          Reach us directly
        </p>
        <h2 className="text-3xl font-bold text-[var(--primary)]">
          Partners, collaborators, and tastemakers welcome.
        </h2>
        <p className="text-[var(--muted)]">
          Drop us a note for partnerships, media, or community opportunities. We respond within
          business hours.
        </p>
      </div>

      <div className="divide-y divide-neutral-900 overflow-hidden rounded-2xl border border-neutral-900">
        <div className="grid grid-cols-1 divide-x divide-neutral-900 sm:grid-cols-2">
          {contactLinks.map((contact) => (
            <LinkBox key={contact.label} Icon={contact.Icon} href={contact.href} badge={contact.badge} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LinkBox = ({
  Icon,
  href,
  badge,
}: {
  Icon: IconType;
  href: string;
  badge: string;
}) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-24 w-full place-content-center bg-white transition sm:h-32"
    >
      <Icon className="text-2xl sm:text-3xl lg:text-4xl text-[var(--primary-dark)]" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <div className="flex items-center gap-2">
          <Icon className="text-2xl sm:text-3xl md:text-4xl" />
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {badge}
          </span>
        </div>
      </div>
    </a>
  );
};
