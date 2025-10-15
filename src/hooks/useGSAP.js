import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function useGSAP(animationConfig) {
  const el = useRef();

  useEffect(() => {
    if (!el.current) return;

    const anim = gsap.fromTo(
      el.current,
      animationConfig.from,
      animationConfig.to
    );

    return () => {
      anim.kill();
    };
  }, [animationConfig]);

  return el;
}
