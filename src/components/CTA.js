import React from "react";
import { Button } from "react-bootstrap";

const CTA = () => {
  return (
    <div>
      <div className="bg-[#E8FBFF] py-20 ">
        <div className="flex sm:flex-row flex-col justify-around items-center">
          <h2 className="text-4xl font-bold mb-4">
            Let Suppliers{" "}
            <u className="underline decoration-[#EB7150]">Find You</u>{" "}
          </h2>
          <Button
            className="text-white font-semibold"
            style={{
              backgroundColor: "#EB7150",
              borde: "none",
              width: "150px",
              height: "50px",
              fontWeight: "700",
            }}
          >
            Get Verified
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
