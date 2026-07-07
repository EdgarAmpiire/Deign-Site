import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import deignMark from "../assets/images/Deign-icon.png";
import { useInViewGate } from "./useInViewGate";
import { useMotionProfile } from "./useMotionProfile";

/**
 * A single decorative instance of the real Deign mark, drifting at depth
 * in the background of a section. Self-contained (own scroll tracking,
 * own in-view gate) so it can be dropped anywhere without needing a
 * ParallaxSection ancestor. Always inert to pointer events and sits
 * beneath a section's `relative z-10` content by default stacking order.
 *
 * Rotation, scroll-drift, and cursor-drift are all just transforms on the
 * untouched brand PNG — the artwork itself is never redrawn.
 */
export const FloatingMark = ({
  size = 260,
  top,
  left,
  right,
  bottom,
  opacity = 0.07,
  scrollSpeed = 90,
  rotateSpeed = 130,
  spinDirection = 1,
  cursorReactive = false,
  cursorStrength = 26,
  className = "",
}) => {
  const ref = useRef(null);
  const { heavyMotionEnabled } = useMotionProfile();
  const [gateRef, inView] = useInViewGate({ rootMargin: "25% 0px 25% 0px" });
  const enabled = heavyMotionEnabled && inView;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [-scrollSpeed, scrollSpeed]);
  const scrollY = useSpring(rawY, { stiffness: 60, damping: 22, mass: 1 });

  const cursorX = useMotionValue(0);
  const cursorYRaw = useMotionValue(0);
  const cursorSpringX = useSpring(cursorX, { stiffness: 40, damping: 18, mass: 1.2 });
  const cursorSpringY = useSpring(cursorYRaw, { stiffness: 40, damping: 18, mass: 1.2 });

  // window-level listener (not element-level): the mark is pointer-events-none
  // and often sits behind content, so it must react to cursor position
  // anywhere in the viewport, not just when directly hovered.
  useEffect(() => {
    if (!cursorReactive || !enabled) {
      cursorX.set(0);
      cursorYRaw.set(0);
      return undefined;
    }

    const handleMove = (e) => {
      const relX = e.clientX / window.innerWidth - 0.5;
      const relY = e.clientY / window.innerHeight - 0.5;
      cursorX.set(relX * cursorStrength);
      cursorYRaw.set(relY * cursorStrength);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [cursorReactive, enabled, cursorStrength, cursorX, cursorYRaw]);

  const finalY = useTransform([scrollY, cursorSpringY], ([s, c]) => s + c);

  const setRefs = (node) => {
    ref.current = node;
    gateRef.current = node;
  };

  return (
    <motion.div
      ref={setRefs}
      aria-hidden="true"
      className={`pointer-events-none absolute select-none ${className}`}
      style={{ top, left, right, bottom, width: size, height: size, opacity, x: cursorSpringX, y: finalY }}
    >
      <motion.img
        src={deignMark}
        alt=""
        draggable={false}
        style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
        animate={enabled ? { rotate: 360 * spinDirection } : { rotate: 0 }}
        transition={
          enabled
            ? { repeat: Infinity, duration: rotateSpeed, ease: "linear" }
            : { duration: 0.8 }
        }
      />
    </motion.div>
  );
};

FloatingMark.propTypes = {
  size: PropTypes.number,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  opacity: PropTypes.number,
  scrollSpeed: PropTypes.number,
  rotateSpeed: PropTypes.number,
  spinDirection: PropTypes.oneOf([1, -1]),
  cursorReactive: PropTypes.bool,
  cursorStrength: PropTypes.number,
  className: PropTypes.string,
};
