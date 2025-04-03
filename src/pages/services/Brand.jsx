// import brand from "../../assets/shared-images/brand.png";
// import uxImage from "../../assets/shared-images/UX.png";
// import webAppImage from "../../assets/shared-images/web-app-dev.png";
// import contentImage from "../../assets/shared-images/content.png";
// import motionGraphicImage from "../../assets/shared-images/motion-graphic.png";
// import marketingImage from "../../assets/shared-images/Marketing.png";

import brand from "/shared-images/brand.png";
import uxImage from "/shared-images/UX.png";
import webAppImage from "/shared-images/web-app-dev.png";
import contentImage from "/shared-images/content.png";
import motionGraphicImage from "/shared-images/motion-graphic.png";
import marketingImage from "/shared-images/Marketing.png";

// Service Icons
import brandIcon from "../../assets/service-img/brandstr.png";
import uiUxIcon from "../../assets/service-img/icon.png";
import mobileIcon from "../../assets/service-img/mobile.png";
import writeIcon from "../../assets/service-img/write.png";
import motionIcon from "../../assets/service-img/motion.png";
import speakerIcon from "../../assets/service-img/speaker.png";

const content = [
  {
    id: 1,
    icon: brandIcon,
    title: "BRAND STRATEGY",
    description:
      "At MERAKINODE, we are a well-known brand that boosts company worth...",
    image: brand,
  },
  {
    id: 2,
    icon: uiUxIcon,
    title: "UI/UX (User Experience) DESIGN",
    description:
      "At MERAKINODE, we employ UI/UX design to create customer experiences...",
    image: uxImage,
  },
  {
    id: 3,
    icon: mobileIcon,
    title: "WEB / MOBILE APP DEVELOPMENT",
    description: "At MERAKINODE, editorial design is taken into account...",
    image: webAppImage,
  },
  {
    id: 4,
    icon: writeIcon,
    title: "CONTENT WRITING",
    description: "We create content to increase brand visibility...",
    image: contentImage,
  },
  {
    id: 5,
    icon: motionIcon,
    title: "MOTION GRAPHIC",
    description: "We create visually engaging motion graphics...",
    image: motionGraphicImage,
  },
  {
    id: 6,
    icon: speakerIcon,
    title: "SOCIAL MEDIA MARKETING",
    description: "At MERAKINODE, we rely on marketing platforms...",
    image: marketingImage,
  },
];

function Brand() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {content.map((item, index) => {
          // Rows 1, 3, 5 → Normal order (text left, image right)
          // Rows 2, 4, 6 → Reverse order (text right, image left)
          const isReverseRow = index % 2 !== 0; // Odd indices (1,3,5) reverse order

          return (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
                isReverseRow ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text Content */}
              <div className="md:w-1/2">
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt="Icon" className="w-4 h-4" />
                  <h3 className="text-xl font-semibold font-lora text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>

              {/* Image Container */}
              <div className="w-full md:w-1/2 max-h-96 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-fill rounded-lg shadow-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Brand;
