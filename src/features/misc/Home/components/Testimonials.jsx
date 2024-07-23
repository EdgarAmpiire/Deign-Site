import { useState } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import bob from "../../../../assets/images/bob.jpg";
import dan from "../../../../assets/images/dan.jpg";
import hope from "../../../../assets/images/hope.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id:1,
      name: "Bob Arinaitwe",
      title: "Site Engineer",
      company: "TotalEnergies",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi tempore at tempora commodi quia, quaerat veritatis atque velit maxime.",
      img: bob
    },
    {
      id:2,
      name: "Benjamin Bwambale",
      title: "Procument",
      company: "EACOP",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi tempore at tempora commodi quia, quaerat veritatis atque velit maxime.",
      img: hope
    },
    {
      id:1,
      name: "Andrew Mbigitti",
      title: "Communications",
      company: "CNOOC Uganda",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi tempore at tempora commodi quia, quaerat veritatis atque velit maxime.",
      img: dan
    },
    
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
    className="flex bg-white lg:h-screen items-center justify-center overflow-hidden xs:py-8 xs:px-4 lg:px-0 lg:py-24 flex-col">
      <div
      data-aos="fade-up" className="text-4xl font-bold text-[#eb252a]">Testimonials</div>

      <div
      data-aos="fade-up" className="xs:mt-12 lg:mt-0 flex items-center justify-center lg:gap-12 max-w-[1400px] lg:h-[450px] w-full py-5 ">
        <div className="flex items-center justify-center py-2 px-2 rounded-full bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out ">
          <BsArrowLeftShort onClick={prevSlide} className="text-2xl" />
        </div>
        
          <>
        <div
        key={`${slides[currentIndex].id}`}
          // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="lg:w-8/12 h-full rounded-2xl flex items-center justify-center flex-col bg-white duration-500 ">
          <div className="h-40 w-40 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
          >
            {/* <img src={hope} alt="" className="" /> */}
          </div>
          <div className="mt-5 w-8/12 flex items-center justify-center text-center">
            <p>{`${slides[currentIndex].comment}`}</p>
          </div>
          <div className="h-16 w-16 mt-5">
            <RiDoubleQuotesL className="h-16 w-16 text-[#444444]"/>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-[#eb252a]">{`${slides[currentIndex].name}`}</h1>
            <p className="text-xl text-center text-[#444444] tracking-[-.075em]  antialiased">{`${slides[currentIndex].title}`}, {`${slides[currentIndex].company}`}</p>
          </div>
        </div>
        </>
       

        <div className="flex items-center justify-center py-2 px-2 rounded-full bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out ">
          <BsArrowRightShort onClick={nextSlide} className="text-2xl" />
        </div>

        {/* <div className="absolute inset-0 flex gap-5 justify-between items-center mx-5 ">
         
          <div className="flex items-center justify-center py-2 px-2 rounded-full bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out ">
            <BsArrowLeftShort onClick={prevSlide} className="text-2xl" />
          </div>
          
          <div className="flex items-center justify-center py-2 px-2 rounded-full bg-gray-500 text-white cursor-pointer hover:bg-gray-500 transition duration-500 ease-in-out ">
            <BsArrowRightShort onClick={nextSlide} className="text-2xl" />
          </div>
        </div> */}
      </div>

        <div
        data-aos="fade-up" className="w-full flex items-center justify-center mt-3">
          <div className="flex gap-2 items-center justify-center ">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`cursor-pointer transition duration-500 ease-in-out w-3 h-3  bg-[#eb252a] rounded-full ${
                  currentIndex === slideIndex ? "p-2" : "bg-gray-400 scale-75  hover:scale-100"
                } `}>
                {/* <RxDotFilled className="text-4xl" /> */}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};
