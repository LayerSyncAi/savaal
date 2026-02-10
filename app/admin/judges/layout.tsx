import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function JudgesAdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = await cookies();
	const isAdmin = cookieStore.get("savaal_admin")?.value === "true";

	if (!isAdmin) {
		redirect("/admin/guide");
	}

	return <>{children}</>;
}
