import PropTypes from "prop-types";
import { motion } from "framer-motion";
import deignMark from "../assets/images/Deign-icon.png";
import { useInViewGate } from "./useInViewGate";
import { useMotionProfile } from "./useMotionProfile";
import { useCursorParallax } from "./useCursorParallax";

/**
 * The real Deign mark, animated — never redrawn or recolored. We rotate
 * and tilt the actual brand PNG as a rigid body (a transform, not an
 * edit), so the artwork itself stays exactly as designed everywhere it
 * appears: nav, hero, footer, and the decorative FloatingMark instances.
 */
export const OrbitLogo = ({ size = 220, interactive = true, className = "" }) => {
  const [gateRef, inView] = useInViewGate({ rootMargin: "20% 0px 20% 0px" });
  const { heavyMotionEnabled } = useMotionProfile();
  const spinEnabled = heavyMotionEnabled && inView;

  const { ref: tiltRef, x: tiltX, y: tiltY } = useCursorParallax(
    10,
    interactive && spinEnabled
  );

  const setRefs = (node) => {
    gateRef.current = node;
    tiltRef.current = node;
  };

  return (
    <motion.div
      ref={setRefs}
      className={className}
      style={{
        width: size,
        height: size,
        rotateY: interactive ? tiltX : 0,
        rotateX: interactive ? tiltY : 0,
        perspective: 600,
      }}
    >
      <motion.img
        src={deignMark}
        alt=""
        aria-hidden="true"
        draggable={false}
        loading="lazy"
        decoding="async"
        width="100%"
        height="100%"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          willChange: spinEnabled ? "transform" : "auto",
        }}
        animate={spinEnabled ? { rotate: 360 } : { rotate: 0 }}
        transition={
          spinEnabled
            ? { repeat: Infinity, duration: 46, ease: "linear" }
            : { duration: 0.8 }
        }
      />
    </motion.div>
  );
};

OrbitLogo.propTypes = {
  size: PropTypes.number,
  interactive: PropTypes.bool,
  className: PropTypes.string,
};
