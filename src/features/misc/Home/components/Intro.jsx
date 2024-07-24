// import { Link } from "react-router-dom";
import bgImage from "../../../../assets/images/image.jpg";
// import { BsArrowRight } from "react-icons/bs";

export const Intro = () => {
  return (
    <div className="h-full  bg-contain bg-center bg-white ">
      <div className="flex xs:flex-col lg:flex-row items-center justify-center lg:h-screen w-full ">
        <div
        data-aos="fade-up"
         className="flex items-center justify-center lg:w-6/12 lg:p-12 xs:p-4  ">
          <img src={bgImage} alt="" className="object-cover lg:w-7/12 lg:h-7/12 " />
        </div>

        <div
        data-aos="fade-up"
        className="flex h-full lg:w-6/12 flex-col items-start justify-center lg:pr-28 xs:px-4 lg:px-0 ">
          <div>
            <h1 className="text-4xl font-bold text-[#37b767]  mb-10">
              Who we are
            </h1>
          </div>
          <div>
            <p className="text-[#444444] font-semibold leading-8 text-lg mb-10">
              We are a video production and design agency helping businesses &
              brands to achieve more with video and content production. We live
              for content production – be it visual or animated. We have worked
              with major brands to create content that simplifies their story in
              a cinematic, creative and compelling way.
            </p>
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
