import { useState } from "react";
import ServiceImageData from "../../components/ServiceImageData.jsx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import brandStrategy from "/src/assets/Brand.png";
import design from "/src/assets/UX.png";
import development from "/src/assets/web-app-dev.png";

// Image data
const workImages = [
  {
    src: brandStrategy,
    text: "Company Branding",
    id: "branding",
  },
  {
    src: design,
    text: "UI/UX Design",
    id: "ui-ux",
  },
  {
    src: development,
    text: "Web/App Development",
    id: "web-dev",
  },
];

const WorkDone = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // function to navigate images
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % workImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? workImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative mx-auto container my-16 px-4 font-header text-2xl text-black">
      <h3 className="text-center text-4xl my-10 font-bold">
        Our work done <span className="text-[red]">right</span>
      </h3>

      {/* desktop view" show all */}
      <div className="hidden md:flex gap-6 md:justify-center">
        {workImages.map((image) => (
          <ServiceImageData
            key={image.id}
            image={image}
            isLinked={false}
            className="w-full h-auto"
          />
        ))}
      </div>

      {/* mobile view: display one at a time */}
      <div className="relative md:hidden flex items-center justify-center">
        <div className="w-full flex justify-center">
          <ServiceImageData image={workImages[activeIndex]} isLinked={false} />
        </div>

        {/* prev button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 bg-black/60 text-white p-2 rounded-full hover:bg-black"
        >
          <IoIosArrowBack size={20} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {workImages.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-secondary" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Green button */}

      <div className="text-center mt-12 border-b border-[#000000] pb-5 w-[85vw] m-auto">
        <button className="py-2 px-10 bg-secondary rounded-md cursor-pointer">
          View all
        </button>
      </div>
    </div>
  );
};

export default WorkDone;
