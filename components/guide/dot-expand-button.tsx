"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { FiArrowRight } from "react-icons/fi";

type DotExpandButtonProps = {
        href: string;
        label: string;
        onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function DotExpandButton({ href, label, onClick }: DotExpandButtonProps) {
        return (
                <Link
                        href={href}
                        onClick={(event) => {
                                event.stopPropagation();
                                onClick?.(event);
                        }}
                        className="group mt-4 inline-flex h-10 items-center gap-2 self-start rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
                >
                        <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                                <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
                        </span>
                        <span>{label}</span>
                </Link>
        );
}
