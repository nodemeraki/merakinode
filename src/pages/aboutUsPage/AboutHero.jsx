// import HeroIm from "../assets/about-img/about-bg.png";

const AboutHero = () => {
  return (
    <section className="h-[45vh] md:h-[65vh] sm:h-[40vh] bg-body py-8">
      <div className="relative bg-[url('src/assets/about-img/about-bg.png')] h-full max-w-[90%] w-full mx-auto rounded-xl md:rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center shadow-gray-500 shadow-2xl">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>

        {/* Text */}
        <h2 className="text-2xl md:text-4xl font-body font-bold text-black capitalize">
          about us
        </h2>
      </div>
    </section>
  );
};

export default AboutHero;
