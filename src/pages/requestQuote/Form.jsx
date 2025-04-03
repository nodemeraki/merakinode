import { useState } from "react";

function Form() {
  const [selectedService, setSelectedService] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    "Brand Strategy",
    "UI/UX Design",
    "Web/Mobile App Development",
    "Content Writing",
    "Motion Graphic",
    "Social Media Marketing",
  ];

  const handleServiceChange = (option) => {
    setSelectedService(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-body">
      <form className="max-w-4xl mx-auto p-8 space-y-6 text-[#000] bg-body">
        {/* Full Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="First name"
              id="first-name"
              className="mt-1 block w-full border border-[#000] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-black"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              className="mt-1 block w-full border border-[#000] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
            />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="company-name"
            className="block text-sm font-medium text-black"
          >
            I Work with company name called
          </label>
          <input
            type="text"
            id="company-name"
            placeholder="Company Name"
            className="mt-1 block w-full border border-[#000] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
          />
        </div>

        {/* Specialization */}
        <div>
          <label
            htmlFor="specialization"
            className="block text-sm font-medium text-black"
          >
            WE Specialize in
          </label>
          <input
            type="text"
            id="specialization"
            placeholder="Company Specialization"
            className="mt-1 block w-full border border-[#000] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
          />
        </div>

        {/* Why Different */}
        <div>
          <label className="block text-sm font-medium text-black">
            WE are different because
          </label>
          <textarea
            placeholder="What makes your company the best"
            rows="4"
            className="mt-1 block w-full border border-[#000] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
          />
        </div>

        {/* SAMBMEDIA Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-black">
              I need SAMBMEDIA to help me with:
            </label>
            <div className="relative mt-1">
              <div
                className="cursor-pointer border border-[#000] rounded-md p-2 placeholder:text-[#000]/20 flex justify-between items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedService || "Select an option"}</span>
                <span>▼</span>
              </div>
              {isDropdownOpen && (
                <ul className="absolute z-10 bg-white border border-[#000]/50 rounded-md mt-1 w-full max-h-40 overflow-auto shadow-lg">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-[#000]/50 hover:text-white cursor-pointer"
                      onClick={() => handleServiceChange(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-black"
            >
              Price Range
            </label>
            <input
              type="text"
              id="price"
              placeholder="$50,000 - $100,000"
              className="mt-1 block w-full border border-[#003040] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
            />
          </div>
        </div>

        {/* Target */}
        <div>
          <label
            htmlFor="target"
            className="block text-sm font-medium text-black"
          >
            Our target is/are
          </label>
          <input
            type="text"
            id="target"
            placeholder="Enter Company target"
            className="mt-1 block w-full border border-[#000] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
          />
        </div>

        {/* Deliverables */}
        <div>
          <label className="block text-sm font-medium text-black">
            Project deliverable
          </label>
          <textarea
            placeholder="Indicate what you expect for the result of the project (file type)"
            rows="3"
            className="mt-1 block w-full border border-[#000] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
          />
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-black"
          >
            My Budget
          </label>
          <input
            type="text"
            id="budget"
            placeholder="Budget for the project"
            className="mt-1 block w-full border border-[#003040] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-black"
            >
              You can contact me at
            </label>
            <input
              type="email"
              id="contact-email"
              placeholder="Email"
              className="mt-1 block w-full border border-[#003040] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-black"
            >
              Or call me
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="Phone Number"
              className="mt-1 block w-full border border-[#003040] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
            />
          </div>
        </div>

        {/* Time Frame */}
        <div>
          <label
            htmlFor="time-frame"
            className="block text-sm font-medium text-black"
          >
            Time Frame
          </label>
          <input
            type="text"
            id="time-frame"
            placeholder="Enter time frame"
            className="mt-1 block w-full border border-[#003040] rounded-md shadow-sm p-2 focus:outline-none placeholder:text-[#000]/50"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto bg-[#136acd] text-white px-6 py-2 rounded-md transition hover:bg-[#136acd] hover:text-white md:bg-transparent md:border-4 md:border-[#136acd] md:text-[#136acd] md:hover:bg-[#136acd] md:hover:text-white cursor-pointer"
          >
            Send Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
