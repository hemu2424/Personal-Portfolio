import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import MusicPlayer from "../assets/projects/MusicPlayer.png";
import TODO from "../assets/projects/TODO.png";
import project from "../assets/projects/project.jpeg";
import Ecommerce from "../assets/projects/Ecommerce.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TODO}
              isBlog={false}
              title="Task"
              description="Developed a dynamic TODO application with full CRUD functionality.
Implemented state management using React Hooks and real-time UI updates.
Stored tasks persistently using LocalStorage for better usability.
"
              ghLink="https://github.com/hemu2424/Task-Web"
              demoLink="https://www.google.com/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MusicPlayer}
              isBlog={false}
              title="Music Player"
              description="Built a browser-based music player with play, pause, next, and previous controls using JavaScript.
Designed a responsive and user-friendly UI using HTML and CSS."
              ghLink="https://github.com/hemu2424/Music-Player"
              demoLink="https://www.google.com/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E‑Commerce Website"
              description="Built a responsive e-commerce platform using React and Tailwind CSS with product listing and cart functionality.
Implemented state management using React Hooks for real-time UI updates.
Used LocalStorage to persist cart data and improve user experience.
."
              ghLink="https://github.com/hemu2424/E-commerce"
              demoLink="https://www.google.com/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Personal-Portfolio"
              description="Developed a responsive personal portfolio website using React.js to present projects, skills, and academic background.Built reusable functional components and managed UI structure for better code readability and maintainability.Styled the application using CSS with a mobile-first and user-friendly design approach.Integrated GitHub repository links and project descriptions for easy project navigation"
              ghLink="https://github.com/hemu2424/Personal-Portfolio"
              demoLink="https://www.google.com/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/hemu2424/"
              demoLink="https://www.google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/hemu2424/"
              demoLink="https://www.google.com/"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects