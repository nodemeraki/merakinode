import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PlanCard = ({ plan }) => {
  return (
    <div
      className={`font-Lato p-10 max-w-xl mt-12 mb-20 ${
        plan.title === "Sprint" ? "bg-[#C4C4C424]" : "bg-[#104B8D] text-white"
      } rounded-lg`}
    >
      <h2 className="font-bold text-3xl tracking-[5%] border-b pb-7 text-center md:text-start">
        {plan.title}
      </h2>
      <p className="font-light text-xl py-7 border-b">{plan.description}</p>
      <p className="my-7 text-xl font-normal text-center md:text-start">
        Deliverables Package
      </p>

      <ul className="flex flex-col justify-center items-start gap-2 md:gap-6 pb-10 md:pb-16 border-b">
        {Array.isArray(plan.features) ? (
          plan.features.map((feature, idx) => (
            <li key={idx} className="flex gap-2 text-base tracking-[5%]">
              <FaCheckCircle
                size={20}
                className={`${
                  plan.title === "Sprint"
                    ? "fill-black stroke-white"
                    : "fill-white stroke-black"
                }`}
              />
              {feature}
            </li>
          ))
        ) : (
          <li>No features available</li>
        )}
      </ul>

      <div className="pt-10 text-base md:text-2xl flex flex-col justify-center items-center gap-4">
        <p>Budget Level: {plan.budget}</p>
        <p>Timeline: {plan.timeline}</p>

        {/* This links to Request a quote */}
        <Link to="/request-quote">
          <button
            className={`my-10 border-[5px] py-3 px-10 text-xl transform duration-300 rounded-[44px] ${
              plan.title === "Sprint"
                ? "border-[#003040] text-[#003040] "
                : "border-white text-white"
            }`}
          >
            GET A QUOTE
          </button>
        </Link>
      </div>
    </div>
  );
};

//  Define PropTypes
PlanCard.propTypes = {
  plan: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    budget: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default PlanCard;
