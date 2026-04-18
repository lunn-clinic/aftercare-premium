import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import RedirectShim from "@/components/RedirectShim";
import {
  getBySlug,
  getTierMeta,
  treatmentMetas,
} from "@/data/aftercare";
import { LANGS, ui, formatCopy } from "@/data/i18n";
import type { Lang, Tier } from "@/data/types";

const UNIFIED_LANGS: readonly Lang[] = ["en", "zh", "ja"];

export function generateStaticParams() {
  const params: { lang: Lang; tier: Tier; slug: string }[] = [];
  for (const lang of LANGS) {
    for (const m of treatmentMetas) {
      // 한국어: tier별로 해당 tier slug만 생성
      if (lang === "ko") {
        params.push({ lang, tier: m.tier, slug: m.slug });
      } else {
        // 영어/중국어: 모든 slug를 premium 경로로 통합 생성
        params.push({ lang, tier: "premium", slug: m.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; tier: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, tier, slug } = await params;
  if (!LANGS.includes(lang as Lang)) return { title: "Aftercare Guide" };
  const data = getBySlug(lang as Lang, tier as Tier, slug);
  if (!data) return { title: "Aftercare Guide" };
  return {
    title: `${data.current.procedureName} · ${data.current.heroLine1}`,
  };
}

export default async function AftercareDetailPage({
  params,
}: {
  params: Promise<{ lang: string; tier: string; slug: string }>;
}) {
  const { lang, tier, slug } = await params;
  if (!LANGS.includes(lang as Lang)) notFound();
  if (!["basic", "premium"].includes(tier)) notFound();
  const l = lang as Lang;
  // 영어/중국어: basic URL로 들어오면 premium 경로로 리디렉트 (통합 정책)
  if (UNIFIED_LANGS.includes(l) && tier === "basic") {
    return <RedirectShim to={`/${l}/premium/${slug}`} />;
  }
  const data = getBySlug(l, tier as Tier, slug);
  if (!data) notFound();
  const copy = ui[l];
  const meta = getTierMeta(l, tier as Tier);
  const d = data.current;

  return (
    <>
      <PageBanner
        title={`${d.procedureName}`}
        subtitle={copy.aftercareGuide}
        breadcrumb={[
          { label: copy.aftercareGuide },
          { label: meta.label, href: `/${l}/${tier}` },
          { label: d.procedureName },
        ]}
      />

      {/* 0. Critical Notice */}
      {d.criticalNotice ? (
        <section className="relative bg-[#EFECE8]">
          <div className="max-w-[1240px] mx-auto px-6 pt-16 lg:pt-24 pb-12 lg:pb-20">
            <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-20">
              <div className="lg:pt-2">
                <p className="text-accent-gold text-[10px] tracking-[0.4em] font-bold mb-4">
                  {copy.criticalKey}
                </p>
                <div className="w-10 h-px bg-accent-gold mb-6" />
                <p className="text-accent-gold text-sm lg:text-[15px] font-semibold leading-relaxed">
                  {d.criticalNotice.label}
                </p>
                {d.criticalNotice.timing ? (
                  <p className="text-[#8B7A5B] text-xs mt-3 tracking-wide">
                    {d.criticalNotice.timing}
                  </p>
                ) : null}
              </div>
              <div className="lg:pl-10 lg:border-l lg:border-accent-gold/15">
                <h2
                  className="text-primary-navy text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] leading-[1.3] mb-8"
                  style={{
                    fontFamily: '"Noto Serif KR", serif',
                    fontWeight: 400,
                  }}
                >
                  {d.criticalNotice.headline}
                </h2>
                {d.criticalNotice.detail ? (
                  <p className="text-text-secondary text-[15px] lg:text-base leading-[1.95] max-w-2xl">
                    {d.criticalNotice.detail}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />
          </div>
        </section>
      ) : null}

      {/* 1. Intro */}
      <section className="bg-[#EFECE8]">
        <div className="max-w-[1240px] mx-auto px-6 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <p className="text-accent-gold text-[10px] tracking-[0.4em] font-bold mb-5">
                AFTERCARE
              </p>
              <div className="w-10 h-px bg-accent-gold mb-6" />
              <p className="text-accent-gold text-lg font-semibold mb-2">
                {d.device}
              </p>
              <p className="text-text-muted text-xs tracking-[0.15em]">
                {copy.forOurPatients}
              </p>
            </div>
            <div className="lg:col-span-9 lg:pl-6">
              <h2
                className="text-primary-navy text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.2] mb-10"
                style={{
                  fontFamily: '"Noto Serif KR", serif',
                  fontWeight: 300,
                }}
              >
                {d.heroLine1}
              </h2>
              <p className="text-text-secondary text-[17px] lg:text-lg leading-[1.95] max-w-2xl">
                {d.heroLine2}
              </p>
              <div className="mt-16 pt-8 border-t border-accent-gold/10">
                <p className="text-text-muted text-xs leading-[1.85] italic max-w-2xl">
                  {copy.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Timeline */}
      <section className="bg-white">
        <div className="max-w-[1140px] mx-auto px-6 py-24 lg:py-32">
          <div className="text-center mb-16">
            <p className="text-accent-gold text-sm font-semibold tracking-wide mb-3">
              {copy.recoveryTimeline}
            </p>
            <h2
              className="text-primary-navy text-3xl lg:text-4xl leading-[1.25]"
              style={{ fontFamily: '"Noto Serif KR", serif', fontWeight: 400 }}
            >
              {copy.timelinePhase}
            </h2>
          </div>

          <div className="space-y-8 lg:space-y-10">
            {d.timeline.map((phase, i) => (
              <article
                key={i}
                className="rounded-3xl border border-border-light bg-bg-warm p-8 lg:p-12"
              >
                <div className="flex items-baseline justify-between gap-6 flex-wrap mb-6 pb-6 border-b border-border-light">
                  <div>
                    <p className="text-accent-gold text-[10px] tracking-[0.3em] font-bold mb-2">
                      {copy.recoveryPhase} {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className="text-primary-navy text-2xl lg:text-[1.75rem] leading-tight"
                      style={{
                        fontFamily: '"Noto Serif KR", serif',
                        fontWeight: 400,
                      }}
                    >
                      {phase.title}
                    </h3>
                  </div>
                  <span className="text-text-muted text-sm tracking-wide">
                    {phase.when}
                  </span>
                </div>

                <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 italic">
                  {phase.feeling}
                </p>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                  <div>
                    <p className="text-primary-navy text-xs tracking-[0.25em] font-bold mb-4">
                      {copy.doLabel}
                    </p>
                    <ul className="space-y-3">
                      {phase.dos.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-text-primary leading-[1.7]"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-navy shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-accent-gold text-xs tracking-[0.25em] font-bold mb-4">
                      {copy.dontLabel}
                    </p>
                    <ul className="space-y-3">
                      {phase.donts.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-text-primary leading-[1.7]"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Self check */}
      <section className="bg-[#EFECE8]">
        <div className="max-w-[720px] mx-auto px-6 py-24 lg:py-32 text-center">
          <p className="text-accent-gold text-sm font-semibold tracking-wide mb-5">
            {d.procedureName}
          </p>
          <h2
            className="text-primary-navy text-[2.25rem] md:text-[2.75rem] lg:text-5xl leading-[1.25] mb-4"
            style={{ fontFamily: '"Noto Serif KR", serif', fontWeight: 400 }}
          >
            {copy.selfCheck}
          </h2>
          <p className="text-text-muted text-sm mt-5 mb-12">
            {copy.selfCheckIntro}
          </p>

          <div className="bg-white rounded-2xl px-8 lg:px-12 py-10 lg:py-12 text-left mb-6">
            <div className="flex items-center justify-between mb-7 pb-5 border-b border-border-light">
              <p className="text-accent-gold text-xs tracking-[0.25em] font-bold">
                {copy.normalResponse}
              </p>
              <p className="text-text-muted text-xs">{copy.watchAndWait}</p>
            </div>
            <ul className="divide-y divide-border-light">
              {d.warningSigns.normal.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded border-[1.5px] border-primary-navy/30 mt-0.5 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-primary-navy"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-text-secondary text-[15px] leading-[1.7] flex-1">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl px-8 lg:px-12 py-10 lg:py-12 text-left mb-10">
            <div className="flex items-center justify-between mb-7 pb-5 border-b border-border-light">
              <p className="text-accent-gold text-xs tracking-[0.25em] font-bold">
                {copy.whenToVisit}
              </p>
              <p className="text-accent-gold text-xs font-semibold">
                {copy.consultRecommended}
              </p>
            </div>
            <ul className="divide-y divide-border-light">
              {d.warningSigns.needVisit.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded border-[1.5px] border-accent-gold/40 mt-0.5" />
                  <span className="text-text-primary text-[15px] leading-[1.7] flex-1">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-text-muted text-sm mb-8 leading-relaxed">
            {copy.selfCheckOutro}
          </p>
        </div>
      </section>

      {/* 4. Synergy */}
      {d.synergies.length > 0 ? (
        <section className="relative bg-primary-navy text-white overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent-beige/[0.04] rounded-full blur-[140px] pointer-events-none" />
          <div className="relative max-w-[1240px] mx-auto px-6 py-24 lg:py-36">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-28">
              <div className="lg:col-span-3">
                <p className="text-accent-beige text-[10px] tracking-[0.4em] font-bold mb-5">
                  {copy.synergyEyebrow}
                </p>
                <div className="w-10 h-px bg-accent-beige mb-6" />
                <p className="text-accent-beige/80 text-sm font-semibold leading-relaxed">
                  {copy.synergyLead}
                </p>
              </div>
              <div className="lg:col-span-9 lg:pl-6">
                <h2
                  className="text-white text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.2] mb-8"
                  style={{
                    fontFamily: '"Noto Serif KR", serif',
                    fontWeight: 300,
                  }}
                >
                  {copy.synergyHeadline1}
                  <br />
                  <span className="text-accent-beige">
                    {copy.synergyHeadline2}
                  </span>
                </h2>
              </div>
            </div>

            <div>
              {d.synergies.map((s, i) => (
                <div
                  key={i}
                  className={`grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 lg:py-16 ${
                    i !== 0 ? "border-t border-white/10" : ""
                  }`}
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-baseline gap-5 mb-6">
                      <span
                        className="text-accent-beige/30 text-6xl lg:text-7xl leading-none"
                        style={{
                          fontFamily: '"Noto Serif KR", serif',
                          fontWeight: 200,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-accent-beige text-[10px] tracking-[0.3em] font-bold mb-2">
                          {copy.addOn}
                        </p>
                        <p
                          className="text-white text-2xl lg:text-3xl leading-tight"
                          style={{
                            fontFamily: '"Noto Serif KR", serif',
                            fontWeight: 400,
                          }}
                        >
                          {s.device}
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent-beige/30 rounded-full">
                      <span className="text-accent-beige/90 text-xs tracking-wide">
                        {s.timing}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-8 lg:pl-10 lg:border-l lg:border-white/10">
                    <p
                      className="text-white text-xl lg:text-2xl leading-[1.45] mb-6"
                      style={{
                        fontFamily: '"Noto Serif KR", serif',
                        fontWeight: 300,
                      }}
                    >
                      {s.benefit}
                    </p>
                    <p className="text-white/60 text-[15px] lg:text-base leading-[1.95] max-w-2xl">
                      {s.reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 5. Rebooking */}
      <section className="bg-[#EFECE8]">
        <div className="max-w-[720px] mx-auto px-6 py-24 lg:py-32 text-center">
          <p className="text-accent-gold text-sm font-semibold tracking-wide mb-5">
            {copy.nextVisit}
          </p>
          <h2
            className="text-primary-navy text-[2.25rem] md:text-[2.75rem] lg:text-5xl leading-[1.25] mb-4"
            style={{ fontFamily: '"Noto Serif KR", serif', fontWeight: 400 }}
          >
            {formatCopy(copy.nextVisitMonths, data.rebookingMonths)}
          </h2>
          <p className="text-text-secondary text-[15px] leading-[1.95] mt-6 mb-12 max-w-md mx-auto">
            {d.rebookingDesc}
          </p>

          <Link
            href={`/${l}/${tier}`}
            className="inline-block bg-primary-navy hover:bg-[#0F2639] text-white py-4 px-10 rounded-full text-sm font-semibold tracking-wide transition-all"
          >
            {copy.backToHome}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-white">
        <div className="max-w-[720px] mx-auto px-6 py-16 text-center">
          <div className="h-px w-16 bg-accent-gold/30 mx-auto mb-8" />
          <p className="text-text-muted text-xs leading-[1.85] italic">
            {copy.footerDisclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
