// import HeroImg from "/src/assets/home-img/Hero.png";

const HomeHero = () => {
  return (
    <section className="h-[48vh] md:h-[85vh] sm:h-[40vh] bg-body">
      <div className="bg-[url('/src/assets/Hero.png')] h-[75%] md:h-[98%] max-w-[90%] w-full mx-auto rounded-xl md:rounded-2xl overflow-hidden bg-cover bg-center font-homeHero font-lexend shadow-gray-500 shadow-2xl">
        <h1 className="max-w-[20ch] text-[#040303] text-sm uppercase font-bold md:text-[3.5rem] mb-[4%] ml-[10%] md:ml-[11%] mt-25 leading-6 md:leading-20">
          We make your business look
          <span className="block text-primary">Great</span>
        </h1>
        <button className="rounded-sm text-white md:mt-0 py-2 px-3 font-body ml-[10%] md:ml-[11%] bg-secondary hover:bg-green-500 text-[10px] cursor-pointer md:text-[22px]">
          Get free consultation
        </button>
      </div>
    </section>
  );
};

export default HomeHero;
