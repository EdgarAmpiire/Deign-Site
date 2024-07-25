// import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiVidiconLine } from "react-icons/ri";
import { PiStrategy } from "react-icons/pi";
import { MdOutlineEventAvailable } from "react-icons/md";
// import pictures from "../../../../assets/videos/picvid.mp4";
// import photo1 from "../../../../assets/images/photo1.jpg";
import photo2 from "../../../../assets/images/photo2.jpg";
// import photo3 from "../../../../assets/images/photo3.jpg";
import brand from "../../../../assets/images/brand.jpg";
import video1 from "../../../../assets/images/video1.jpg";
import video2 from "../../../../assets/images/video2.jpg";
import events from "../../../../assets/images/events.jpg"

export const Services = () => {
  // const items = [
  //     {
  //         id: 1,
  //         title: "Photography",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium voluptatibus possimus, quidem architecto hic id.",
  //         icon: IoCameraOutline
  //     }, {
  //         id: 2,
  //         title: "Videography",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium voluptatibus possimus, quidem architecto hic id.",
  //         icon: IoVideocamOutline
  //     }, {
  //         id: 3,
  //         title: "Live Streaming",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium voluptatibus possimus, quidem architecto hic id.",
  //         icon: RiVidiconLine
  //     }, {
  //         id: 4,
  //         title: "Events",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium voluptatibus possimus, quidem architecto hic id.",
  //         icon: RiVidiconLine

  //     }, {
  //         id: 5,
  //         title: "Brand Strategy",
  //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Laudantium voluptatibus possimus, quidem architecto hic id.",
  //         icon: RiVidiconLine

  //     },
  // ]

  return (
    <div>
      <div className=" flex flex-col bg-[#042c3f]   items-center justify-center xs:py-8 lg:py-32 xs:px-4 lg:px-24">
        <div className="flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24 mb-10">
          <div
          data-aos="fade-up"
          >
            <h1 className="xs:text-3xl text-7xl tracking-[-0.075em] lg:text-4xl font-bold text-[#37b767]">
              Check Our Services
            </h1>
          </div>
          <div
          data-aos="fade-up"
          className="mt-5 flex items-center justify-center">
            <h1 className="text-2xl xs:text-left lg:text-center font-bold text-white tracking-[-.075em] font-outline-2  antialiased">
              Pleasure rationally encounter consequences that are painful. Nor
              again is there anyone who pursues
            </h1>
          </div>
        </div>

        <div 
        className="grid xs:grid-row-3 lg:grid-cols-3 mt-12 gap-5">
          <>
            <div
        data-aos="fade-up"
            
            className="group overflow-hidden h-fit  bg-black border-2 border-[#333333]  rounded-xl hover:shadow-2xl  hover:shadow-[#eb252a]/20 hover:-translate-y-2 transition duration-500 ease-in-out">
              <div
                style={{ backgroundImage: `url(${photo2})` }}
                className="bg-cover bg-center group">
                <div className="group py-8 px-6 group-hover:backdrop-blur-m xs:bg-[#050505] xs:bg-opacity-80  lg:bg-[#050505] hover:bg-opacity-90 ease-in-out transition duration-500 ">
                  <div className="flex items-center justify-between">
                    <div className=" group bg-transparent group-hover:bg-[#eb252a] w-20 h-20 p-5 flex items-center justify-center rounded-2xl ">
                      <IoCameraOutline className="w-full h-full text-[#eb252a] group group-hover:text-white transition-all duration-300 ease-in-out" />
                    </div>
                  </div>
                  <div className="mt-5">
                    <h1 className="text-3xl font-bold text-[#eb252a] tracking-[-.075em] font-outline-2  antialiased">
                      Photography
                    </h1>
                    <p className="mt-3 text-white font-outline-2 font-semibold text-sm  antialiased">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Totam, ea excepturi! Voluptate quos commodi similique.
                    </p>
                  </div>
                  <Link to="/photography">
                    <div className="flex items-center mt-5 mr-0 w-fit gap-0 text-[#fefefe] text-opacity-0 hover:text-[#eb252a] hover:gap-3 ease-in duration-150   ">
                      <p className=" pr-0 text-white font-medium">
                        See our work
                      </p>
                      <span className="">
                        <BsFillArrowRightCircleFill className="text-2xl " />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div
        data-aos="fade-up"
            
            className="group overflow-hidden h-fit  bg-black border-2 border-[#333333]  rounded-xl hover:shadow-2xl  hover:shadow-[#eb252a]/20 hover:-translate-y-2 transition duration-500 ease-in-out">
              <div
                style={{ backgroundImage: `url(${video2})` }}
                className="bg-cover bg-center group">
                <div className="group py-8 px-6 group-hover:backdrop-blur-m xs:bg-[#050505] xs:bg-opacity-80 bg-[#050505] hover:bg-opacity-90 ease-in-out transition duration-500 ">
                 <div className="flex items-center justify-between">
                <div className=" group bg-transparent group-hover:bg-[#eb252a] w-20 h-20 p-5 flex items-center justify-center rounded-2xl ">
                  <IoVideocamOutline className="w-full h-full text-[#eb252a] group group-hover:text-white transition-all duration-300 ease-in-out" />
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-3xl font-bold text-[#eb252a] tracking-[-.075em] font-outline-2  antialiased">
                  Videography
                </h1>
                <p className="mt-3 text-white font-outline-2 font-semibold text-sm  antialiased">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  reiciendis maiores beatae harum veniam. Consequatur.
                </p>
              </div>
              <Link to="/">
                <div className="flex items-center mt-5 mr-0 w-fit gap-0 text-[#fefefe] text-opacity-0 hover:text-[#eb252a] hover:gap-3 ease-in duration-150   ">
                  <p className=" pr-0 text-white font-medium">See our work</p>
                  <span className="">
                    <BsFillArrowRightCircleFill className="text-2xl " />
                  </span>
                </div>
              </Link>
            </div>
            </div>
            </div>

            <div
        data-aos="fade-up"
            
            className="group overflow-hidden h-fit  bg-black border-2 border-[#333333]  rounded-xl hover:shadow-2xl  hover:shadow-[#eb252a]/20 hover:-translate-y-2 transition duration-500 ease-in-out">
              <div
                style={{ backgroundImage: `url(${video1})` }}
                className="bg-cover bg-center group">
                <div className="group py-8 px-6 group-hover:backdrop-blur-m xs:bg-[#050505] xs:bg-opacity-80 bg-[#050505] hover:bg-opacity-90 ease-in-out transition duration-500 ">
                  <div className="flex items-center justify-between">
                <div className=" group bg-transparent group-hover:bg-[#eb252a] w-20 h-20 p-5 flex items-center justify-center rounded-2xl ">
                  <RiVidiconLine className="w-full h-full text-[#eb252a] group group-hover:text-white transition-all duration-300 ease-in-out" />
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-3xl font-bold text-[#eb252a] tracking-[-.075em] font-outline-2  antialiased">
                  Live Streaming
                </h1>
                <p className="mt-3 text-white font-outline-2 font-semibold text-sm  antialiased">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore architecto suscipit consequatur porro iusto
                  dignissimos.
                </p>
              </div>
              <Link to="/">
                <div className="flex items-center mt-5 mr-0 w-fit gap-0 text-[#fefefe] text-opacity-0 hover:text-[#eb252a] hover:gap-3 ease-in duration-150   ">
                  <p className=" pr-0 text-white font-medium">See our work</p>
                  <span className="">
                    <BsFillArrowRightCircleFill className="text-2xl " />
                  </span>
                </div>
              </Link>
            </div>
            </div>
            </div>

            <div
        data-aos="fade-up"
            
            className="group overflow-hidden h-fit  bg-black border-2 border-[#333333]  rounded-xl hover:shadow-2xl  hover:shadow-[#eb252a]/20 hover:-translate-y-2 transition duration-500 ease-in-out">
              <div
                style={{ backgroundImage: `url(${events})` }}
                className="bg-cover bg-center group">
                <div className="group py-8 px-6 group-hover:backdrop-blur-m xs:bg-[#050505] xs:bg-opacity-80 bg-[#050505] hover:bg-opacity-90 ease-in-out transition duration-500 ">
                 <div className="flex items-center justify-between">
                <div className=" group bg-transparent group-hover:bg-[#eb252a] w-20 h-20 p-5 flex items-center justify-center rounded-2xl ">
                  <MdOutlineEventAvailable className="w-full h-full text-[#eb252a] group group-hover:text-white transition-all duration-300 ease-in-out" />
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-3xl font-bold text-[#eb252a] tracking-[-.075em] font-outline-2  antialiased">
                  Events
                </h1>
                <p className="mt-3 text-white font-outline-2 font-semibold text-sm  antialiased">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eligendi, itaque cumque? Nostrum repellendus consequuntur in.
                </p>
              </div>
              <Link to="/">
                <div className="flex items-center mt-5 mr-0 w-fit gap-0 text-[#fefefe] text-opacity-0 hover:text-[#eb252a] hover:gap-3 ease-in duration-150   ">
                  <p className=" pr-0 text-white font-medium">See our work</p>
                  <span className="">
                    <BsFillArrowRightCircleFill className="text-2xl " />
                  </span>
                </div>
              </Link>
            </div>
            </div>
            </div>

            <div
        data-aos="fade-up"
            
            className="group overflow-hidden h-fit  bg-black border-2 border-[#333333]  rounded-xl hover:shadow-2xl  hover:shadow-[#eb252a]/20 hover:-translate-y-2 transition duration-500 ease-in-out">
              <div
                style={{ backgroundImage: `url(${brand})` }}
                className="bg-cover bg-center group">
                <div className="group py-8 px-6 group-hover:backdrop-blur-m xs:bg-[#050505] xs:bg-opacity-80 bg-[#050505] hover:bg-opacity-90 ease-in-out transition duration-500 ">
                  <div className="flex items-center justify-between">
                <div className=" group bg-transparent group-hover:bg-[#eb252a] w-20 h-20 p-5 flex items-center justify-center rounded-2xl ">
                  <PiStrategy className="w-full h-full text-[#eb252a] group group-hover:text-white transition-all duration-300 ease-in-out" />
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-3xl font-bold text-[#eb252a] tracking-[-.075em] font-outline-2  antialiased">
                  Brand Strategy
                </h1>
                <p className="mt-3 text-white font-outline-2 font-semibold text-sm  antialiased">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem similique repellendus corporis velit neque delectus.
                </p>
              </div>
              <Link to="/">
                <div className="flex items-center mt-5 mr-0 w-fit gap-0 text-[#fefefe] text-opacity-0 hover:text-[#eb252a] hover:gap-3 ease-in duration-150   ">
                  <p className=" pr-0 text-white font-medium">See our work</p>
                  <span className="">
                    <BsFillArrowRightCircleFill className="text-2xl " />
                  </span>
                </div>
              </Link>
            </div>
            </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};
