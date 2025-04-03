import TelephoneImg from "../../assets/contact/contact-us.png";

import { FaStar } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FiPhoneIncoming } from "react-icons/fi";

const ContactHeader = () => {
  return (
    <section className="max-w-[95%] w-full mx-auto">
      <img src={TelephoneImg} alt="A picture of a blue telephone with wire" />

      {/* Holds the three containers */}
      <div className="max-w-[1035px] w-full min-h-[244px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-16 px-7">
        <div className="flex flex-row md:flex-col items-center gap-3.5 md:gap-2">
          <div className="border-2 border-primary h-[43px] md:h-[63px] w-[43px] md:w-[63px] rounded-full flex justify-center items-center md:mb-7">
            <div className="relative sm:w-5 sm:h-5 w-6 h-6 md:w-10 md:h-10 border border-primary">
              <RiMapPin2Fill
                // size={32}
                className="fill-[#044358] text-[#044358] absolute w-full h-full"
              />
              <FaStar
                // size={14}
                className="fill-white text-white absolute top-1.5 left-1/3 w-2/5 h-2/5"
              />
            </div>
          </div>
          <h3 className=" hidden md:block font-semibold text-[26px] leading-[31.47px]">
            Address
          </h3>
          <p className="font-normal text-2xl md:text-[26px] leading-[31.47px]">
            Lagos, Nigeria
          </p>
        </div>

        <div className="flex md:flex-col items-center gap-3.5 md:gap-2">
          <div className="border-2 border-primary h-[43px] md:h-[63px] w-[43px] md:w-[63px] rounded-full flex justify-center items-center md:mb-7">
            <CiMail size={24} className="text-[#044358]" />
          </div>
          <h3 className="hidden md:block font-semibold text-[26px] leading-[31.47px]">
            Email
          </h3>
          <a
            href="mailto: info.merakinode@gmail.com"
            className="font-normal text-2xl md:text-[26px] md:leading-[31.47px]"
          >
            info.merakinode@gmail.com
          </a>
        </div>

        <div className="flex flex-row md:flex-col place-items-center gap-3.5 md:gap-2">
          <div className="border-2 border-primary h-[43px] md:h-[63px] w-[43px] md:w-[63px] rounded-full flex justify-center items-center mb-7">
            <FiPhoneIncoming size={24} className="text-[#044358]" />
          </div>
          <h3 className="hidden md:block font-semibold text-[26px] leading-[31.47px]">
            Phone Number
          </h3>
          <p className="font-normal text-2xl md:text-[26px] md:leading-[39px]">
            <span className="block">+2347057005399</span>
            <span className="block">+2348032433093</span>
          </p>
        </div>
      </div>

      {/* line */}
      <div className="border-[#044358] border max-w-[1166px] mx-auto mb-24"></div>
    </section>
  );
};

export default ContactHeader;
