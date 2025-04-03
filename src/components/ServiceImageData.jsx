import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceImageData = ({ image, isLinked = true }) => {
  const imageContent = (
    <div className="group relative rounded-3xl overflow-hidden transition-all duration-300 max-w-[345px] w-full max-h-80">
      <img
        src={image.src}
        alt={image.text}
        className="w-full h-full rounded-3xl object-cover"
      />

      {/* Hover Effect */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-[#252D30C4] bg-opacity-90 opacity-0 group-hover:opacity-75 transition-opacity duration-300"
        aria-hidden="true"
      >
        <p className="text-[#F7F7F7] text-2xl">{image.text}</p>
      </div>
    </div>
  );
  return isLinked ? (
    <Link to={`/project-case-study/${image.id}`}>{imageContent}</Link>
  ) : (
    imageContent
  );
};

// ✅ Add PropTypes for validation
ServiceImageData.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  isLinked: PropTypes.bool,
};

export default ServiceImageData;
