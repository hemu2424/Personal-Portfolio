import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import portfolio from "../assets/projects_image/portfolio.png";
import MusicPlayer from "../assets/projects_image/MusicPlayer.png";
import TODO from "../assets/projects_image/TODO.png";
import project from "../assets/projects_image/project.jpeg";
import Ecommerce from "../assets/projects_image/Ecommerce.png";
import chatting from "../assets/projects_image/chatting.png"

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
              imgPath={portfolio}
              isBlog={false}
              title="Personal-Portfolio"
              description="Developed a responsive personal portfolio website using React.js to present projects, skills, and academic background.Built reusable functional components and managed UI structure for better code readability and maintainability.Styled the application using CSS with a mobile-first and user-friendly design approach.Integrated GitHub repository links and project descriptions for easy project navigation"
              ghLink="https://github.com/hemu2424/Personal-Portfolio"
              demoLink="https://www.google.com/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatting}
              isBlog={false}
              title="chatting website"
              description="• Developed a real-time chat application featuring user registration, login, logout, and authenticated home pages
• Implemented backend using MVC architecture, JWT authentication, Cookies, and Socket.io for real-time
communication, with data stored in MongoDB using multiple schemas
• Built a responsive and interactive UI using React, managed global state with Redux, and styled components using
Tailwind CSS and DaisyUI; implemented features such as search, read, and write operations"
              ghLink="https://github.com/hemu2424/Chatting-web"
              demoLink="https://www.google.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
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