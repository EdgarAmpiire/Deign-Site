// import { Link } from "react-router-dom";
// import bgImage from "../../../../assets/images/image.jpg";
import aboutusvideo from "../../../../assets/videos/aboutus.mp4";

// import { BsArrowRight } from "react-icons/bs";

export const Intro = () => {
  return (
    <div className="h-full  bg-contain bg-center bg-white ">
      <div className="flex xs:flex-col lg:flex-row items-center justify-center lg:h-screen w-full ">
        <div
        data-aos="fade-up"
         className="flex items-center justify-center lg:w-6/12 lg:px-12 xs:px-4  ">
          {/* <img src={bgImage} alt="" className="object-cover lg:w-7/12 lg:h-7/12 " /> */}
          <div className="">

        <video
          src={aboutusvideo}
          loop
          autoPlay
          muted
          className="object-cover  h-[80vh] w-screen -z-10 top-0 left-0 bg-black"></video>
          </div>
        </div>

        <div
        data-aos="fade-up"
        className="flex h-full lg:w-6/12 flex-col items-start justify-center lg:pr-28 xs:px-4 lg:px-0 ">
          <div>
            <h1 className="text-8xl tracking-[-0.075em] font-bold text-[#37b767]  mb-10">
              Who we are
            </h1>
          </div>
          <div>
            <p className="text-[#444444] font-semibold leading-8 text-lg mb-10">
            Welcome to Deign Technologies Limited! We are your dedicated partner in navigating the digital landscape, providing tailored IT solutions, robust digital marketing, and innovative web development services that drive business success.
            </p>

            <p className="text-[#444444] font-semibold leading-8 text-lg mb-10">
            At Deign Technologies, we combine technical expertise with creative vision to deliver bespoke digital solutions. Our team of skilled professionals is committed to transforming your ideas into impactful digital experiences.</p>
          </div>
          {/* <div>
            <Link className="flex items-center justify-center py-2 px-2 text-white rounded-full transition delay-150 duration-300 ease-in-out bg-white bg-opacity-20 w-fit hover:animate-pulse  ">
              <h1 className="text-white text-sm px-5">See our story</h1>
              <BsArrowRight className="w-8 h-8 p-2 rounded-full text-white bg-[#eb252a]  " />

            </Link>

            
          </div> */}
        </div>
      </div>
    </div>
  );
};
