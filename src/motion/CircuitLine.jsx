import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useInViewGate } from "./useInViewGate";
import { useMotionProfile } from "./useMotionProfile";

const EXPO_OUT = [0.16, 1, 0.3, 1];

/**
 * Thin circuit-board tracery that draws itself in with an animated
 * stroke-dashoffset once it scrolls into view. `paths` is an array of SVG
 * path `d` strings; each node/junction can be passed via `nodes` as
 * {cx, cy} pairs that pulse in after the line finishes drawing.
 */
export const CircuitLine = ({
  paths,
  nodes = [],
  viewBox = "0 0 400 400",
  className = "",
  strokeWidth = 1.25,
  duration = 2.2,
  color = "#3cb54a",
}) => {
  const [ref, inView] = useInViewGate({ once: true, rootMargin: "10% 0px 10% 0px" });
  const { reducedMotion } = useMotionProfile();

  return (
    <svg
      ref={ref}
      viewBox={viewBox}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <motion.path
          key={d.slice(0, 12) + i}
          d={d}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={
            reducedMotion
              ? { pathLength: 1, opacity: 0.6 }
              : inView
              ? { pathLength: 1, opacity: 0.6 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ duration, delay: i * 0.18, ease: EXPO_OUT }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={`${n.cx}-${n.cy}-${i}`}
          cx={n.cx}
          cy={n.cy}
          r={2.5}
          fill={color}
          initial={reducedMotion ? false : { scale: 0, opacity: 0 }}
          animate={
            reducedMotion
              ? { scale: 1, opacity: 0.9 }
              : inView
              ? { scale: 1, opacity: 0.9 }
              : { scale: 0, opacity: 0 }
          }
          transition={{
            duration: 0.6,
            delay: duration * 0.5 + i * 0.15,
            ease: EXPO_OUT,
          }}
        />
      ))}
    </svg>
  );
};

CircuitLine.propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
  nodes: PropTypes.arrayOf(
    PropTypes.shape({ cx: PropTypes.number, cy: PropTypes.number })
  ),
  viewBox: PropTypes.string,
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
  duration: PropTypes.number,
  color: PropTypes.string,
};
