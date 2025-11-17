"use client";

import { useState, type ComponentType } from "react";
import Link from "next/link";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import useMeasure from "react-use-measure";

interface FlyoutContentProps {
  onNavigate?: () => void;
}

type FlyoutContent = ComponentType<FlyoutContentProps>;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 250 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white transition-all duration-300 ease-out lg:px-12 ${
        scrolled
          ? "bg-neutral-950 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <div className="hidden gap-6 lg:flex">
          <Links />
          <CTAs />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }: { color?: string }) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="text-2xl font-bold" style={{ color }}>
        Savaal
      </span>
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="w-10"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor={color}
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor={color}
        ></path>
      </svg>
    </Link>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map((link) => (
        <NavLink key={link.text} link={link} />
      ))}
    </div>
  );
};

const NavLink = ({
  link,
}: {
  link: { text: string; href: string; component?: FlyoutContent };
}) => {
  const [open, setOpen] = useState(false);
  const showFlyout = Boolean(link.component) && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link href={link.href} className="relative">
        {link.text}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && link.component && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <link.component />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CTAs = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/guide"
        className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black"
      >
        <FaUserCircle />
        <span>Sign in</span>
      </Link>
      <Link
        href="/partnerships"
        className="rounded-lg border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
      >
        Schedule a Demo
      </Link>
    </div>
  );
};

function AboutUsContent({ onNavigate }: FlyoutContentProps) {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-neutral-950 p-6 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">About us</h2>
          <p className="mb-6 max-w-xs text-sm text-neutral-400">
            Get to know how the Savaal Guide celebrates cultural hospitality
            excellence.
          </p>
        </div>
        <Link
          href="/about-us"
          onClick={onNavigate}
          className="flex items-center gap-1 text-xs text-indigo-300 hover:underline"
        >
          Learn more <FiArrowRight />
        </Link>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        <LinkCard
          title="Features"
          description="Explore the pillars that power our ecosystem."
          href="/about-us/features"
          onNavigate={onNavigate}
        />
        <LinkCard
          title="Testimonials"
          description="See what our community says about us."
          href="/about-us/testimonials"
          onNavigate={onNavigate}
        />
        <LinkCard
          title="Press"
          description="Latest coverage and media kits."
          href="/about-us"
          onNavigate={onNavigate}
        />
        <LinkCard
          title="Blog"
          description="Stories and insights from across the continent."
          href="/about-us/blog"
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
};

function JudgingContent({ onNavigate }: FlyoutContentProps) {
  return (
    <div className="w-full bg-white p-6 shadow-none lg:w-[320px] lg:shadow-xl">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Businesses</h3>
          <p className="text-sm text-neutral-500">
            Criteria, support, and readiness resources for entrants.
          </p>
          <Link
            href="/judging/businesses"
            onClick={onNavigate}
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline"
          >
            Explore <FiArrowRight />
          </Link>
        </div>
        <div>
          <h3 className="font-semibold">Prospective Judges</h3>
          <p className="text-sm text-neutral-500">
            Join the panel and help recognize excellence.
          </p>
          <Link
            href="/judging/prospective-judges"
            onClick={onNavigate}
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline"
          >
            Apply now <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

function ServicesContent({ onNavigate }: FlyoutContentProps) {
  return (
    <InfoPanel
      title="Services"
      description="Consultancy, training, and tailored cultural hospitality programs for teams."
      href="/services"
      onNavigate={onNavigate}
    />
  );
}

function EventsContent({ onNavigate }: FlyoutContentProps) {
  return (
    <InfoPanel
      title="Events"
      description="Immersive gatherings and showcases that celebrate outstanding hosts."
      href="/events"
      onNavigate={onNavigate}
    />
  );
}

function PartnershipsContent({ onNavigate }: FlyoutContentProps) {
  return (
    <InfoPanel
      title="Partnerships"
      description="Work with us to amplify cultural hospitality across Africa."
      href="/partnerships"
      onNavigate={onNavigate}
    />
  );
}

const LINKS: { text: string; href: string; component?: FlyoutContent }[] = [
  {
    text: "Guide",
    href: "/guide",
  },
  {
    text: "About us",
    href: "/about-us",
    component: AboutUsContent,
  },
  {
    text: "Judging",
    href: "/judging",
    component: JudgingContent,
  },
  {
    text: "Services",
    href: "/services",
    component: ServicesContent,
  },
  {
    text: "Events",
    href: "/events",
    component: EventsContent,
  },
  {
    text: "Partnerships",
    href: "/partnerships",
    component: PartnershipsContent,
  },
];

const LinkCard = ({
  title,
  description,
  href,
  onNavigate,
}: {
  title: string;
  description: string;
  href: string;
  onNavigate?: () => void;
}) => (
  <Link
    href={href}
    onClick={onNavigate}
    className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100"
  >
    <h3 className="mb-1 font-semibold">{title}</h3>
    <p className="text-xs">{description}</p>
  </Link>
);

const InfoPanel = ({
  title,
  description,
  href,
  onNavigate,
}: {
  title: string;
  description: string;
  href: string;
  onNavigate?: () => void;
}) => (
  <div className="w-full bg-white p-6 shadow-none lg:w-[320px] lg:shadow-xl">
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
      <Link
        href={href}
        onClick={onNavigate}
        className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline"
      >
        Discover more <FiArrowRight />
      </Link>
    </div>
  </div>
);

const MobileMenuLink = ({
  children,
  href,
  FoldContent,
  setMenuOpen,
}: {
  children: React.ReactNode;
  href: string;
  FoldContent?: FlyoutContent;
  setMenuOpen: (open: boolean) => void;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-neutral-950">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link
            href={href}
            onClick={(event) => {
              event.stopPropagation();
              setMenuOpen(false);
            }}
          >
            {children}
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link
          href={href}
          onClick={() => setMenuOpen(false)}
          className="flex w-full items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </Link>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent onNavigate={() => setMenuOpen(false)} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-neutral-950" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
              {LINKS.map((link) => (
                <MobileMenuLink
                  key={link.text}
                  href={link.href}
                  FoldContent={link.component}
                  setMenuOpen={setOpen}
                >
                  {link.text}
                </MobileMenuLink>
              ))}
            </div>
            <div className="flex justify-end bg-neutral-950 p-6">
              <CTAs />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
