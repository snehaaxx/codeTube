import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import whatsapp from "../assets/img/whatsapp.png";
import email from "../assets/img/email.png";
import { Nav} from "react-bootstrap";

export const Footer = () => {

    const brochureLink = "https://drive.google.com/file/d/1w4o_fYLo9sm3rY0SvN5T8VqM_VOnRMB4/view?usp=sharing";
    const webBootcampBrochureLink = "https://drive.google.com/file/d/1fLCuBn2MtheVrWvFXAb-Tk4L1dqaDADs/view?usp=sharing";
    const dsaBootcampBrochureLink = "https://drive.google.com/file/d/1Eif1vTVuJb_y_4WAcmNfXA1bQmtRF4Kd/view?usp=sharing";
    const whatsappLink = "https://api.whatsapp.com/send?phone=917439743207&text=Hi%2C%20I%20can%20across%20My%20College%20Companion%20through%20your%20website%20and%20I%20am%20interested%20in...";


  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm />  */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <div className="footer-heading">
            <h3>My College <span id = "buddy">Companion</span></h3>
            </div>
            <Nav className="ms-auto">
              <div className="footer-pdfs">
              <a href="#home" className="footlinks">Home</a> <br/>
              <a href="#skills" className="footlinks">Services</a> <br/>
              <a href="#projects" className="footlinks">Features</a>
              </div>
            </Nav>
            {/* <div className="footer-pdfs">
            <button className="footlinks" onClick={() => window.open(`${brochureLink}`, '_blank')}>Brochure</button> <br/>
            <button className="footlinks" onClick={() => window.open(`${webBootcampBrochureLink}`, '_blank')}>Web Dev Bootcamp</button> <br/>
            <button className="footlinks" onClick={() => window.open(`${dsaBootcampBrochureLink}`, '_blank')}>Data Structures & Algorithms Bootcamp</button>
            </div> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-parent">
            <div className="social-icon">
              <a className="social-media-links" href="mailto:mycollegecompanion.services@gmail.com" target="_blank"><img src={email} alt="Icon" /></a>
              <a className="social-media-links" href={whatsappLink} target="_blank"><img src={whatsapp} alt="Icon" /></a>
              <a className="social-media-links" href="https://www.instagram.com/mycollegecompanion/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
            <p>Mail Us: <a id="mailID" href="mailto:mycollegecompanion.services@gmail.com">mycollegecompanion.services@gmail.com</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
