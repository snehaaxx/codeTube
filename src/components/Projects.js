import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/prog5.jpg";
import projImg2 from "../assets/img/prog4.jpg";
import projImg3 from "../assets/img/prog3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Why Choose Us?",
      description: "Why should you even bother?",
      imgUrl: projImg1,
    },
    {
      title: "Web Development",
      description: 'What the "My College Companion" Advantage looks like?',
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Ace Your College</h2>
                <p>From expert assignment help and project assistance to personalized tutoring services, we've got you covered every step of the way.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Why Choose Us?</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">How it Works?</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <ProjectCard key={0} {...projects[0]}/>
                        <Col>
                          <h4 style={{textAlign: 'center', margin: '15px 0'}} className="buddy1">On Time Delivery </h4>
                          <p className="dsa">We understand the importance of deadlines, which is why we guarantee prompt delivery of your work</p>
                          <h4 style={{textAlign: 'center', margin: '15px 0'}} className="buddy2">Competitive Pricing </h4>
                          <p className="dsa">We offer premium quality services at affordable rates, ensuring that top-notch academic assistance is accessible to all.</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        <ProjectCard key={1} {...projects[1]}/>
                        <Col>
                          <h4 style={{textAlign: 'center', margin: '15px 0'}} className="buddy1">Dedicated WhatsApp Support</h4>
                          <p className="dsa">Our team is committed to ensure your queries are addressed promptly and effectively. </p>
                          <h4 style={{textAlign: 'center', margin: '15px 0'}} className="buddy2">Unlimited Revision </h4>
                          <p className="dsa">You get 100% customized work as per your requirements, we are always willing to accommodate.</p>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
