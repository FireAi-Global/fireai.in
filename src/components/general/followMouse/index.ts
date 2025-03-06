'use client';

import { Component, createEffect, onCleanup } from 'solid-js';

interface FollowCursorProps {
  color?: string;
}

const FollowCursor: Component<FollowCursorProps> = (props) => {
  const color = props.color || '#C1BFE8a6';

  createEffect(() => {
    // Check if screen is mobile/small
    const isMobileScreen = () => window.innerWidth < 768; // 768px is typical md breakpoint

    if (isMobileScreen()) {
      return; // Don't initialize on mobile screens
    }

    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    class Dot {
      position: { x: number; y: number };
      width: number;
      lag: number;

      constructor(x: number, y: number, width: number, lag: number) {
        this.position = { x, y };
        this.width = width;
        this.lag = lag;
      }

      moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        context.fillStyle = color;
        context.beginPath();
        context.arc(
          this.position.x,
          this.position.y,
          this.width,
          0,
          2 * Math.PI
        );
        context.fill();
        context.closePath();
      }
    }

    const dot = new Dot(width / 2, height / 2, 10, 10);

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      if (isMobileScreen()) {
        destroy(); // Remove effect if screen becomes too small
        return;
      }
      
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      } else {
        init(); // Reinitialize if screen becomes large enough
      }
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches || isMobileScreen()) {
        console.log('Effect disabled due to reduced motion preference or small screen.');
        return;
      }

      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);
      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };

    const handlePrefersReducedMotion = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    prefersReducedMotion.addEventListener('change', handlePrefersReducedMotion);
    init();

    onCleanup(() => {
      destroy();
      prefersReducedMotion.removeEventListener('change', handlePrefersReducedMotion);
    });
  });

  return null;
};

export default FollowCursor;
