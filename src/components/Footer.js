import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/LOGO.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = ({ language }) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/walter-gómez-79ab3529b/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/WalyhU" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/waltergomez1_/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
