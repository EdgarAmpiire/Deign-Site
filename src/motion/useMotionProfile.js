import { useEffect, useState } from "react";

/**
 * Central capability check for the whole motion system.
 * Every heavy animation (parallax, cursor, circuit-draw) reads this
 * instead of re-implementing its own media query.
 */
export const useMotionProfile = () => {
  const [profile, setProfile] = useState({
    reducedMotion: false,
    isTouch: false,
    isMobile: false,
    ready: false,
  });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const touchQuery = window.matchMedia("(pointer: coarse)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const update = () =>
      setProfile({
        reducedMotion: reducedMotionQuery.matches,
        isTouch: touchQuery.matches,
        isMobile: mobileQuery.matches,
        ready: true,
      });

    update();

    reducedMotionQuery.addEventListener("change", update);
    touchQuery.addEventListener("change", update);
    mobileQuery.addEventListener("change", update);

    return () => {
      reducedMotionQuery.removeEventListener("change", update);
      touchQuery.removeEventListener("change", update);
      mobileQuery.removeEventListener("change", update);
    };
  }, []);

  // full heavy motion only when: user hasn't asked for less, and not on a touch/mobile device
  const heavyMotionEnabled =
    profile.ready && !profile.reducedMotion && !profile.isTouch && !profile.isMobile;

  return { ...profile, heavyMotionEnabled };
};
