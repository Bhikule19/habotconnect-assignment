import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const VideoBuyerSection = () => {
  const [activeSection, setActiveSection] = useState("buyer"); // setting the state to have active focus

  const handleSectionChange = (section) => {
    //handling the active section
    setActiveSection(section);
  };

  return (
    <div className="px-10 lg:px-20 mb-28">
      <div className="flex flex-col lg:flex-row justify-center items-center h-screen  bg-[#072F57]">
        <div className="">
          <iframe
            src="https://www.youtube.com/embed/IZLp-TZyDkQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[250px] lg:w-[600px] h-[250px] lg:h-[300px] object-cover rounded"
          ></iframe>
        </div>

        <div className=" text-white py-12 px-4 sm:px-6 lg:px-8 lg:items-start">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <button
                onClick={() => handleSectionChange("buyer")}
                className={`px-4 py-2 text-lg font-bold transition-colors duration-300 ${
                  activeSection === "buyer"
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-white"
                }`}
              >
                Buyer
              </button>
              <button
                onClick={() => handleSectionChange("supplier")}
                className={`px-4 py-2 text-lg font-bold transition-colors duration-300 ${
                  activeSection === "supplier" //conditionally rendering the active state eith its lists
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-white"
                }`}
              >
                Supplier
              </button>
            </div>
            <div>
              {activeSection === "buyer" && (
                <div>
                  <ul className="list-none text-sm">
                    <li className="flex items-start mb-2">
                      <FaCircleCheck
                        color="green"
                        className="mr-2 flex-none"
                        size={15}
                      />
                      <span>Post your requirements.</span>
                    </li>
                    <li className="flex items-start mb-2">
                      <FaCircleCheck
                        color="green"
                        className="mr-2 flex-none"
                        size={15}
                      />
                      <span>
                        Sit back for multiple suppliers to contact you.
                      </span>
                    </li>
                    <li className="flex items-start mb-2">
                      <FaCircleCheck
                        color="green"
                        className="mr-2 flex-none"
                        size={15}
                      />
                      <span>
                        Choose among the suppliers based on the ratings and
                        reviews.
                      </span>
                    </li>
                  </ul>
                </div>
              )}
              {activeSection === "supplier" && (
                <div>
                  <ul className="list-none text-sm">
                    <li className="flex items-start mb-2">
                      <FaCircleCheck
                        color="green"
                        className="mr-2 flex-none"
                        size={15}
                      />
                      <span>Lorem ipsum dolor sit amet,</span>
                    </li>
                    <li className="flex items-start mb-2">
                      <FaCircleCheck
                        color="green"
                        className="mr-2 flex-none"
                        size={15}
                      />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </span>
                    </li>
                    <li className="flex items-start mb-2">
                      <FaCircleCheck
                        color="green"
                        className="mr-2 flex-none"
                        size={15}
                      />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vulputate
                      </span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBuyerSection;
