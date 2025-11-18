"use client";

import Link from "next/link";
import { type ReactNode, type CSSProperties } from "react";

interface RoundedSlideButtonProps {
	href: string;
	title: string;
	hoverFillColor?: string;
	defaultColor?: string;
	icon?: ReactNode;
}

export const RoundedSlideButtonLight = ({
	href,
	title,
	hoverFillColor = "var(--primary)",
	defaultColor = "var(--background)",
	icon = null,
}: RoundedSlideButtonProps) => {
	const customProperties: CSSProperties & {
		"--hover-color"?: string;
		"--default-color"?: string;
	} = {
		"--hover-color": hoverFillColor,
		"--default-color": defaultColor,
	};

	return (
		<Link
			href={href}
			style={customProperties}
			className={`
                                relative z-0 flex items-center gap-2 overflow-hidden border border-(--hover-color)]
                                px-4 py-2 font-semibold uppercase text-neutral-900 transition-all duration-500 rounded-full
                                bg-(--default-color)]

                                before:absolute before:inset-0 before:-z-10 before:translate-x-[150%]
                                before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%]
                                before:bg-[var(--hover-color)] before:transition-transform before:duration-1000
                                before:content-['']

                                hover:scale-115 hover:text-white hover:before:translate-x-[0%]
                                hover:before:translate-y-[0%]
                                active:scale-95
                        `}
		>
			{icon && <span className="icon-wrapper">{icon}</span>}
			<span>{title}</span>
		</Link>
	);
};

export default RoundedSlideButtonLight;
