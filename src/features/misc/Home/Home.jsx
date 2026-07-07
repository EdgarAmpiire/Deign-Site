import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Raymo } from "./components/Raymo";
import { Clients } from "./components/Clients";
import { Team } from "./components/Team";
import { ContactCTA } from "./components/ContactCTA";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Raymo />
      <Clients />
      <Team />
      <ContactCTA />
    </div>
  );
};

export default Home;
