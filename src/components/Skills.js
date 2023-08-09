import jvst from "../assets/img/jvst.png";
import ruby from "../assets/img/ruby.png";
import html from "../assets/img/html.webp";
import css from "../assets/img/css.webp";
import swift from "../assets/img/swift.png";
import bootstrap from "../assets/img/bootstrap.png";
import nodejs from "../assets/img/nodejs.png";
import reactico from "../assets/img/reactico.png";
import postgresqlico from "../assets/img/postgresqlico.png";
import rubyonrailsico from "../assets/img/rubyonrailsico.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are the Tech stack I've been constantly improving/learning.<br></br> I have experience in Frontend and Backend development, Web and Mobile development.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={jvst} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactico} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={ruby} alt="Image" />
                                <h5>Ruby</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={swift} alt="Image" />
                                <h5>Swift</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>Node.JS</h5>
                            </div>
                            <div className="item">
                                <img src={postgresqlico} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={rubyonrailsico} alt="Image" />
                                <h5>Ruby on Rails</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}