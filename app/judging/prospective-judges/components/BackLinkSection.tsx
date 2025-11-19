import Link from "next/link";

export function BackLinkSection() {
  return (
    <div className="flex items-center gap-3">
      <Link href="/judging" className="inline-flex items-center text-indigo-600 underline-offset-4 hover:underline">
        Back to Judging
      </Link>
    </div>
  );
}
