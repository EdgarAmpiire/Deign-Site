import { BsFillArrowRightCircleFill } from "react-icons/bs";
import livestream from "../../../../assets/videos/livestream.mp4";
import { Link } from "react-router-dom";

export const LiveStream = () => {
  return (
    <div className="h-screen w-full bg-[#010101] bg-opacity-30">
      <video
        src={livestream}
        loop
        autoPlay
        muted
        className="object-cover absolute h-screen w-screen -z-10 "></video>
      <div className="h-screen w-full flex items-center justify-start px-[97px]">
        <div className=" text-left">
          <h1 className="text-[#eb252a] text-5xl font-semibold tracking-tight">
            LiveStreaming
          </h1>
          <h1 className="text-white font-light mt-5 w-5/12 leading-8 text-lg">
            Experience the power of real-time engagement with us. Our live streaming services redefine the way you connect with
            your audience. From dynamic event coverage to interactive interviews
            and compelling content, we bring your moments to life, ensuring a
            seamless and unforgettable streaming experience.
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
