import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import HeroImage from "../assets/bg.png";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#072F57] via-transparent to-transparent opacity-75"></div>
      <div className="absolute inset-0  bg-gradient-to-t from-[#072F57] via-[#072F57] opacity-45"></div>
      <Container className="relative z-10 text-white">
        <div className="h-full items-center">
          <div className="text-center ">
            <h1 className="text-[55px] font-bold">Are You a Supplier?</h1>
            <p className="text-[55px] mb-4">Explore Matching Opportunities.</p>
            <Form className="d-flex justify-content-center mb-4 max-sm:flex-col items-center gap-2">
              <Form.Control
                type="text"
                placeholder="Search your required service here"
                className="mr-2 max-w-80 h-12"
              />
              <Form.Control
                type="text"
                placeholder="Search your desired location here"
                className="mr-2 max-w-80 h-12"
              />
              <Button
                variant="success"
                className="max-sm:w-40 w-40 h-12"
                style={{
                  backgroundColor: "#00732F",
                  border: "none",
                  fontWeight: "700",
                }}
              >
                Search
              </Button>
            </Form>
            <p className="text-lg">
              Are you a buyer?{" "}
              <a href="#" className="underline text-white">
                Click here if you are looking to post a requirement
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
