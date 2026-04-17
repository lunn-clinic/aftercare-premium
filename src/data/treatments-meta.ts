import type { Tier } from "./types";

export type TreatmentMeta = {
  slug: string;
  tier: Tier;
  categoryKey: "lifting" | "injection" | "laser" | "regeneration";
  rebookingMonths: number;
};

/**
 * 시술 메타 (언어 불변)
 * 직원이 tier 재분류·시술 추가/삭제 시 여기만 수정
 */
export const treatmentMetas: TreatmentMeta[] = [
  // ─── Premium ───
  { slug: "ulthera", tier: "premium", categoryKey: "lifting", rebookingMonths: 12 },
  { slug: "lifting-laser", tier: "premium", categoryKey: "lifting", rebookingMonths: 12 },
  { slug: "thread-lifting", tier: "premium", categoryKey: "lifting", rebookingMonths: 15 },
  { slug: "collagen-volume-bio", tier: "premium", categoryKey: "injection", rebookingMonths: 12 },

  // ─── Basic ───
  { slug: "botox", tier: "basic", categoryKey: "injection", rebookingMonths: 5 },
  { slug: "filler", tier: "basic", categoryKey: "injection", rebookingMonths: 9 },
  { slug: "collagen-volume-basic", tier: "basic", categoryKey: "injection", rebookingMonths: 9 },
  { slug: "pigment-laser", tier: "basic", categoryKey: "laser", rebookingMonths: 1 },
  { slug: "co2-laser", tier: "basic", categoryKey: "laser", rebookingMonths: 2 },
  { slug: "skin-booster", tier: "basic", categoryKey: "regeneration", rebookingMonths: 1 },
  { slug: "skincare", tier: "basic", categoryKey: "regeneration", rebookingMonths: 1 },
];
