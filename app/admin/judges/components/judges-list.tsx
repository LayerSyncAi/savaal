"use client";

import { useState } from "react";
import type { Doc } from "@/convex/_generated/dataModel";
import {
	createJudgeAction,
	updateJudgeAction,
	deleteJudgeAction,
} from "../actions";

type Judge = Doc<"judges">;

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
				<button
					type="submit"
					className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
				>
					Add judge
				</button>
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
								<button
									type="submit"
									className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800"
								>
									Save
								</button>
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
										<button
											type="submit"
											className="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50"
										>
											Delete
										</button>
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
