import { summaryRows } from "./data";

export function SummaryTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="bg-neutral-900 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        🏷️ Summary Table
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-neutral-200 text-sm">
          <thead className="bg-neutral-100 text-neutral-700">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Package</th>
              <th className="px-4 py-3 text-left font-semibold">Duration</th>
              <th className="px-4 py-3 text-left font-semibold">Price</th>
              <th className="px-4 py-3 text-left font-semibold">Best For</th>
              <th className="px-4 py-3 text-left font-semibold">Key Wins</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {summaryRows.map((row) => (
              <tr key={row.package} className="bg-white">
                <td className="px-4 py-3 font-semibold text-neutral-900">{row.package}</td>
                <td className="px-4 py-3 text-neutral-700">{row.duration}</td>
                <td className="px-4 py-3 text-neutral-900">{row.price}</td>
                <td className="px-4 py-3 text-neutral-700">{row.bestFor}</td>
                <td className="px-4 py-3 text-neutral-700">{row.keyWins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
