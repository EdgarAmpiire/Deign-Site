import { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMotionProfile } from "./useMotionProfile";

/**
 * Wraps a button/link so it pulls gently toward the cursor while hovered
 * and springs back on leave — the "magnetic button" premium-site cue.
 * Listeners live on the element itself (only fire while actually
 * hovering it), so there's no idle global cost. No-ops on touch/mobile/
 * reduced-motion, where hover doesn't meaningfully exist anyway.
 */
export const Magnetic = ({
  children,
  as = "div",
  strength = 0.35,
  className = "",
  ...rest
}) => {
  const ref = useRef(null);
  const { heavyMotionEnabled } = useMotionProfile();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 });

  const handleMove = (e) => {
    if (!heavyMotionEnabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = motion[as] ?? motion.div;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

Magnetic.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  strength: PropTypes.number,
  className: PropTypes.string,
};
