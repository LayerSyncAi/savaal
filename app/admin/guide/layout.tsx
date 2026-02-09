import { cookies } from "next/headers";
import { loginAdminAction } from "./actions";

export default function GuideAdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isAdmin = cookies().get("savaal_admin")?.value === "true";

	if (!isAdmin) {
		return (
			<section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 py-20 text-center">
				<div className="space-y-2">
					<h1 className="text-3xl font-semibold text-neutral-900">
						Admin access required
					</h1>
					<p className="text-sm text-neutral-600">
						Enter the admin password to manage Guide listings.
					</p>
				</div>
				<form
					action={loginAdminAction}
					className="w-full max-w-sm space-y-4 rounded-2xl border border-amber-100 bg-white p-6 text-left shadow-md"
				>
					<label className="block text-sm font-medium text-neutral-700">
						Password
						<input
							type="password"
							name="password"
							required
							className="mt-2 w-full rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
						/>
					</label>
					<button
						type="submit"
						className="w-full rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
					>
						Unlock admin
					</button>
				</form>
			</section>
		);
	}

	return <>{children}</>;
}
