import { motion } from "framer-motion";
import { ParallaxSection, ParallaxLayer } from "../../../../motion/Parallax";
import { Reveal } from "../../../../motion/Reveal";
import { OrbitLogo } from "../../../../motion/OrbitLogo";
import { FloatingMark } from "../../../../motion/FloatingMark";
import { CircuitLine } from "../../../../motion/CircuitLine";
import { Magnetic } from "../../../../motion/Magnetic";
import { useLenis, scrollToSection } from "../../../../motion/SmoothScroll";
import { useCursorParallax } from "../../../../motion/useCursorParallax";
import { useMotionProfile } from "../../../../motion/useMotionProfile";

const CIRCUIT_PATHS = [
  "M-380,-260 L-180,-260 L-180,-140 L-40,-140 L-40,-40",
  "M-380,60 L-260,60 L-260,180 L-100,180 L-100,320",
  "M380,-300 L220,-300 L220,-160 L100,-160 L100,-20",
  "M400,120 L260,120 L260,240 L120,240 L120,360",
  "M-400,-380 L-400,-320 L-320,-320",
  "M420,-380 L420,-300 L340,-300",
];

const CIRCUIT_NODES = [
  { cx: -40, cy: -40 },
  { cx: -100, cy: 320 },
  { cx: 100, cy: -20 },
  { cx: 120, cy: 360 },
  { cx: -320, cy: -320 },
  { cx: 340, cy: -300 },
];

export const Hero = () => {
  const lenisRef = useLenis();
  const { heavyMotionEnabled } = useMotionProfile();
  const { ref: bgRef, x: bgX, y: bgY } = useCursorParallax(14, heavyMotionEnabled);

  return (
    <ParallaxSection
      as="section"
      id="home"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-navy-900"
    >
      {/* background depth: circuit tracery, drifts slowest, deepest layer */}
      <ParallaxLayer speed={55} className="pointer-events-none absolute inset-0">
        <motion.div
          ref={bgRef}
          style={heavyMotionEnabled ? { x: bgX, y: bgY } : undefined}
          className="absolute inset-0 flex items-center justify-center"
        >
          <CircuitLine
            paths={CIRCUIT_PATHS}
            nodes={CIRCUIT_NODES}
            viewBox="-450 -450 900 900"
            className="h-[140vh] w-[140vw] max-w-none opacity-70"
            color="#3cb54a"
            duration={2.8}
          />
        </motion.div>
      </ParallaxLayer>

      {/* far-background floating marks: large, faint, slow, quietly brand the canvas */}
      <FloatingMark
        size={340}
        top="-8%"
        left="-6%"
        opacity={0.05}
        scrollSpeed={130}
        rotateSpeed={150}
      />
      <FloatingMark
        size={140}
        bottom="8%"
        left="12%"
        opacity={0.09}
        scrollSpeed={70}
        rotateSpeed={90}
        spinDirection={-1}
        cursorReactive
        cursorStrength={20}
      />

      {/* radial glow, near-static */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(60,181,74,0.14),transparent_55%)]" />

      {/* orbit mark: midground, reacts to cursor + scroll — the real logo, alive */}
      <ParallaxLayer
        speed={130}
        className="pointer-events-none absolute right-[2%] top-1/2 hidden -translate-y-1/2 md:block lg:right-[6%]"
      >
        <OrbitLogo size={420} className="opacity-90" />
      </ParallaxLayer>

      {/* foreground: copy — near-static, the closest layer */}
      <ParallaxLayer speed={8} className="relative z-10 w-full px-6 pt-16 sm:px-10 lg:px-24">
        <Reveal direction="up" delay={0.1}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
            Kampala, Uganda &middot; Est. 2023
          </div>
        </Reveal>

        <h1 className="max-w-4xl font-sans font-black leading-[0.92] tracking-tighter text-bone">
          <Reveal as="span" direction="up" delay={0.2} className="block text-[clamp(2.75rem,9vw,7.5rem)]">
            Innovate Your
          </Reveal>
          <Reveal as="span" direction="up" delay={0.35} className="block text-[clamp(2.75rem,9vw,7.5rem)] text-accent">
            Digital Future.
          </Reveal>
        </h1>

        <Reveal direction="up" delay={0.55} className="mt-8 max-w-xl">
          <p className="text-lg font-light leading-relaxed text-bone/80 sm:text-xl">
            Deign Technologies is Uganda&apos;s integrated ICT partner &mdash;
            IT consulting, custom software, web development, and digital
            marketing, built by a Kampala team that ships.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.7} className="mt-10 flex flex-wrap items-center gap-5">
          <Magnetic
            as="button"
            type="button"
            strength={0.4}
            data-cursor="label"
            data-cursor-label="Go"
            onClick={() => scrollToSection("contact", lenisRef)}
            className="group rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-900 shadow-[0_0_0_rgba(60,181,74,0)] transition-[background-color,box-shadow] duration-500 ease-expo-out hover:bg-bone hover:shadow-[0_8px_30px_rgba(60,181,74,0.35)]"
          >
            Start a Project
          </Magnetic>
          <Magnetic
            as="button"
            type="button"
            strength={0.3}
            data-cursor="hover"
            onClick={() => scrollToSection("services", lenisRef)}
            className="rounded-full border border-bone/25 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-bone transition-colors duration-500 ease-expo-out hover:border-accent hover:text-accent"
          >
            What We Do
          </Magnetic>
        </Reveal>
      </ParallaxLayer>

      {/* scroll cue */}
      <Reveal
        direction="none"
        delay={1.1}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bone/50">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-bone/15">
          <span className="absolute left-0 top-0 h-4 w-px animate-[scrollcue_1.8s_ease-in-out_infinite] bg-accent" />
        </span>
      </Reveal>
    </ParallaxSection>
  );
};
