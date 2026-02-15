"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import type { Doc } from "@/convex/_generated/dataModel";
import {
	createJudgeAction,
	updateJudgeAction,
	deleteJudgeAction,
} from "../actions";

type Judge = Doc<"judges">;

function SubmitButton({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "danger" }) {
	const { pending } = useFormStatus();
	const baseClass = variant === "danger"
		? "rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50 disabled:opacity-50"
		: "rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-50";

	return (
		<button type="submit" disabled={pending} className={`inline-flex items-center gap-2 ${baseClass}`}>
			{pending && (
				<span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-current/30 border-t-current" />
			)}
			{children}
		</button>
	);
}

export function JudgesList({ judges }: { judges: Judge[] }) {
	const [editingId, setEditingId] = useState<string | null>(null);

	return (
		<div className="space-y-4 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
			{/* Add new judge */}
			<form action={createJudgeAction} className="flex gap-3">
				<input
					name="name"
					placeholder="New judge name"
					required
					className="flex-1 rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
				/>
				<SubmitButton>Add judge</SubmitButton>
			</form>

			{/* Judge list */}
			<div className="grid gap-3">
				{judges.map((judge) => (
					<div
						key={judge._id}
						className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-amber-50/40 p-4"
					>
						{editingId === judge._id ? (
							<form
								action={updateJudgeAction.bind(null, judge._id)}
								className="flex flex-1 gap-3"
								onSubmit={() => setEditingId(null)}
							>
								<input
									name="name"
									defaultValue={judge.name}
									required
									autoFocus
									className="flex-1 rounded-xl border border-amber-200 px-3 py-2 text-sm shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
								/>
								<SubmitButton>Save</SubmitButton>
								<button
									type="button"
									onClick={() => setEditingId(null)}
									className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-700 transition hover:border-neutral-900"
								>
									Cancel
								</button>
							</form>
						) : (
							<>
								<span className="flex-1 text-sm font-medium text-neutral-900">
									{judge.name}
								</span>
								<div className="flex gap-2">
									<button
										type="button"
										onClick={() => setEditingId(judge._id)}
										className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold text-neutral-800 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
									>
										Edit
									</button>
									<form
										action={deleteJudgeAction.bind(
											null,
											judge._id
										)}
									>
										<SubmitButton variant="danger">Delete</SubmitButton>
									</form>
								</div>
							</>
						)}
					</div>
				))}
				{judges.length === 0 && (
					<div className="rounded-xl border border-dashed border-amber-200 p-8 text-center text-sm text-neutral-500">
						No judges yet. Add one above.
					</div>
				)}
			</div>
		</div>
	);
}
