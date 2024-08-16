import { useState } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
// import Kevin from "../../../../assets/images/kevin.jpg";
// import Sam from "../../../../assets/images/sam.jpg";
import hope from "../../../../assets/images/hope.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      name: "Amanya Brian Kevin",
      title: "Director",
      company: "Switch Media Limited",
      comment:
        "Deign Technologies Limited exceeded our expectations with their outstanding web development and IT solutions. The team’s ability to understand our needs and deliver customized solutions has been invaluable. Their expertise and proactive approach have made a real difference in our operations. We’re thrilled with the results and look forward to continuing our partnership with them.",
      img: hope,
    },
    {
      id: 2,
      name: "Isaac Ssekiro",
      title: "Director",
      company: "Penda Agency",
      comment: "Working with Deign Technologies Limited has been a game-changer for our business. Their comprehensive approach to digital services, from website management to online marketing, has helped us achieve our goals more efficiently. Their attention to detail and innovative solutions have brought a new level of success to our campaigns. The team is dedicated, reliable, and a pleasure to work with.",
      img: hope,
    },
    {
      id: 1,
      name: "Samuel Ocan",
      title: "Director",
      company: "Laten Media",
      comment:
        "Deign Technologies Limited has been an incredible partner for us. Their expertise in website development and digital marketing has significantly enhanced our online presence. They not only delivered a top-notch website but also provided excellent ongoing support. The team’s professionalism and commitment to quality make them stand out in the industry. I highly recommend their services to anyone looking to elevate their digital footprint.",
        img: hope,
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
    <div className="flex bg-white lg:h-screen items-center justify-center overflow-hidden xs:py-8 xs:px-4 lg:px-0 lg:py-24 flex-col">
      <div
        data-aos="fade-up"
        className="text-6xl tracking-[-0.075em] font-bold text-[#37b767]">
        Testimonials
      </div>

      <div
        data-aos="fade-up"
        className="xs:mt-12 lg:mt-0 flex items-center justify-center lg:gap-12 max-w-[1400px] lg:h-[450px] w-full py-5 ">
        <div className="flex items-center justify-center py-2 px-2 rounded-full bg-gray-200 text-gray-600 cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out ">
          <BsArrowLeftShort onClick={prevSlide} className="text-2xl" />
        </div>

        <>
          <div
            key={`${slides[currentIndex].id}`}
            // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="lg:w-8/12 h-full rounded-2xl flex items-center justify-center flex-col bg-white duration-500 ">
            <div
              className="h-32 w-32 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentIndex].img})` }}>
              {/* <img src={hope} alt="" className="" /> */}
            </div>
            <div className="mt-5 w-8/12 flex items-center justify-center text-center">
              <p>{`${slides[currentIndex].comment}`}</p>
            </div>
            <div className="h-16 w-16">
              <RiDoubleQuotesL className="h-16 w-16 text-[#444444]" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-[#37b767]">{`${slides[currentIndex].name}`}</h1>
              <p className="text-xl font-bold text-center text-[#042c3f] tracking-[-.075em]  antialiased">
                {`${slides[currentIndex].title}`},{" "}
                {`${slides[currentIndex].company}`}
              </p>
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
        data-aos="fade-up"
        className="w-full flex items-center justify-center mt-2">
        <div className="flex gap-2 items-center justify-center ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer transition duration-500 ease-in-out w-3 h-3  bg-[#042c3f] rounded-full ${
                currentIndex === slideIndex
                  ? "p-2"
                  : "bg-gray-400 scale-75  hover:scale-100"
              } `}>
              {/* <RxDotFilled className="text-4xl" /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
