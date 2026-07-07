import { useEffect } from "react";
import { motionValue } from "framer-motion";

/**
 * One shared, rAF-batched pointer position for the whole app. Every
 * cursor-reactive effect (custom cursor, hero parallax, floating marks)
 * reads from these two motion values instead of each attaching its own
 * `window.addEventListener("pointermove", ...)`.
 *
 * Framer's motion values already notify subscribers (useTransform, etc.)
 * inside its own frame-batched scheduler, so consumers naturally get one
 * update per animation frame instead of one per raw browser event —
 * raw pointermove can fire far more often than the display refresh rate.
 */
export const pointerX = motionValue(0);
export const pointerY = motionValue(0);

let listenerCount = 0;
let pendingEvent = null;
let rafId = null;

const flush = () => {
  rafId = null;
  if (!pendingEvent) return;
  pointerX.set(pendingEvent.clientX);
  pointerY.set(pendingEvent.clientY);
  pendingEvent = null;
};

const handlePointerMove = (e) => {
  pendingEvent = e;
  if (rafId == null) rafId = requestAnimationFrame(flush);
};

/**
 * Mounts (or reuses) the single shared window listener while `enabled`.
 * Reference-counted so multiple consumers can request it independently
 * without creating duplicate listeners, and it's fully torn down once
 * nothing needs it (e.g. reduced-motion / touch / mobile).
 */
export const usePointerTracking = (enabled) => {
  useEffect(() => {
    if (!enabled) return undefined;

    if (listenerCount === 0) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }
    listenerCount += 1;

    return () => {
      listenerCount -= 1;
      if (listenerCount === 0) {
        window.removeEventListener("pointermove", handlePointerMove);
        if (rafId != null) cancelAnimationFrame(rafId);
        rafId = null;
        pendingEvent = null;
      }
    };
  }, [enabled]);
};
