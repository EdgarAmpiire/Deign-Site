
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import pictures from "../../../../assets/videos/picvid.mp4";
import { Link } from "react-router-dom";

export const Photography = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#010101] bg-opacity-10">
      <video
        src={pictures}
        loop
        autoPlay
        muted
        className="object-cover absolute h-screen w-screen -z-10 "></video>
      <div className="h-screen w-full flex items-center justify-start px-[97px]">
        <div className=" text-left">
          <h1 className="text-[#eb252a] text-5xl font-semibold tracking-tight">
            Photography
          </h1>
          <h1 className="text-white font-light mt-5 w-5/12 leading-8 text-lg">
            We boast a team of photographers adept in capturing an extensive
            array of styles, encompassing documentary shots, aerial photography,
            event coverage, and more. A significant advantage we possess is our
            capability to deliver tailored photographic solutions for each
            client's project.
          </h1>

          <Link to="/">
              <div className="flex items-center mt-5 mr-5 w-fit gap-0 text-[#fefefe] text-opacity-0 hover:text-[#eb252a] hover:gap-4 ease-in duration-150   ">
                <p className=" pr-2 text-xl text-white font-medium">
                  See our work
                </p>
                <span className="">
                  <BsFillArrowRightCircleFill className="text-3xl" />
                </span>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
};
