export type Tier = "basic" | "premium";
export type Lang = "ko" | "en" | "zh";

export type TimelinePhase = {
  when: string;
  title: string;
  feeling: string;
  dos: string[];
  donts: string[];
};

export type SynergyItem = {
  device: string;
  timing: string;
  benefit: string;
  reason: string;
};

export type CriticalNotice = {
  label: string;
  headline: string;
  detail?: string;
  timing?: string;
};

/**
 * 시술 컨텐츠 (언어별 번역 대상)
 */
export type TreatmentContent = {
  procedureName: string;
  device: string;
  category: string;
  heroLine1: string;
  heroLine2: string;
  criticalNotice?: CriticalNotice;
  timeline: TimelinePhase[];
  warningSigns: { normal: string[]; needVisit: string[] };
  synergies: SynergyItem[];
  rebookingDesc: string;
};

/**
 * 시술 메타 (언어 불변)
 */
export type Treatment = {
  slug: string;
  tier: Tier;
  categoryKey:
    | "lifting"
    | "injection"
    | "laser"
    | "regeneration";
  rebookingMonths: number;
  content: Record<Lang, TreatmentContent>;
};

/**
 * UI 카피 i18n 사전
 */
export type UICopy = {
  langLabel: string;
  aftercareGuide: string;
  tierBasic: string;
  tierPremium: string;
  tierUnified: string;
  tierBasicSubtitle: string;
  tierPremiumSubtitle: string;
  tierUnifiedSubtitle: string;
  tierBasicTagline: string;
  tierPremiumTagline: string;
  tierUnifiedTagline: string;
  tierBasicDesc: string;
  tierPremiumDesc: string;
  tierUnifiedDesc: string;
  viewGuide: string;
  guideCount: string; // "{n} guides"
  forOurPatients: string;
  heroHomeTitle: string;
  heroHomeIntro: string;
  heroHomeCta: string;
  backToHome: string;
  otherLine: string;
  categoryLabel: string;
  doLabel: string;
  dontLabel: string;
  normalResponse: string;
  whenToVisit: string;
  recoveryTimeline: string;
  timelinePhase: string;
  selfCheck: string;
  selfCheckIntro: string;
  watchAndWait: string;
  consultRecommended: string;
  selfCheckOutro: string;
  synergyEyebrow: string;
  synergyHeadline1: string;
  synergyHeadline2: string;
  synergyLead: string;
  addOn: string;
  nextVisit: string;
  nextVisitMonths: string; // "next visit in {n} months"
  disclaimer: string;
  recoveryPhase: string;
  phaseCountLabel: string; // "n phases"
  quickNav: string;
  cardGuideCta: string;
  footerDisclaimer: string;
  criticalKey: string;
  heroSubtitleHome: string;
  homeLineTitle: string;
  homeLineLead: string;
  patientInstruction: string;
  langSwitchLabel: string;
  categories: {
    lifting: string;
    injection: string;
    laser: string;
    regeneration: string;
  };
};
