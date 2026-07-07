import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { OrbitLogo } from "../../../motion/OrbitLogo";
import { useLenis, scrollToSection } from "../../../motion/SmoothScroll";

const SERVICES = [
  "IT Consultations",
  "Software Development",
  "Website Development",
  "Digital Marketing",
  "Networking",
  "Graphics Design",
];

const LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export const Footer = () => {
  const lenisRef = useLenis();

  return (
    <footer className="relative border-t border-bone/10 bg-navy-950 px-6 py-16 sm:px-10 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <OrbitLogo size={30} interactive={false} />
            <span className="text-xl font-black tracking-tight text-bone">
              Deign
            </span>
          </div>
          <p className="mt-5 max-w-sm text-bone/60">
            Uganda&apos;s integrated ICT partner &mdash; IT consulting,
            software, web, and digital marketing, built by a Kampala team
            that ships.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/deign.tech?igsh=bnY2bWZqYTRtdnBm&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              aria-label="Deign on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/256759612485"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              aria-label="Deign on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-bone/40">
            Explore
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id, lenisRef)}
                  className="text-bone/70 transition-colors duration-300 hover:text-accent"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-bone/40">
            Services
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {SERVICES.map((service) => (
              <li key={service} className="text-bone/70">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-bone/10 pt-8">
        <div className="flex flex-col gap-4 text-sm text-bone/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <a
            href="mailto:eampiire@gmail.com"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-accent"
          >
            <HiOutlineEnvelope className="h-4 w-4 text-accent" />
            eampiire@gmail.com
          </a>
          <a
            href="tel:+256759612485"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-accent"
          >
            <HiOutlinePhone className="h-4 w-4 text-accent" />
            0759 612 485
          </a>
          <span className="flex items-center gap-2">
            <FaLocationDot className="h-4 w-4 text-accent" />
            Plot 21, Kaduyu Lane, Kiwatule, Kampala, Uganda
          </span>
        </div>

        <p className="mt-6 text-sm text-bone/40">
          &copy; {new Date().getFullYear()} Deign Technologies Limited. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};
