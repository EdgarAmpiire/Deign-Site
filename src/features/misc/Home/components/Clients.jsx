import { useState } from "react";
import ncdc from "../../../../assets/images/ncdc.webp";
import penda from "../../../../assets/images/penda.webp";
import tickerzone from "../../../../assets/images/tickerzone-logo.webp";
import laten from "../../../../assets/images/laten.webp";
import switchMedia from "../../../../assets/images/switch-logo.webp";
import ubteb from "../../../../assets/images/ubteb.webp";
import { ParallaxSection, ParallaxLayer } from "../../../../motion/Parallax";
import { Reveal } from "../../../../motion/Reveal";
import { FloatingMark } from "../../../../motion/FloatingMark";
import { useInViewGate } from "../../../../motion/useInViewGate";
import { useMotionProfile } from "../../../../motion/useMotionProfile";

const CLIENTS = [
  { name: "NCDC", img: ncdc },
  { name: "Penda", img: penda, dark: true },
  { name: "Tickerzone", img: tickerzone },
  { name: "Laten Media", img: laten },
  { name: "Switch Media", img: switchMedia },
  { name: "Uganda Business & Technical Examinations Board", img: ubteb },
];

const Track = () => (
  <>
    {CLIENTS.map(({ name, img, dark }) => (
      <div
        key={name}
        data-cursor="hover"
        className={`flex h-24 w-56 shrink-0 items-center justify-center rounded-2xl px-8 py-6 opacity-90 shadow-[0_0_0_rgba(60,181,74,0)] transition-[transform,box-shadow,opacity] duration-500 ease-expo-out hover:-translate-y-1.5 hover:scale-105 hover:opacity-100 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] ${
          dark ? "bg-navy-950 border border-bone/10" : "bg-bone"
        }`}
      >
        <img src={img} alt={name} loading="lazy" decoding="async" className="max-h-12 w-auto object-contain" />
      </div>
    ))}
  </>
);

export const Clients = () => {
  const [gateRef, inView] = useInViewGate({ rootMargin: "10% 0px 10% 0px" });
  const { reducedMotion } = useMotionProfile();
  const [hovered, setHovered] = useState(false);

  return (
    <ParallaxSection
      as="section"
      id="clients"
      className="relative overflow-hidden bg-navy-800 py-24 lg:py-32"
    >
      <FloatingMark size={220} top="-4%" right="4%" opacity={0.06} scrollSpeed={85} rotateSpeed={120} />

      <div className="relative z-10 px-6 sm:px-10 lg:px-24">
        <Reveal direction="up">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Trusted By
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.1} className="mt-4 max-w-2xl">
          <h2 className="font-black leading-[0.98] tracking-tighter text-bone text-[clamp(2rem,5vw,3.5rem)]">
            A pleasure to work with.
          </h2>
        </Reveal>
      </div>

      <ParallaxLayer speed={45} className="relative z-10 mt-16">
        {reducedMotion ? (
          <div ref={gateRef} className="flex flex-wrap justify-center gap-6 px-6">
            <Track />
          </div>
        ) : (
          <div
            ref={gateRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex w-max gap-6 px-6"
            style={{
              animation: "marquee 32s linear infinite",
              animationPlayState: inView && !hovered ? "running" : "paused",
            }}
          >
            <Track />
            <Track />
          </div>
        )}
      </ParallaxLayer>
    </ParallaxSection>
  );
};
