import {
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineHandRaised,
} from "react-icons/hi2";
import { ParallaxSection, ParallaxLayer } from "../../../../motion/Parallax";
import { Reveal } from "../../../../motion/Reveal";
import { CircuitLine } from "../../../../motion/CircuitLine";
import { FloatingMark } from "../../../../motion/FloatingMark";
import { TiltHover } from "../../../../motion/TiltHover";

const VALUES = [
  { label: "Customer Focus", icon: HiOutlineHandRaised },
  { label: "Collaboration", icon: HiOutlineUserGroup },
  { label: "Innovation", icon: HiOutlineLightBulb },
  { label: "Integrity", icon: HiOutlineShieldCheck },
  { label: "Quality", icon: HiOutlineSparkles },
];

const CIRCUIT_PATHS = [
  "M-320,-40 L-160,-40 L-160,40 L0,40",
  "M320,80 L180,80 L180,-60 L60,-60",
];
const CIRCUIT_NODES = [
  { cx: 0, cy: 40 },
  { cx: 60, cy: -60 },
];

export const About = () => {
  return (
    <ParallaxSection
      as="section"
      id="about"
      className="relative overflow-hidden bg-navy-800 px-6 py-28 sm:px-10 lg:px-24 lg:py-40"
    >
      {/* deepest layer: circuit tracery */}
      <ParallaxLayer speed={50} className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <CircuitLine
          paths={CIRCUIT_PATHS}
          nodes={CIRCUIT_NODES}
          viewBox="-400 -200 800 400"
          className="h-full w-full max-w-5xl"
          color="#3cb54a"
        />
      </ParallaxLayer>

      {/* brand marks, quietly floating behind the statement */}
      <FloatingMark size={300} top="-10%" right="-5%" opacity={0.06} scrollSpeed={110} rotateSpeed={140} />
      <FloatingMark
        size={110}
        bottom="6%"
        right="18%"
        opacity={0.1}
        scrollSpeed={55}
        rotateSpeed={80}
        spinDirection={-1}
      />

      <ParallaxLayer speed={6} className="relative z-10 mx-auto max-w-6xl">
        <Reveal direction="up">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Since 2023
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-4 max-w-4xl">
          <h2 className="font-black leading-[0.98] tracking-tighter text-bone text-[clamp(2.25rem,6vw,1.5rem)]">
            We&apos;re Deign Technologies &mdash; Uganda&apos;s integrated ICT
            partner, built to be the go-to team for businesses chasing
            growth through technology.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left" delay={0.15}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-bone/50">
              Our Mission
            </span>
            <p className="mt-4 text-xl font-light leading-relaxed text-bone/85 sm:text-2xl">
              To deliver outstanding value to our clients by providing
              top-notch services, personalized solutions, and unparalleled
              customer support.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.25}>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-bone/50">
              Our Vision
            </span>
            <p className="mt-4 text-xl font-light leading-relaxed text-bone/85 sm:text-2xl">
              To be the go-to partner for businesses seeking innovative
              technology solutions that drive growth and success.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-bone/10 bg-bone/10 sm:grid-cols-3 lg:grid-cols-5">
          {VALUES.map(({ label, icon: Icon }, i) => (
            <Reveal key={label} direction="up" delay={0.05 * i}>
              <TiltHover
                max={6}
                data-cursor="hover"
                className="group flex flex-col items-center gap-3 bg-navy-800 px-4 py-10 text-center transition-[background-color,box-shadow] duration-500 ease-expo-out hover:bg-navy-700 hover:shadow-[inset_0_0_40px_rgba(60,181,74,0.12)]"
              >
                <Icon className="h-7 w-7 text-accent transition-transform duration-500 ease-expo-out group-hover:-translate-y-1 group-hover:rotate-6" />
                <span className="text-sm font-semibold text-bone/80">
                  {label}
                </span>
              </TiltHover>
            </Reveal>
          ))}
        </div>
      </ParallaxLayer>
    </ParallaxSection>
  );
};
