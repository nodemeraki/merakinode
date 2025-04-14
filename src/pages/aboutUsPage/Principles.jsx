import React, { useEffect, useRef } from "react";
import { IoStar } from "react-icons/io5";

const principlesData = [
  {
    number: "1",
    title: "We question everything.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    number: "2",
    title: "We never settle for good enough.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    number: "3",
    title: "We prioritise empathy over ego.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    number: "4",
    title: "We invest ourselves in each project.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    number: "5",
    title: "We love to add value to others.",
    description:
      "At SAMMEDIA, we are a well-known brand that boosts a company's worth by offering it a competitive advantage in the marketplace and the development of strategic.",
  },
  {
    type: "rotatingText",
  },
];

const RotatingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    let angle = 0;

    const animateText = () => {
      angle += 0.5; // Adjust speed by changing this value
      text.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(animateText);
    };

    animateText();
  }, []);

  return (
    <div className="flex items-center justify-center  bg-body">
      <div className="relative w-[250px] h-[250px]">
        {/* Rotating Text */}
        <svg
          ref={textRef}
          className="absolute w-full h-full"
          viewBox="0 0 200 200"
        >
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text fontSize="14" fill="#002b3f">
            <textPath xlinkHref="#circlePath" startOffset="0%">
              OUR WORK DONE - OUR WORK DONE RIGHT - OUR WORK DONE RIGHT
            </textPath>
          </text>
        </svg>

        {/* Star Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-slate-900 bg-amber-400 w-[65%] h-[65%] rounded-full flex justify-center items-center">
          <IoStar size={100} />
        </div>
      </div>
    </div>
  );
};

// export default RotatingText;

const Principles = () => {
  return (
    <section className="bg-body pt-10 md:pt-28 pb-12">
      {/* Title */}
      <h2 className="text-center text-2xl font-[500] font-lora text-black mb-12">
        The Principle that guides <span className="text-red-500">Us</span>
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16"> */}
        {principlesData.map((principle, index) =>
          principle.type === "rotatingText" ? (
            <div key={index} className="flex justify-center items-center">
              <RotatingText />
            </div>
          ) : (
            <div
              key={index}
              className="bg-primary text-white pt-6 pb-24 px-6 rounded-sm max-w-sm mx-auto"
            >
              {/* Numbered Icon */}
              <div className="flex items-center mb-4">
                <span className="bg-white text-primary font-bold text-lg rounded-full w-7 h-7 flex items-center justify-center mr-3">
                  {principle.number}
                </span>
                <h3 className="text-sm font-bold">{principle.title}</h3>
              </div>

              {/* Line */}
              <hr className="border-t border-white mb-4" />

              {/* Description */}
              <p className="text-sm">{principle.description}</p>
            </div>
          )
        )}
      </div>

      {/* Bottom Horizontal Line */}
      <div className="border-t border-gray-300 mt-28"></div>
    </section>
  );
};

export default Principles;
