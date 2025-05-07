/**
 * Performance utilities for optimizing React components and application performance
 */

/**
 * Debounce function to limit the rate at which a function can fire
 * 
 * @param func - The function to debounce
 * @param wait - The time to wait in milliseconds
 * @param immediate - Whether to call the function immediately
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait = 300,
  immediate = false
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(this: any, ...args: Parameters<T>): void {
    const context = this;
    
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) {
      clearTimeout(timeout);
    }
    
    timeout = setTimeout(later, wait);
    
    if (callNow) {
      func.apply(context, args);
    }
  };
}

/**
 * Throttle function to limit the rate at which a function can fire
 * 
 * @param func - The function to throttle
 * @param limit - The time limit in milliseconds
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit = 300
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  
  return function(this: any, ...args: Parameters<T>): void {
    const context = this;
    
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

/**
 * Memoize function to cache results of expensive function calls
 * 
 * @param func - The function to memoize
 * @returns Memoized function
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map();
  
  return function(this: any, ...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = func.apply(this, args);
    cache.set(key, result);
    
    return result;
  };
}

/**
 * Detect if the code is running on the server or client
 */
export const isServer = typeof window === 'undefined';
export const isClient = !isServer;

/**
 * Detect if the device is a mobile device
 */
export function isMobileDevice(): boolean {
  if (isServer) return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Detect if the device has touch capabilities
 */
export function hasTouchCapabilities(): boolean {
  if (isServer) return false;
  
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Detect if the user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (isServer) return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Safely access nested object properties without throwing errors
 * 
 * @param obj - The object to access
 * @param path - The path to the property (e.g., 'user.profile.name')
 * @param defaultValue - The default value to return if the property doesn't exist
 * @returns The property value or the default value
 */
export function safeGet<T>(
  obj: Record<string, any>,
  path: string,
  defaultValue: T
): T {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result === undefined || result === null) {
      return defaultValue;
    }
    
    result = result[key];
  }
  
  return (result === undefined || result === null) ? defaultValue : result as T;
}

/**
 * Create a unique ID for elements
 * 
 * @param prefix - Prefix for the ID
 * @returns Unique ID
 */
export function uniqueId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Lazy load an image and return a promise that resolves when the image is loaded
 * 
 * @param src - The image source URL
 * @returns Promise that resolves when the image is loaded
 */
export function lazyLoadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    if (isServer) {
      reject(new Error('Cannot lazy load images on the server'));
      return;
    }
    
    const img = new Image();
    img.src = src;
    
    img.onload = () => resolve(img);
    img.onerror = (error) => reject(error);
  });
}

/**
 * Detect if an element is in the viewport
 * 
 * @param element - The element to check
 * @param offset - Offset from the viewport edges
 * @returns Whether the element is in the viewport
 */
export function isInViewport(
  element: HTMLElement,
  offset = 0
): boolean {
  if (isServer) return false;
  
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top >= 0 - offset &&
    rect.left >= 0 - offset &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
  );
}

/**
 * Chunk an array into smaller arrays
 * 
 * @param array - The array to chunk
 * @param size - The size of each chunk
 * @returns Array of chunks
 */
export function chunkArray<T>(array: T[], size: number): T[][] {
  if (!array.length) return [];
  
  const chunks: T[][] = [];
  
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  
  return chunks;
}

/**
 * Detect if the browser supports a specific CSS property
 * 
 * @param property - The CSS property to check
 * @returns Whether the browser supports the property
 */
export function supportsCSS(property: string): boolean {
  if (isServer) return false;
  
  return property in document.documentElement.style;
}

/**
 * Detect if the user is on a slow connection
 * 
 * @returns Whether the user is on a slow connection
 */
export function isSlowConnection(): boolean {
  if (isServer) return false;
  
  const connection = (navigator as any).connection || 
                    (navigator as any).mozConnection || 
                    (navigator as any).webkitConnection;
  
  if (!connection) return false;
  
  return connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g' || 
         connection.saveData === true;
}
