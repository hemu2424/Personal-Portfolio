import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  SiGithub,
  SiLinkedin,
  SiLeetcode
} from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://github.com/hemu2424"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <SiGithub />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <RiTwitterXFill />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.linkedin.com/in/himanshu-poriya-1539282b1"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <SiLinkedin />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://leetcode.com/u/hemu24/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social