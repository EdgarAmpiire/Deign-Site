import {useEffect} from "react"
// import { TypeAnimation } from "react-type-animation";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { Photography } from "./components/Photography";
// import { Videography } from "./components/Videography";
// import { LiveStream } from "./components/LiveStream";
import { Clients } from "./components/Clients";
import { Team } from "./components/Team";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  
  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

  return (
    <div className="flex items-center justify-center">

<div className="5xl:max-w-[95vh] 2xl:items-center 2xl:justify-center">
      <Hero />
      <div className="lg:h-screen w-full ">
        <Intro />
      </div>
      {/* <div className="h-screen w-full ">
        <Photography />
        
      </div>
      <div className="h-screen w-full ">
        <Videography />
        
      </div>
      <div className="h-screen w-full ">
        <LiveStream />
        
      </div> */}
      <div className=" w-full ">
        <Services />
      </div>
      <div className="lg:h-screen w-full ">
        <Team />
      </div>
      <div className="lg:h-screen w-full ">
        <Clients />
      </div>
      <div className="lg:h-screen w-full ">
        <Testimonials />
      </div>
      <div className="lg:h-screen w-full ">
        <Contact />
      </div>
    </div>
    </div>
  );
};

export default Home;
