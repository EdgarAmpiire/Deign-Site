import { createContext, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInViewGate } from "./useInViewGate";
import { useMotionProfile } from "./useMotionProfile";

const ParallaxContext = createContext(null);

/**
 * Wraps a section in scroll-progress tracking + its own IntersectionObserver
 * gate. Child <ParallaxLayer>s read scrollYProgress from context and only
 * apply their live transform while `enabled` is true — i.e. the section is
 * on screen AND the device profile allows heavy motion. Off screen (or on
 * mobile / reduced-motion), layers render at rest with no transform
 * subscription doing visible work.
 */
export const ParallaxSection = ({ children, as: As = "section", className = "", id }) => {
  const sectionRef = useRef(null);
  const [gateRef, inView] = useInViewGate({ rootMargin: "20% 0px 20% 0px" });
  const { heavyMotionEnabled } = useMotionProfile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const setRefs = (node) => {
    sectionRef.current = node;
    gateRef.current = node;
  };

  const enabled = heavyMotionEnabled && inView;

  return (
    <ParallaxContext.Provider value={{ scrollYProgress, enabled }}>
      <As ref={setRefs} className={className} id={id}>
        {children}
      </As>
    </ParallaxContext.Provider>
  );
};

ParallaxSection.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

/**
 * A single depth layer inside a ParallaxSection. `speed` is the total
 * travel distance in px across the section's scroll range — positive
 * values drift down as you scroll into the section, negative drift up.
 * Foreground elements should use larger magnitudes than background ones.
 */
export const ParallaxLayer = ({ children, speed = 60, className = "", style = {} }) => {
  const ctx = useContext(ParallaxContext);
  const scrollYProgress = ctx?.scrollYProgress;
  const enabled = ctx?.enabled ?? false;

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <motion.div
      className={className}
      style={enabled ? { ...style, y } : style}
    >
      {children}
    </motion.div>
  );
};

ParallaxLayer.propTypes = {
  children: PropTypes.node,
  speed: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

export const useParallaxContext = () => useContext(ParallaxContext);
