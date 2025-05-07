'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { transitions } from '@/config/theme';

/**
 * Animation variants for common animation patterns
 */
export const animationVariants = {
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
  scale: {
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
 * Custom hook for managing animations with Framer Motion
 * 
 * @param ref - Reference to the element to animate
 * @param options - Animation options
 * @returns Animation properties and state
 */
export function useAnimation(options = {}) {
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
      return animationVariants[variant] || animationVariants.fadeIn;
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
  const [ref, setRef] = useState(null);
  const inView = useInView(ref, { 
    once, 
    threshold,
    rootMargin
  });

  // Animation controls
  const [controls, setControls] = useState({
    initial: 'hidden',
    animate: inView ? 'visible' : 'hidden',
    variants: customVariant
  });

  // Update controls when inView changes
  useEffect(() => {
    if (ref) {
      setControls({
        initial: 'hidden',
        animate: inView ? 'visible' : 'hidden',
        variants: customVariant
      });
    }
  }, [inView, ref]);

  return {
    ref: setRef,
    inView,
    ...controls,
    variants: customVariant
  };
}

export default useAnimation;
