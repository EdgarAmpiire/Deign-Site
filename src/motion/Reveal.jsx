import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useMotionProfile } from "./useMotionProfile";

const DIRECTIONS = {
  up: { y: 56, x: 0 },
  down: { y: -56, x: 0 },
  left: { x: 56, y: 0 },
  right: { x: -56, y: 0 },
  none: { x: 0, y: 0 },
};

// slow-in, settle — an expensive-feeling ease, not a linear/default one
const EXPO_OUT = [0.16, 1, 0.3, 1];

/**
 * Scroll-triggered reveal. Wraps framer-motion's whileInView so every
 * section gets the same "rise + settle" language instead of ad-hoc
 * transitions. Reduces to a plain opacity fade when the user has asked
 * for less motion.
 */
export const Reveal = ({
  children,
  as = "div",
  direction = "up",
  delay = 0,
  duration = 1.1,
  distance,
  className = "",
  once = true,
  amount = 0.3,
  ...rest
}) => {
  const { reducedMotion } = useMotionProfile();
  const Component = motion[as] ?? motion.div;
  const offset = DIRECTIONS[direction] ?? DIRECTIONS.up;
  const scale = distance != null ? distance / 56 : 1;

  if (reducedMotion) {
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x: offset.x * scale, y: offset.y * scale }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EXPO_OUT }}
      {...rest}
    >
      {children}
    </Component>
  );
};

Reveal.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  direction: PropTypes.oneOf(["up", "down", "left", "right", "none"]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  distance: PropTypes.number,
  className: PropTypes.string,
  once: PropTypes.bool,
  amount: PropTypes.number,
};
