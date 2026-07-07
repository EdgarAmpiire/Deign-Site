import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMotionProfile } from "./useMotionProfile";

/**
 * Subtle 3D tilt that follows the cursor within the card's bounds —
 * the "premium card" cue. Pairs with a lift/scale/shadow hover on the
 * same element via className; this only owns rotateX/rotateY. No-ops on
 * touch/mobile/reduced-motion.
 */
export const TiltHover = ({ children, max = 7, className = "", ...rest }) => {
  const ref = useRef(null);
  const { heavyMotionEnabled } = useMotionProfile();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 220, damping: 22, mass: 0.4 });
  const springRy = useSpring(ry, { stiffness: 220, damping: 22, mass: 0.4 });

  const handleMove = (e) => {
    if (!heavyMotionEnabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max);
    rx.set(-py * max);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: springRx, rotateY: springRy, transformPerspective: 800 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

TiltHover.propTypes = {
  children: PropTypes.node,
  max: PropTypes.number,
  className: PropTypes.string,
};
