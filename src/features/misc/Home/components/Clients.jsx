import totalenergies from "../../../../assets/images/totalenergies.png";
import movit from "../../../../assets/images/movit.png";
import unifreight from "../../../../assets/images/unifreight.png";
import nase from "../../../../assets/images/nase.png";
import usaid from "../../../../assets/images/usaid.png";
import cnooc from "../../../../assets/images/cnooc.png";
import eacop from "../../../../assets/images/eacop.png";
import kyangabi from "../../../../assets/images/kyangabi.png";
import origo from "../../../../assets/images/origo.png";
import pau from "../../../../assets/images/pau.png";
import taslaf from "../../../../assets/images/taslaf.png";
import umeme from "../../../../assets/images/umeme.png";
import cma from "../../../../assets/images/cma.png";
import flavia from "../../../../assets/images/flavia.png";
import lauteur from "../../../../assets/images/lauteur.png";
import masheda from "../../../../assets/images/masheda.png";
import mihasoft from "../../../../assets/images/mihasoft.png";
import ngbu from "../../../../assets/images/ngbu.png";
import pearls from "../../../../assets/images/pearls.png";
import safeway from "../../../../assets/images/safeway.png";
import teesa from "../../../../assets/images/teesa.png";
import tmr from "../../../../assets/images/tmr.png";
import village from "../../../../assets/images/village.png";
import prau from "../../../../assets/images/prau.png";

export const Clients = () => {
  return (
    <div className="flex xs:flex-col lg:flex-row bg-black h-screen lg:items-center overflow-hidden xs:py-8 lg:py-32">
      <div className="lg:w-4/12  lg:h-full">
        <div className="flex flex-col xs:items-start lg:items-between xs:justify-start lg:justify-between lg:w-12/12 h-full xs:px-4 lg:px-24 ">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-anchor-placement="bottom-bottom"
              className="xs:text-4xl lg:text-4xl font-bold text-[#eb252a]">
              Our Clients
            </h1>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-anchor-placement="bottom-bottom"
              className="p-1 w-3/12 mt-2 bg-[#444444]"></div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-anchor-placement="bottom-bottom"
            className="">
            <h1 className="xs:hidden lg:flex text-7xl font-bold text-[#444444] tracking-[-.075em] font-outline-2  antialiased">
              Pleasure to work with
            </h1>
          </div>
        </div>
      </div>

      <div className="xs:mt-12 lg:mt-0 lg:w-8/12">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          className="flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
          <div className=" items-center justify-center ">
            <div className="h-full xs:hidden lg:grid grid-cols-5 justify-center items-center mb-5 ">
              <div className=" flex items-center justify-center">
                <img src={nase} alt="" className="w-8/12" />
              </div>
              <div className="flex items-center justify-center">
                <img src={eacop} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={umeme} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={totalenergies} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={unifreight} alt="" className="w-8/12" />
              </div>
            </div>

            <div className="h-full lg:hidden xs:grid grid-cols-3 justify-center items-center mb-5 ">
              <div className="flex items-center justify-center">
                <img src={eacop} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={umeme} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={totalenergies} alt="" className="w-7/12" />
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
          <div className=" items-center justify-center ">
            <div className="h-full xs:hidden lg:grid grid-cols-5 justify-between items-center mb-5 ">
              <div className=" flex items-center justify-center">
                <img src={pau} alt="" className="w-10/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={ngbu} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={cnooc} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={usaid} alt="" className="w-10/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={prau} alt="" className="w-10/12" />
              </div>
            </div>

            <div className="h-full lg:hidden xs:grid grid-cols-3 justify-center items-center mb-5 ">
              <div className="flex items-center justify-center">
                <img src={nase} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={unifreight} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={ngbu} alt="" className="w-7/12" />
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
          <div className=" items-center justify-center ">
            <div className="h-full xs:hidden lg:grid  grid-cols-5 justify-between items-center mb-5 ">
              <div className=" flex items-center justify-center">
                <img src={safeway} alt="" className="w-12/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={teesa} alt="" className="w-12/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={tmr} alt="" className="w-11/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={flavia} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={pearls} alt="" className="w-10/12" />
              </div>
            </div>

            <div className="h-full lg:hidden xs:grid grid-cols-3 justify-center items-center mb-5 ">
              <div className="flex items-center justify-center">
                <img src={pau} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={cnooc} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={usaid} alt="" className="w-7/12" />
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
          <div className=" items-center justify-center ">
            <div className="h-full xs:hidden lg:grid  grid-cols-5 justify-between items-center mb-5 ">
              <div className=" flex items-center justify-center">
                <img src={kyangabi} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={masheda} alt="" className="w-10/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={lauteur} alt="" className="w-10/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={movit} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={mihasoft} alt="" className="w-11/12" />
              </div>
            </div>

            <div className="h-full lg:hidden xs:grid grid-cols-3 justify-center items-center mb-5 ">
              <div className="flex items-center justify-center">
                <img src={prau} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={safeway} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={teesa} alt="" className="w-7/12" />
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
          <div className=" items-center justify-center ">
            <div className="h-full xs:hidden lg:grid  grid-cols-5 justify-center items-center ">
              <div className=" flex items-center justify-center">
                <img src={village} alt="" className="w-11/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={origo} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={cma} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={taslaf} alt="" className="w-10/12" />
              </div>
            </div>

            <div className="h-full lg:hidden xs:grid grid-cols-3 justify-center items-center mb-5 ">
              <div className="flex items-center justify-center">
                <img src={tmr} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={flavia} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={pearls} alt="" className="w-7/12" />
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="lg:hidden xs:flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
          <div className=" items-center justify-center ">
          <div className="h-full lg:hidden xs:grid grid-cols-3 justify-center items-center mb-5 ">
              <div className="flex items-center justify-center">
                <img src={kyangabi} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={masheda} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={lauteur} alt="" className="w-7/12" />
              </div>
            </div>
          </div>
          </div>

          <div
          data-aos="fade-up"
          className="lg:hidden xs:flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
          <div className=" items-center justify-center ">
          <div className="h-full lg:hidden xs:grid grid-cols-3 justify-center items-center mb-5 ">
              <div className="flex items-center justify-center">
                <img src={movit} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={mihasoft} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={village} alt="" className="w-7/12" />
              </div>
            </div>
          </div>
          </div>

          <div
          data-aos="fade-up"
          className="lg:hidden xs:flex flex-col items-center justify-center w-12/12 xs:px-4 lg:px-24">
          <div className=" items-center justify-center ">
          <div className="h-full lg:hidden xs:grid grid-cols-3 justify-center items-center mb-5 ">
              <div className="flex items-center justify-center">
                <img src={origo} alt="" className="w-11/12" />
              </div>
              <div className=" flex items-center justify-center">
                <img src={cma} alt="" className="w-7/12" />
              </div>

              <div className=" flex items-center justify-center">
                <img src={taslaf} alt="" className="w-7/12" />
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
    // </div>
  );
};
