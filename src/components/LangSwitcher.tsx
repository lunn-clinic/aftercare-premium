"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LANGS, langShortLabel } from "@/data/i18n";
import type { Lang } from "@/data/types";

type Props = {
  current: Lang;
  tone?: "light" | "dark";
};

/**
 * 현재 경로의 lang 세그먼트만 교체해서 다른 언어 링크로 변경
 */
function swapLangInPath(pathname: string, to: Lang) {
  // "/ko" 또는 "/ko/..."
  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 0) return `/${to}`;
  segs[0] = to;
  return "/" + segs.join("/");
}

export default function LangSwitcher({ current, tone = "light" }: Props) {
  const pathname = usePathname();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full p-1 ${
        tone === "dark"
          ? "bg-white/10 border border-white/15"
          : "bg-white border border-border-light"
      }`}
    >
      {LANGS.map((l) => {
        const active = l === current;
        return (
          <Link
            key={l}
            href={swapLangInPath(pathname, l)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider transition-all ${
              active
                ? tone === "dark"
                  ? "bg-accent-beige text-primary-navy"
                  : "bg-primary-navy text-white"
                : tone === "dark"
                ? "text-white/60 hover:text-white"
                : "text-text-muted hover:text-primary-navy"
            }`}
          >
            {langShortLabel[l]}
          </Link>
        );
      })}
    </div>
  );
}
