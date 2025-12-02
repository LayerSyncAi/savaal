"use client";

import { Suspense, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Businesses } from "./Businesses";
import { Personal } from "./Personal";

const TAB_DATA = [
  {
    id: 1,
    title: "Businesses",
  },
  {
    id: 2,
    title: "Personal",
  },
];

export const ShiftHightlightTabs = () => {
  return (
    <Suspense fallback={<div className="px-6 py-10">Loading tabs...</div>}>
      <ShiftHighlightTabsContent />
    </Suspense>
  );
};

const ShiftHighlightTabsContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selected = useMemo(() => {
    const tab = searchParams.get("tab")?.toLowerCase();
    if (tab === "personal") return 2;
    return 1;
  }, [searchParams]);

  const handleSelect = (id: number) => {
    const tab = id === 1 ? "business" : "personal";
    const query = new URLSearchParams(searchParams.toString());
    query.set("tab", tab);
    router.replace(`${pathname}?${query.toString()}`, { scroll: false });
  };
  return (
    <div className="bg-zinc-50">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 px-6 py-10">
        {TAB_DATA.map((t) => (
          <ToggleButton
            key={t.id}
            id={t.id}
            selected={selected}
            setSelected={handleSelect}
          >
            {t.title}
          </ToggleButton>
        ))}
      </div>
      <div className="mx-auto max-w-3xl px-6 pb-12">
        {selected === 1 ? <Businesses /> : <Personal />}
      </div>
    </div>
  );
};

const ToggleButton = ({
  children,
  selected,
  setSelected,
  id,
}: {
  children: string;
  selected: number;
  setSelected: (value: number) => void;
  id: number;
}) => {
  return (
    <div
      className={`rounded-lg transition-colors ${
        selected === id ? "bg-(--tertiary)" : "bg-zinc-900"
      }`}
    >
      <button
        onClick={() => setSelected(id)}
        className={`w-full origin-top-left rounded-lg border py-3 text-xs font-medium transition-all md:text-base ${
          selected === id
            ? "-translate-y-1 border-(--tertiary) bg-white text-(--tertiary)"
            : "border-zinc-900 bg-white text-zinc-900 hover:-rotate-2"
        }`}
      >
        {children}
      </button>
    </div>
  );
};
