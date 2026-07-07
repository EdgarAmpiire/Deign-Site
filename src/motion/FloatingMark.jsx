import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useSpring, useTransform } from "framer-motion";
import deignMark from "../assets/images/Deign-icon.png";
import { useInViewGate } from "./useInViewGate";
import { useMotionProfile } from "./useMotionProfile";
import { useParallaxContext } from "./Parallax";
import { pointerX, pointerY, usePointerTracking } from "./pointerStore";

/**
 * A single decorative instance of the real Deign mark, drifting at depth
 * in the background of a section. Must be used inside a <ParallaxSection>
 * — it reads that section's already-computed `scrollYProgress` from
 * context rather than tracking scroll itself, so adding more marks to a
 * section costs a cheap derived transform each, not another independent
 * scroll/rect-tracking chain. Always inert to pointer events and sits
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

  const parallax = useParallaxContext();
  const rawY = useTransform(
    parallax?.scrollYProgress,
    [0, 1],
    [-scrollSpeed, scrollSpeed]
  );
  const scrollY = useSpring(rawY, { stiffness: 60, damping: 22, mass: 1 });

  usePointerTracking(cursorReactive && enabled);
  const cursorActive = cursorReactive && enabled;
  const rawCursorX = useTransform(pointerX, (px) =>
    cursorActive ? (px / window.innerWidth - 0.5) * cursorStrength : 0
  );
  const rawCursorY = useTransform(pointerY, (py) =>
    cursorActive ? (py / window.innerHeight - 0.5) * cursorStrength : 0
  );
  const cursorSpringX = useSpring(rawCursorX, { stiffness: 40, damping: 18, mass: 1.2 });
  const cursorSpringY = useSpring(rawCursorY, { stiffness: 40, damping: 18, mass: 1.2 });

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
        loading="lazy"
        decoding="async"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          willChange: enabled ? "transform" : "auto",
        }}
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
