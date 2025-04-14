import React from "react";
// import HeroRq from "../../assets/hero.jpg";

const QuoteHero = () => {
  return (
    <section className="h-[45vh] md:h-[65vh] sm:h-[40vh] bg-body">
      <div
        className="h-full w-[88vw] m-auto rounded-xl md:rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center"
        // style={{ backgroundImage: `url(${HeroRq})` }}
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <h2 className="text-2xl font-body text-black capitalize mt-7">
          Request a Quote
        </h2>
      </div>
    </section>
  );
};

export default QuoteHero;
