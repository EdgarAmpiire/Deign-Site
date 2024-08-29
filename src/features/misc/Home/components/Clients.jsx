import sml from "../../../../assets/images/sml.png";
import laten from "../../../../assets/images/laten.png";
import ncdc from "../../../../assets/images/ncdc.png";
import penda from "../../../../assets/images/penda.png";
import pfu from "../../../../assets/images/pfu.png";
import tz from "../../../../assets/images/tz.png";
import ubteb from "../../../../assets/images/ubteb.png";



export const Clients = () => {
  return (
    <div className="flex xs:flex-col lg:flex-row bg-[#042c3f] lg:h-screen lg:items-center overflow-hidden xs:py-8 lg:py-32">
      <div className="lg:w-4/12  lg:h-full">
        <div className="flex flex-col xs:items-start lg:items-between xs:justify-start lg:justify-between lg:w-12/12 h-full xs:px-4 lg:px-24 ">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-anchor-placement="bottom-bottom"
              className="xs:text-4xl text-6xl tracking-[-0.075em] lg:text-4xl font-bold text-[#37b767]">
              Our Clients
            </h1>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-anchor-placement="bottom-bottom"
              className="p-1 w-3/12 mt-2 bg-[white]"></div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-anchor-placement="bottom-bottom"
            className="">
            <h1 className="xs:hidden lg:flex text-7xl font-bold text-white tracking-[-.075em] font-outline-2  antialiased">
              Pleasure to work with
            </h1>
          </div>
        </div>
      </div>

      <div className="xs:mt-12 lg:mt-0 lg:w-8/12">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          className="flex xs:flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
          <div className=" items-center justify-center ">
           
          <div className="flex items-center justify-center ">
            <div className="h-full lg:grid lg:grid-cols-4 justify-between items-center lg:mb-5 ">
              <div className=" flex items-center justify-center xs:my-10 sm:my-10 lg:my-0">
                <img src={sml} alt="" className="w-12/12" />
              </div>
              <div className=" flex items-center justify-center xs:my-10 sm:my-10 lg:my-0">
                <img src={ubteb} alt="" className="w-9/12" />
              </div>
              <div className=" flex items-center justify-center xs:my-10 sm:my-10 lg:my-0">
                <img src={penda} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center xs:my-10 sm:my-10 lg:my-0">
                <img src={tz} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center xs:my-10 sm:my-10 lg:my-0">
                <img src={ncdc} alt="" className="w-11/12" />
              </div>
            
             <div className="flex items-center justify-center xs:my-10 sm:my-10 lg:my-0">
                <img src={laten} alt="" className="w-9/12" />
              </div>
              <div className=" flex items-center justify-center xs:my-10 sm:my-10 lg:my-0">
                <img src={pfu} alt="" className="w-10/12" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
