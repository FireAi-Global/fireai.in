'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { transitions } from '@/config/theme';

/**
 * Type for animation variant keys
 */
export type AnimationVariantType = 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'staggerContainer';

/**
 * Animation variants for common animation patterns
 */
export const animationVariants: Record<AnimationVariantType, any> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: transitions.timing.gentle
      }
    }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: transitions.timing.gentle
      }
    }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: transitions.timing.gentle
      }
    }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: transitions.timing.gentle
      }
    }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: transitions.timing.gentle
      }
    }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: transitions.timing.gentle
      }
    }
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

/**
 * Interface for animation options
 */
interface AnimationOptions {
  variant?: AnimationVariantType | Record<string, any>;
  threshold?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  ease?: number[];
  rootMargin?: string;
}

/**
 * Custom hook for managing animations with Framer Motion
 * 
 * @param options Animation options
 * @returns Animation properties and state
 */
export function useAnimation(options: AnimationOptions = {}) {
  const {
    variant = 'fadeIn',
    threshold = 0.1,
    delay = 0,
    duration = 0.5,
    once = true,
    ease = transitions.timing.gentle,
    rootMargin = '0px 0px -100px 0px',
  } = options;

  // Get the animation variant
  const getVariant = () => {
    if (typeof variant === 'string') {
      // Check if the variant exists in our predefined variants
      return animationVariants[variant as AnimationVariantType] || animationVariants.fadeIn;
    }
    return variant;
  };

  // Custom animation variant with options
  const customVariant = {
    hidden: getVariant().hidden,
    visible: {
      ...getVariant().visible,
      transition: {
        ...getVariant().visible.transition,
        delay,
        duration,
        ease
      }
    }
  };

  // Create a ref for the element to animate
  const elementRef = useRef<HTMLElement>(null);
  const inView = useInView(elementRef, { 
    once
    // Framer Motion's useInView uses 'amount' instead of 'threshold'
    // and doesn't support rootMargin directly
  });

  // Animation controls
  const [controls, setControls] = useState({
    initial: 'hidden',
    animate: inView ? 'visible' : 'hidden',
    variants: customVariant
  });

  // Update controls when inView changes
  useEffect(() => {
    if (elementRef.current) {
      setControls({
        initial: 'hidden',
        animate: inView ? 'visible' : 'hidden',
        variants: customVariant
      });
    }
  }, [inView, customVariant]);

  return {
    ref: elementRef,
    inView,
    ...controls,
    transition: {
      duration,
      delay,
      ease
    }
  };
}

export default useAnimation;
