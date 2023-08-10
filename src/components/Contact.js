import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css/animate.min.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code == 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form
                    method="post"
                    action="https://forms.un-static.com/forms/e4ac917423ba0f9bd3f6d5d49484b941b93f01f6"
                  >
                    <div className="formcarry-block">
                      <label htmlFor="fc-generated-1-name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="fc-generated-1-name"
                        placeholder="Your first and last name"
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div className="formcarry-block">
                      <label htmlFor="fc-generated-1-email">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="fc-generated-1-email"
                        placeholder="john@doe.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div className="formcarry-block">
                      <label htmlFor="fc-generated-1-message">
                        Your message
                      </label>
                      <textarea
                        name="message"
                        id="fc-generated-1-message"
                        placeholder="Enter your message..."
                        autoComplete="off"
                        required
                      ></textarea>
                    </div>
                    <div className="formcarry-block">
                      <button type="submit">Send</button>
                    </div>
                    <div>
                      <p>
                        <small>
                          <center>
                            (Powered by
                            <a rel="nofollow" href="Un-static Forms">
                              Un-static Forms
                            </a>
                            )
                          </center>
                        </small>
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
