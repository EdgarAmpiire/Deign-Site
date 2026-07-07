import { useRef } from "react";
import { useSpring, useTransform } from "framer-motion";
import { pointerX, pointerY, usePointerTracking } from "./pointerStore";

/**
 * Springy x/y offset that tracks the pointer relative to an element's
 * center. Reads from the single shared, rAF-batched pointer store
 * instead of attaching its own `pointermove` listener, so N instances of
 * this hook cost one shared listener, not N. The bounding-rect read
 * (the genuinely expensive part) only happens once per animation frame
 * — when the shared store flushes — never once per raw browser event.
 */
export const useCursorParallax = (strength = 20, enabled = true) => {
  const ref = useRef(null);
  usePointerTracking(enabled);

  const rawX = useTransform(pointerX, (px) => {
    const node = ref.current;
    if (!enabled || !node) return 0;
    const rect = node.getBoundingClientRect();
    return ((px - (rect.left + rect.width / 2)) / rect.width) * strength;
  });
  const rawY = useTransform(pointerY, (py) => {
    const node = ref.current;
    if (!enabled || !node) return 0;
    const rect = node.getBoundingClientRect();
    return ((py - (rect.top + rect.height / 2)) / rect.height) * strength;
  });

  const springX = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.4 });

  return { ref, x: springX, y: springY };
};
