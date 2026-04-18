import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import RedirectShim from "@/components/RedirectShim";
import { getCategories, getTierMeta } from "@/data/aftercare";
import { LANGS, ui, formatCopy } from "@/data/i18n";
import type { Lang, Tier } from "@/data/types";

const TIERS: Tier[] = ["basic", "premium"];
const UNIFIED_LANGS: readonly Lang[] = ["en", "zh", "ja"];

export function generateStaticParams() {
  const combos: { lang: Lang; tier: Tier }[] = [];
  for (const lang of LANGS) {
    for (const tier of TIERS) {
      // 영어/중국어의 basic 허브는 생성하지 않음 (premium 통합으로 대체)
      if (UNIFIED_LANGS.includes(lang) && tier === "basic") continue;
      combos.push({ lang, tier });
    }
  }
  return combos;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; tier: string }>;
}): Promise<Metadata> {
  const { lang, tier } = await params;
  if (!LANGS.includes(lang as Lang) || !TIERS.includes(tier as Tier)) {
    return { title: "Aftercare Guide" };
  }
  const meta = getTierMeta(lang as Lang, tier as Tier);
  return { title: `${meta.label} | Lunn Aftercare`, description: meta.tagline };
}

export default async function TierHubPage({
  params,
}: {
  params: Promise<{ lang: string; tier: string }>;
}) {
  const { lang, tier } = await params;
  if (!LANGS.includes(lang as Lang) || !TIERS.includes(tier as Tier)) {
    notFound();
  }
  const l = lang as Lang;
  const t = tier as Tier;
  // 영어/중국어에서 basic URL로 들어오면 premium 통합 페이지로 리디렉트
  if (UNIFIED_LANGS.includes(l) && t === "basic") {
    return <RedirectShim to={`/${l}/premium`} />;
  }
  const copy = ui[l];
  const meta = getTierMeta(l, t);
  const categories = getCategories(l, t);
  const totalCount = categories.reduce((n, c) => n + c.items.length, 0);
  const isPremium = t === "premium";

  return (
    <>
      <PageBanner
        title={meta.label}
        subtitle={meta.subtitle}
        breadcrumb={[
          { label: copy.aftercareGuide },
          { label: meta.label },
        ]}
      />

      {/* 인트로 */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[860px] mx-auto px-6 text-center">
          <p
            className={`text-[10px] tracking-[0.4em] font-bold mb-5 ${
              isPremium ? "text-primary-navy" : "text-accent-gold"
            }`}
          >
            {isPremium ? "AFTERCARE · PREMIUM" : "AFTERCARE · BASIC"}
          </p>
          <div
            className={`w-10 h-px mx-auto mb-8 ${
              isPremium ? "bg-primary-navy" : "bg-accent-gold"
            }`}
          />
          <h2 className="text-primary-navy text-3xl lg:text-4xl font-extrabold leading-tight mb-6 whitespace-pre-line">
            {meta.tagline}
          </h2>
          <p className="text-text-secondary text-[15px] leading-[1.9]">
            {formatCopy(copy.guideCount, totalCount)}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map((c) => (
              <a
                key={c.key}
                href={`#cat-${c.key}`}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-light text-primary-navy text-xs font-semibold hover:border-primary-navy transition-all"
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPremium ? "bg-primary-navy" : "bg-accent-gold"
                  }`}
                />
                {c.name}
                <span className="text-text-muted">{c.items.length}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 카테고리별 그룹 */}
      <section className="pb-16 lg:pb-24 bg-bg-warm">
        <div className="max-w-[1140px] mx-auto px-6 py-16 lg:py-24 space-y-20 lg:space-y-28">
          {categories.map((cat, catIdx) => (
            <div key={cat.key} id={`cat-${cat.key}`} className="scroll-mt-24">
              <div className="flex items-end justify-between gap-6 mb-8 flex-wrap">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.25em] text-white ${
                        isPremium ? "bg-primary-navy" : "bg-accent-gold"
                      }`}
                    >
                      {String(catIdx + 1).padStart(2, "0")} · {copy.categoryLabel}
                    </span>
                    <span className="text-text-muted text-xs">
                      {formatCopy(copy.guideCount, cat.items.length)}
                    </span>
                  </div>
                  <h3
                    className={`text-2xl lg:text-[2rem] font-extrabold leading-tight mb-2 ${
                      isPremium ? "text-primary-navy" : "text-accent-gold"
                    }`}
                  >
                    {cat.name}
                  </h3>
                </div>
                <div
                  className={`h-px flex-1 min-w-[100px] mb-4 ${
                    isPremium ? "bg-primary-navy/20" : "bg-accent-gold/20"
                  }`}
                />
              </div>

              <div
                className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 lg:p-8 rounded-3xl ${
                  isPremium ? "bg-primary-navy/[0.03]" : "bg-accent-gold/[0.03]"
                }`}
              >
                {cat.items.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/${l}/${t}/${g.slug}`}
                    className="block h-full"
                  >
                    <div
                      className="relative h-full bg-white rounded-2xl border-l-[3px] border border-border-light p-6 lg:p-7 transition-all hover:shadow-[0_10px_40px_rgba(22,55,75,0.08)] hover:-translate-y-0.5"
                      style={{
                        borderLeftColor: isPremium ? "#16374B" : "#281203",
                      }}
                    >
                      <p
                        className="text-[10px] tracking-[0.25em] font-bold mb-3"
                        style={{ color: isPremium ? "#16374B" : "#281203" }}
                      >
                        AFTERCARE
                      </p>
                      <h4 className="text-primary-navy text-xl font-extrabold mb-2.5 leading-tight">
                        {g.current.procedureName}
                      </h4>
                      <p className="text-text-secondary text-[13px] leading-relaxed mb-5">
                        {g.current.heroLine2}
                      </p>
                      <p
                        className="text-xs font-semibold tracking-wide"
                        style={{ color: isPremium ? "#16374B" : "#281203" }}
                      >
                        {copy.cardGuideCta}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-20 bg-primary-navy text-white text-center">
        <div className="max-w-[720px] mx-auto px-6">
          <Link
            href={`/${l}`}
            className="inline-block bg-accent-beige hover:bg-[#BFB8A9] text-primary-navy px-10 py-4 rounded-full text-sm font-semibold tracking-wide transition-all"
          >
            {copy.otherLine}
          </Link>
        </div>
      </section>
    </>
  );
}
