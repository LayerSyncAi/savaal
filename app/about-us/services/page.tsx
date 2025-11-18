import { aboutServices, type Service } from "@/content/services";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function AboutUsServicesPage() {
	return (
		<div className="bg-neutral-50 text-white">
			<section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24">
				<div className="space-y-4">
					<p className="text-sm font-semibold uppercase tracking-[0.3em]">
						About us · Services
					</p>
					<h1 className="text-4xl font-bold">The Savaal Ecosystem</h1>
					<p className="text-lg text-white/80">
						Explore the programs and touchpoints that make Savaal more than a
						guide. Each service strengthens the hospitality community, creates
						discovery moments, and reinforces a shared standard of excellence.
					</p>
				</div>

				<div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-4 shadow-2xl">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<TitleCard />
                                                {aboutServices.map((service) => (
                                                        <ServiceCard key={service.title} service={service} />
                                                ))}
					</div>
				</div>

				<Link
					href="/about-us"
					className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-(--foreground)"
				>
					Back to About us
					<FiArrowUpRight />
				</Link>
			</section>
		</div>
	);
}

const ServiceCard = ({
        service,
}: {
        service: Service;
}) => {
	const { title, description, focus, image } = service;

	return (
		<article className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-6 text-white transition duration-300 hover:border-white/40 md:h-80">
			<div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
				<div
					className="absolute inset-0 scale-100 bg-cover bg-center bg-no-repeat opacity-100 transition duration-500 group-hover:scale-105 group-hover:blur-0"
					style={{ backgroundImage: `url(${image})` }}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 transition duration-500 group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/40" />
			</div>
			<div className="relative z-10 flex flex-col gap-3">
				<span className="inline-flex w-fit items-center rounded-full border border-white/30 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-white/70">
					{focus}
				</span>
				<h2 className="p-on-dark text-2xl font-semibold leading-tight transition-transform duration-500 group-hover:-translate-y-1">
					{title}
				</h2>
				<p className="p-on-dark  text-sm">{description}</p>
			</div>
			<FiArrowUpRight className="absolute right-4 top-4 text-2xl text-white/40 transition duration-300 group-hover:text-white" />
			<Corners />
		</article>
	);
};

const Corners = () => (
	<>
		<span className="absolute left-3 top-3 z-10 h-5 w-[1px] origin-top scale-0 bg-amber-300 transition duration-500 group-hover:scale-100" />
		<span className="absolute left-3 top-3 z-10 h-[1px] w-5 origin-left scale-0 bg-amber-300 transition duration-500 group-hover:scale-100" />
		<span className="absolute right-3 top-3 z-10 h-5 w-[1px] origin-top scale-0 bg-amber-300 transition duration-500 group-hover:scale-100" />
		<span className="absolute right-3 top-3 z-10 h-[1px] w-5 origin-right scale-0 bg-amber-300 transition duration-500 group-hover:scale-100" />
		<span className="absolute bottom-3 left-3 z-10 h-5 w-[1px] origin-bottom scale-0 bg-amber-300 transition duration-500 group-hover:scale-100" />
		<span className="absolute bottom-3 left-3 z-10 h-[1px] w-5 origin-left scale-0 bg-amber-300 transition duration-500 group-hover:scale-100" />
		<span className="absolute bottom-3 right-3 z-10 h-5 w-[1px] origin-bottom scale-0 bg-amber-300 transition duration-500 group-hover:scale-100" />
		<span className="absolute bottom-3 right-3 z-10 h-[1px] w-5 origin-right scale-0 bg-amber-300 transition duration-500 group-hover:scale-100" />
	</>
);

const TitleCard = () => {
	return (
		<div className="flex h-64 flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-amber-400/20 via-amber-200/10 to-transparent p-6 text-white shadow-inner md:h-80">
			<div>
				<p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
					What we offer
				</p>
				<h2 className="mt-2 text-3xl font-semibold text-white">
					Services that uplift cultural hospitality.
				</h2>
				<p className="mt-4 text-sm text-white/70">
					From audits to community programming, each initiative amplifies
					authentic hosts across the continent.
				</p>
			</div>
			<Link
				href="/contact"
				className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-white"
			>
				Start a conversation <FiArrowUpRight />
			</Link>
		</div>
	);
};
