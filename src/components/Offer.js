import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ImUserPlus } from "react-icons/im";
import { FaFileCircleCheck, FaFilePen, FaHandshake } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";

import { HiDocumentSearch } from "react-icons/hi";

const Offer = () => {
  return (
    <div className="py-40">
      <Container className="p-0 ">
        <h2 className="text-4xl font-bold mb-6 text-center">How it works?</h2>
        <p className=" mb-8 text-center ">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with <br /> potential buyers, and build
          successful business relationships, sharing valuable feedback.
        </p>
        <Row className="p-0 m-0 bg-none">
          <Col md={4} className="p-0 m-0  bg-none">
            <Card
              className="h-100 d-flex flex-column align-items-center justify-content-center p-4 border-none"
              style={{ backgroundColor: "#E8FBFF", border: "none" }}
            >
              <Card.Body className="d-flex flex-column align-items-center ">
                <div className=" text-[#EB7150] rounded-full p-4 mb-4">
                  <ImUserPlus size={50} />
                </div>
                <Card.Title className="text-lg font-bold mb-2">
                  Select Your Role and Sign Up
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="p-0 m-0">
            <Card
              className="h-100 d-flex flex-column align-items-center justify-content-center p-4"
              style={{ border: "none" }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div className=" text-[#EB7150] rounded-full p-4 mb-4">
                  <FaFileCircleCheck size={50} />
                </div>
                <Card.Title className="text-lg font-bold mb-2">
                  Buyers Post Your Requirements
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="p-0 m-0">
            <Card
              className="h-100 d-flex flex-column align-items-center justify-content-center p-4"
              style={{ backgroundColor: "#E8FBFF", border: "none" }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div className=" text-[#EB7150] rounded-full p-4 mb-4">
                  <HiDocumentSearch size={50} />
                </div>
                <Card.Title className="text-lg font-bold mb-2 text-center">
                  Review, Select, and Contact the Best Suppliers
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="p-0 m-0">
            <Card
              className="h-100 d-flex flex-column align-items-center justify-content-center p-4"
              style={{ border: "none" }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div className=" text-[#EB7150] rounded-full p-4 mb-4">
                  <FaFilePen size={50} />
                </div>
                <Card.Title className="text-lg font-bold mb-2 text-center">
                  Suppliers Complete your profile and get notified for
                  opportunities
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="p-0 m-0">
            <Card
              className="h-100 d-flex flex-column align-items-center justify-content-center p-4"
              style={{ backgroundColor: "#E8FBFF", border: "none" }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div className=" text-[#EB7150] rounded-full p-4 mb-4 text-center">
                  <MdEditDocument size={50} />
                </div>
                <Card.Title className="text-lg font-bold mb-2 text-center">
                  Contact to Buyers and Share your Quote for the service
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="p-0 m-0">
            <Card
              className="h-100 d-flex flex-column align-items-center justify-content-center p-4"
              style={{ border: "none" }}
            >
              <Card.Body className="d-flex flex-column align-items-center">
                <div className=" text-[#EB7150] rounded-full p-4 mb-4">
                  <FaHandshake size={50} />
                </div>
                <Card.Title className="text-lg font-bold mb-2 text-center">
                  Both the Parties can Connect and Make Business Leave a
                  Feedback
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          {/* Rest of the cards */}
        </Row>
      </Container>
    </div>
  );
};

export default Offer;
