import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerComponent({ children, start = 'top 80%', end = 'bottom 20%', animationVars }) {
  const el = useRef();

  useEffect(() => {
    const anim = gsap.fromTo(
      el.current,
      { ...animationVars.from },
      {
        ...animationVars.to,
        scrollTrigger: {
          trigger: el.current,
          start,
          end,
          toggleActions: 'play none none reverse',
          once: false,
        },
      }
    );

    return () => {
      anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [start, end, animationVars]);

  return <div ref={el}>{children}</div>;
}
