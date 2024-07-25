import {useEffect} from "react"
import videobg from "../../../assets/videos/herobg2.mp4";
// import { TypeAnimation } from "react-type-animation";
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
      {/* <div className="h-screen -z-10 top-0 left-0 w-full bg-[#010101] bg-opacity-70"> */}
        <div className="">

        <video
          src={videobg}
          loop
          autoPlay
          muted
          className="object-cover absolute h-[100vh] w-screen -z-10 top-0 left-0 bg-opacity-8 bg-black"></video>
          </div>
        <div className="h-[100vh] w-full flex items-start l-12 justify-start pt-36 pb-10">
          <div className="text-start leading-tight xs:px-2 lg:px-0">
            <h1 className="text-[#37b767] text-8xl xs:text-4xl lg:text-5xl  font-bold lg:font-light tracking-[-0.075em]">
            Innovate Your
            </h1>
            <h1 className="text-[#37b767] text-8xl xs:text-4xl lg:text-5xl  font-bold lg:font-light tracking-[-0.075em]">
            Digital Future
            </h1>
            <h1 className="text-white text-4xl xs:text-4xl lg:text-5xl xs:mt-5 font-normal lg:font-light tracking-tight">
            Elevating businesses with cutting-edge IT solutions, <br /> exceptional web design, and powerful digital strategies.
            </h1>

            {/* <h1 className="text-[#eb252a] xs:mt-6 lg:mt-6 font-light tracking-tight ">
              <span className="invisible">.</span>{" "}
              <span className="text-[#eb252a] xs:text-4xl lg:text-5xl font-bold tracking-tight">
                <TypeAnimation
                  sequence={[
                    "Photography.", // Types 'One'
                    1000, // Waits 1s
                    "Videography.", // Deletes 'One' and types 'Two'
                    1000, // Waits 2s
                    "Live Streaming.", // Types 'Three' without deleting 'Two'
                    1000,
                    "Events.", // Types 'Three' without deleting 'Two'
                    1000,
                    "Digital Marketing.", // Types 'Three' without deleting 'Two'
                    1000,
                    "Creative Design.", // Types 'Three' without deleting 'Two'
                    1000,
                  ]}
                  speed="99"
                  deletionSpeed={65}
                  // omitDeletionAnimation="true"
                  wrapper="span"
                  cursor={false}
                  repeat={Infinity}
                  // style={{ fontSize: "2em", display: "inline-block" }}
                />
              </span>{" "}
            </h1> */}
            
          </div>
        </div>
      {/* </div> */}
      {/* <div className="text-whit">Switch Media Limited - Home</div> */}
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
