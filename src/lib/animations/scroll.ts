import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { AnimationParams } from './core';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function fadeUp({ element, config }: AnimationParams) {
  if (config?.enabled === false) return null;

  return gsap.from(element, {
    y: 40,
    opacity: 0,
    duration: config?.duration ?? 1,
    delay: config?.delay ?? 0,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      once: true
    }
  });
}

export function fadeIn({ element, config }: AnimationParams) {
  if (config?.enabled === false) return null;

  return gsap.from(element, {
    opacity: 0,
    duration: config?.duration ?? 1.2,
    delay: config?.delay ?? 0,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      
      once: true
    }
  });
}

export function scaleIn({ element, config }: AnimationParams) {
  if (config?.enabled === false) return null;

  return gsap.from(element, {
    scale: 0.95,
    opacity: 0,
    duration: config?.duration ?? 1,
    delay: config?.delay ?? 0,
    ease: 'expo.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      
      once: true
    }
  });
}

export function staggerChildren(parent: HTMLElement, childSelector: string, config?: any) {
  const children = parent.querySelectorAll(childSelector);
  if (!children.length) return null;

  return gsap.from(children, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: config?.stagger ?? 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: parent,
      start: 'top 80%',
      
      once: true
    }
  });
}
