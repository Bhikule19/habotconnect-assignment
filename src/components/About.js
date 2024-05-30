import React from "react";
import { Button } from "react-bootstrap";
import { BiArrowFromRight } from "react-icons/bi";

const About = () => {
  const locations = [
    // Creating an array to add the locations
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen px-20 bg-white">
      <div className="max-sm:text-center max-lg:text-center lg:mr-16 mb-6 lg:mb-0 sm:w-[50%] text-left">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">
          Ready to dive into <span className="text-purple-600">HABOT?</span>
        </h2>
        <p className="text-gray-600 mb-4 lg:w-[80%]">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <Button variant="success" className="px-4 py-2">
          Sign up Today!
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:w-[50%]">
        {locations.map(
          (
            location,
            index // dynamically rendering the location provided in the array
          ) => (
            <Button
              key={index}
              variant="outline-warning"
              className="w-full py-2"
            >
              {location}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default About;
