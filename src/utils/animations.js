// Reusable animation configurations for GSAP or similar libraries

export const fadeInUp = {
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
};

export const fadeInDown = {
  from: { opacity: 0, y: -40 },
  to: { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
};

export const slideLeft = {
  from: { opacity: 0, x: 100 },
  to: { opacity: 1, x: 0, duration: 1.2, ease: 'power4.out' },
};

export const slideRight = {
  from: { opacity: 0, x: -100 },
  to: { opacity: 1, x: 0, duration: 1.2, ease: 'power4.out' },
};
