import { useState, useEffect, useCallback } from "react";

import MockImg from "/src/assets/project-case-study/mockup.png";
import SolutionImg from "/src/assets/project-case-study/solution.png";
import ImgOne from "/src/assets/project-case-study/flyerArtboard-1.png";
import ImgTwo from "/src/assets/project-case-study/flyerArtboard-2.png";
import ImgThree from "/src/assets/project-case-study/flyerArtboard-3.png";

const imageData = [
  { src: ImgOne, alt: "Image One" },
  { src: ImgTwo, alt: "Image Two" },
  { src: ImgThree, alt: "Image Three" },
];

const CaseBody = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  // handle next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + imagesPerView < imageData.length ? prevIndex + 1 : 0
    );
  }, [imagesPerView]);

  // handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : imageData.length - imagesPerView
    );
  };

  //   auto slide every few seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Detect screen width and adjust images per view
  useEffect(() => {
    const updateImagesPerView = () => {
      setImagesPerView(window.innerWidth >= 1024 ? 3 : 2);
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);
    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  return (
    <section>
      <div className="max-w-[1269px] mx-auto my-12 px-5 font-Lato">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          <div>
            <h1 className="text-[33px] md:text-5xl tracking-[7%] mb-5 font-bold">
              Brand Introduction
            </h1>
            <p className="text-lg md:text-[23px] leading-[27px] md:leading-[46px] tracking-[7%] font-light">
              Top Class Unisex Salon & Bar is relaxing and beauty environment,
              our main services is focus on the proper hair do of both gender
              (Unisex), thinking about our customer comfort bring about the bar,
              where they can relax while waiting for friends in a conducive
              atmosphere.
            </p>
          </div>

          <div>
            <h2 className="text-[33px] md:text-[37px] tracking-[7%] mb-5 font-bold">
              Objective
            </h2>
            <p className="text-lg md:text-[23px] leading-[27px] md:leading-[46px] tracking-[7%] font-light">
              Create an identity that reflects the relaxed atmosphere of Top
              class Unisex Salon and the welcoming nature of Sapele, Delta,
              Nigeria.
            </p>
          </div>
        </div>

        {/* Image carousel */}

        <div className="max-w-[1269px] mx-auto">
          <div
            className="relative overflow-hidden max-h-[570px] "
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex gap-4 transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / imagesPerView)
                }%)`,
                width: `${imageData.length * (100 / imagesPerView)}%`,
              }}
            >
              {imageData.map((image, index) => (
                <div key={index} className={`w-[${100 / imageData.length}%]`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>

            {/* Previous & Next Buttons (for desktop) */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-600 text-white rounded-full"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {imageData.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-24">
          <div className="flex flex-col justify-center gap-10 font-Lato">
            <h2 className="text-[33px] md:text-5xl tracking-[7%] font-bold">
              Solution
            </h2>
            <p className="text-lg md:text-[19px] leading-[46px] tracking-[7%] max-w-[487px] font-light">
              The final logo features a discrete monogram of an abstract of hair
              cut with it unique sign of infinity sign, this picture the unique
              service of Top Class Unisex Salon and Bar.
            </p>
          </div>
          <div className="hidden md:block">
            <img src={SolutionImg} />
          </div>
        </div>
      </div>

      <div className="bg-[#CBA867] min-h-[258px] max-h-[623px] my-7 w-full flex items-center justify-center">
        <img
          className="max-w-[1139px] w-full max-h-[621px] h-auto"
          src={MockImg}
          alt="An Image showing a pencil and note pad"
        />
      </div>
      <p className="text-2xl font-body font-light text-center mb-24 italic">
        View Live Link
      </p>
    </section>
  );
};

export default CaseBody;
