import { BsFillArrowRightCircleFill } from "react-icons/bs";
import videography from "../../../../assets/videos/videography.mp4";
import { Link } from "react-router-dom";

export const Videography = () => {
  return (
    <div className="h-screen w-full bg-[#010101] bg-opacity-30">
      <video
        src={videography}
        loop
        autoPlay
        muted
        className="object-cover absolute h-screen w-screen -z-10 "></video>
      <div className="h-screen w-full flex items-center justify-start px-[97px]">
        <div className="w-7/12"></div>
        <div className="w-5/12">
          <h1 className="text-[#eb252a] text-5xl font-semibold tracking-tight">
            Videography
          </h1>
          <h1 className="text-white font-light mt-5 leading-8 text-lg">
            We are not just videographers; we are storytellers with a passion
            for diverse narratives. Specializing in events, documentaries,
            interviews, cinematic productions, advertising, and more, we craft
            visually compelling stories that resonate. Explore our world of
            dynamic videography services and let your story unfold with us.
          </h1>

          <Link to="/">
            <div className="flex items-center mt-5 mr-0 w-fit gap-0 text-[#fefefe] text-opacity-0 hover:text-[#eb252a] hover:gap-4 ease-in duration-150   ">
              <p className=" pr-2 text-xl text-white font-medium">
                See our work
              </p>
              <span className="">
                <BsFillArrowRightCircleFill className="text-3xl " />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
