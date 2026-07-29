import { IMAGES } from "./images";
import { wellbeingPdfHref } from "./wellbeing-pdf-url";

export type MidSection =
  | {
      type: "stats";
      stats: readonly { value: string; label: string }[];
      footnote: string;
    }
  | { type: "quote"; quote: string };

export type WellbeingProductVideoSection =
  | {
      placement: "afterStats";
      provider: "cloudinary";
      heading: string;
      /** Cloudinary public ID */
      src: string;
    }
  | {
      placement: "afterIngredientCards";
      provider: "youtube";
      heading: string;
      embedSrc: string;
      iframeTitle: string;
    };

export type WellbeingProductImages = Partial<{
  hero: string;
  product: string;
  benefits: string;
  stats: string;
  ingredients: string;
  why: string;
}>;

export type WellbeingProductContent = {
  breadcrumbLabel: string;
  productName: string;
  images?: WellbeingProductImages;
  hero: {
    subheading: string;
    introParagraphs: readonly string[];
    symptomsHeading?: string;
    symptoms?: readonly string[];
    symptomsClosing?: string;
    noticeHeading?: string;
    noticeItems?: readonly string[];
    closingParagraph?: string;
  };
  supporting: {
    h2: string;
    paragraphs: readonly [string, string];
    formulatedLabel: string;
    formulatedItems: readonly string[];
    closing: string;
    pdfHref: string;
  };
  howItWorks: {
    h2: string;
    intro: string;
    cards: readonly { title: string; body: string }[];
    together: string;
    clinicalTitle: string;
    clinicalBody: string;
    guideHref: string;
    /** Centered square ingredient/product image instead of full-width banner */
    ingredientImageContainedSquare?: boolean;
    /** Centered square "why" image instead of full-width banner */
    whyImageContainedSquare?: boolean;
    /** Two-column layout: ingredient image left, intro + stacked cards right */
    howItWorksSplitIngredientColumns?: boolean;
    /** When using split columns, render intro above the ingredient image on the left; cards only on the right */
    howItWorksIntroAboveIngredientImage?: boolean;
    /** Two-column layout below video: "why" image left, clinical copy + guide link right */
    howItWorksClinicalSecondarySplit?: boolean;
  };
  midSection: MidSection;
  purchase: {
    buttons: readonly { label: string; href: string }[];
  };
  howToUse: {
    left: { h2: string; paragraphs: readonly string[] };
    right: {
      h2: string;
      paragraphs?: readonly string[];
      listIntro?: string;
      listItems?: readonly string[];
      closingParagraphs?: readonly string[];
      quoteBox?: string;
      importantBox?: { title: string; body: string };
    };
  };
  /** Optional product video block (placement selects insert position in the layout). */
  videoSection?: WellbeingProductVideoSection;
};

