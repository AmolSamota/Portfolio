import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_COOX from "../../assets/img/experience/coox.png";
import L_NW from "../../assets/img/experience/nw.jpg";
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
                  alt="logo"
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
                    <strong>Duration:</strong> May 2021 - July 2021
                    <ul className="text-left">
                      <li>
                        <strong>Exposure:</strong> Frontend Development,
                        Migration, API Integration, SEO
                      </li>
                      <li>
                        <strong>Technology:</strong> React JS, Next.js, Redux
                      </li>
                      <li>
                        <strong> Description: </strong>{" "}
                        <ul>
                          <li>
                            Developed a <strong>Booking Flow</strong> to view,
                            book, and pay chef for a particular cuisine and,
                            dish. Automated the flow using{" "}
                            <strong>React, Redux, TypeScript</strong> and,{" "}
                            <strong>Bootstrap</strong>.
                          </li>
                          <li>
                            Migrated the existing website to{" "}
                            <strong>Next.js</strong> for{" "}
                            <strong>server-side rendering</strong> and enhanced{" "}
                            <strong>SEO benefits</strong> thus increasing SEO
                            index from <strong>24</strong> to{" "}
                            <strong>73</strong> and website performance from{" "}
                            <strong>64</strong> to <strong>90</strong>.
                          </li>
                          <li>
                            Improved user experience by creating/organizing
                            different features like a profile page, reschedule
                            the booking, etc. Worked with popular react packages
                            such as <strong>Step Wizard, Moment.js</strong>.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

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
                  src={L_NW}
                  alt="logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Full Stack Intern
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong>Duration:</strong> May 2020 - July 2020
                    <ul className="text-left">
                      <li>
                        <strong>Exposure:</strong> rontend Development, Backend
                        Development, Deployment
                      </li>
                      <li>
                        <strong>Technology:</strong> React JS, Node JS, Mongo
                        DB, Express.js, Redux
                      </li>
                      <li>
                        <strong> Description: </strong>{" "}
                        <ul>
                          <li>
                            Developed a flow in <strong>Reactjs</strong> for
                            users to purchase different organic products. Built
                            APIs with <strong>Expressjs</strong>
                            and <strong>Nodejs</strong> for managing data of
                            products & orders in <strong>MongoDB</strong> atlas
                            with <strong>mongoose</strong> ORM.
                          </li>
                          <li>
                            Added <strong>token-based</strong> user
                            authentication and used <strong>bcryptjs</strong>{" "}
                            for hashing the password.
                          </li>
                          <li>
                            Built an <strong>admin panel</strong> to{" "}
                            <strong>
                              create, view, categorize, and delete
                            </strong>{" "}
                            different users, products, & orders.
                          </li>
                          <li>
                            Integrated features such as{" "}
                            <strong>Google Maps API, Socket.io</strong> for an
                            enhanced user experience.
                          </li>
                        </ul>
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
