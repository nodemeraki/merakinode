import React from "react";
// import HeroIm from "/src/assets/caroze.jpg";

const ServiceHero = () => {
  return (
    <section className="h-[50vh] md:h-[75vh] sm:h-[40vh] rounded-sm bg-body py-5">
      <div
        className="h-full w-[88vw] m-auto rounded-xl md:rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center shadow-[0_0_10px_4px_rgba(0,0,0,0.2)] mb-5%"
        // style={{ backgroundImage: `url(${HeroIm})` }}
        style={{ backgroundImage: "url('/images/caroze.jpg')" }}
      >
        <h2
          className="tracking-wider text-3xl font-homeHero text-white capitalize mb-10 ml-8"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.38)" }}
        >
          we offer
          <span className="text-[#F96662] capitalize"> professional </span>
          services
        </h2>
      </div>
    </section>
  );
};

export default ServiceHero;
