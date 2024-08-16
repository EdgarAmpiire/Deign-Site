import edgar from "../../../../assets/images/edgar.png";
import Josh from "../../../../assets/images/Josh.jpeg";
import bob from "../../../../assets/images/bob.jpg";
import Hakiza from "../../../../assets/images/Hakiza.jpeg";
import Jerry from "../../../../assets/images/Jerry.jpg";
import Jonah from "../../../../assets/images/Jonah.jpeg";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const Team = () => {
  const items = [
    {
      id: 1,
      name: "Edgar Ampiire",
      title: "Director",
      img: edgar,
    },
    {
      id: 2,
      name: "Joshua Wadape",
      title: "Project Manager",
      img: Josh,
    },
    {
      id: 3,
      name: "Jonathan Mwebaze",
      title: "Software Developer",
      img: Jonah,
    },
    {
      id: 4,
      name: "Richard Luvubi",
      title: "Network Engineer",
      img: bob,
    },
    {
      id: 5,
      name: "Jeremiah Bamwine",
      title: "Web Developer",
      img: Jerry,
    },
    {
      id: 6,
      name: "Chris Hakizimana",
      title: "Graphics Designer",
      img: Hakiza,
    },
  ];

  return (
    <div className=" flex bg-white lg:h-screen items-center justify-center xs:py-8 lg:py-32">
      <div className="flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
        <div className=" items-center justify-center ">
          <div className="h-fit w-fit overflow-hidden xs:gap-4 lg:gap-0 grid xs:grid-row-4 lg:grid-cols-4 justify-center items-center">
            <div className="h-[40vh] w-fit lg:col-span-2 flex flex-col items-start py-5 justify-start">
              <div data-aos="fade-up">
                <h1 className="xs:text-5xl text-6xl tracking-[-0.075em] lg:text-4xl font-bold text-[#37b767]">Our Team</h1>
                <div
                  data-aos="fade-up"
                  className="p-1 w-3/12 mt-2 bg-[#042c3f]"></div>
              </div>
              <div data-aos="fade-up" className="mt-5 overflow-hidden pr-5">
                <h1 className="xs:text-4xl  lg:text-3xl font-bold text-[#042c3f] tracking-[-.075em] font-outline-2  antialiased">
                  Meet the team that helps to power your brand
                </h1>
              </div>
              <Link to="/" data-aos="fade-up">
                <div className="flex items-center mt-5 mr-0 w-fit gap-0 text-[#fefefe] text-opacity-0 hover:text-[#37b767] hover:gap-3 ease-in duration-150   ">
                  <p className=" pr-0 text-[#042c3f] xs:text-2xl lg:text-xl font-bold">
                    See our work
                  </p>
                  <span className="">
                    <BsFillArrowRightCircleFill className="text-2xl" />
                  </span>
                </div>
              </Link>
            </div>

            {items.map((i) => (
              <>
                <div id={i.id} className="">
                  <div
                    data-aos="fade-up"
                    className="group h-[40vh] w-full bg-center bg-cover flex items-end justify-end cursor-pointer "
                    style={{ backgroundImage: `url(${i.img})` }}>
                    {/* //   <img src={edgar} alt="" className="" /> */}
                    <div className="w-full py-3 px-3 border-t-2 border-[#37b767] bg-transparent backdrop-blur-[14px] xs:opacity-100 lg:opacity-0 group-hover:opacity-100 group-hover:py-4 ease-in-out duration-500 ">
                      <h1 className="text-[white] font-bold text-xl ">
                        {i.name}
                      </h1>
                      <p className="text-[#37b767] font-semibold tracking-[-.05em]">
                        {i.title}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
