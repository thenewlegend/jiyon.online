import gsap from './core';
import type { AnimationConfig } from './core';

export function splitText(text: string, type: 'chars' | 'words' = 'words') {
  if (type === 'chars') {
    return text.split('').map(char => `<span class="inline-block char">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
  }
  return text.split(' ').map(word => `<span class="inline-block relative overflow-hidden px-[0.05em]"><span class="inline-block word">${word}</span></span>`).join('&nbsp;');
}

export function animateText(element: HTMLElement, config?: AnimationConfig) {
  if (config?.enabled === false) return null;
  const elements = element.querySelectorAll('.char, .word');
  if (!elements.length) return null;

  return gsap.from(elements, {
    y: '110%',
    opacity: 0,
    rotateX: 45,
    stagger: config?.stagger ?? 0.03,
    duration: config?.duration ?? 0.8,
    ease: 'power3.out',
    delay: config?.delay ?? 0,
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
      toggleActions: 'play none none reverse',
      once: false
    }
  });
}
