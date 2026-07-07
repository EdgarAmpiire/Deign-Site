import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInViewGate } from "./useInViewGate";
import { useMotionProfile } from "./useMotionProfile";
import { useCursorParallax } from "./useCursorParallax";

const BLADE_D =
  "M0,-92 C34,-92 62,-46 62,0 C62,46 34,92 0,92 C-14,60 -14,-60 0,-92 Z";

/**
 * The Deign orbiting-blade mark, rebuilt as SVG so it can rotate, breathe,
 * and lean toward the cursor instead of sitting as a static PNG. Three
 * copies of the same blade path, rotated 120° apart around a shared
 * center — the same silhouette as the print logo, alive.
 */
export const OrbitLogo = ({
  size = 220,
  interactive = true,
  className = "",
  bladeColor = "#3cb54a",
}) => {
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
      <motion.svg
        viewBox="-100 -100 200 200"
        width="100%"
        height="100%"
        animate={
          spinEnabled
            ? { rotate: 360 }
            : { rotate: 0 }
        }
        transition={
          spinEnabled
            ? { repeat: Infinity, duration: 46, ease: "linear" }
            : { duration: 0.8 }
        }
      >
        <path d={BLADE_D} fill={bladeColor} opacity={0.95} />
        <path d={BLADE_D} fill={bladeColor} opacity={0.95} transform="rotate(120)" />
        <path d={BLADE_D} fill={bladeColor} opacity={0.95} transform="rotate(240)" />
      </motion.svg>
    </motion.div>
  );
};

OrbitLogo.propTypes = {
  size: PropTypes.number,
  interactive: PropTypes.bool,
  className: PropTypes.string,
  bladeColor: PropTypes.string,
};
