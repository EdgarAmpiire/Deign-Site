import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver gate used to switch expensive sections' animation
 * loops on/off. Nothing with a scroll listener, rAF loop, or cursor
 * subscription should run while a section reports inView === false.
 *
 * rootMargin defaults to a generous preload band so sections wake up
 * just before they're visible instead of popping in.
 */
export const useInViewGate = ({
  rootMargin = "15% 0px 15% 0px",
  threshold = 0,
  once = false,
} = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return [ref, inView];
};
