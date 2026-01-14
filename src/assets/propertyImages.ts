// ============================================
// IMAGENS DO IMÓVEL (TypeScript) – GitHub Pages
// ============================================

// BASE DO REPOSITÓRIO NO GH PAGES
const BASE = "/imovel-mafra/";

// HERO
const heroImage = `${BASE}hero/DJI_0695.jpg`;

// BEFORE / AFTER
const beforeLiving = `${BASE}before/before-living.jpg`;
const afterLiving = `${BASE}after/after-living.jpg`;
const beforeKitchen = `${BASE}before/before-kitchen.jpg`;
const afterKitchen = `${BASE}after/after-kitchen.jpg`;
const beforePool = `${BASE}before/before-pool.jpg`;
const afterPool = `${BASE}after/after-pool.jpg`;
const beforeYard = `${BASE}before/before-yard.jpg`;
const afterYard = `${BASE}after/after-yard.jpg`;
const beforeGarage = `${BASE}before/before-garage.jpg`;
const afterGarage = `${BASE}after/after-garage.jpg`;

// DRONE / GALLERY
const g1 = `${BASE}gallery/DJI_0688.jpg`;
const g2 = `${BASE}gallery/DJI_0689.jpg`;
const g3 = `${BASE}gallery/DJI_0690.jpg`;
const g4 = `${BASE}gallery/DJI_0691.jpg`;
const g5 = `${BASE}gallery/DJI_0692.jpg`;
const g6 = `${BASE}gallery/DJI_0693.jpg`;
const g7 = `${BASE}gallery/DJI_0694.jpg`;
const g8 = `${BASE}gallery/DJI_0696.jpg`;

// INTERIOR
const g9 = `${BASE}gallery/DSC06927.jpg`;
const g10 = `${BASE}gallery/DSC06928.jpg`;
const g11 = `${BASE}gallery/DSC06929.jpg`;
const g12 = `${BASE}gallery/DSC06930.jpg`;
const g13 = `${BASE}gallery/DSC06931.jpg`;
const g14 = `${BASE}gallery/DSC06932.jpg`;
const g15 = `${BASE}gallery/DSC06933.jpg`;

// BLENDS
const g16 = `${BASE}gallery/DSC06935Blend.jpg`;
const g17 = `${BASE}gallery/DSC06940Blend.jpg`;
const g18 = `${BASE}gallery/DSC06945Blend.jpg`;
const g19 = `${BASE}gallery/DSC06950Blend.jpg`;
const g20 = `${BASE}gallery/DSC06955Blend.jpg`;
const g21 = `${BASE}gallery/DSC06960Blend.jpg`;
const g22 = `${BASE}gallery/DSC06965Blend.jpg`;
const g23 = `${BASE}gallery/DSC06970Blend.jpg`;
const g24 = `${BASE}gallery/DSC06975Blend.jpg`;
const g25 = `${BASE}gallery/DSC06980Blend.jpg`;
const g26 = `${BASE}gallery/DSC06985Blend.jpg`;
const g27 = `${BASE}gallery/DSC06990Blend.jpg`;
const g28 = `${BASE}gallery/DSC06995Blend.jpg`;

const g29 = `${BASE}gallery/DSC07000Blend.jpg`;
const g30 = `${BASE}gallery/DSC07005Blend.jpg`;
const g31 = `${BASE}gallery/DSC07010Blend.jpg`;
const g32 = `${BASE}gallery/DSC07020Blend.jpg`;
const g33 = `${BASE}gallery/DSC07025Blend.jpg`;
const g34 = `${BASE}gallery/DSC07030Blend.jpg`;
const g35 = `${BASE}gallery/DSC07035Blend.jpg`;
const g36 = `${BASE}gallery/DSC07044Blend.jpg`;
const g37 = `${BASE}gallery/DSC07045Blend.jpg`;

const g38 = `${BASE}gallery/DSC07055Blend.jpg`;
const g39 = `${BASE}gallery/DSC07060Blend.jpg`;
const g40 = `${BASE}gallery/DSC07065Blend.jpg`;
const g41 = `${BASE}gallery/DSC07070Blend.jpg`;
const g42 = `${BASE}gallery/DSC07075Blend.jpg`;
const g43 = `${BASE}gallery/DSC07080Blend.jpg`;
const g44 = `${BASE}gallery/DSC07085Blend.jpg`;
const g45 = `${BASE}gallery/DSC07090Blend.jpg`;
const g46 = `${BASE}gallery/DSC07095Blend.jpg`;
const g47 = `${BASE}gallery/DSC07100Blend.jpg`;
const g48 = `${BASE}gallery/DSC07105Blend.jpg`;
const g49 = `${BASE}gallery/DSC07110Blend.jpg`;

// EXTRAS
const g50 = `${BASE}gallery/DSC07115.jpg`;
const g51 = `${BASE}gallery/DSC07116.jpg`;

// =======================
// TIPOS
// =======================
export interface BeforeAfterItem {
  label: string;
  before: string;
  after: string;
}

export interface PropertyImages {
  hero: string;
  gallery: string[];
  beforeAfter: BeforeAfterItem[];
}

// =======================
// EXPORT FINAL
// =======================
export const propertyImages: PropertyImages = {
  hero: heroImage,

  gallery: [
    g1, g2, g3, g4, g5, g6, g7, g8,
    g9, g10, g11, g12, g13, g14, g15,
    g16, g17, g18, g19, g20, g21, g22, g23, g24, g25, g26, g27, g28,
    g29, g30, g31, g32, g33, g34, g35, g36, g37,
    g38, g39, g40, g41, g42, g43, g44, g45, g46, g47, g48, g49,
    g50, g51,
  ],

  beforeAfter: [
    { label: "exterior", before: beforeYard, after: afterYard },
    { label: "garage", before: beforeGarage, after: afterGarage },
    { label: "pool", before: beforePool, after: afterPool },
  ],
};

export const galleryImages = propertyImages.gallery;
export const beforeAfterImages = propertyImages.beforeAfter;
