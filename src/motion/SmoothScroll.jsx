import { createContext, useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Lenis from "lenis";
import { useMotionProfile } from "./useMotionProfile";

const LenisContext = createContext(null);

/**
 * Wraps the app in a Lenis smooth-scroll instance. Framer Motion's
 * useScroll() reads native scroll position, and Lenis dispatches real
 * scroll events as it animates, so the two compose with no extra glue.
 *
 * On reduced-motion or touch/mobile we skip Lenis entirely and fall back
 * to native scrolling — smooth-scroll is a desktop luxury, not a
 * requirement, and native scroll is always cheaper on constrained devices.
 */
export const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const { reducedMotion, isTouch, isMobile, ready } = useMotionProfile();

  useEffect(() => {
    if (!ready) return undefined;
    if (reducedMotion || isTouch || isMobile) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [ready, reducedMotion, isTouch, isMobile]);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
};

SmoothScrollProvider.propTypes = {
  children: PropTypes.node,
};

export const useLenis = () => useContext(LenisContext);

/** Smooth-scrolls to a section id, falling back to native scrollIntoView. */
export const scrollToSection = (id, lenisRef) => {
  const target = document.getElementById(id);
  if (!target) return;

  if (lenisRef?.current) {
    lenisRef.current.scrollTo(target, { offset: -24, duration: 1.4 });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
