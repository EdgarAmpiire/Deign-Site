import { HiArrowUpRight, HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { ParallaxSection, ParallaxLayer } from "../../../../motion/Parallax";
import { Reveal } from "../../../../motion/Reveal";
import { OrbitLogo } from "../../../../motion/OrbitLogo";

const RAYMO_URL = "https://raymo-web.onrender.com";

export const Raymo = () => {
  return (
    <ParallaxSection
      as="section"
      id="work"
      className="relative overflow-hidden bg-navy-950 px-6 py-28 sm:px-10 lg:px-24 lg:py-40"
    >
      {/* giant background wordmark, drifts slowly */}
      <ParallaxLayer
        speed={70}
        className="pointer-events-none absolute inset-x-0 top-8 flex justify-center select-none"
      >
        <span className="font-black leading-none tracking-tighter text-transparent text-[clamp(6rem,22vw,18rem)] [-webkit-text-stroke:1px_rgba(244,239,226,0.06)]">
          RAYMO
        </span>
      </ParallaxLayer>

      <ParallaxLayer
        speed={-40}
        className="pointer-events-none absolute -right-16 -top-16 opacity-20 lg:opacity-30"
      >
        <OrbitLogo size={320} interactive={false} />
      </ParallaxLayer>

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal direction="up">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Flagship Product
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-4 max-w-3xl">
          <h2 className="font-black leading-[0.98] tracking-tighter text-bone text-[clamp(2.25rem,6vw,4.5rem)]">
            We don&apos;t just serve clients. We build products.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal direction="left" delay={0.15} className="lg:col-span-3">
            <div className="rounded-3xl border border-accent/20 bg-gradient-to-br from-navy-800 to-navy-900 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15">
                  <HiOutlineChatBubbleLeftEllipsis className="h-6 w-6 text-accent" />
                </span>
                <span className="text-2xl font-black tracking-tight text-bone">
                  Raymo
                </span>
              </div>

              <p className="mt-6 text-lg font-light leading-relaxed text-bone/80">
                Raymo is an AI-powered sales agent that lives on a
                business&apos;s WhatsApp number &mdash; answering customer
                questions, taking orders, and handling sales conversations
                automatically, 24/7. Built for small businesses across
                Uganda and East Africa, it turns the WhatsApp chats they
                already rely on into an always-on salesperson, so no
                enquiry goes unanswered and no sale is missed, even while
                they sleep.
              </p>

              <a
                href={RAYMO_URL}
                target="_blank"
                rel="noreferrer"
                data-cursor="label"
                data-cursor-label="Visit"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-900 transition duration-500 ease-expo-out hover:bg-bone"
              >
                Visit Raymo
                <HiArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.25} className="lg:col-span-2">
            <ul className="flex h-full flex-col justify-center gap-8 border-l border-bone/10 pl-8">
              <li>
                <span className="block text-3xl font-black text-accent">
                  24/7
                </span>
                <span className="mt-1 block text-sm text-bone/60">
                  Always-on WhatsApp sales conversations
                </span>
              </li>
              <li>
                <span className="block text-3xl font-black text-accent">
                  0
                </span>
                <span className="mt-1 block text-sm text-bone/60">
                  Enquiries left unanswered
                </span>
              </li>
              <li>
                <span className="block text-3xl font-black text-accent">
                  EA
                </span>
                <span className="mt-1 block text-sm text-bone/60">
                  Built for small businesses across East Africa
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </ParallaxSection>
  );
};
