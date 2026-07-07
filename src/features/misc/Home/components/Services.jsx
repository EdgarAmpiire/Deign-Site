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

const DEPTH = [0, 18, -14, 10, -8, 16, -18, 8, -10, 14];

export const Services = () => {
  return (
    <ParallaxSection
      as="section"
      id="services"
      className="relative bg-navy-900 px-6 py-28 sm:px-10 lg:px-24 lg:py-40"
    >
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
                className="group relative flex h-52 flex-col justify-between overflow-hidden rounded-2xl border border-bone/10 bg-navy-800 p-6 transition-all duration-500 ease-expo-out hover:-translate-y-2 hover:border-accent/50"
              >
                <span className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-t from-accent/25 to-transparent transition-transform duration-500 ease-expo-out group-hover:scale-y-100" />
                <Icon className="relative z-10 h-8 w-8 text-accent transition-transform duration-500 ease-expo-out group-hover:-translate-y-1 group-hover:scale-110" />
                <h3 className="relative z-10 text-lg font-bold leading-tight tracking-tight text-bone">
                  {title}
                </h3>
              </Reveal>
            </ParallaxLayer>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};
