/**
 * B2bizz Centralized Design System
 * Single Source of Truth for Design Tokens, Component Conventions, Physics & Theme Constants
 * Source: https://b2bizz-wbs.framer.website/ (Reverse-Engineering Audit)
 */

export const B2BIZZ_COLORS = {
  // Pure Canvas OLED Black
  canvas: "#000000",
  // Base Surface (Dark Charcoal)
  surfaceBase: "#0E100F",
  // Primary Card Surface (Tactical Charcoal-Olive)
  surfaceCard: "#161A18",
  // Translucent Overlays
  surfaceTranslucent: "rgba(22, 26, 24, 0.80)",
  surfaceGlass: "rgba(22, 26, 24, 0.60)",
  surfacePanel: "#101011",

  // Tactical Borders
  borderOlive: "#2F3126",
  borderDark: "#2B2B2C",
  accentOlive: "#585E44",

  // Signature High-Contrast Electric Volt Lime
  brandVolt: "#F3FFC9",
  brandVoltLight: "#F9FFE5",

  // Typography Palette
  textPrimary: "#F9FFE5",
  textSecondary: "#BBC1A7",
  textMuted: "#606266",
  textWhite: "#FFFFFF",

  // Overlays & Light Wash
  overlaySubtle: "rgba(255, 255, 255, 0.03)",
  overlayGlow: "rgba(243, 255, 201, 0.15)",
} as const;

export const B2BIZZ_BREAKPOINTS = {
  desktop: 1200,
  laptop: 1024,
  tablet: 810,
  mobile: 390,
  smallMobile: 375,
} as const;

export const B2BIZZ_CONTAINERS = {
  maxWrapper: "1460px",
  maxGrid: "1200px",
  maxReading: "800px",
} as const;

export const B2BIZZ_RADII = {
  pill: "9999px",
  master: "30px",
  card: "20px",
  input: "10px",
} as const;

export const B2BIZZ_TYPOGRAPHY = {
  fonts: {
    display: "var(--font-family-display)",
    body: "var(--font-family-body)",
  },
  scale: {
    display1: {
      desktop: "68px",
      mobile: "36px",
      lineHeight: "1.1",
      tracking: "-0.03em",
      weight: 700,
    },
    h1: {
      desktop: "48px",
      mobile: "28px",
      lineHeight: "1.15",
      tracking: "-0.025em",
      weight: 700,
    },
    h2: {
      desktop: "36px",
      mobile: "24px",
      lineHeight: "1.2",
      tracking: "-0.02em",
      weight: 700,
    },
    h3: {
      desktop: "22px",
      mobile: "18px",
      lineHeight: "1.3",
      tracking: "-0.01em",
      weight: 700,
    },
    bodyLead: {
      desktop: "18px",
      mobile: "15px",
      lineHeight: "1.55",
      weight: 400,
    },
    body: {
      desktop: "16px",
      mobile: "14px",
      lineHeight: "1.5",
      weight: 400,
    },
    caption: {
      size: "13px",
      lineHeight: "1.4",
      tracking: "0.02em",
      weight: 500,
    },
  },
} as const;

export const B2BIZZ_ANIMATION = {
  easings: {
    smooth: [0.16, 1, 0.3, 1] as const,
    snappy: [0.44, 0, 0.56, 1] as const,
    sine: "sine.inOut",
  },
  durations: {
    fast: 0.15,
    base: 0.3,
    card: 0.45,
    reveal: 0.8,
    float: 4.0,
    marquee: 35.0,
  },
} as const;

export type ButtonVariant = "primary" | "secondary" | "ghost" | "pill";
export type CardVariant = "base" | "glass" | "interactive" | "master";

/**
 * Standard utility class mapping for Buttons
 */
export const BUTTON_STYLES: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
  pill: "btn-pill",
};

/**
 * Standard utility class mapping for Cards
 */
export const CARD_STYLES: Record<CardVariant, string> = {
  base: "card-base",
  glass: "card-glass",
  interactive: "card-base card-interactive",
  master: "card-master",
};

/**
 * Standard layout container classes
 */
export const CONTAINER_STYLES = {
  wrapper: "container-wrapper",
  grid: "container-grid",
  reading: "container-reading",
} as const;

/**
 * Complete centralized design system bundle
 */
export const B2BIZZ_DESIGN_SYSTEM = {
  colors: B2BIZZ_COLORS,
  breakpoints: B2BIZZ_BREAKPOINTS,
  containers: B2BIZZ_CONTAINERS,
  radii: B2BIZZ_RADII,
  typography: B2BIZZ_TYPOGRAPHY,
  animation: B2BIZZ_ANIMATION,
  buttons: BUTTON_STYLES,
  cards: CARD_STYLES,
  layout: CONTAINER_STYLES,
} as const;

export default B2BIZZ_DESIGN_SYSTEM;
