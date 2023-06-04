import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sumeet Vishwakarma </span>
            from <span className="purple"> Mumbai, India.</span>
            <br /> I am a final year student pursuing an Bachelor's degree
            in Information Technology at University of Mumbai.
            <br />
            Additionally, I am currently Flutter Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing BGMI
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "learn to do Stuff's!"{" "}
          </p>
          <footer className="blockquote-footer">Sumeet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
