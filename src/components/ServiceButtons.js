import PropTypes from "prop-types";

const ServiceButtons = ({ services, selectedService, onSelect }) => {
  return (
    <ul className="bg-body w-full max-w-[90%] mx-auto h-[78px] grid grid-cols-3 md:grid-cols-6 items-center justify-center gap-3.5 my-7">
      {services.map((service, index) => (
        <li
          key={index}
          className={` text-[#141B1E] text-xs xl:text-[23px] leading-[27.6px] w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
            selectedService === service
              ? "bg-primary text-[#F7F7F7]"
              : "bg-[#D9D9D9] hover:bg-primary hover:text-[#F7F7F7]"
          }`}
          onClick={() => onSelect(service)}
          aria-selected={selectedService === service}
          role="tab"
        >
          {service}
        </li>
      ))}
    </ul>
  );
};

// 🔹 Prop Validation
ServiceButtons.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string).isRequired, // Must be an array of strings
  selectedService: PropTypes.string.isRequired, // Must be a string
  onSelect: PropTypes.func.isRequired, // Must be a function
};

export default ServiceButtons;
