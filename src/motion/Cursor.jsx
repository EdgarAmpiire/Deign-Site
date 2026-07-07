import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMotionProfile } from "./useMotionProfile";

/**
 * Custom magnetic cursor. Renders nothing on touch/mobile/reduced-motion —
 * it's a desktop-only flourish. Elements opt into the "hover" state via
 * data-cursor="hover" (default premium ring-grow) or data-cursor="label"
 * with data-cursor-label="View" for a text-carrying state.
 */
export const Cursor = () => {
  const { heavyMotionEnabled } = useMotionProfile();
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!heavyMotionEnabled) return undefined;

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const el = e.target.closest("[data-cursor]");
      if (el) {
        setVariant(el.getAttribute("data-cursor") || "hover");
        setLabel(el.getAttribute("data-cursor-label") || "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.documentElement.classList.add("cursor-none-desktop");

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, [heavyMotionEnabled, x, y]);

  if (!heavyMotionEnabled) return null;

  const isHover = variant === "hover" || variant === "label";

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] flex items-center justify-center rounded-full border border-accent/70 mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHover ? 88 : 14,
        height: isHover ? 88 : 14,
        backgroundColor: isHover ? "rgba(60,181,74,0.15)" : "rgba(244,239,226,1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {label && (
        <span className="text-[11px] font-semibold tracking-wide text-bone">
          {label}
        </span>
      )}
    </motion.div>
  );
};
