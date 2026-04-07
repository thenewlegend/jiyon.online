import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type AnimationConfig = {
  enabled?: boolean;
  delay?: number;
  duration?: number;
  stagger?: number;
};

export type AnimationParams = {
  element: HTMLElement;
  config?: AnimationConfig;
};

export const defaultDuration = 0.8;
export const defaultEase = 'power2.out';

export default gsap;
