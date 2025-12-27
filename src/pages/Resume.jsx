import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MdDownload } from "react-icons/md";

import Particle from '../components/Particle'
import pdf from "../assets/6_Himanshu_Resume.pdf"

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://github.com/hemu2424/Personal-Portfolio/blob/main/src/assets/6_Himanshu_Resume.pdf`


const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            rel="noopener noreferrer"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <MdDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default Resume