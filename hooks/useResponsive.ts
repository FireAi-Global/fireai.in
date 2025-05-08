'use client';

import { useState, useEffect } from 'react';

// Define standard breakpoints
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away to update initial state
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper functions to check current breakpoint
  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width < breakpoints.md,
    isTablet: windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg,
    isDesktop: windowSize.width >= breakpoints.lg,
    isSmallScreen: windowSize.width < breakpoints.sm,
    isMediumScreen: windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg,
    isLargeScreen: windowSize.width >= breakpoints.lg && windowSize.width < breakpoints.xl,
    isExtraLargeScreen: windowSize.width >= breakpoints.xl,
  };
}
