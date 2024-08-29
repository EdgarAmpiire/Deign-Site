// import { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/images/Deign-blue.png";
import { Link } from "react-router-dom";
// import { RiCustomerService2Fill } from "react-icons/ri";
// import { LuMenu } from "react-icons/lu";
// import { IoMdClose } from "react-icons/io";
// import bananas from "../../../assets/images/banana.jpg"

export const Navbar = () => {
  // const [open, setOpen] = useState(true);

  return (
    <div className="">
      <div className=" w-full top-0 left-0 right-0 bg-transparen bg-gray-10 bg-opacity-10 ackdrop-blur-[8px]  ">
        {/* relative z-100 mx-12 py-3 w-full navbar navbar-expand-lg navbar-light */}
        <nav className="relative z-100 mx-1 navbar navbar-expand-lg navbar-light ">
          <div className="  flex items-center justify-between py-5 w-full">
            

            <div className="flex justify-center items-center">
              <div className="flex items-center justify-center">
                <Link to={"/"}>
                  <div className="">
                    <img
                      src={logo}
                      alt="logo"
                      className="object-contain md:h-24 md:w-96 xs:w-72 "
                    />
                  </div>
                </Link>
              </div>
            </div>

            

            <div className="flex justify-end items-center w-4/12">
               <div className="flex justify-end items-center gap-5">
              {/*  <Link to={"/"}>
                  <div className="flex items-center justify-center gap-2">
                    <RiCustomerService2Fill className="w-5 h-5 text-gray-200" />
                    <h1 className="text-gray-200 text-sm">+256 771.899.749</h1>
                  </div>
                </Link> */}

                {/* <Link>
                  <di className="bg-[#eb252a] rounded-full px-5 py-2 text-white">
                    Reachout
                  </di>
                </Link> */}
              </div>

              <div className="flex justify-start items-center w-4/12">
               {/*<div className="">
                <Link onClick={() => setOpen(!open)} to={"/"}>
                  <div className="flex justify-center items-center gap-2">
                    <LuMenu
                      className="w-7 h-7 text-gray-200"
                    />
                    <h1 className="text-gray-200 text-sm">Menu</h1>
                  </div>
                </Link>
              </div>*/}
            </div> 
            </div>

            {/* <div
          className={` md:flex z-[-1] md:z-auto md:static absolute bg-gray-800 w-full left-0 pb-5 md:pb-0 px-8 md:px-0  md:w-8/12 md:justify-end border-b-2 border-[#FF460C] md:border-0 transition-all ease-in duration-500 ${
            open ? "top-[-490px] opacity-100 " : "top-[4.7rem] "
          }`}
        >
          <ul className="md:flex items-center gap-8">
            <li className="nav-item mt-5 md:mt-0 ">
              <Link
                to="/"
                className={page === "home" ? "nav-link " : "nav-link"}
              >
                <p className="cursor-pointer font-medium md:text-lg text-gray-100">
                  Home
                </p>
              </Link>
            </li>
            <li className="nav-item mt-5 md:mt-0 ">
              <div className="nav-link relative group">
                <Link
                  to="/services"
                  className={page === "services" ? "nav-link " : "nav-link"}
                >
                  <p className="cursor-pointer font-medium md:text-lg text-gray-100">
                    Services
                  </p>
                </Link>
                <div
                  className="items-center absolute border border-t-0 rounded-b-lg 
               bg-white px-4 py-3 w-96 invisible group-hover:visible z-10"
                >
                  <Link
                    to="/software-development"
                    className="px-0 py-2 block hover:font-semibold"
                  >
                    <p className="cursor-pointer flex gap-3 items-center whitespace-nowrap px-3 text-gray-500 hover:text-gray-100font-mediu">
                      <span>
                        <BsArrowRightShort className="text-[#FF460C]" />
                      </span>
                      Software Development
                    </p>
                  </Link>
                  <Link
                    to="/mobile-app-development"
                    className="px-0 py-2 block hover:font-semibold"
                  >
                    <p className="cursor-pointer flex gap-3 items-center whitespace-nowrap px-3 text-gray-500 hover:text-gray-100font-mediu">
                      <span>
                        <BsArrowRightShort className="text-[#FF460C]" />
                      </span>
                      Mobile App Development
                    </p>
                  </Link>

                  <Link
                    to="/web-development"
                    className="px-0 py-2 block hover:font-semibold"
                  >
                    <p className="cursor-pointer flex gap-3 items-center whitespace-nowrap px-3 text-gray-500 hover:text-gray-100font-mediu">
                      <span>
                        <BsArrowRightShort className="text-[#FF460C]" />
                      </span>
                      Web Development Services
                    </p>
                  </Link>
                  <Link
                    to="/social-media-management"
                    className="px-0 py-2 block hover:font-semibold"
                  >
                    <p className="cursor-pointer flex gap-3 items-center whitespace-nowrap px-3 text-gray-500 hover:text-gray-100font-mediu">
                      <span>
                        <BsArrowRightShort className="text-[#FF460C]" />
                      </span>
                      Social Media Management
                    </p>
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item mt-5 md:mt-0 ">
              <Link
                to="/writings"
                className={page === "writings" ? "nav-link " : "nav-link"}
              >
                <p className="cursor-pointer font-medium md:text-lg text-gray-100">
                  Blog
                </p>
              </Link>
            </li>
            <li className="nav-item mt-5 md:mt-0 ">
              <Link
                to="/about"
                className={page === "about" ? "nav-link " : "nav-link"}
              >
                <p className="cursor-pointer font-medium md:text-lg text-gray-100">
                  About Us
                </p>
              </Link>
            </li>
            <li className="nav-item mt-5 md:mt-0 ">
              <Link
                to="/contact"
                className={page === "contact" ? "nav-link " : "nav-link"}
              >
                <p className="cursor-pointer font-medium md:text-lg text-gray-100">
                  Contact
                </p>
              </Link>
            </li>
            <li className="nav-item mt-5 md:-mt-10">
              <a href="tel:+256782692271">
                <p className="cursor-pointer bg-[#FF460C] w-48 md:w-full p-4 md:py-1 md:h-20 md:px-3 font-medium md:text-lg text-white">
                  <div className="md:mt-10 flex flex-row items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </div>
                </p>
              </a>
            </li>
          </ul>
        </div> */}
          </div>
        </nav>
      </div>



      {/* Main Menu  */}
      {/* <div className={` flex z-[-1] xs:z-auto xs:static absolute bg-gray-800 w-full left-0 pb-5 xs:pb-0 px-8 xs:px-0  xs:w-8/12 xs:justify-end border-b-2 border-[#FF460C] xs:border-0 transition-all ease-in duration-500 ${
            open ? "top-[-490px] opacity-100 " : "top-[4.7rem] "
          }`}> */}
      {/* <div
        className={`fixed bg-green-500 w-full h-[100vh] transition ease-in-out duration-1000 ${
          open ? "top-[-100vh] opacity-0 " : "top-[0rem]"
        }`}>
          <img
          src={bananas}
          className="object-cover absolute h-screen w-screen -z-10 top-0 left-0 "
          ></img>
        <div className="flex items-center  justify-center h-full w-full">
          <div className="fixed w-full top-0 left-0 right-0 bg-transparent bg-gray-500 bg-opacity-80 backdrop-blur-[8px]  ">
            <nav className="relative z-100 mx-24 navbar navbar-expand-lg navbar-light ">
              <div className="grid-cols-3 flex items-center justify-between py-2 w-full ">
                <div className="flex justify-start items-center w-4/12">
                  <div className="">
                    <Link onClick={() => setOpen(!open)} to={"/"}>
                      <div className="flex justify-center items-center gap-2">
                        <IoMdClose
                          className="w-7 h-7 text-gray-200"
                        />
                        <h1 className="text-gray-200 text-sm">Menu</h1>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flex justify-center items-center w-4/12">
                  <div className="flex items-center justify-center">
                    <Link to={"/"}>
                      <div className="">
                        <img
                          src={logo}
                          alt="logo"
                          className="object-contain h-12 w-96"
                        />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flex justify-end items-center w-4/12">
                  <div className="flex justify-end items-center gap-5">
                    <Link to={"/"}>
                      <div className="flex items-center justify-center gap-2">
                        <RiCustomerService2Fill className="w-5 h-5 text-gray-200" />
                        <h1 className="text-gray-200 text-sm">
                          +256 771.899.749
                        </h1>
                      </div>
                    </Link>

                    <Link>
                      <di className="bg-[#eb252a] rounded-full px-5 py-2 text-white">
                        Reachout
                      </di>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <ul className="flex items-center justify-center grid-cols-4 w-full gap-10">
            <li className="text-5xl cursor-pointer">About</li>
            <li className="text-5xl cursor-pointer">Work</li>
            <li className="text-5xl cursor-pointer">Contact</li>
            <li className="text-5xl cursor-pointer">Blog</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

Navbar.PropTypes = {
  page: PropTypes.string.isRequired,
};
