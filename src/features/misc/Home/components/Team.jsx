import edgar from "../../../../assets/images/edgar.png";
import bill from "../../../../assets/images/bill.jpg";
import bob from "../../../../assets/images/bob.jpg";
import dan from "../../../../assets/images/dan.jpg";
import hope from "../../../../assets/images/hope.jpg";
import kevin from "../../../../assets/images/kevin.jpg";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const Team = () => {
  const items = [
    {
      id: 1,
      name: "Amanya Kevin Brian",
      title: "Team Leader",
      img: kevin,
    },
    {
      id: 2,
      name: "Samuel Ocan",
      title: "Producer",
      img: hope,
    },
    {
      id: 3,
      name: "Edgar Ampiire",
      title: "Project Manager",
      img: edgar,
    },
    {
      id: 4,
      name: "Bill Olanya",
      title: "Cinematographer",
      img: bill,
    },
    {
      id: 5,
      name: "Daniel Onen",
      title: "Editor",
      img: dan,
    },
    {
      id: 6,
      name: "Bob Arinaitwe",
      title: "Sound Engineer",
      img: bob,
    },
  ];

  return (
    <div className=" flex bg-white lg:h-screen items-center justify-center xs:py-8 lg:py-32">
      <div className="flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
        <div className=" items-center justify-center ">
          <div className="h-fit w-fit overflow-hidden xs:gap-4 lg:gap-0 grid xs:grid-row-4 lg:grid-cols-4 justify-center items-center">
            <div className="h-[40vh] w-fit lg:col-span-2 flex flex-col items-start py-5 justify-start">
              <div data-aos="fade-up">
                <h1 className="xs:text-5xl lg:text-4xl font-bold text-[#eb252a]">Our Team</h1>
                <div
                  data-aos="fade-up"
                  className="p-1 w-3/12 mt-2 bg-[#444444]"></div>
              </div>
              <div data-aos="fade-up" className="mt-5 overflow-hidden pr-5">
                <h1 className="xs:text-4xl  lg:text-3xl font-bold text-[#444444] tracking-[-.075em] font-outline-2  antialiased">
                  Meet the team that helps to power your brand
                </h1>
              </div>
              <Link to="/" data-aos="fade-up">
                <div className="flex items-center mt-5 mr-0 w-fit gap-0 text-[#fefefe] text-opacity-0 hover:text-[#eb252a] hover:gap-3 ease-in duration-150   ">
                  <p className=" pr-0 text-[#444444] xs:text-2xl lg:text-xl font-bold">
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
                    <div className="w-full py-3 px-3 border-t-2 border-[#eb252a] bg-transparent backdrop-blur-[14px] xs:opacity-100 lg:opacity-0 group-hover:opacity-100 group-hover:py-4 ease-in-out duration-500 ">
                      <h1 className="text-white font-bold text-xl ">
                        {i.name}
                      </h1>
                      <p className="text-[#eb252a] font-semibold tracking-[-.05em]">
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
