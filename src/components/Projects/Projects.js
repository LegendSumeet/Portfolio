import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/face.jpg";
import editor from "../../Assets/Projects/photo.png";
import chatify from "../../Assets/Projects/codehub.jpg";
import suicide from "../../Assets/Projects/takecare.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CodeHUB"
              description="CodeHub is a powerful Flutter-based mobile application that provides a centralized platform for accessing YouTube tech courses, tech bootcamps, internship information, and personalized roadmaps. It offers a seamless learning experience for tech enthusiasts, whether they are beginners starting their coding journey or experienced developers looking to expand their knowledge."
              ghLink="https://github.com/LegendSumeet/CodeHUBApp"
              demoLink={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Take Care"
              description="The Take Care app is designed to create the health awareness in the rural areas, Our main focus is on to give all necessary things reagarding to the health in the one app"
              ghLink="https://github.com/LegendSumeet/androidTakecare"
              demoLink="https://github.com/LegendSumeet/androidTakecare/blob/master/README.md#demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition"
              description="
              Face recognition on Android using TensorFlow Lite involves utilizing pre-trained deep learning models and the TensorFlow Lite framework to run the models efficiently on mobile devices.Additionally, done with handle permissions, camera access, UI design, and other app-specific functionalities."
              ghLink="https://github.com/LegendSumeet/Face-Recognition-android"
              demoLink={false}         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Photography Website"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/LegendSumeet/WebdevProject"
              demoLink="https://hsphotography.netlify.app/"
            />
          </Col>

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
