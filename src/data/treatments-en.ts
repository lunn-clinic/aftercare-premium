import type { TreatmentContent } from "./types";

/**
 * English Aftercare Content
 * ⚠️ AI translation draft — medical staff must review for clinical accuracy,
 *    regulatory compliance (medical advertising laws in target countries), and brand tone.
 * Last updated: initial draft
 */
export const contentEn: Record<string, TreatmentContent> = {
  "ulthera": {
    procedureName: "Ulthera Lifting",
    device: "Ulthera (HIFU)",
    category: "Lifting & Tightening",
    heroLine1: "Ulthera — 90-Day Aftercare Guide",
    heroLine2:
      "From immediately after the procedure to collagen remodeling — what to take care of at each stage.",
    criticalNotice: {
      label: "The single most important point",
      headline:
        "If severe pain or serious discomfort persists, contact the clinic and come in immediately",
      detail:
        "Mild bruising, swelling, and redness up to 3–4 weeks is normal. However, worsening pain or numbness of facial areas lasting more than 1 week is an abnormal sign that must be checked.",
      timing: "Post-procedure ~ 4 weeks",
    },
    timeline: [
      {
        when: "Day 0 (0 – 24 hours)",
        title: "Calming & Protection",
        feeling:
          "Mild stinging, burning sensation, and micro-swelling are normal.",
        dos: [
          "Apply moisturizer only, with clean hands",
          "Cleanse briefly with lukewarm water",
          "Sleep with head slightly elevated on a low pillow",
          "Leave the face alone — minimal movement is best",
        ],
        donts: [
          "No hot water, sauna, heat pack, or intense exercise",
          "No alcohol or smoking (slows recovery)",
          "No facial massage or functional cosmetics",
          "Avoid makeup if possible",
        ],
      },
      {
        when: "Day 1 – 3",
        title: "Micro-swelling subsides",
        feeling:
          "Face may feel slightly heavy; pressure may cause residual soreness.",
        dos: [
          "Cleansing and makeup as usual",
          "Apply sunscreen (SPF 50 PA+++) every day",
          "Stay well hydrated",
          "A light evening walk is OK",
        ],
        donts: [
          "No strong pressure massage or scraping (gua sha)",
          "Avoid hot sauna or half-body bath for now",
          "Better to postpone drinking occasions one more time",
        ],
      },
      {
        when: "Week 1 – 2",
        title: "Return to daily life + skin texture care",
        feeling:
          "Most micro-reactions disappear. The skin begins to feel lighter.",
        dos: [
          "Exercise, sauna, and all daily activities OK",
          "Continue hydrating skincare",
          "Consciously eat vitamin C / collagen-rich foods",
          "Consider a moisturizing booster or calming care if needed",
        ],
        donts: [
          "Delay strong peels or exfoliation procedures for about a month",
          "Extreme diets interfere with collagen synthesis",
        ],
      },
      {
        when: "Month 1 – 3",
        title: "New collagen is being formed",
        feeling:
          "In the mirror, you'll notice refined skin texture and sharper contours accumulating. This stage is the core result of Ulthera.",
        dos: [
          "Consistent hydration and UV care determine the result",
          "Drink enough water before bedtime",
          "Prioritize protein and vitamin C intake",
          "Book a re-evaluation (typically at 3 months post-procedure)",
        ],
        donts: [
          "Alcohol and smoking accelerate collagen breakdown",
          "Lack of sleep also hinders result maintenance",
        ],
      },
    ],
    warningSigns: {
      normal: [
        "Micro-swelling for 1 – 3 days after the procedure",
        "Residual soreness when pressed, occasional tingling",
        "Brief redness immediately after the procedure",
        "Mild dull pain for 1 – 2 weeks post-procedure",
      ],
      needVisit: [
        "Severe swelling that does not subside for over 5 days",
        "Increasing pain or heat sensation",
        "Numbness in part of the face lasting over 1 week",
        "Blisters, pus, or discharge on the skin",
        "Asymmetric facial movement on one side",
      ],
    },
    synergies: [
      {
        device: "Thermage",
        timing: "~ 3 – 4 weeks after Ulthera",
        benefit:
          "Dermal tightening and texture improvement are added, accumulating dimensional and lasting results.",
        reason:
          "While Ulthera lifts the SMAS layer (structure), Thermage tightens the dermis (texture & elasticity). Surface changes that Ulthera alone cannot fully address are reinforced here.",
      },
      {
        device: "Skin Booster",
        timing: "~ 2 weeks after Ulthera",
        benefit:
          "Replenishes moisture and nutrients to the recovering skin, stabilizing results faster.",
        reason:
          "During the collagen remodeling phase, a healthy dermal environment improves result quality. Skin Booster acts as the boost that creates that environment.",
      },
      {
        device: "Thread Lifting",
        timing: "~ 4 – 6 weeks after Ulthera",
        benefit:
          "For deep sagging, Ulthera holds the physically lifted contour line from within.",
        reason:
          "After the threads lift the tissue, simultaneous SMAS contraction holds it in place — giving a more natural and longer-lasting result. Recommended for patients with deep sagging.",
      },
    ],
    rebookingDesc:
      "Ulthera results typically last 12 – 18 months. A re-evaluation at the 1-year mark determines whether additional treatment or maintenance is needed.",
  },

  "lifting-laser": {
    procedureName: "Lifting Laser",
    device: "Lifting Laser (Thermage · ONDA)",
    category: "Lifting & Tightening",
    heroLine1: "Lifting Laser — Post-Procedure Recovery Guide",
    heroLine2:
      "Reactions that may appear up to 3 – 4 weeks after the procedure, and how to manage recovery.",
    criticalNotice: {
      label: "Please remember",
      headline:
        "If severe pain or serious discomfort persists, contact the clinic and come in",
      detail:
        "Depending on individual skin characteristics, bruising, swelling, and redness may persist up to 3 – 4 weeks — this is normal. However, worsening pain must be checked.",
      timing: "Post-procedure ~ 4 weeks",
    },
    timeline: [
      {
        when: "Day 0 – Week 1",
        title: "Calming & Recovery",
        feeling:
          "Depending on skin type, bruising, swelling, and redness may last 3 – 4 weeks.",
        dos: [
          "Makeup OK on the day of the procedure",
          "Apply hydrating and regenerating creams often",
          "Sunscreen is essential when going out",
        ],
        donts: [
          "Avoid scrubs and peels",
          "Avoid sauna, steam room, swimming, and intense exercise for at least 1 week",
        ],
      },
      {
        when: "Week 1 – 4",
        title: "Stabilization & Result Formation",
        feeling:
          "Temporary breakouts may appear depending on skin condition. Prescribed ointment or medication will resolve them quickly.",
        dos: ["Continue hydration and UV care"],
        donts: [
          "Avoid alcohol and smoking for at least 2 weeks (vasodilation disrupts recovery)",
        ],
      },
    ],
    warningSigns: {
      normal: [
        "Bruising, swelling, and redness lasting 3 – 4 weeks",
        "Temporary dull pain post-procedure",
      ],
      needVisit: [
        "Persistent severe pain or serious discomfort",
        "Numbness in part of the face for over 1 week",
        "Severe swelling beyond expected range",
      ],
    },
    synergies: [
      {
        device: "Thermage (Synergy)",
        timing: "~ 3 – 4 weeks after Lifting Laser",
        benefit:
          "Adding dermal tightening to SMAS lifting deepens the result and extends its duration.",
        reason:
          "Depth-specific targets complement each other, accumulating dimensional results.",
      },
      {
        device: "Thread Lifting",
        timing: "~ 4 – 6 weeks after Lifting Laser",
        benefit:
          "For deep sagging, physical lifting combined with laser results sharpens the contour lines.",
        reason:
          "The SMAS contraction holds the thread-lifted line in place from within.",
      },
    ],
    rebookingDesc:
      "Lifting Laser results typically last 12 – 18 months. A re-evaluation at the 1-year mark determines additional treatment.",
  },

  "thread-lifting": {
    procedureName: "Thread Lifting",
    device: "Thread Lifting",
    category: "Lifting & Tightening",
    heroLine1: "Thread Lifting — Post-Procedure Recovery Guide",
    heroLine2:
      "Foreign-body sensation and tightness are a natural recovery process. Here's what to watch at each stage.",
    criticalNotice: {
      label: "Key recovery posture",
      headline:
        "Don't open your mouth wide, don't sleep face-down — sleep in a neutral position",
      detail:
        "Forcefully opening the mouth or sleeping face-down can shift the thread positions. Avoid wide-mouth-opening foods and face-down sleeping for 1 – 2 weeks.",
      timing: "Post-procedure ~ 2 weeks",
    },
    timeline: [
      {
        when: "Day of procedure",
        title: "Stabilization",
        feeling: "Bruising, swelling, and redness may occur post-procedure.",
        dos: [
          "Light water cleansing is allowed from the day of the procedure",
          "Sleep on your back (not face-down)",
        ],
        donts: [
          "Recommend delaying cleansing/makeup until the next day",
        ],
      },
      {
        when: "Day 1 – Week 2",
        title: "Recovery & Caution",
        feeling:
          "Most bruising and swelling resolves within 1 – 2 weeks, but may last up to 4 weeks depending on the individual.",
        dos: ["Sleep in a neutral position, not face-down"],
        donts: [
          "Avoid alcohol, smoking, sauna, steam room, swimming, and intense exercise for at least 1 week",
          "Don't open the mouth wide for 1 – 2 weeks",
        ],
      },
      {
        when: "Week 4 – 8",
        title: "Foreign-body sensation improves",
        feeling:
          "Foreign-body sensation, pain, and tightness during expressions, cleansing, or eating gradually improves within 4 – 8 weeks — a natural process.",
        dos: ["Regular facial expressions and eating are OK"],
        donts: [
          "Don't press or touch the treatment area even if you feel the threads",
        ],
      },
    ],
    warningSigns: {
      normal: [
        "Bruising, swelling, redness within 1 – 2 weeks (up to 4 weeks)",
        "Foreign-body sensation / tightness for 4 – 8 weeks",
      ],
      needVisit: [
        "Injected thread exposed outside the skin (come in immediately)",
        "Abnormally persistent pain or pus in one area",
        "One side of the face abnormally drooping",
      ],
    },
    synergies: [
      {
        device: "Ulthera (Lifting Synergy)",
        timing: "~ 4 – 6 weeks after Thread Lifting",
        benefit:
          "SMAS contraction holds the thread-lifted lines from within, making results more natural and longer-lasting.",
        reason:
          "Structural lifting (Ulthera) complements physical lifting (threads).",
      },
      {
        device: "Skin Booster",
        timing: "~ 2 weeks after Thread Lifting",
        benefit:
          "Adds moisture and regeneration to the recovering skin, letting the result settle more smoothly.",
        reason:
          "A healthier dermal environment improves tissue recovery around the threads and final quality.",
      },
    ],
    rebookingDesc:
      "Thread Lifting results typically last 12 – 18 months. A re-evaluation at the 1-year mark determines reinforcement or re-treatment.",
  },

  "collagen-volume-bio": {
    procedureName: "Collagen Volume (Juvelook · Sculptra · Esthefil)",
    device: "Juvelook · Sculptra · Esthefil",
    category: "Injections & Volume",
    heroLine1: "Collagen Volume — Recovery Guide",
    heroLine2:
      "From the 5-5-5 massage to nodule prevention and recovery-stage care.",
    criticalNotice: {
      label: "Key to preventing nodules (lumps)",
      headline: "★ 5-5-5 Massage — 5 days, 5 times a day, 5 minutes each ★",
      detail:
        "This is the core of nodule prevention. Apply plenty of moisturizer to reduce friction, then gently massage the treatment area. These 5 days of massage determine how smoothly the result settles.",
      timing: "5 days post-procedure",
    },
    timeline: [
      {
        when: "Day 0 – Day 5",
        title: "★ 5-5-5 Massage Phase (most important) ★",
        feeling: "Temporary bruising or swelling may appear post-procedure.",
        dos: [
          "5-5-5 massage: 5 days, 5 times a day, 5 minutes per area (nodule prevention)",
          "Apply moisturizer to reduce friction before massaging",
          "Keep regeneration tape until the next morning",
          "Cleansing and makeup OK on the day of the procedure",
        ],
        donts: [
          "Beyond the 5-5-5 massage, avoid excessive manipulation or scrubs for a week",
        ],
      },
      {
        when: "Day 5 – Week 1",
        title: "Recovery Stabilization",
        feeling:
          "Temporary breakouts may appear depending on skin condition. Prescribed ointment or medication will resolve them quickly.",
        dos: [
          "Apply hydrating and regenerating creams often",
          "Sunscreen is essential when going out",
        ],
        donts: [
          "Avoid sauna, steam room, swimming, intense exercise for at least 1 week",
          "Avoid alcohol and smoking for at least 2 weeks",
        ],
      },
    ],
    warningSigns: {
      normal: ["Temporary bruising and swelling", "Mild breakouts in the treated area"],
      needVisit: [
        "Palpable nodules (lumps) or accompanying pain",
        "Persistent asymmetry or bumps even after the 5-5-5 massage",
        "Breakouts with pus, discharge, or severe heat",
      ],
    },
    synergies: [
      {
        device: "Skin Booster",
        timing: "~ 2 – 3 weeks after Collagen Volume",
        benefit:
          "Adds moisture and nutrients to the recovering skin, reducing nodule risk and smoothing texture.",
        reason:
          "The skin environment during active collagen synthesis determines final texture.",
      },
      {
        device: "Lifting Laser",
        timing: "~ 4 – 6 weeks after Collagen Volume",
        benefit:
          "Elasticity effects stack on top of the newly generated volume, creating natural dimensional results.",
        reason:
          "Adding lifting after volume stabilization improves overall balance by one level.",
      },
    ],
    rebookingDesc:
      "Collagen Volume results last 1 – 2 years. Re-evaluation at 6 and 12 months is recommended.",
  },

  "botox": {
    procedureName: "Botox",
    device: "Botox",
    category: "Injections & Volume",
    heroLine1: "Botox — Post-Procedure Recovery Guide",
    heroLine2: "When the effect begins to appear and how to manage daily life.",
    criticalNotice: {
      label: "Please wait before judging the effect",
      headline:
        "Results appear gradually from 1 – 2 weeks (3 – 4 weeks for body)",
      detail:
        "Wrinkles and square jaw: 1–2 weeks. Body (trapezius, calves, etc.): 3–4 weeks. Don't conclude \"no effect\" too early — wait until the 2-week re-evaluation.",
      timing: "1 – 4 weeks post-procedure",
    },
    timeline: [
      {
        when: "Day of procedure",
        title: "Calming",
        feeling: "Temporary bruising or swelling may appear post-procedure.",
        dos: ["Cleansing and makeup OK on the day of the procedure"],
        donts: [
          "No acupressure, gua sha, or scrubs on the treatment area",
          "Avoid alcohol, smoking, sauna, steam room, swimming, intense exercise for at least 1 week",
        ],
      },
      {
        when: "Week 1 – 4",
        title: "Effect Onset",
        feeling:
          "Wrinkles and square jaw correction: 1 – 2 weeks. Body (trapezius, calves): 3 – 4 weeks. Individual variation exists.",
        dos: [
          "After square-jaw Botox, avoid hard or chewy foods for a while",
        ],
        donts: ["Don't judge the result too early (it takes time)"],
      },
    ],
    warningSigns: {
      normal: [
        "Temporary bruising and swelling",
        "Temporarily reduced chewing force or awkward expression after square-jaw Botox (gradually normalizes)",
        "Untreated adjacent muscles may appear relatively larger",
      ],
      needVisit: [
        "One side of the face drooping or severe asymmetry",
        "Blurred vision, double vision, difficulty swallowing — neurological symptoms",
        "Breakouts with pus or heat on the treatment area",
      ],
    },
    synergies: [
      {
        device: "Filler",
        timing: "~ 2 – 3 weeks after Botox (once effect is set)",
        benefit:
          "Adding volume support to wrinkle/muscle correction creates natural dimensional contour lines.",
        reason:
          "Filling in after muscles have stabilized balances the results of both procedures.",
      },
      {
        device: "Lifting Laser",
        timing: "~ 2 – 4 weeks after Botox",
        benefit:
          "Adding elasticity and texture recovery to muscle relaxation settles the result more smoothly.",
        reason:
          "When skin texture is refined where wrinkles are softened, overall completeness improves.",
      },
    ],
    rebookingDesc:
      "Botox effects typically last 4 – 6 months. Re-treating as the effect begins to fade maintains the most natural result.",
  },

  "filler": {
    procedureName: "Filler",
    device: "Filler",
    category: "Injections & Volume",
    heroLine1: "Filler — Post-Procedure Recovery Guide",
    heroLine2:
      "The 1 – 2 weeks to stabilization determines the final result.",
    criticalNotice: {
      label: "Preventing shape distortion",
      headline:
        "Absolutely avoid strong stimulation, pressure, or massage on the treatment area",
      detail:
        "Excessive rubbing or strong pressure may deform the filler shape. Also avoid hats or tight outfits pressing on the injection area. Asymmetry or unevenness settles naturally after 1 – 2 weeks.",
      timing: "Post-procedure ~ 2 weeks",
    },
    timeline: [
      {
        when: "Day of procedure",
        title: "Stabilization",
        feeling: "Temporary bruising, swelling, and redness may appear.",
        dos: ["Cleansing and makeup OK 3 hours after the procedure"],
        donts: [
          "No acupressure, gua sha, or scrubs on the treatment area",
          "Don't excessively rub or apply strong stimulation (shape distortion risk)",
          "Avoid actions, hats, or tight clothing that press on the injection area",
        ],
      },
      {
        when: "Day 1 – Week 1",
        title: "Recovery & Medication",
        feeling: "Temporary breakouts may appear depending on skin condition.",
        dos: [
          "Take the prescribed medication as directed",
          "Apply hydrating and regenerating creams often",
          "Sunscreen is essential when going out",
          "After lip filler, avoid straws, hot or spicy foods for 1 week",
        ],
        donts: [
          "Avoid alcohol, smoking, sauna, steam room, swimming, intense exercise for at least 1 week",
        ],
      },
      {
        when: "Week 1 – 2",
        title: "Shape Settling",
        feeling:
          "Asymmetric or bumpy feeling gradually settles into symmetry as swelling subsides after 1 – 2 weeks.",
        dos: [
          "Judge the result after 2 weeks",
          "Consult for touch-up or dissolving treatment if needed (additional cost may apply)",
        ],
        donts: ["Don't react too quickly to early asymmetry"],
      },
    ],
    warningSigns: {
      normal: [
        "Temporary bruising, swelling, redness",
        "Early 1 – 2 week asymmetry or unevenness",
      ],
      needVisit: [
        "Sudden pallor or severe pain in the treatment area",
        "Blurred vision or vision changes (possible vascular complication)",
        "Breakouts with pus, discharge, or severe heat",
        "Strong asymmetry persisting after 2 weeks",
      ],
    },
    synergies: [
      {
        device: "Botox",
        timing: "Same day as filler, or 2 – 3 weeks later",
        benefit:
          "Adding expression-muscle stability to volume support sharpens contour design.",
        reason:
          "Botox stabilizes the filler-filled lines, extending how long the result lasts.",
      },
      {
        device: "Collagen Volume",
        timing: "~ 4 – 6 weeks after Filler",
        benefit:
          "Accumulating collagen stimulation on top of immediate filler volume adds depth to the result.",
        reason:
          "Two complementary volume mechanisms improve naturalness and longevity together.",
      },
    ],
    rebookingDesc:
      "Filler duration is about 6 – 12 months depending on product, treatment area, body chemistry, and lifestyle. Re-evaluation at 6 – 9 months is recommended.",
  },

  "collagen-volume-basic": {
    procedureName: "Collagen Volume (Basic)",
    device: "Collagen Volume Injection",
    category: "Injections & Volume",
    heroLine1: "Collagen Volume — Recovery Guide",
    heroLine2:
      "From keeping the regeneration tape in place to recovery-stage care.",
    criticalNotice: {
      label: "Follow this first",
      headline:
        "Keep the regeneration tape in place until the next morning",
      detail:
        "The first 24 hours are most important for treatment area recovery. Removing the tape too early or applying strong stimulation during this time can delay recovery.",
      timing: "Day of procedure ~ next morning",
    },
    timeline: [
      {
        when: "Day 0 ~ next morning",
        title: "Regeneration Tape Phase",
        feeling: "Temporary bruising or swelling may appear post-procedure.",
        dos: [
          "Keep the regeneration tape applied after the procedure until the next morning",
          "Cleansing and makeup OK on the day of the procedure",
          "Apply hydrating and regenerating creams often",
        ],
        donts: [
          "Avoid scrubs and peels for 1 week",
          "Don't apply strong stimulation to the treatment area",
        ],
      },
      {
        when: "Day 1 – Week 1",
        title: "Recovery Stabilization",
        feeling:
          "Temporary breakouts may appear depending on skin condition. Prescribed ointment or medication will resolve them quickly.",
        dos: [
          "Apply sunscreen whenever going outside",
          "Protect the skin barrier with hydrating and regenerating creams",
        ],
        donts: [
          "Avoid sauna, steam room, swimming, intense exercise for at least 1 week",
          "Avoid alcohol and smoking for at least 2 weeks",
        ],
      },
    ],
    warningSigns: {
      normal: [
        "Temporary bruising and swelling",
        "Mild breakouts in the treatment area",
        "Temporary dryness post-procedure",
      ],
      needVisit: [
        "Severe pain or worsening bruising that doesn't subside",
        "Breakouts with pus, discharge, or heat on the treatment area",
        "Swelling lasting longer than expected",
      ],
    },
    synergies: [
      {
        device: "Skin Booster",
        timing: "~ 2 – 3 weeks after Collagen Volume",
        benefit:
          "Adds moisture and a regenerative environment to recovering skin, letting the result settle more smoothly.",
        reason:
          "During collagen settling, a healthier dermal environment improves result quality.",
      },
      {
        device: "Lifting Laser",
        timing: "~ 3 – 4 weeks after Collagen Volume",
        benefit:
          "Elasticity recovery added to volume recovery brings dimensional result up by one level.",
        reason:
          "Changes in sagging and texture that volume alone cannot fill are reinforced by Lifting Laser.",
      },
    ],
    rebookingDesc:
      "Collagen Volume results typically last 6 – 12 months. Re-evaluation at 6 months determines reinforcement or maintenance.",
  },

  "pigment-laser": {
    procedureName: "Pigment Laser",
    device: "Pigment Laser (PicoWay, etc.)",
    category: "Laser",
    heroLine1: "Pigment Laser — Post-Procedure Recovery Guide",
    heroLine2:
      "Preventing pigmentation and consistent maintenance determines the result.",
    criticalNotice: {
      label: "Key to preventing recurrence",
      headline:
        "Sunscreen is a must whenever you go out; avoid prolonged sun exposure",
      detail:
        "Sensitized skin exposed to UV right after the procedure can develop pigmentation. Apply SPF 50 PA+++ daily, and wear a hat or sunglasses in addition.",
      timing: "Post-procedure ~ until next session — always",
    },
    timeline: [
      {
        when: "Day of procedure",
        title: "Calming",
        feeling:
          "Temporary redness and heat sensation may appear post-procedure.",
        dos: [
          "Light cold compress recommended if heat persists",
          "Makeup OK on the day of the procedure",
          "Apply hydrating and regenerating creams often",
          "Sunscreen is essential when going out",
        ],
        donts: [
          "Avoid scrubs and peels",
          "No prolonged UV exposure (pigmentation risk)",
        ],
      },
      {
        when: "Day 1 – Week 1",
        title: "Regeneration",
        feeling: "Temporary breakouts may appear depending on skin condition.",
        dos: ["Apply SPF 50 PA+++ daily when going outside"],
        donts: [
          "Avoid sauna, steam room, swimming, intense exercise for at least 1 week",
          "Avoid alcohol and smoking for at least 2 weeks",
        ],
      },
      {
        when: "Week 1 – 4",
        title: "Result Evaluation",
        feeling:
          "Pigmentation may temporarily darken depending on skin condition, but repeated treatment gradually improves it.",
        dos: [
          "Pigment treatment is not completed in a single session — consistent maintenance is recommended",
          "Make UV care part of your daily routine (recurrence prevention)",
        ],
        donts: [
          "Don't stop the treatment midway (repeated sessions make the result)",
        ],
      },
    ],
    warningSigns: {
      normal: [
        "Redness and heat sensation right after the procedure",
        "Temporary darkening of pigment (improves with further sessions)",
        "Mild dryness",
      ],
      needVisit: [
        "Blisters or discharge on the treatment area",
        "Severe pain persisting longer than expected",
        "Sudden severe pigmentation",
      ],
    },
    synergies: [
      {
        device: "Skin Booster",
        timing: "~ 1 – 2 weeks after Pigment Laser",
        benefit:
          "Creates a regenerative environment, improving recovery speed and texture after pigment breakdown.",
        reason:
          "Pigments broken by the laser need a healthy dermal environment to clear effectively.",
      },
      {
        device: "Skincare (Peel)",
        timing: "~ 2 – 3 weeks after Pigment Laser",
        benefit:
          "Smoothing the epidermal texture helps pigments discharge evenly.",
        reason:
          "Clearing micro dead cells and pigment residue keeps the next session cleaner.",
      },
    ],
    rebookingDesc:
      "Pigment Laser is usually performed in 3 – 4 week intervals. Frequency and intensity are adjusted based on skin response.",
  },

  "co2-laser": {
    procedureName: "CO2 Laser (Moles · Milia · Warts · Syringoma)",
    device: "CO2 Laser",
    category: "Laser",
    heroLine1: "CO2 Laser — Post-Procedure Recovery Guide",
    heroLine2:
      "Keeping the regeneration tape for 1 week is the key to recovery.",
    criticalNotice: {
      label: "This determines recovery speed",
      headline:
        "Keep the regeneration tape (DuoDERM) for 1 week — never peel the scab by hand",
      detail:
        "Cleanse with the tape in place and dry thoroughly. Replace with a new one if it swells white from absorbing discharge. Forcefully removing the scab increases scar and pigmentation risk.",
      timing: "1 week post-procedure",
    },
    timeline: [
      {
        when: "Day 0 – Week 1",
        title: "Regeneration Tape Phase",
        feeling:
          "Redness or scabs on the treatment area are a normal skin regeneration process.",
        dos: [
          "Keep the regeneration tape (DuoDERM, etc.) in place for 1 week",
          "Cleanse with the tape applied and dry thoroughly",
          "Replace with a new one if it swells white from absorbing discharge",
          "Regeneration ointment may substitute for shallow or broad treatment areas",
        ],
        donts: [
          "Please tell us in advance if you have contact dermatitis or bandage allergies",
        ],
      },
      {
        when: "Week 1 – 4",
        title: "Regeneration & Recovery",
        feeling:
          "Redness and scabs on the treatment area gradually improve over 1 – 4 weeks.",
        dos: [
          "Apply hydrating and regenerating creams often",
          "Sunscreen is essential when going out",
        ],
        donts: [
          "No prolonged UV exposure (pigmentation risk)",
          "Avoid alcohol, smoking, sauna, steam room, swimming, intense exercise for at least 1 week",
          "Don't forcibly peel the scab",
        ],
      },
      {
        when: "Week 6 – 8",
        title: "Touch-up Consideration",
        feeling:
          "Deep lesions may not be fully removed in one session.",
        dos: [
          "Touch-ups / additional treatments are recommended every 6 – 8 weeks after full skin recovery",
        ],
        donts: ["Avoid additional treatment before full recovery"],
      },
    ],
    warningSigns: {
      normal: [
        "Redness and scabs (improving over 1 – 4 weeks)",
        "Temporary itching",
      ],
      needVisit: [
        "Scars or pigmentation beyond expected range",
        "Breakouts with pus, discharge, or severe heat on the treatment area",
        "Allergic reaction at the regeneration tape area",
      ],
    },
    synergies: [
      {
        device: "Pigment Laser",
        timing: "~ 6 – 8 weeks after CO2 Laser (after full recovery)",
        benefit:
          "Cleans up residual micro pigmentation after deep lesion removal, evening out the texture.",
        reason:
          "Dividing the approach into two stages lowers scar and pigmentation risk.",
      },
      {
        device: "Skin Booster",
        timing: "~ 4 – 6 weeks after CO2 Laser",
        benefit:
          "Adds moisture and nutrients to the regenerating skin, speeding up texture recovery.",
        reason:
          "A healthier dermal environment helps recovery without residual scarring.",
      },
    ],
    rebookingDesc:
      "For deep lesions or residual areas, touch-ups are performed at 6 – 8 week intervals.",
  },

  "skin-booster": {
    procedureName: "Skin Booster",
    device: "Skin Booster",
    category: "Regeneration & Care",
    heroLine1: "Skin Booster — Post-Procedure Recovery Guide",
    heroLine2:
      "Recovery is fast, but 7 days of care determines the result.",
    timeline: [
      {
        when: "Day of procedure",
        title: "Calming",
        feeling: "Temporary bruising or swelling may appear post-procedure.",
        dos: ["Cleansing OK on the day of the procedure"],
        donts: [
          "Recommend delaying makeup until the next day",
          "Avoid acupressure, gua sha, or scrubs on the treatment area for 1 week",
        ],
      },
      {
        when: "Day 1 – Week 1",
        title: "Recovery",
        feeling: "Temporary breakouts may appear depending on skin condition.",
        dos: [
          "Apply hydrating and regenerating creams often",
          "Sunscreen is essential when going out",
        ],
        donts: [
          "Avoid alcohol, smoking, sauna, steam room, swimming, intense exercise for at least 1 week",
        ],
      },
    ],
    warningSigns: {
      normal: ["Temporary bruising and swelling", "Mild breakouts in the treatment area"],
      needVisit: [
        "Severe swelling lasting longer than expected",
        "Breakouts with pus, discharge, or severe heat",
      ],
    },
    synergies: [
      {
        device: "Pigment Laser",
        timing: "~ 1 – 2 weeks after Skin Booster",
        benefit:
          "Pigment Laser results come out cleaner on skin that has a regenerative environment.",
        reason:
          "A healthier dermal environment improves recovery speed and texture after pigment breakdown.",
      },
      {
        device: "Lifting Laser",
        timing: "~ 2 – 3 weeks after Skin Booster",
        benefit:
          "Adding lifting to skin with refined texture and hydration increases result dimension.",
        reason:
          "Better dermal condition improves the stability and duration of lifting results.",
      },
    ],
    rebookingDesc:
      "Skin Booster is usually performed in 3 – 4 week intervals. After the series, maintenance every 1 – 2 months is recommended.",
  },

  "skincare": {
    procedureName: "Skincare (Peel · Extraction · Injection)",
    device: "Peel · Extraction · Injection",
    category: "Regeneration & Care",
    heroLine1: "Skincare — Recovery Guide",
    heroLine2:
      "Dead cells and scabs are a natural recovery process — don't peel them by hand.",
    criticalNotice: {
      label: "Key to preventing scars",
      headline: "Never peel dead cells or scabs by hand",
      detail:
        "Apply plenty of moisturizing cream so they fall off naturally. Forcibly removing them can leave scars or pigmentation.",
      timing: "1 – 2 weeks post-procedure",
    },
    timeline: [
      {
        when: "Day 0 – Day 2",
        title: "Calming",
        feeling:
          "Itching, burning, or redness may occur depending on skin type but typically calms within 1 – 2 days.",
        dos: ["Light cleansing and makeup OK on the day of the procedure"],
        donts: ["No strong stimulation on the treatment area"],
      },
      {
        when: "Day 2 – Week 1",
        title: "Dead Cells / Scabs Phase",
        feeling:
          "Temporary breakouts or dead cells / scabs may appear depending on skin condition.",
        dos: [
          "Don't forcibly peel dead cells — apply plenty of moisturizing cream to let them fall off naturally",
          "Protect the skin barrier with hydrating and regenerating creams",
          "Sunscreen is essential when going out",
        ],
        donts: [
          "No forced removal of dead cells or scabs",
          "Avoid alcohol, smoking, sauna, steam room, swimming, intense exercise for at least 1 week",
        ],
      },
      {
        when: "Week 1 onwards",
        title: "Re-treatment / Maintenance",
        feeling:
          "Inflammation injection areas may not fully settle in one visit.",
        dos: [
          "Please wait at least 1 week between same-area re-treatments",
        ],
        donts: [
          "Avoid repeat treatment of the same area within 1 week",
        ],
      },
    ],
    warningSigns: {
      normal: [
        "Itching, burning, redness calming within 1 – 2 days",
        "Naturally falling dead cells / scabs",
      ],
      needVisit: [
        "Breakouts with pus or discharge after the procedure",
        "Severe pain or heat beyond expected range",
        "Inflammation injection area not settling for over 1 week",
      ],
    },
    synergies: [
      {
        device: "Skin Booster",
        timing: "~ 2 – 3 weeks after Skincare",
        benefit:
          "Adding dermal regeneration on top of epidermal cleanup extends result longevity.",
        reason:
          "Addressing surface and depth together gives more stable results than single-layer care.",
      },
      {
        device: "Pigment Laser",
        timing: "~ 2 – 3 weeks after Skincare",
        benefit:
          "Pigment targeting becomes more precise on refined skin texture.",
        reason:
          "Even epidermal texture lets the laser energy transmit evenly.",
      },
    ],
    rebookingDesc:
      "Skincare is typically done in 2 – 4 week intervals. Frequency is adjusted based on skin condition.",
  },
};
