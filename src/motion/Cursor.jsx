import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useSpring } from "framer-motion";
import { useMotionProfile } from "./useMotionProfile";
import { pointerX, pointerY, usePointerTracking } from "./pointerStore";

const BASE_SIZE = 88;
const DEFAULT_SCALE = 14 / BASE_SIZE;

/**
 * Custom magnetic cursor. Renders nothing on touch/mobile/reduced-motion —
 * it's a desktop-only flourish. Elements opt into the "hover" state via
 * data-cursor="hover" (default premium ring-grow) or data-cursor="label"
 * with data-cursor-label="View" for a text-carrying state.
 *
 * Reads position from the shared pointer store (already rAF-batched, one
 * listener for the whole app) and only does the hit-test lookup once per
 * animation frame via useMotionValueEvent, instead of on every raw
 * pointermove. The grow/shrink is a `scale` transform on a fixed-size box
 * — never an animated width/height — so it never triggers layout.
 */
export const Cursor = () => {
  const { heavyMotionEnabled } = useMotionProfile();
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");

  usePointerTracking(heavyMotionEnabled);

  const springX = useSpring(pointerX, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 500, damping: 40, mass: 0.4 });

  useMotionValueEvent(pointerX, "change", () => {
    if (!heavyMotionEnabled) return;
    const el = document
      .elementFromPoint(pointerX.get(), pointerY.get())
      ?.closest("[data-cursor]");
    if (el) {
      setVariant(el.getAttribute("data-cursor") || "hover");
      setLabel(el.getAttribute("data-cursor-label") || "");
    } else {
      setVariant("default");
      setLabel("");
    }
  });

  useEffect(() => {
    if (!heavyMotionEnabled) return undefined;
    document.documentElement.classList.add("cursor-none-desktop");
    return () => document.documentElement.classList.remove("cursor-none-desktop");
  }, [heavyMotionEnabled]);

  if (!heavyMotionEnabled) return null;

  const isHover = variant === "hover" || variant === "label";

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] flex items-center justify-center rounded-full border border-accent/70 mix-blend-difference will-change-transform"
      style={{
        x: springX,
        y: springY,
        width: BASE_SIZE,
        height: BASE_SIZE,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHover ? 1 : DEFAULT_SCALE,
        backgroundColor: isHover ? "rgba(60,181,74,0.15)" : "rgba(244,239,226,1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {label && (
        <span
          className="text-[11px] font-semibold tracking-wide text-bone transition-opacity duration-150"
          style={{ opacity: isHover ? 1 : 0 }}
        >
          {label}
        </span>
      )}
    </motion.div>
  );
};
