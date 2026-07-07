import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { OrbitLogo } from "../../../motion/OrbitLogo";
import { Magnetic } from "../../../motion/Magnetic";
import { useLenis, scrollToSection } from "../../../motion/SmoothScroll";

const LINKS = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenisRef = useLenis();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    if (isHome) {
      scrollToSection(id, lenisRef);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-expo-out ${
        scrolled
          ? "bg-navy-900/80 backdrop-blur-md shadow-[0_1px_0_rgba(244,239,226,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <button
          type="button"
          data-cursor="hover"
          onClick={() => go("home")}
          className="flex items-center gap-2.5"
        >
          <OrbitLogo size={30} interactive={false} className="shrink-0" />
          <span className="font-black text-xl tracking-tight text-bone">
            Deign
          </span>
        </button>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                data-cursor="hover"
                onClick={() => go(link.id)}
                className="group relative text-sm font-semibold uppercase tracking-wide text-bone/70 transition-colors duration-300 hover:text-accent"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-expo-out group-hover:scale-x-100" />
              </button>
            </li>
          ))}
        </ul>

        <Magnetic
          as="button"
          type="button"
          strength={0.4}
          data-cursor="label"
          data-cursor-label="Talk"
          onClick={() => go("contact")}
          className="hidden rounded-full border border-accent/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-accent transition-colors duration-300 hover:bg-accent hover:text-navy-900 lg:inline-block"
        >
          Let&apos;s Talk
        </Magnetic>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-bone lg:hidden"
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-navy-900/95 backdrop-blur-md transition-[max-height] duration-500 ease-expo-out lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => go(link.id)}
                className="w-full py-3 text-left text-lg font-semibold text-bone/85 hover:text-accent"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
