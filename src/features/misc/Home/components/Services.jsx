import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineClipboardDocumentList,
  HiOutlineCpuChip,
  HiOutlineCodeBracket,
  HiOutlineGlobeAlt,
  HiOutlineMegaphone,
  HiOutlinePaintBrush,
  HiOutlineCube,
  HiOutlineCreditCard,
  HiOutlineSignal,
} from "react-icons/hi2";
import { ParallaxSection, ParallaxLayer } from "../../../../motion/Parallax";
import { Reveal } from "../../../../motion/Reveal";
import { TiltHover } from "../../../../motion/TiltHover";
import { FloatingMark } from "../../../../motion/FloatingMark";

const SERVICES = [
  { title: "IT Consultations", icon: HiOutlineChatBubbleLeftRight },
  { title: "Procurement", icon: HiOutlineClipboardDocumentList },
  { title: "Hardware", icon: HiOutlineCpuChip },
  { title: "Software Development", icon: HiOutlineCodeBracket },
  { title: "Website Development", icon: HiOutlineGlobeAlt },
  { title: "Digital Marketing", icon: HiOutlineMegaphone },
  { title: "Graphics Design", icon: HiOutlinePaintBrush },
  { title: "IT Supplies", icon: HiOutlineCube },
  { title: "Online Payment Purchases", icon: HiOutlineCreditCard },
  { title: "Networking", icon: HiOutlineSignal },
];

// stronger, alternating depth so the grid reads as physically staggered
const DEPTH = [0, 42, -34, 24, -20, 38, -44, 18, -26, 32];

export const Services = () => {
  return (
    <ParallaxSection
      as="section"
      id="services"
      className="relative overflow-hidden bg-navy-900 px-6 py-28 sm:px-10 lg:px-24 lg:py-40"
    >
      <FloatingMark size={260} top="10%" left="-6%" opacity={0.05} scrollSpeed={100} rotateSpeed={135} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal direction="up">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            What We Do
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.1} className="mt-4 max-w-2xl">
          <h2 className="font-black leading-[0.98] tracking-tighter text-bone text-[clamp(2.25rem,5.5vw,4rem)]">
            Ten disciplines. One accountable team.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map(({ title, icon: Icon }, i) => (
            <ParallaxLayer key={title} speed={DEPTH[i]}>
              <Reveal
                direction="up"
                delay={0.04 * i}
                data-cursor="hover"
                className="group relative h-52 overflow-hidden rounded-2xl border border-bone/10 bg-navy-800 transition-[transform,border-color,box-shadow] duration-500 ease-expo-out hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_20px_50px_rgba(60,181,74,0.18)]"
              >
                <TiltHover max={8} className="flex h-full flex-col justify-between p-6">
                  <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-t from-accent/25 to-transparent transition-transform duration-500 ease-expo-out group-hover:scale-y-100" />
                  <Icon className="relative z-10 h-8 w-8 text-accent transition-transform duration-500 ease-expo-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-6" />
                  <h3 className="relative z-10 text-lg font-bold leading-tight tracking-tight text-bone">
                    {title}
                  </h3>
                </TiltHover>
              </Reveal>
            </ParallaxLayer>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};
