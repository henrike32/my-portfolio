import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ggameverse from "../assets/img/ggameverse.gif";
import gpokitinder from "../assets/img/gpokitinder.gif"
import gtbh from "../assets/img/gtbh.gif"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css/animate.min.css';
import TrackVisibility from 'react-on-screen';

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
      link:"https://github.com/orgs/Yuhje-Gaming/repositories"
    },
    {
      title: "TBH Apartment",
      description: "React / RubyOnRails Click to see files",
      imgUrl: gtbh,
      link: "https://github.com/henrike32/tbhenri",
    },
    // {
    //   title: "Project 4",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Project 5",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Project 6",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are my Ongoing an previous projects I've been working on, their respective animation and Tech Stack used can be shown when you click on each animation.</p>
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects Showcase</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"></Nav.Link>
                    </Nav.Item> */}
                  {/* </Nav> */}
                  {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    <Tab.Pane eventKey="first">
                     
                     
                    </Tab.Pane> */}
                    <div>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </div>
                      {/* <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane> */} 
                    
                  {/* </Tab.Content> */}
                {/* </Tab.Container> */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

