import type { Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function makeFadeUp(duration = 0.55, staggerStep = 0.09): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration, delay: i * staggerStep, ease: EASE },
    }),
  };
}