export const FEEL_CALM_CONTENT = {
  breadcrumbLabel: "Feel Calm",
  productName: "MYNuDay360 Feel Calm",
  images: {
    hero: IMAGES.wellbeing.feelCalmHero,
    product: IMAGES.wellbeing.feelCalmProduct,
    benefits: IMAGES.wellbeing.feelCalmBenefits,
  },
  hero: {
    subheading: "Support for mood balance and a healthy stress response",
    introParagraphs: [
      "Stress is part of modern life. Work demands, family responsibilities, financial pressures, and everyday decision-making can all place pressure on the mind and body.",
      "Over time, ongoing stress can begin to affect many areas of daily life, including concentration, energy levels, emotional balance, sleep quality, and relationships.",
    ],
    symptomsHeading: "You might notice signs such as:",
    symptoms: [
      "Difficulty concentrating or making decisions",
      "Feeling mentally overloaded or forgetful",
      "Fatigue or low motivation",
      "Feeling irritable or emotionally overwhelmed",
      "Difficulty switching off at the end of the day",
      "Poor sleep or restlessness",
      "Reduced interest in daily activities",
    ],
    symptomsClosing:
      "Stress doesn't just affect how we feel mentally; it can also influence how our body responds to everyday challenges.",
  },
  supporting: {
    h2: "Supporting Your Body's Natural Stress Response",
    paragraphs: [
      "MYNuDay360 Feel Calm is a nutritional supplement designed to help support a healthy response to everyday stress and promote a calmer, more balanced state of mind.",
      "This advanced formula combines carefully selected ingredients studied for their role in relaxation, mood balance, and cognitive calm.",
    ],
    formulatedLabel: "Feel Calm is formulated to:",
    formulatedItems: [
      "Enhance mind relaxation",
      "Support mood balance",
      "Support a healthy stress response in the body",
      "Help reduce feelings of stress",
      "Provide support from the first dose with continued support when taken daily for one month",
      "Be suitable for vegetarians",
    ],
    closing:
      "The formula is developed using scientifically supported ingredients and is tested through Nu Skin's 6S Quality Process for safety and quality.",
    pdfHref: wellbeingPdfHref(
      "feelCalm",
      process.env.NEXT_PUBLIC_WELLBEING_PDF_FEEL_CALM_URL,
    ),
  },
  howItWorks: {
    h2: "How Feel Calm Works",
    intro: "Feel Calm combines several ingredients that have been studied for their role in supporting calmness and mental relaxation.",
    cards: [
      {
        title: "Lemon Balm Extract",
        body: "Lemon Balm (Melissa officinalis) is a botanical extract traditionally used to support relaxation. Research has studied its role in helping support calmness and reducing feelings of stress during cognitive challenges.",
      },
      {
        title: "L-Theanine",
        body: "L-Theanine is a naturally occurring amino acid found in tea. It has been studied for its effects on brain wave activity and may help promote alpha brain waves, which are associated with relaxed alertness and calm focus.",
      },
      {
        title: "Magnolia Bark Extract",
        body: "Magnolia bark has a long history of use in traditional wellness practices. The Magnolia Bark Extract used in Feel Calm is standardised to honokiol, one of the key bioactive compounds studied for its effects on mood and calmness.",
      },
    ],
    together:
      "Together, these ingredients work to support the body's natural ability to maintain balance during periods of everyday stress.",
    clinicalTitle: "Clinically Studied Formula",
    clinicalBody:
      "In a double-blind, randomised, placebo-controlled clinical study involving moderately stressed adults, participants taking the Feel Calm blend for 30 days reported improvements in several measures related to mood, stress, and sleep quality.",
    guideHref: wellbeingPdfHref(
      "feelCalm",
      process.env.NEXT_PUBLIC_WELLBEING_PDF_FEEL_CALM_URL,
    ),
  },
  midSection: {
    type: "stats",
    stats: [
      {
        value: "98%",
        label:
          "improvement in HAM-A score measuring feelings of occasional anxiousness.",
      },
      {
        value: "93%",
        label: "improvement in HDRS score measuring melancholy.",
      },
      {
        value: "100%",
        label:
          "of subjects saw an improvement in feelings of melancholy and occasional anxiousness.",
      },
      {
        value: "73%",
        label:
          "improvement in self-reported RSQ-W score measuring restorative sleep after only 30 days.",
      },
    ],
    footnote:
      "Based on a double-blind, randomized, placebo-controlled clinical study of 60 moderately stressed subjects over 30 days.",
  },
  videoSection: {
    placement: "afterStats",
    provider: "cloudinary",
    heading: "Watch: Feel Calm in Action",
    src: IMAGES.videos.feelCalm,
  },
  purchase: {
    buttons: [
      {
        label: "Australia",
        href: "https://www.nuskin.com/au/en/personal-offer/AS00429081?pitchId=-OpQw__ZyqIrJhlBw_dz&t=1785281925084",
      },
      { label: "United States", href: "https://nskn.co/oM4T68" },
      {
        label: "Singapore",
        href: "https://nskn.co/Kb74Lm",
      },
    ],
  },
  howToUse: {
    left: {
      h2: "How to Use Feel Calm",
      paragraphs: [
        "Take three capsules once daily with liquid.",
        "Feel Calm can be taken with or without food and may be used at the time of day that best suits your routine.",
        "Some people prefer taking it in the morning to support calm focus throughout the day, while others choose the evening as part of their wind-down routine.",
      ],
    },
    right: {
      h2: "Who May Benefit",
      paragraphs: [
        "Feel Calm is formulated for healthy adults aged 18 and over who want additional support for managing everyday stress and maintaining emotional balance.",
      ],
      quoteBox:
        "After 30 days, subjects taking the Feel Calm blend reported on average: 98% improvement in occasional anxiousness, 93% improvement in feelings of melancholy, 73% improvement in their restorative sleep score, and 100% of subjects saw an improvement in feelings of melancholy and occasional anxiousness.",
    },
  },
} satisfies WellbeingProductContent;

