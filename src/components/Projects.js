import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ggameverse from "../assets/img/ggameverse.gif";
import gpokitinder from "../assets/img/gpokitinder.gif";
import gtbh from "../assets/img/gtbh.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css/animate.min.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Poki Tinder",
      description: "React / RubyOnRails Click to see files",
      imgUrl: gpokitinder,
      link: "https://github.com/henrike32/PokiTinder",
    },
    {
      title: "GameVerse",
      description: "React / RubyOnRails Click to see files",
      imgUrl: ggameverse,
      link: "https://github.com/orgs/Yuhje-Gaming/repositories",
    },
    {
      title: "TBH Apartment",
      description: "React / RubyOnRails Click to see files",
      imgUrl: gtbh,
      link: "https://github.com/henrike32/tbhenri",
    },
  ];

  const ProjectCard = ({ title, description, imgUrl, link }) => {
    return (
      <Col size={12} sm={6} md={4}>
        <a href={link} className="proj-link" target="_blank">
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </a>
      </Col>
    );
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are my previous and ongoing projects I've been working
                    on, their respective animation and Tech Stack used can be
                    shown when you hover on each card, I will be adding more improvements soon.
                  </p>
                  <div className="project-cards-spacing">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
