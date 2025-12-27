import { Col, Row } from "react-bootstrap";
import { FaJava, FaBootstrap } from "react-icons/fa";
import {
  SiJavascript,
  SiReact, SiMui,
  SiRedux,
  SiTailwindcss ,
  SiHtml5
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
      </Col>
      
    </Row>
  );
}

export default Techstack;
