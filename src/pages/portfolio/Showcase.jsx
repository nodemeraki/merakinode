import React, { useState } from "react";
import ServiceButtons from "../../components/ServiceButtons";
import ServiceImageData from "../../components/ServiceImageData";

// import brandStrategy from "../../assets/Brand.png";
// import design from "../../assets/UX.png";
// import development from "../../assets/web-app-dev.png";
// import writing from "../../assets/content.png";
// import graphics from "../../assets/Motion-graphic.png";
// import marketing from "../../assets/Marketing.png";

const Showcase = () => {
  // Define categories
  const services = [
    "Brand Strategy",
    "UI/UX Design",
    "Web App Dev",
    "Motion Graphics",
    "Marketing",
    "All",
  ];

  // Image data with categories
  const imageData = [
    {
      src: "/images/brand.png",
      text: "Company Branding",
      category: "Brand Strategy",
      id: "branding",
    },
    {
      src: "/images/UX.png",
      text: "UI/UX Design",
      category: "UI/UX Design",
      id: "ui-ux",
    },
    {
      src: "/images/web-app-dev.png",
      text: "Web/App Development",
      category: "Web App Dev",
      id: "web-dev",
    },
    {
      src: "/images/content.png",
      text: "Content/Technical Writing",
      category: "Brand Strategy",
      id: "writing",
    },
    {
      src: "/images/Motion-graphic.png",
      text: "Motion Graphics",
      category: "Motion Graphics",
      id: "graphics",
    },
    {
      src: "/images/Marketing.png",
      text: "Digital Marketing",
      category: "Marketing",
      id: "marketing",
    },
  ];

  // State for selected service
  const [selectedService, setSelectedService] = useState("All");

  // Filter images based on selected service
  const filteredImages =
    selectedService === "All"
      ? imageData
      : imageData.filter((image) => image.category === selectedService);

  return (
    <section className="mx-auto container mb-16 px-4">
      {/* Reusable Service Buttons */}
      <ServiceButtons
        services={services}
        selectedService={selectedService}
        onSelect={setSelectedService}
      />

      {/* Image Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 sm:items-center sm:justify-center w-full container mx-auto my-10 md:mt-16 md:mb-30">
        {filteredImages.map((image) => (
          <ServiceImageData key={image.id} image={image} isLinked={true} />
        ))}
      </div>
    </section>
  );
};

export default Showcase;
