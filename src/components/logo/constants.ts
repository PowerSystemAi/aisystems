export const LOGO_COLORS = {
  primary: 'rgb(110, 170, 170)',
  glow: 'rgba(110, 170, 170, 0.3)',
} as const;

export const ANIMATION_CONFIG = {
  duration: 3,
  baseOpacity: 0.7,
  peakOpacity: 1,
  baseScale: 0.95,
  peakScale: 1,
  glowRadius: {
    min: 8,
    max: 12
  }
} as const;