import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Springy x/y offset that tracks the pointer relative to an element's
 * center. Used for cursor-reactive depth (e.g. the hero orbit mark
 * leaning toward the cursor). The pointermove listener is only attached
 * while `enabled` is true, so it disappears entirely off screen or on
 * touch/mobile/reduced-motion devices instead of idling in the background.
 */
export const useCursorParallax = (strength = 20, enabled = true) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (!enabled) {
      x.set(0);
      y.set(0);
      return undefined;
    }

    const handleMove = (e) => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const relX = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const relY = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      x.set(relX * strength);
      y.set(relY * strength);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [enabled, strength, x, y]);

  return { ref, x: springX, y: springY };
};
