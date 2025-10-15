import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FadeInAnimation({ children, duration = 1, delay = 0 }) {
  const el = useRef();

  useEffect(() => {
    gsap.fromTo(
      el.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration, delay, ease: 'power3.out', clearProps: 'all' }
    );
  }, [duration, delay]);

  return <div ref={el}>{children}</div>;
}
