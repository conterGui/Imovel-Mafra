// src/config/propertyImages.ts
// ============================================
// Todas as imagens do imóvel, importadas do src/assets
// ============================================

// HERO
import heroImage from '@/assets/hero/DJI_0695.jpg';

// BEFORE / AFTER
import beforeLiving from '@/assets/before/before-living.jpg';
import afterLiving from '@/assets/after/after-living.jpg';
import beforeKitchen from '@/assets/before/before-kitchen.jpg';
import afterKitchen from '@/assets/after/after-kitchen.jpg';
import beforePool from '@/assets/before/before-pool.jpg';
import afterPool from '@/assets/after/after-pool.jpg';
import beforeYard from '@/assets/before/before-yard.jpg';
import afterYard from '@/assets/after/after-yard.jpg';
import beforeGarage from '@/assets/before/before-garage.jpg';
import afterGarage from '@/assets/after/after-garage.jpg';

// GALLERY – todas as imagens importadas
import gallery1 from '@/assets/gallery/DJI_0688.jpg';
import gallery2 from '@/assets/gallery/DJI_0689.jpg';
import gallery3 from '@/assets/gallery/DJI_0690.jpg';
import gallery4 from '@/assets/gallery/DJI_0691.jpg';
import gallery5 from '@/assets/gallery/DJI_0692.jpg';
import gallery6 from '@/assets/gallery/DJI_0693.jpg';
import gallery7 from '@/assets/gallery/DJI_0694.jpg';
import gallery8 from '@/assets/gallery/DJI_0696.jpg';
import gallery9 from '@/assets/gallery/DSC06927.jpg';
import gallery10 from '@/assets/gallery/DSC06928.jpg';
import gallery11 from '@/assets/gallery/DSC06929.jpg';
import gallery12 from '@/assets/gallery/DSC06930.jpg';
import gallery13 from '@/assets/gallery/DSC06931.jpg';
import gallery14 from '@/assets/gallery/DSC06932.jpg';
import gallery15 from '@/assets/gallery/DSC06933.jpg';
import gallery16 from '@/assets/gallery/DSC06935Blend.jpg';
import gallery17 from '@/assets/gallery/DSC06940Blend.jpg';
import gallery18 from '@/assets/gallery/DSC06945Blend.jpg';
import gallery19 from '@/assets/gallery/DSC06950Blend.jpg';
import gallery20 from '@/assets/gallery/DSC06955Blend.jpg';
import gallery21 from '@/assets/gallery/DSC06960Blend.jpg';
import gallery22 from '@/assets/gallery/DSC06965Blend.jpg';
import gallery23 from '@/assets/gallery/DSC06970Blend.jpg';
import gallery24 from '@/assets/gallery/DSC06975Blend.jpg';
import gallery25 from '@/assets/gallery/DSC06980Blend.jpg';
import gallery26 from '@/assets/gallery/DSC06985Blend.jpg';
import gallery27 from '@/assets/gallery/DSC06990Blend.jpg';
import gallery28 from '@/assets/gallery/DSC06995Blend.jpg';
import gallery29 from '@/assets/gallery/DSC07000Blend.jpg';
import gallery30 from '@/assets/gallery/DSC07005Blend.jpg';
import gallery31 from '@/assets/gallery/DSC07010Blend.jpg';
import gallery32 from '@/assets/gallery/DSC07020Blend.jpg';
import gallery33 from '@/assets/gallery/DSC07025Blend.jpg';
import gallery34 from '@/assets/gallery/DSC07030Blend.jpg';
import gallery35 from '@/assets/gallery/DSC07035Blend.jpg';
import gallery36 from '@/assets/gallery/DSC07044Blend.jpg';
import gallery37 from '@/assets/gallery/DSC07045Blend.jpg';
import gallery38 from '@/assets/gallery/DSC07055Blend.jpg';
import gallery39 from '@/assets/gallery/DSC07060Blend.jpg';
import gallery40 from '@/assets/gallery/DSC07065Blend.jpg';
import gallery41 from '@/assets/gallery/DSC07070Blend.jpg';
import gallery42 from '@/assets/gallery/DSC07075Blend.jpg';
import gallery43 from '@/assets/gallery/DSC07080Blend.jpg';
import gallery44 from '@/assets/gallery/DSC07085Blend.jpg';
import gallery45 from '@/assets/gallery/DSC07090Blend.jpg';
import gallery46 from '@/assets/gallery/DSC07095Blend.jpg';
import gallery47 from '@/assets/gallery/DSC07100Blend.jpg';
import gallery48 from '@/assets/gallery/DSC07105Blend.jpg';
import gallery49 from '@/assets/gallery/DSC07110Blend.jpg';
import gallery50 from '@/assets/gallery/DSC07115.jpg';
import gallery51 from '@/assets/gallery/DSC07116.jpg';

// BEFORE / AFTER array
export const beforeAfterImages = [
  { label: 'exterior', before: beforeYard, after: afterYard },
  { label: 'garage', before: beforeGarage, after: afterGarage },
  { label: 'pool', before: beforePool, after: afterPool },
];

// OBJETO FINAL
export const propertyImages = {
  hero: heroImage,
  gallery: [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9,
    gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17,
    gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24, gallery25,
    gallery26, gallery27, gallery28, gallery29, gallery30, gallery31, gallery32, gallery33,
    gallery34, gallery35, gallery36, gallery37, gallery38, gallery39, gallery40, gallery41,
    gallery42, gallery43, gallery44, gallery45, gallery46, gallery47, gallery48, gallery49,
    gallery50, gallery51
  ],
  beforeAfter: beforeAfterImages,
};