export const NIGHT_TIME_CONTENT = {
  breadcrumbLabel: "Night Time",
  productName: "MYNuDay360 Night Time",
  images: {
    product: IMAGES.wellbeing.nightTimeProduct,
    ingredients: IMAGES.wellbeing.nightTimeIngredients,
    benefits: IMAGES.wellbeing.nightTimeBenefits,
    stats: IMAGES.wellbeing.nightTimeStats,
  },
  hero: {
    subheading: "Support for restful sleep and a healthy sleep-wake cycle",
    introParagraphs: [
      "Sleep is one of the most important foundations of wellbeing - yet for many people, it can be difficult to switch off, fall asleep, or stay asleep through the night.",
      "Busy minds, daily stress, irregular routines, and lifestyle factors can all impact sleep quality and how refreshed you feel the next day.",
    ],
    symptomsHeading: "You might notice signs such as:",
    symptoms: FEEL_CALM_CONTENT.hero.symptoms,
    symptomsClosing:
      "When sleep is disrupted, it can affect energy, mood, focus, and overall daily function.",
  },
  supporting: {
    h2: "Supporting Your Body's Natural Sleep Rhythm",
    paragraphs: [
      "MYNuDay360 Night Time is a nutritional supplement designed to support healthy sleep patterns and help the body transition into a more restful state.",
      "This carefully formulated blend combines key nutrients studied for their role in relaxation, sleep quality, and circadian rhythm support.",
    ],
    formulatedLabel: "Night Time is formulated to:",
    formulatedItems: [
      "Support improved sleep quality",
      "Help you fall asleep faster",
      "Support a healthy sleep-wake cycle",
      "Support a healthy circadian rhythm",
      "Help you wake feeling refreshed and less groggy",
      "Provide gentle, non-habit-forming sleep support",
      "Be suitable for vegetarians",
    ],
    closing:
      "The formula is developed using scientifically supported ingredients and is designed to be safe, gentle, and supportive as part of a consistent evening routine.",
    pdfHref: wellbeingPdfHref(
      "nightTime",
      process.env.NEXT_PUBLIC_WELLBEING_PDF_NIGHT_TIME_URL,
    ),
  },
  howItWorks: {
    h2: "How Night Time Works",
    intro: "Night Time combines ingredients that have been studied for their role in supporting relaxation and healthy sleep patterns.",
    cards: [
      {
        title: "Magnesium",
        body: "Magnesium is an essential mineral involved in many processes in the body, including those linked to relaxation and sleep-wake regulation. It plays a role in supporting neurotransmitter activity associated with calm and rest. When mixed with warm water, the formula transforms into magnesium citrate, a bioavailable form that is easily absorbed.",
      },
      {
        title: "Saffron Stigma Extract",
        body: "Saffron has been studied for its role in supporting sleep quality and mood balance. It may help influence natural melatonin levels, which play a role in regulating the body's sleep-wake cycle.",
      },
    ],
    together:
      "Together, these ingredients support the body's natural transition into rest and help promote a more restorative sleep experience.",
    clinicalTitle: "Clinically Studied Formula",
    clinicalBody:
      "Night Time contains ingredients that have been studied for their role in sleep quality, relaxation, and circadian rhythm support. Research into key ingredients such as magnesium and saffron has explored their effects on sleep patterns, mood, and overall wellbeing.",
    guideHref: wellbeingPdfHref(
      "nightTime",
      process.env.NEXT_PUBLIC_WELLBEING_PDF_NIGHT_TIME_URL,
    ),
    howItWorksSplitIngredientColumns: true,
  },
  videoSection: {
    placement: "afterIngredientCards",
    provider: "youtube",
    heading: "Watch: Night Time Explained",
    embedSrc: "https://www.youtube.com/embed/t5D82QOwJOk",
    iframeTitle: "MYNuDay360 Night Time",
  },
  midSection: {
    type: "quote",
    quote:
      "Night Time contains ingredients that have been studied for their role in sleep quality, relaxation, and circadian rhythm support.",
  },
  purchase: {
    buttons: [
      {
        label: "Australia",
        href: "https://www.nuskin.com/au/en/personal-offer/AS00429081?pitchId=-OqtE0LYUuqDzB7XAFlr",
      },
      { label: "United States", href: "https://nskn.co/DmlTvb" },
      {
        label: "Singapore",
        href: "https://nskn.co/qVwzcl",
      },
    ],
  },
  howToUse: {
    left: {
      h2: "How to Use Night Time",
      paragraphs: [
        "Add one level scoop to 60-90 ml of hot water.",
        "Allow the mixture to fizz, then drink approximately 30 minutes before bedtime.",
        "The gentle warming drink can be incorporated into your evening routine as a calming ritual to help signal the body it's time to unwind.",
      ],
    },
    right: {
      h2: "Who May Benefit",
      listIntro:
        "Night Time is formulated for healthy adults aged 18 and over who want additional support for:",
      listItems: [
        "Sleep quality",
        "Relaxation in the evening",
        "Maintaining a healthy sleep-wake rhythm",
        "It may be particularly helpful during busy or stressful periods when sleep patterns feel disrupted.",
      ],
      importantBox: {
        title: "Important Information",
        body: "This product is a nutritional supplement designed to support sleep quality and a healthy circadian rhythm. It is not intended to diagnose, treat, cure, or prevent any disease and does not treat sleep disorders or medical conditions. If you are experiencing ongoing sleep issues, please consult a qualified healthcare professional.",
      },
    },
  },
} satisfies WellbeingProductContent;

