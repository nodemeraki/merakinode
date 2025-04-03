import { useState } from "react";
import ServiceButtons from "../../../components/ServiceButtons";
import PlanCard from "./PlanCard";

const services = [
  "Brand Strategy",
  "UI/UX Design",
  "Web App Dev",
  "Motion Graphics",
  "Out door Advert",
];

const serviceDetails = {
  "Brand Strategy": {
    plans: [
      {
        title: "Sprint",
        description:
          "A short, time-boxed period, is when a team works to complete a set of projects.",
        features: [
          "Full discovery session to align with your goals.",
          "Basic brand strategy",
          "Three identity concepts",
          "Four round of revisions",
          "Stationary package",
          "Basic brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 3 weeks",
      },
      {
        title: "Deep Dive",
        description:
          "An in-depth examination or analysis of the project, focusing on the goal to meet the target.",
        features: [
          "Full discovery session to align with your goals.",
          "Comprehensive brand strategy",
          "A full range of identity concepts",
          "Unlimited revisions",
          "Communication strategy",
          "Comprehensive brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 1 Month",
      },
    ],
  },

  "UI/UX Design": {
    plans: [
      {
        title: "Sprint",
        description:
          "A short, time-boxed period, is when a team works to complete a set of projects.",
        features: [
          "Full discovery session to align with your goals.",
          "Basic brand strategy",
          "Three identity concepts",
          "Four round of revisions",
          "Stationary package",
          "Basic brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 3 weeks",
      },
      {
        title: "Deep Dive",
        description:
          "An in-depth examination or analysis of the project, focusing on the goal to meet the target.",
        features: [
          "Full discovery session to align with your goals.",
          "Comprehensive brand strategy",
          "A full range of identity concepts",
          "Unlimited revisions",
          "Communication strategy",
          "Comprehensive brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 1 Month",
      },
    ],
  },

  "Web App Dev": {
    plans: [
      {
        title: "Sprint",
        description:
          "A short, time-boxed period, is when a team works to complete a set of projects.",
        features: [
          "Full discovery session to align with your goals.",
          "Basic brand strategy",
          "Three identity concepts",
          "Four round of revisions",
          "Stationary package",
          "Basic brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 3 weeks",
      },
      {
        title: "Deep Dive",
        description:
          "An in-depth examination or analysis of the project, focusing on the goal to meet the target.",
        features: [
          "Full discovery session to align with your goals.",
          "Comprehensive brand strategy",
          "A full range of identity concepts",
          "Unlimited revisions",
          "Communication strategy",
          "Comprehensive brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 1 Month",
      },
    ],
  },

  "Motion Graphics": {
    plans: [
      {
        title: "Sprint",
        description:
          "A short, time-boxed period, is when a team works to complete a set of projects.",
        features: [
          "Full discovery session to align with your goals.",
          "Basic brand strategy",
          "Three identity concepts",
          "Four round of revisions",
          "Stationary package",
          "Basic brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 3 weeks",
      },
      {
        title: "Deep Dive",
        description:
          "An in-depth examination or analysis of the project, focusing on the goal to meet the target.",
        features: [
          "Full discovery session to align with your goals.",
          "Comprehensive brand strategy",
          "A full range of identity concepts",
          "Unlimited revisions",
          "Communication strategy",
          "Comprehensive brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 1 Month",
      },
    ],
  },

  "Out door Advert": {
    plans: [
      {
        title: "Sprint",
        description:
          "A short, time-boxed period, is when a team works to complete a set of projects.",
        features: [
          "Full discovery session to align with your goals.",
          "Basic brand strategy",
          "Three identity concepts",
          "Four round of revisions",
          "Stationary package",
          "Basic brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 3 weeks",
      },
      {
        title: "Deep Dive",
        description:
          "An in-depth examination or analysis of the project, focusing on the goal to meet the target.",
        features: [
          "Full discovery session to align with your goals.",
          "Comprehensive brand strategy",
          "A full range of identity concepts",
          "Unlimited revisions",
          "Communication strategy",
          "Comprehensive brand guidelines",
          "Bespoke asset package",
        ],
        budget: "50000 -3000000",
        timeline: "2 weeks - 1 Month",
      },
    ],
  },
};

const ServiceSelect = () => {
  const [selectedService, setSelectedService] = useState("Brand Strategy");
  const [selectedPlan, setSelectedPlan] = useState("Sprint");

  return (
    <div className="w-full flex flex-col items-center bg-body">
      {/* service buttons */}
      <ServiceButtons
        services={services}
        selectedService={selectedService}
        onSelect={setSelectedService}
      />

      {/* plan buttons */}
      <div className="md:hidden flex gap-4 my-4">
        <button
          onClick={() => setSelectedPlan("Sprint")}
          className={`text-[22px] tracking-[5%] transform duration-100 ${
            selectedPlan === "Sprint" ? "border-b-2 text-primary" : "border-0"
          }`}
        >
          Sprint
        </button>

        <button
          onClick={() => setSelectedPlan("Deep Dive")}
          className={`text-[22px] tracking-[5%] transform duration-100 ${
            selectedPlan === "Deep Dive"
              ? "border-b-2 text-primary"
              : "border-0"
          }`}
        >
          Deep Dive
        </button>
      </div>

      {/* service details */}
      {/* desktop view */}
      <div className="hidden md:flex gap-16">
        {serviceDetails[selectedService]?.plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} index={index} />
        ))}
      </div>

      {/* Mobile: Show only selected plan */}
      <div className="md:hidden mx-7 mb-12">
        {serviceDetails[selectedService]?.plans
          .filter((plan) => plan.title === selectedPlan)
          .map((plan, index) => (
            <PlanCard key={index} plan={plan} index={index} />
          ))}
      </div>
    </div>
  );
};

export default ServiceSelect;
