// import heroImage from "../../assets/portfolioImg.png";
import heroMobile from "../../assets/hero-mobile.png";

const PortfolioHero = () => {
  return (
    <section>
      <div className="w-full relative pt-10">
        <picture>
          <source
            srcSet="../../assets/portfolioImg.png"
            media="(min-width: 1280px)"
          />
          <img className="h-full w-full" src={heroMobile} alt="Hero Image" />
        </picture>

        <h1 className="absolute inset-0 flex items-center justify-center font-extrabold text-[#0F0D0D] text-4xl md:text-[52px] leading-[57px] tracking-[0.07em] font-Lato">
          Our work
        </h1>
      </div>

      <div>
        <p className="max-w-[650px] mx-auto py-2.5 xl:py-20 font-normal text-lg xl:text-[33px] xl:leading-[47px] text-[#044358] text-center">
          Our work is a mirror of who we are in all the services we provide to
          our clients.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