export const Y_SPAN_CONTENT = {
  breadcrumbLabel: "Y-Span",
  productName: "ageLOC Y-Span",
  images: {
    product: IMAGES.wellbeing.ySpanProduct,
    ingredients: IMAGES.wellbeing.ySpanIngredients,
    benefits: IMAGES.wellbeing.ySpanBenefits,
    why: IMAGES.wellbeing.ySpanWhy,
  },
  hero: {
    subheading:
      "Advanced support for healthy ageing, energy, and cellular wellbeing",
    introParagraphs: [
      "As we move through life, our body naturally changes. Energy levels shift, recovery can take longer, and we may start to notice changes in focus, resilience, and overall vitality.",
      "These changes are influenced by many factors, including lifestyle, environment, and how our body responds at a cellular level over time.",
    ],
    noticeHeading: "You might notice:",
    noticeItems: [
      "Lower energy or stamina",
      "Slower recovery after physical or mental effort",
      "Changes in focus or memory",
      "Feeling run down more often",
      "A desire to maintain long-term health and vitality",
      "Wanting to feel more like yourself as you age",
    ],
    closingParagraph:
      "Healthy ageing isn't about stopping time; it's about supporting your body to function at its best as you move through each stage of life.",
  },
  supporting: {
    h2: "Supporting Your Body's Natural Ageing Process",
    paragraphs: [
      "ageLOC Y-Span is a nutritional supplement designed to support the body's natural ageing defence mechanisms and provide broad-spectrum support for long-term wellbeing.",
      "Developed from over 30 years of gene expression research, this advanced formula combines a unique blend of nutrients and phytonutrients not easily obtained from diet alone.",
    ],
    formulatedLabel: "Y-Span is formulated to:",
    formulatedItems: [
      "Support healthy ageing defence mechanisms",
      "Support cellular health and antioxidant protection",
      "Promote healthy gene expression related to ageing processes",
      "Support energy production and metabolic function",
      "Support overall vitality and wellbeing",
    ],
    closing:
      "The formula is designed to deliver consistent levels of key nutrients that support the body's natural ability to maintain balance and resilience over time.",
    pdfHref: wellbeingPdfHref(
      "ySpan",
      process.env.NEXT_PUBLIC_WELLBEING_PDF_Y_SPAN_URL,
    ),
  },
  howItWorks: {
    h2: "How Y-Span Works",
    intro: "Y-Span combines a range of nutrients and phytonutrients that have been studied for their role in cellular health, antioxidant protection, and healthy ageing.",
    cards: [
      {
        title: "Antioxidant & Cellular Support",
        body: "The formula includes ingredients that help reduce free radical damage to body cells and support overall cellular health.",
      },
      {
        title: "Gene Expression & Ageing Defence",
        body: "Y-Span is designed using research into gene expression and ageing defence mechanisms, supporting the body's natural processes that help maintain youthful function over time.",
      },
      {
        title: "Energy & Vitality",
        body: "Key nutrients support mitochondrial function, which plays a role in energy production and overall vitality at a cellular level.",
      },
      {
        title: "Brain & Cognitive Support",
        body: "The formula includes nutrients studied for their role in supporting memory, concentration, and cognitive function as we age.",
      },
    ],
    together:
      "Together, these ingredients work to support the body's natural systems involved in ageing, energy, and long-term wellbeing.",
    clinicalTitle: "Clinically Studied Formula",
    clinicalBody:
      "Y-Span is developed using a combination of gene expression science, antioxidant research, and nutritional science. Studies on the ingredients used in the formula have explored their role in supporting cellular health, cognitive function, and overall wellbeing.",
    guideHref: wellbeingPdfHref(
      "ySpan",
      process.env.NEXT_PUBLIC_WELLBEING_PDF_Y_SPAN_URL,
    ),
    howItWorksSplitIngredientColumns: true,
    howItWorksIntroAboveIngredientImage: true,
    howItWorksClinicalSecondarySplit: true,
  },
  videoSection: {
    placement: "afterIngredientCards",
    provider: "youtube",
    heading: "Watch: Y-Span Explained",
    embedSrc: "https://www.youtube.com/embed/eawn-Jb6t1c",
    iframeTitle: "ageLOC Y-Span",
  },
  midSection: {
    type: "quote",
    quote:
      "Developed from over 30 years of gene expression research, supporting your body's natural ability to maintain balance and resilience over time.",
  },
  purchase: {
    buttons: [
      {
        label: "Australia",
        href: "https://www.nuskin.com/au/en/personal-offer/AS00429081?pitchId=-OqtAUEuYP4DcH2GXeLq",
      },
      { label: "United States", href: "https://nskn.co/rpwkvz" },
      {
        label: "Singapore",
        href: "https://nskn.co/DMN4e4",
      },
    ],
  },
  howToUse: {
    left: {
      h2: "How to Use Y-Span",
      paragraphs: [
        "Take two soft gels twice daily with morning and evening meals.",
        "Consistency is key, as the formula is designed to support the body over time.",
      ],
    },
    right: {
      h2: "Who May Benefit",
      listIntro:
        "Y-Span is formulated for healthy adults aged 18 and over who want to support:",
      listItems: [
        "Healthy ageing",
        "Energy and vitality",
        "Cellular health",
        "Long-term wellbeing",
      ],
      closingParagraphs: [
        "It may be particularly suited to those wanting a more comprehensive, foundational supplement to support overall health as they age.",
      ],
      importantBox: {
        title: "Important Information",
        body: "This product is a nutritional supplement. It is not intended to diagnose, treat, cure, or prevent any disease. If you are experiencing ongoing health issues, please consult a qualified healthcare professional.",
      },
    },
  },
} satisfies WellbeingProductContent;
