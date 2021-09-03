import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_COOX from "../../assets/img/experience/coox.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_COOX}
                  alt="Deloitte logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Software Developer Intern
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    {/* <strong className="body-title-style ">
                      Full Stack Developer
                    </strong> */}
                    <strong>Technology:</strong> React JS, Next.js, Redux,
                    Bootstrap, JavaScript, TypeScript
                    <br />
                    <strong>Duration:</strong> May 2021 - July 2021
                    <br />
                    <strong> Description: </strong>
                    <ul className="text-left">
                      <li>
                        Developed a <strong>Booking Flow</strong> to view, book,
                        and pay chef for a particular cuisine and, dish.
                        Automated the flow using{" "}
                        <strong>React, Redux, TypeScript</strong> and,{" "}
                        <strong>Bootstrap</strong>.
                      </li>
                      <li>
                        Migrated the existing website to{" "}
                        <strong>Next.js</strong> for{" "}
                        <strong>server-side rendering</strong> and enhanced{" "}
                        <strong>SEO benefits</strong> thus increasing SEO index
                        from <strong>24</strong> to <strong>73</strong> and
                        website performance from <strong>64</strong> to{" "}
                        <strong>90</strong>.
                      </li>
                      <li>
                        Improved user experience by creating/organizing
                        different features like a profile page, reschedule the
                        booking, etc. Worked with popular react packages such as{" "}
                        <strong>Step Wizard, Moment.js</strong>.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
