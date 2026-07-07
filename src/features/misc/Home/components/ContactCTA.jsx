import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ParallaxSection, ParallaxLayer } from "../../../../motion/Parallax";
import { Reveal } from "../../../../motion/Reveal";
import { OrbitLogo } from "../../../../motion/OrbitLogo";

const EMAIL = "eampiire@gmail.com";
const PHONE_DISPLAY = "0759 612 485";
const PHONE_TEL = "+256759612485";

export const ContactCTA = () => {
  return (
    <ParallaxSection
      as="section"
      id="contact"
      className="relative overflow-hidden bg-navy-950 px-6 py-28 sm:px-10 lg:px-24 lg:py-40"
    >
      <ParallaxLayer
        speed={-50}
        className="pointer-events-none absolute -bottom-24 -right-24 opacity-25"
      >
        <OrbitLogo size={480} interactive={false} />
      </ParallaxLayer>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal direction="up">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Get In Touch
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-6 font-black leading-[0.95] tracking-tighter text-bone text-[clamp(2.5rem,7vw,5.5rem)]">
            Ready to innovate your digital future?
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <a
            href={`mailto:${EMAIL}`}
            data-cursor="label"
            data-cursor-label="Email"
            className="mt-10 inline-block rounded-full bg-accent px-10 py-5 text-sm font-bold uppercase tracking-wide text-navy-900 transition duration-500 ease-expo-out hover:bg-bone"
          >
            Say Hello
          </a>
        </Reveal>

        <Reveal
          direction="up"
          delay={0.3}
          className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12"
        >
          <a
            href={`mailto:${EMAIL}`}
            data-cursor="hover"
            className="flex items-center gap-2 text-bone/80 transition-colors duration-300 hover:text-accent"
          >
            <HiOutlineEnvelope className="h-5 w-5" />
            {EMAIL}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            data-cursor="hover"
            className="flex items-center gap-2 text-bone/80 transition-colors duration-300 hover:text-accent"
          >
            <HiOutlinePhone className="h-5 w-5" />
            {PHONE_DISPLAY}
          </a>
        </Reveal>

        <Reveal
          direction="up"
          delay={0.4}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="https://www.instagram.com/deign.tech?igsh=bnY2bWZqYTRtdnBm&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            aria-label="Deign on Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
          <a
            href={`https://wa.me/${PHONE_TEL.replace("+", "")}`}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            aria-label="Deign on WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <FaWhatsapp className="h-5 w-5" />
          </a>
          <span className="text-sm font-semibold text-bone/40">
            @deigntech
          </span>
        </Reveal>
      </div>
    </ParallaxSection>
  );
};
