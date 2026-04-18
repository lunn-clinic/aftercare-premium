import type { Lang, UICopy } from "./types";

export const LANGS: Lang[] = ["ko", "en", "zh", "ja"];

export const langNativeName: Record<Lang, string> = {
  ko: "한국어",
  en: "English",
  zh: "中文",
  ja: "日本語",
};

export const langShortLabel: Record<Lang, string> = {
  ko: "KO",
  en: "EN",
  zh: "ZH",
  ja: "JA",
};

export const ui: Record<Lang, UICopy> = {
  ko: {
    langLabel: "한국어",
    aftercareGuide: "시술 후 관리 가이드",
    tierBasic: "Basic Line",
    tierPremium: "Premium Line",
    tierUnified: "Premium Line",
    tierBasicSubtitle: "베이직 케어 라인",
    tierPremiumSubtitle: "프리미엄 리프팅·볼륨 라인",
    tierUnifiedSubtitle: "프리미엄 통합 케어",
    tierBasicTagline: "일상 회복과 유지에 최적화된 7가지 시술 관리 가이드",
    tierPremiumTagline:
      "리프팅·타이트닝·바이오자극 볼륨을 받으신 분을 위한\n정밀 회복 가이드",
    tierUnifiedTagline: "받으신 모든 시술의 회복 가이드를 한 곳에서",
    tierBasicDesc: "일상 시술 · 유지 관리 · 주사와 기본 레이저",
    tierPremiumDesc: "리프팅·타이트닝·바이오자극 볼륨 · 고강도 시술",
    tierUnifiedDesc: "모든 시술의 회복 가이드를 한 곳에서",
    viewGuide: "가이드 보기",
    guideCount: "{n}개 가이드",
    forOurPatients: "For Our Patients · 명함 QR 전용 페이지",
    heroHomeTitle: "시술이 끝나는 그 순간부터\n결과는 시작됩니다",
    heroHomeIntro:
      "룬피부과의원에서 받으신 시술에 맞춰, 회복을 돕는 맞춤 가이드입니다.\n받으신 케어 라인을 선택해 주세요.",
    heroHomeCta: "받으신 케어 라인을 선택해 주세요",
    backToHome: "← 다른 케어 라인 보기",
    otherLine: "다른 케어 라인 보기",
    categoryLabel: "CATEGORY",
    doLabel: "DO · 권장",
    dontLabel: "DON'T · 주의",
    normalResponse: "NORMAL · 정상 반응",
    whenToVisit: "URGENT · 내원이 필요한 신호",
    recoveryTimeline: "Recovery Timeline",
    timelinePhase: "시기별 회복 가이드",
    selfCheck: "이상 반응 자가 체크",
    selfCheckIntro: "정상 반응과 내원이 필요한 신호를 구분해 드립니다",
    watchAndWait: "지켜보세요",
    consultRecommended: "상담 권장",
    selfCheckOutro:
      "하나라도 해당되신다면 혼자서 고민하지 마시고, 박형권 원장의 진료를 받아보시길 권장드립니다.",
    synergyEyebrow: "SYNERGY",
    synergyHeadline1: "단독으로도 효과가 있지만,",
    synergyHeadline2: "함께하면 깊이가 달라집니다",
    synergyLead:
      "회복 주기에 맞춰 설계된 조합입니다. 아래 타이밍과 근거를 확인해 보세요.",
    addOn: "+ ADD-ON",
    nextVisit: "Next Visit",
    nextVisitMonths: "다음 진료는 {n}개월 뒤",
    disclaimer:
      "본 가이드는 일반적인 안내이며, 개인의 피부 상태에 따라 다를 수 있습니다. 이상 반응이 있을 경우 반드시 내원 진료를 받으세요.",
    recoveryPhase: "PHASE",
    phaseCountLabel: "{n}개 가이드",
    quickNav: "카테고리 바로가기",
    cardGuideCta: "가이드 보기 →",
    footerDisclaimer:
      "본 가이드는 룬피부과의원에서 시술받으신 환자분의 회복을 돕기 위한 일반 안내입니다. 의료 상담이 필요하신 경우 반드시 내원하여 박형권 원장의 진료를 받으세요.",
    criticalKey: "KEY · 01",
    heroSubtitleHome: "For Our Patients · 명함 QR 전용 페이지",
    homeLineTitle: "AFTERCARE GUIDE",
    homeLineLead:
      "룬피부과의원에서 받으신 시술에 맞춰, 회복을 돕는 맞춤 가이드입니다.",
    patientInstruction:
      "본 가이드는 룬피부과의원에서 시술받으신 환자분을 위한 안내입니다. 받으신 시술 라인이 확실하지 않다면 병원 안내 데스크에 문의해 주세요.",
    langSwitchLabel: "Language",
    categories: {
      lifting: "리프팅·타이트닝",
      injection: "주사·볼륨",
      laser: "레이저",
      regeneration: "재생·관리",
    },
  },
  en: {
    langLabel: "English",
    aftercareGuide: "Aftercare Guide",
    tierBasic: "Basic Line",
    tierPremium: "Premium Line",
    tierUnified: "Premium Line · Aftercare",
    tierBasicSubtitle: "Basic Care Line",
    tierPremiumSubtitle: "Premium Lifting & Volume Line",
    tierUnifiedSubtitle: "Complete Aftercare Library",
    tierBasicTagline:
      "Aftercare guides for 7 everyday recovery & maintenance treatments",
    tierPremiumTagline:
      "Precision recovery guides for lifting, tightening, and bio-stimulator volume procedures",
    tierUnifiedTagline:
      "Recovery guides for every treatment,\nin one place",
    tierBasicDesc:
      "Everyday treatments · Maintenance · Injections & basic lasers",
    tierPremiumDesc:
      "Lifting · Tightening · Bio-stimulator volume · High-intensity procedures",
    tierUnifiedDesc:
      "All treatments — lifting, injections, laser, regeneration — unified guide",
    viewGuide: "View Guide",
    guideCount: "{n} guides",
    forOurPatients: "For Our Patients · Card-linked page",
    heroHomeTitle:
      "The result begins\nthe moment your treatment ends",
    heroHomeIntro:
      "A tailored recovery guide based on the treatment you received at Lunn Dermatology.\nPlease select your care line.",
    heroHomeCta: "Please select your care line",
    backToHome: "← View the other care line",
    otherLine: "View the other care line",
    categoryLabel: "CATEGORY",
    doLabel: "DO",
    dontLabel: "DON'T",
    normalResponse: "NORMAL · Expected response",
    whenToVisit: "URGENT · When to visit",
    recoveryTimeline: "Recovery Timeline",
    timelinePhase: "Recovery guide by phase",
    selfCheck: "Self-check for abnormal signs",
    selfCheckIntro: "Distinguish normal responses from signs that need a visit",
    watchAndWait: "Monitor",
    consultRecommended: "Consult recommended",
    selfCheckOutro:
      "If any of these apply to you, please do not hesitate — consult Dr. Park Hyungkwon at the clinic.",
    synergyEyebrow: "SYNERGY",
    synergyHeadline1: "Effective on its own,",
    synergyHeadline2: "but together the depth changes",
    synergyLead:
      "Combinations timed to the recovery cycle. Review the timing and rationale below.",
    addOn: "+ ADD-ON",
    nextVisit: "Next Visit",
    nextVisitMonths: "Next visit in {n} months",
    disclaimer:
      "This guide offers general information and may vary by individual skin condition. If you experience abnormal reactions, please visit the clinic.",
    recoveryPhase: "PHASE",
    phaseCountLabel: "{n} guides",
    quickNav: "Jump to category",
    cardGuideCta: "View Guide →",
    footerDisclaimer:
      "This guide supports recovery for patients treated at Lunn Dermatology. For medical consultation, please visit the clinic and see Dr. Park Hyungkwon.",
    criticalKey: "KEY · 01",
    heroSubtitleHome: "For Our Patients · Card-linked page",
    homeLineTitle: "AFTERCARE GUIDE",
    homeLineLead:
      "A tailored recovery guide based on the treatment you received at Lunn Dermatology.",
    patientInstruction:
      "This guide is intended for patients treated at Lunn Dermatology. If you are unsure which line your treatment belongs to, please ask our front desk.",
    langSwitchLabel: "Language",
    categories: {
      lifting: "Lifting & Tightening",
      injection: "Injections & Volume",
      laser: "Laser",
      regeneration: "Regeneration & Care",
    },
  },
  zh: {
    langLabel: "中文",
    aftercareGuide: "术后护理指南",
    tierBasic: "基础线 Basic",
    tierPremium: "尊享线 Premium",
    tierUnified: "尊享线 Premium · 全项目",
    tierBasicSubtitle: "基础护理线",
    tierPremiumSubtitle: "尊享提升·填充线",
    tierUnifiedSubtitle: "全项目术后护理",
    tierBasicTagline: "7项日常恢复与维护项目的术后护理指南",
    tierPremiumTagline:
      "面向提升、紧致、生物刺激填充项目的精准恢复指南",
    tierUnifiedTagline: "您接受的所有项目术后指南,集中在此处",
    tierBasicDesc: "日常项目 · 日常维护 · 注射与基础激光",
    tierPremiumDesc: "提升 · 紧致 · 生物刺激填充 · 高强度项目",
    tierUnifiedDesc: "提升 · 注射填充 · 激光 · 再生护理,全项目统一指南",
    viewGuide: "查看指南",
    guideCount: "{n}个指南",
    forOurPatients: "仅限本院患者 · 名片二维码专用页",
    heroHomeTitle: "疗程结束的那一刻,\n效果才刚刚开始",
    heroHomeIntro:
      "根据您在Lunn皮肤科接受的项目,为您提供专属恢复指南。\n请选择您所接受的护理线。",
    heroHomeCta: "请选择您所接受的护理线",
    backToHome: "← 查看其他护理线",
    otherLine: "查看其他护理线",
    categoryLabel: "类别",
    doLabel: "建议 DO",
    dontLabel: "避免 DON'T",
    normalResponse: "正常反应 NORMAL",
    whenToVisit: "需要就诊的信号 URGENT",
    recoveryTimeline: "恢复时间线",
    timelinePhase: "分阶段恢复指南",
    selfCheck: "异常反应自检",
    selfCheckIntro: "帮您区分正常反应与需要就诊的信号",
    watchAndWait: "观察即可",
    consultRecommended: "建议咨询",
    selfCheckOutro:
      "如符合以上任何一项,请不要独自顾虑,建议尽快就诊朴衡權院长。",
    synergyEyebrow: "协同",
    synergyHeadline1: "单独也有效果,",
    synergyHeadline2: "但联合使用会让效果更深入",
    synergyLead: "按恢复周期设计的组合。请参考下方的时机与依据。",
    addOn: "+ 追加方案",
    nextVisit: "下次就诊",
    nextVisitMonths: "下次就诊建议 {n} 个月后",
    disclaimer:
      "本指南为一般信息,因个人皮肤状况而异。如出现异常反应,请务必到院就诊。",
    recoveryPhase: "阶段",
    phaseCountLabel: "{n}个指南",
    quickNav: "分类导航",
    cardGuideCta: "查看指南 →",
    footerDisclaimer:
      "本指南旨在协助在Lunn皮肤科就诊患者的恢复。如需医疗咨询,请到院就诊朴衡權院长。",
    criticalKey: "关键 · 01",
    heroSubtitleHome: "仅限本院患者 · 名片二维码专用页",
    homeLineTitle: "术后护理指南",
    homeLineLead: "根据您在Lunn皮肤科接受的项目,为您提供专属恢复指南。",
    patientInstruction:
      "本指南面向在Lunn皮肤科接受治疗的患者。如不确定您所接受的护理线,请咨询前台。",
    langSwitchLabel: "语言",
    categories: {
      lifting: "提升·紧致",
      injection: "注射·填充",
      laser: "激光",
      regeneration: "再生·护理",
    },
  },
  ja: {
    langLabel: "日本語",
    aftercareGuide: "アフターケアガイド",
    tierBasic: "ベーシックライン",
    tierPremium: "プレミアムライン",
    tierUnified: "プレミアムライン · アフターケア",
    tierBasicSubtitle: "ベーシックケアライン",
    tierPremiumSubtitle: "プレミアム リフティング・ボリュームライン",
    tierUnifiedSubtitle: "全施術 統合アフターケア",
    tierBasicTagline: "日常の回復とメンテナンスに最適化された7つの施術ガイド",
    tierPremiumTagline:
      "リフティング・タイトニング・バイオ刺激ボリュームを受けられた方のための\n精密リカバリーガイド",
    tierUnifiedTagline: "受けられた全施術のリカバリーガイドを、\nひとつの場所に",
    tierBasicDesc: "日常施術 · メンテナンス · 注射と基本レーザー",
    tierPremiumDesc: "リフティング · タイトニング · バイオ刺激ボリューム · 高強度施術",
    tierUnifiedDesc:
      "リフティング・注射・レーザー・再生ケアまで、すべての施術を統合した回復ガイド",
    viewGuide: "ガイドを見る",
    guideCount: "{n}件のガイド",
    forOurPatients: "For Our Patients · 名刺QR専用ページ",
    heroHomeTitle: "施術が終わるその瞬間から、\n結果は始まります",
    heroHomeIntro:
      "ルン皮膚科で受けられた施術に合わせた、回復のためのカスタマイズガイドです。\n受けられたケアラインをお選びください。",
    heroHomeCta: "受けられたケアラインをお選びください",
    backToHome: "← 他のケアラインを見る",
    otherLine: "他のケアラインを見る",
    categoryLabel: "CATEGORY",
    doLabel: "DO · 推奨",
    dontLabel: "DON'T · 注意",
    normalResponse: "NORMAL · 正常反応",
    whenToVisit: "URGENT · 来院が必要なサイン",
    recoveryTimeline: "Recovery Timeline",
    timelinePhase: "時期別リカバリーガイド",
    selfCheck: "異常反応セルフチェック",
    selfCheckIntro: "正常な反応と来院が必要なサインを見分けます",
    watchAndWait: "経過観察で大丈夫",
    consultRecommended: "相談をおすすめします",
    selfCheckOutro:
      "いずれかに当てはまる場合は、ご自身で悩まず、朴衡權院長の診療をお受けください。",
    synergyEyebrow: "SYNERGY",
    synergyHeadline1: "単独でも効果はありますが、",
    synergyHeadline2: "組み合わせることで深さが変わります",
    synergyLead:
      "回復サイクルに合わせて設計された組み合わせです。下記のタイミングと根拠をご確認ください。",
    addOn: "+ ADD-ON",
    nextVisit: "次回の来院",
    nextVisitMonths: "次回の来院目安は{n}ヶ月後",
    disclaimer:
      "本ガイドは一般的なご案内であり、個人のお肌の状態によって異なる場合があります。異常反応が現れた場合は、必ず来院のうえ診療をお受けください。",
    recoveryPhase: "PHASE",
    phaseCountLabel: "{n}件のガイド",
    quickNav: "カテゴリーへジャンプ",
    cardGuideCta: "ガイドを見る →",
    footerDisclaimer:
      "本ガイドはルン皮膚科で施術を受けられた患者様の回復をサポートするためのご案内です。医療相談が必要な場合は、必ずご来院のうえ朴衡權院長の診療をお受けください。",
    criticalKey: "KEY · 01",
    heroSubtitleHome: "For Our Patients · 名刺QR専用ページ",
    homeLineTitle: "AFTERCARE GUIDE",
    homeLineLead:
      "ルン皮膚科で受けられた施術に合わせた、回復のためのカスタマイズガイドです。",
    patientInstruction:
      "本ガイドはルン皮膚科で施術を受けられた患者様向けのご案内です。ご自身のケアラインが不明な場合は、受付までお問い合わせください。",
    langSwitchLabel: "言語",
    categories: {
      lifting: "リフティング·タイトニング",
      injection: "注射·ボリューム",
      laser: "レーザー",
      regeneration: "再生·ケア",
    },
  },
};

export function formatCopy(template: string, n: number | string): string {
  return template.replace("{n}", String(n));
}
