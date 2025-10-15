import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SlideInAnimation({ children, direction = 'left', duration = 1, delay = 0 }) {
  const el = useRef();

  useEffect(() => {
    const fromVars = {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    };

    const toVars = {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        once: false,
      },
      clearProps: 'all',
    };

    gsap.fromTo(el.current, fromVars, toVars);
  }, [direction, duration, delay]);

  return <div ref={el}>{children}</div>;
}
