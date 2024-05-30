import React from "react";
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";
import Logo from "../assets/habot-logo-removebg-preview.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <Container fluid>
        <Row className="text-white p-4">
          <Col className="mx-5">
            <Stack>
              <Image src={Logo} alt="Logo" rounded width={150} height={150} />
              <p>© R Singhania</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              Company
              <NavLink href="#" className="text-white">
                About
              </NavLink>
              <NavLink href="#" className="text-white">
                FAQ
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              Terms
              <NavLink href="#" className="text-white">
                Data privacy
              </NavLink>
              <NavLink href="#" className="text-white">
                Terms
              </NavLink>
              <NavLink href="#" className="text-white">
                Accessibility
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              Related
              <NavLink href="#" className="text-white">
                Find Buyer
              </NavLink>
              <NavLink href="#" className="text-white">
                Feedback
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-row text-center justify-center gap-2 items-center">
              <NavLink href="#" className="text-white border rounded-full p-2">
                <FaLinkedinIn />
              </NavLink>
              <NavLink href="#" className="text-white border rounded-full p-2">
                <FaTwitter />
              </NavLink>
              <NavLink href="#" className="text-white border rounded-full p-2">
                <FaFacebookF />
              </NavLink>
              <NavLink href="#" className="text-white border rounded-full p-2">
                <FaInstagram />
              </NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
