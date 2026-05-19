// lib/images.ts
// Cloudinary public IDs for Mumma Chelles (stored at account root, no folder prefixes).
// Cloud name: dlakvczje — set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in .env.local

export const IMAGES = {
  brand: {
    logoPink: "Copy_of_Mumma_Chelles_Logo_Option_1__1_-removebg-preview_nnexek",
    logoFull: "Mumma_Chelles_Logo-06_yxxmhu",
  },
  photography: {
    michelleHero: "20250328_Corporate_Michelle_029-Edit_xcifto",
    michelleAbout: "20250328_Corporate_Michelle_066-Edit_myyniv",
    whyIDoIt: "photo-1472162072942-cd5147eb3902_kzaarf",
  },
  sections: {
    welcomeCollage: "welcome-collage_nqqose",
    sensoryInsights: "tsd-studio-9_jvKRbNdTM-unsplash_oesh7f",
    resourcesHero: "Resource_support_home_iaf3ls",
    empowerment: "empowerment_zw0yuk",
    inclusivity: "inclusivity_lihwke",
    booksCard: "ben-mullins-5QTQz-oYk1A-unsplash_lg87q4",
    toysCard: "jerry-wang-qBrF1yu5Wys-unsplash_vxrno3",
    resourcesCard: "alan-rodriguez-N17Nkbsc-zY-unsplash_bnm8yu",
  },
  books: {
    hero: "bookshero_vle5wn",
    childrens: "zoshua-colah-UzWxsmSBUUY-unsplash_io3ols",
    teenager: "sincerely-media-JIJR9UqQFJk-unsplash_dlffzi",
    healthWellbeing: "anne-nygard-KTpkjJHEH0g-unsplash_gb6mkr",
    parenting: "kelly-sikkema-giijfNulwxk-unsplash_ffqif5",
  },
  toys: {
    hero: "toyshero_neomnr",
    creative: "luis-arias-ayH7wwVOtc0-unsplash_efo23y",
    sensory: "phil-hearing-cylPETXS7is-unsplash_ue3cnk",
    learning: "markus-spiske-vOF9VnVZez8-unsplash_tfafve",
  },
  resources: {
    hero: "resourceshero_gwrqhq",
    socialStory: "social_story_resource_ycriq5",
    singMoveGrow: "sing_move_grow_resource_ujgcg7",
    selfCare: "self_care_guide_resource_hydpk2",
    activitySymbols: "printable_activity_resource_lspwpe",
    coRegulation: "coregulation_guide_resources_o4myso",
    playDough: "play_dough_resource_wpnqvr",
    fineMotor: "fine_motor_skills_resource_glqlyu",
    visualSchedule: "blank_visual_schedule_resource_lqgbhh",
  },
  wellbeing: {
    ySpanProduct: "yspan_product_l6dpka",
    ySpanIngredients: "yspan_ingredients_xc6xmy",
    ySpanBenefits: "yspan_benefits_nqcis6",
    ySpanWhy: "yspan_why_dqub7l",
    ySpanTestimonial: "yspan_test_jjwsvh",
    ySpanTestimonial2: "yspan_test_2_zsbnbh",
    ySpanHero: "yspan_whplla",
    feelCalmProduct: "feelcalm_p1ir0f",
    feelCalmBenefits: "feel_calm_benefits_bhhjyk",
    feelCalmStats: "feel_calm_stats_no8hfm",
    feelCalmHero: "calm_lady_image_g2lniv",
    feelCalmTestimonial: "mynd_testimonial_ozcxrl",
    feelCalmTestimonial2: "mynd_testimonial_2_dcuky9",
    nightTimeProduct: "night_time_vtmhc0",
    nightTimeIngredients: "night_time_ingredients_w3j2hq",
    nightTimeBenefits: "night_time_benefits_vqqts9",
    nightTimeStats: "night_time_stats_eicbej",
    nightTimeTestimonial: "nightitme_test_siozvt",
    nightTimeTestimonial2: "night_time_test_2_g3fkyx",
    myndTestimonial: "top_rec_mynd_jfaggw",
    hubHero: "wb_feel_calm_sgsdfw",
  },
  blog: {
    hero: "blog_hero_tfwysz",
  },
  videos: {
    feelCalm: "69be337ad06c6f7520dbf6f8_x7ufdx",
    /** Suggested Raw upload public IDs when using Cloudinary PDF delivery (paste delivery URL into env; see lib/wellbeing-pdf-url.ts). */
    feelCalmPdf: "feel_calm_pdf_wiumfz",
    nightTimePdf: "MyNuDay360-nighttime-pip_oziziq",
    ySpanPdf: "YSpan-Product-Information-Page_rca9ku",
  },
} as const;

const CLOUDINARY_CLOUD_NAME = "dlakvczje";

/** Raw upload PDF URL for non-image delivery. Pass the public ID without file extension. */
export function cloudinaryRawPdfUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/raw/upload/${publicId}.pdf`;
}
