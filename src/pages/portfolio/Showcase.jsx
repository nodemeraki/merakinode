import { useState } from "react";
import ServiceButtons from "../../components/ServiceButtons";
import ServiceImageData from "../../components/ServiceImageData";

import brandStrategy from "../../assets/shared-images/Brand.png";
import design from "../../assets/shared-images/UX.png";
import development from "../../assets/shared-images/web-app-dev.png";
import writing from "../../assets/shared-images/content.png";
import graphics from "../../assets/shared-images/Motion-graphic.png";
import marketing from "../../assets/shared-images/Marketing.png";

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
      src: brandStrategy,
      text: "Company Branding",
      category: "Brand Strategy",
      id: "branding",
    },
    {
      src: design,
      text: "UI/UX Design",
      category: "UI/UX Design",
      id: "ui-ux",
    },
    {
      src: development,
      text: "Web/App Development",
      category: "Web App Dev",
      id: "web-dev",
    },
    {
      src: writing,
      text: "Content/Technical Writing",
      category: "Brand Strategy",
      id: "writing",
    },
    {
      src: graphics,
      text: "Motion Graphics",
      category: "Motion Graphics",
      id: "graphics",
    },
    {
      src: marketing,
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
