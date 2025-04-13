import BrandLogo from "/src/assets/caseStudyImg.png";

const CaseHead = () => {
  return (
    <section className="bg-black min-h-[207px] md:min-h-[485px] max-w-[367px] md:max-w-[1269px] mx-auto rounded-[38px] my-10 flex place-items-center justify-center">
      <div className=" max-w-[183px] md:max-w-[471px] w-full">
        <img className="w-full" src={BrandLogo} alt="Brand Logo" />
      </div>
    </section>
  );
};

export default CaseHead;
