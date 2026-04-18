import type { Lang, Tier, Treatment, TreatmentContent } from "./types";
import { treatmentMetas } from "./treatments-meta";
import { contentKo } from "./treatments-ko";
import { contentEn } from "./treatments-en";
import { contentZh } from "./treatments-zh";
import { contentJa } from "./treatments-ja";
import { ui } from "./i18n";

export type { Lang, Tier, Treatment } from "./types";

const byLang: Record<Lang, Record<string, TreatmentContent>> = {
  ko: contentKo,
  en: contentEn,
  zh: contentZh,
  ja: contentJa,
};

/**
 * 정책: 한국어 외 언어 환자는 티어 구분 없이 모든 시술 가이드를 한 곳(프리미엄)에서 본다.
 * 한국어만 베이직/프리미엄 분리 유지.
 */
export function isUnifiedTier(lang: Lang, tier: Tier): boolean {
  return lang !== "ko" && tier === "premium";
}

/**
 * 한 시술을 언어 컨텍스트로 조회.
 * 영어/중국어는 tier 불일치해도 slug만으로 조회 허용 (모든 시술을 프리미엄 URL로 접근).
 */
export function getBySlug(
  lang: Lang,
  tier: Tier,
  slug: string,
): (Treatment & { current: TreatmentContent }) | undefined {
  const meta =
    lang !== "ko" && tier === "premium"
      ? treatmentMetas.find((m) => m.slug === slug) // tier 무시
      : treatmentMetas.find((m) => m.tier === tier && m.slug === slug);
  if (!meta) return undefined;
  const content: Record<Lang, TreatmentContent> = {
    ko: contentKo[slug],
    en: contentEn[slug],
    zh: contentZh[slug],
    ja: contentJa[slug],
  };
  const current = byLang[lang][slug];
  if (!current) return undefined;
  return { ...meta, content, current };
}

/**
 * 특정 tier의 시술 전부 조회 (언어별 content 포함)
 * 영어/중국어 + premium → 모든 시술 11개 통합 반환
 */
export function getByTier(
  lang: Lang,
  tier: Tier,
): Array<Treatment & { current: TreatmentContent }> {
  const source = isUnifiedTier(lang, tier)
    ? treatmentMetas
    : treatmentMetas.filter((m) => m.tier === tier);
  return source.map((m) => ({
    ...m,
    content: {
      ko: contentKo[m.slug],
      en: contentEn[m.slug],
      zh: contentZh[m.slug],
      ja: contentJa[m.slug],
    },
    current: byLang[lang][m.slug],
  }));
}

/**
 * tier 내부를 카테고리별로 그룹화
 */
export function getCategories(
  lang: Lang,
  tier: Tier,
): Array<{ key: string; name: string; items: Array<Treatment & { current: TreatmentContent }> }> {
  const list = getByTier(lang, tier);
  const groups: Record<string, Array<Treatment & { current: TreatmentContent }>> = {};
  // 카테고리 순서 고정: 리프팅 → 주사·볼륨 → 레이저 → 재생·관리
  const order = ["lifting", "injection", "laser", "regeneration"] as const;
  for (const key of order) groups[key] = [];
  for (const t of list) {
    groups[t.categoryKey].push(t);
  }
  return order
    .filter((key) => groups[key].length > 0)
    .map((key) => ({
      key,
      name: ui[lang].categories[key],
      items: groups[key],
    }));
}

/**
 * tier 메타 조회 (언어별 라벨)
 * 영어/중국어 + premium 은 "통합 라인"이므로 전용 카피 사용
 */
export function getTierMeta(lang: Lang, tier: Tier) {
  const copy = ui[lang];
  if (isUnifiedTier(lang, tier)) {
    return {
      label: copy.tierUnified,
      subtitle: copy.tierUnifiedSubtitle,
      tagline: copy.tierUnifiedTagline,
      desc: copy.tierUnifiedDesc,
    };
  }
  return tier === "basic"
    ? {
        label: copy.tierBasic,
        subtitle: copy.tierBasicSubtitle,
        tagline: copy.tierBasicTagline,
        desc: copy.tierBasicDesc,
      }
    : {
        label: copy.tierPremium,
        subtitle: copy.tierPremiumSubtitle,
        tagline: copy.tierPremiumTagline,
        desc: copy.tierPremiumDesc,
      };
}

export { treatmentMetas };
