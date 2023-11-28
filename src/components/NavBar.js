import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/LOGO.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

export const NavBar = ({ language, setLanguage }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo-navbar" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                {language === "en" ? "Home" : "Inicio"}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                {language === "en" ? "Skills" : "Habilidades"}
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                {language === "en" ? "Projects" : "Proyectos"}
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/walter-gómez-79ab3529b/"
                  target="_blank"
                >
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="https://github.com/WalyhU" target="_blank">
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a
                  href="https://www.instagram.com/waltergomez1_/"
                  target="_blank"
                >
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>
                    {language === "en" ? "Let's Connect" : "Contáctame"}
                  </span>
                </button>
              </HashLink>
              {/* Switch Language */}
              <div className="switch-language">
                {language === "en" ? (
                  <button onClick={() => setLanguage("es")}>
                    <span>
                      <ReactCountryFlag
                        countryCode="US"
                        svg
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        cdnSuffix="svg"
                        title="US"
                      /> EN
                    </span>
                  </button>
                ) : (
                  <button onClick={() => setLanguage("en")}>
                    <span>
                      <ReactCountryFlag
                        countryCode="GT"
                        svg
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        cdnSuffix="svg"
                        title="GT"
                       /> GT</span>
                  </button>
                )}
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
