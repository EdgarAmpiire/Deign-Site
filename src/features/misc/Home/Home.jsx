import { lazy, Suspense } from "react";
import { Hero } from "./components/Hero";

// Hero loads eagerly (it's the first paint). Everything below the fold is
// code-split into its own chunk and only fetched as the user approaches
// it, so the initial bundle the browser has to parse before the hero can
// paint doesn't carry the weight of six more sections' worth of JS.
const About = lazy(() => import("./components/About").then((m) => ({ default: m.About })));
const Services = lazy(() => import("./components/Services").then((m) => ({ default: m.Services })));
const Raymo = lazy(() => import("./components/Raymo").then((m) => ({ default: m.Raymo })));
const Clients = lazy(() => import("./components/Clients").then((m) => ({ default: m.Clients })));
const Team = lazy(() => import("./components/Team").then((m) => ({ default: m.Team })));
const ContactCTA = lazy(() => import("./components/ContactCTA").then((m) => ({ default: m.ContactCTA })));

// color-matched, roughly section-height placeholder so a chunk resolving
// mid-scroll doesn't pop in against a jarring blank flash
const SectionFallback = ({ dark }) => (
  <div className={`h-[60vh] w-full ${dark ? "bg-navy-950" : "bg-navy-900"}`} />
);

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionFallback dark />}>
        <Raymo />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Clients />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionFallback dark />}>
        <ContactCTA />
      </Suspense>
    </div>
  );
};

export default Home;
