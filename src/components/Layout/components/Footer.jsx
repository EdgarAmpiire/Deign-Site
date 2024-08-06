import videography from "../../../assets/videos/footer.mp4";
import logo from "../../../assets/images/Deign-blue.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export const Footer = () => {
  return ( 
    <div className="">
    <div className="lg:h-[30rem] lg:w-full ">
      <video
        src={videography}
        loop
        autoPlay
        muted
        className="object-cover absolute h-[30rem] lg:h-[rem] w-screen -z-10 "></video>
      <div className=" grid lg:grid-cols-1 divide-y divide-gray-500 h-full w-full bg-[#37b767]/10 backdrop-blur-[5px] items-center justify-center xs:px-4 lg:px-[97px]">
        <div
          data-aos="fade-right"
          className="w-12/12 my-10 grid xs:grid-row-3 lg:grid-cols-3 xs:gap-5 lg:gap-10 5xl:mx-[30rem]">
          <div className="px-5 py-3">
            <div className="xs:w-9/12 xs:h-10/12 lg:w-8/12 lg:h-9/12">
              <img src={logo} alt="" />
            </div>
            <div className="mt-5">
              <p className="font-light xs:text-lg lg:text-base text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo beatae tenetur hic nam eligendi blanditiis officia
                nulla, repellendus.
              </p>
            </div>
            <div className="flex gap-3 mt-10">
              <div
                to={"/"}
                className="w-9  h-9 py-2 px-2 flex items-center justify-center bg-transparen bg-gray-700 bg-opacity-30 backdrop-blur-[8px] rounded-md hover:bg-[#37b767] ease-in-out duration-300 transition">
                <FaFacebookF className="w-5 h-5 text-white" />
              </div>
              <div
                className="w-9  h-9 py-2 px-2 flex items-center justify-center bg-transparen bg-gray-700 bg-opacity-30 backdrop-blur-[8px] rounded-md hover:bg-[#37b767] ease-in-out duration-300 transition">
                <a href="https://www.instagram.com/deign.tech?igsh=bnY2bWZqYTRtdnBm&utm_source=qr" target="_blank" rel="noreferrer">
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
              </div>
              <div
               
                  // ?text=Welcome%20to%20Deign%20Technologies%20Limited.%20How%20can%20we%20help%20you%20today?
                  
                className="w-9  h-9 py-2 px-2 flex items-center justify-center bg-transparen bg-gray-700 bg-opacity-30 backdrop-blur-[8px] rounded-md hover:bg-[#37b767] ease-in-out duration-300 transition">
                 <a href="https://wa.me/+256759612485" target="_blank" rel="noreferrer">
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
              </div>
              <Link
                className="w-9  h-9 py-2 px-2 flex items-center justify-center bg-transparen bg-gray-700 bg-opacity-30 backdrop-blur-[8px] rounded-md hover:bg-[#37b767] ease-in-out duration-300 transition">
                 <a href="mailto:deigntechnologieslimited@gmail.com" target="_blank" rel="noreferrer">
                <MdOutlineMailOutline className="w-5 h-5 text-white" />
              </a>
              </Link>
            </div>
          </div>

          <div className="px-5 py-3">
            <div className="w-8/12 h-9/12">
              <h1 className="text-2xl font-bold xs:text-[#37b767] lg:text-white">Services</h1>
            </div>
            <div className="mt-12 flex flex-col gap-1">
              <Link to={"/"} className="group">
                <h1 className="text-lg font-semi  text-white group-hover:text-[#37b767] ease-in-out transition">
                Web Development
                </h1>
              </Link>
              <Link to={"/"} className="group">
                <h1 className="text-lg font-semi  text-white group-hover:text-[#37b767] ease-in-out transition">
                Software Development
                </h1>
              </Link>
              <Link to={"/"} className="group">
                <h1 className="text-lg font-semi  text-white group-hover:text-[#37b767] ease-in-out transition">
                IT Procurement
                </h1>
              </Link>
              <Link to={"/"} className="group">
                <h1 className="text-lg font-semi  text-white group-hover:text-[#37b767] ease-in-out transition">
                Networking Services
                </h1>
              </Link>
              <Link to={"/"} className="group">
                <h1 className="text-lg font-semi  text-white group-hover:text-[#37b767] ease-in-out transition">
                Graphics Design
                </h1>
              </Link>
              <Link to={"/"} className="group">
                <h1 className="text-lg font-semi  text-white group-hover:text-[#37b767] ease-in-out transition">
                Digital Marketing
                </h1>
              </Link>
            </div>
          </div>

          <div className="px-5 py-3">
            <div className="w-8/12 h-9/12">
              <h1 className="text-2xl font-bold xs:text-[#37b767] lg:text-white">Address</h1>
            </div>

            <div className="mt-12 flex flex-col gap-5">
              <div className="flex items-center justify-center gap-3">
                <div to={"/"} className="w-9  h-9 ">
                  <FaLocationDot className="w-5 h-5 text-[#37b767]" />
                </div>

                <h1 className="text-white antialiased font-semibold">
                  Plot 21, Kaduyu Lane, Kiwatule. Kampala,
                  Uganda.
                </h1>
              </div>

              <div className="flex items-center justify-start gap-3">
                <div to={"/"} className="w-9  h-9 ">
                  <FaPhoneAlt className="w-5 h-5 text-[#37b767]" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white antialiased font-semibold">
                    +256 779-021-140
                  </h1>
                  <h1 className="text-white antialiased font-semibold">
                    +256 759-612-485
                  </h1>
                </div>
              </div>

              <div className="flex items-start justify-start gap-3">
                <div to={"/"} className="w-9  h-9 ">
                  <MdEmail className="w-5 h-5 text-[#37b767]" />
                </div>

                <h1 className="text-white antialiased font-semibold">
                  info@deigntech.com
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 ">
          <h1 className="text-white text-xl font-semibold">
            &#169; 2024 Deign Technologies Limited.
          </h1>
        </div>
      </div>
    </div>
    </div>
  );
};
