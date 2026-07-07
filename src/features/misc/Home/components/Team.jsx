import PropTypes from "prop-types";
import edgar from "../../../../assets/images/edgar.webp";
import josh from "../../../../assets/images/Josh.webp";
import jerry from "../../../../assets/images/Jerry.webp";
import { Reveal } from "../../../../motion/Reveal";
import { ParallaxSection } from "../../../../motion/Parallax";
import { TiltHover } from "../../../../motion/TiltHover";
import { FloatingMark } from "../../../../motion/FloatingMark";

const TEAM = [
  { name: "Edgar Ampiire", role: "Director", img: edgar },
  { name: "Wadape Joshua", role: "Chief Consultant Officer", img: josh },
  { name: "Lisa Jasmine Atukunda", role: "Operations Manager", initials: "LA" },
  { name: "Jeremiah Bamwine", role: "Web Developer", img: jerry },
  { name: "Pax Matsiko", role: "Digital Marketing Lead", initials: "PM" },
  { name: "Maurice Himbaza", role: "Software Developer", initials: "MH" },
];

const TeamCard = ({ member, delay }) => (
  <Reveal
    direction="up"
    delay={delay}
    data-cursor="hover"
    className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-navy-700 shadow-[0_0_0_rgba(0,0,0,0)] transition-[transform,box-shadow] duration-500 ease-expo-out hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
  >
    <TiltHover max={6} className="absolute inset-0">
      {member.img ? (
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center grayscale transition-all duration-700 ease-expo-out group-hover:scale-110 group-hover:grayscale-0"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-700 to-navy-900 transition-transform duration-700 ease-expo-out group-hover:scale-110">
          <span className="font-black text-accent/70 text-[clamp(3rem,8vw,5rem)] tracking-tighter transition-colors duration-700 ease-expo-out group-hover:text-accent">
            {member.initials}
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-500 ease-expo-out group-hover:translate-y-0">
        <h3 className="text-lg font-bold text-bone">{member.name}</h3>
        <p className="mt-1 text-sm font-semibold text-accent opacity-0 transition-opacity duration-500 ease-expo-out group-hover:opacity-100">
          {member.role}
        </p>
      </div>
    </TiltHover>
  </Reveal>
);

TeamCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    img: PropTypes.string,
    initials: PropTypes.string,
  }).isRequired,
  delay: PropTypes.number,
};

export const Team = () => {
  return (
    <ParallaxSection
      as="section"
      id="team"
      className="relative overflow-hidden bg-navy-900 px-6 py-28 sm:px-10 lg:px-24 lg:py-40"
    >
      <FloatingMark size={240} bottom="-6%" right="-4%" opacity={0.06} scrollSpeed={95} rotateSpeed={125} spinDirection={-1} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal direction="up">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            The Team
          </span>
        </Reveal>
        <Reveal direction="up" delay={0.1} className="mt-4 max-w-2xl">
          <h2 className="font-black leading-[0.98] tracking-tighter text-bone text-[clamp(2.25rem,5.5vw,4rem)]">
            The people powering your brand.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} delay={0.05 * i} />
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
};
