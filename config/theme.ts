/**
 * FireAI Theme Configuration
 * 
 * This file contains all the design tokens and style configurations
 * used throughout the application to ensure consistent styling.
 * 
 * Import specific values from this file instead of hardcoding values
 * in components to maintain design consistency.
 */

export const colors = {
  // Primary colors
  primary: {
    50: '#E6EEFF',
    100: '#C2D9FF',
    200: '#99BBFF',
    300: '#6694FF',
    400: '#3366FF',
    500: '#0040FF', // Main primary color
    600: '#0033CC',
    700: '#0026A3',
    800: '#001A80',
    900: '#000D66',
    gradient: 'linear-gradient(90deg, #0600A3 0%, #0169FD 100%)',
    gradientHover: 'linear-gradient(180deg, #0915A0 0%, #0169FD 100%)',
  },
  
  // Secondary colors
  secondary: {
    50: '#F5F5F5',
    100: '#EBEBEB',
    200: '#D6D6D6',
    300: '#C2C2C2',
    400: '#ADADAD',
    500: '#999999', // Main secondary color
    600: '#7A7A7A',
    700: '#5C5C5C',
    800: '#3D3D3D',
    900: '#1F1F1F',
  },
  
  // Accent colors
  accent: {
    blue: '#0169FD',
    purple: '#322638',
    darkBlue: '#0600A3',
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  
  // Semantic colors
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  
  // Background colors
  background: {
    light: '#FFFFFF',
    dark: '#0A0A0A',
    gray: '#F6F8FA',
    gradient: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
  },
};

export const typography = {
  // Font families
  fontFamily: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  
  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

export const spacing = {
  // Spacing scale
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem',     // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem',    // 12px
  3.5: '0.875rem', // 14px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px
  11: '2.75rem',   // 44px
  12: '3rem',      // 48px
  14: '3.5rem',    // 56px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  28: '7rem',      // 112px
  32: '8rem',      // 128px
  36: '9rem',      // 144px
  40: '10rem',     // 160px
  44: '11rem',     // 176px
  48: '12rem',     // 192px
  52: '13rem',     // 208px
  56: '14rem',     // 224px
  60: '15rem',     // 240px
  64: '16rem',     // 256px
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',      // 2px
  DEFAULT: '0.25rem',  // 4px
  md: '0.375rem',      // 6px
  lg: '0.5rem',        // 8px
  xl: '0.75rem',       // 12px
  '2xl': '1rem',       // 16px
  '3xl': '1.5rem',     // 24px
  full: '9999px',      // Full rounded (circle)
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
};

export const transitions = {
  duration: {
    fastest: '100ms',
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    linear: 'linear',
    custom: [0.43, 0.13, 0.23, 0.96], // Custom cubic bezier for smoother motion
    bounce: [0.175, 0.885, 0.32, 1.275], // Bounce effect
    gentle: [0.25, 0.1, 0.25, 1.0], // Gentle easing
  },
  
  // Common animation presets
  presets: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3 }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4 }
    },
    slideIn: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.4 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.3 }
    },
    stagger: {
      container: {
        animate: { transition: { staggerChildren: 0.1 } }
      },
      item: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
      }
    }
  }
};

// Breakpoints for responsive design
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  
  // Breakpoint values as numbers (in pixels) for programmatic use
  values: {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
};

// Z-index management to avoid conflicts
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// Container sizes for layout consistency
export const containers = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  default: '1200px',
};

// Button specific styling
export const buttons = {
  sizes: {
    xs: {
      height: '32px',
      minWidth: '80px',
      fontSize: typography.fontSize.xs,
      padding: `${spacing[1.5]} ${spacing[3]}`,
    },
    sm: {
      height: '36px',
      minWidth: '120px',
      fontSize: typography.fontSize.sm,
      padding: `${spacing[2]} ${spacing[4]}`,
    },
    md: {
      height: '42px',
      minWidth: '150px',
      fontSize: typography.fontSize.base,
      padding: `${spacing[2.5]} ${spacing[5]}`,
    },
    lg: {
      height: '48px',
      minWidth: '180px',
      fontSize: typography.fontSize.lg,
      padding: `${spacing[3]} ${spacing[6]}`,
    },
    xl: {
      height: '56px',
      minWidth: '200px',
      fontSize: typography.fontSize.xl,
      padding: `${spacing[3.5]} ${spacing[7]}`,
    },
  },
  variants: {
    primary: {
      background: colors.primary.gradient,
      color: colors.neutral.white,
      hoverBackground: colors.primary.gradientHover,
      focusRing: `0 0 0 3px ${colors.primary[200]}`,
    },
    secondary: {
      background: colors.neutral.white,
      color: colors.primary[700],
      border: `1px solid ${colors.primary[700]}`,
      hoverBackground: colors.neutral.gray[50],
      focusRing: `0 0 0 3px ${colors.primary[100]}`,
    },
    ghost: {
      background: 'transparent',
      color: colors.primary[700],
      hoverBackground: colors.neutral.gray[50],
      focusRing: `0 0 0 3px ${colors.primary[100]}`,
    },
  },
};

// Common media queries for responsive design
export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
  dark: '@media (prefers-color-scheme: dark)',
  light: '@media (prefers-color-scheme: light)',
  motion: '@media (prefers-reduced-motion: no-preference)',
  hover: '@media (hover: hover)',
  notHover: '@media (hover: none)',
};
