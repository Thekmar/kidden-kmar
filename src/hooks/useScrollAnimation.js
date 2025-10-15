import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(animationConfig, triggerOptions = {}) {
  const el = useRef();

  useEffect(() => {
    if (!el.current) return;

    const anim = gsap.fromTo(
      el.current,
      animationConfig.from,
      {
        ...animationConfig.to,
        scrollTrigger: {
          trigger: el.current,
          start: triggerOptions.start || 'top 80%',
          end: triggerOptions.end || 'bottom 20%',
          toggleActions: triggerOptions.toggleActions || 'play none none reverse',
          once: triggerOptions.once ?? false,
        },
      }
    );

    return () => {
      anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [animationConfig, triggerOptions]);

  return el;
}
