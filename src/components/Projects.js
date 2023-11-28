import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = ({ language }) => {
  const projects_en = [
    {
      title: "POINT OF SALE SYSTEM",
      description: "Full Stack app for hardware store Python API, ReactJs",
      imgUrl: "https://imgur.com/3tmDX9U.png",
      url: "https://github.com/WalyhU/Punto-de-Venta-Ferreteria",
    },
    {
      title: "CUSTOMER MANAGEMENT SYSTEM",
      description: "Full Stack app for customer management NodeJS API, ReactJs",
      imgUrl: "https://imgur.com/QQF4OKc.png",
      url: "https://github.com/WalyhU/WebApp-Bienes-Raices-Cesar",
    },
    {
      title: "IA SOFTWARE",
      description: "Software for IA algorithms Python, C# and ReactJs",
      imgUrl: "https://imgur.com/80TtVIE.png",
      url: "https://github.com/WalyhU/GradeGenius",
    },
    {
      title: "SOCIAL NETWORK",
      description: "Social network for gamers NodeJS API, ReactJs",
      imgUrl: "https://imgur.com/nQsVLiV.png",
      url: "https://github.com/WalyhU/SOTOPIA",
    },
  ];

  const projects_es = [
    // Same url as above
    {
      title: "SISTEMA DE PUNTO DE VENTA",
      description: "Aplicación Full Stack para ferretería API Python, ReactJs",
      imgUrl: "https://imgur.com/3tmDX9U.png",
      url: "https://github.com/WalyhU/Punto-de-Venta-Ferreteria",
    },
    {
      title: "SISTEMA DE GESTIÓN DE CLIENTES",
      description:
        "Aplicación Full Stack para gestión de clientes API NodeJS, ReactJs",
      imgUrl: "https://imgur.com/QQF4OKc.png",
      url: "https://github.com/WalyhU/WebApp-Bienes-Raices-Cesar",
    },
    {
      title: "SOFTWARE DE IA",
      description: "Software para algoritmos de IA Python, C# y ReactJs",
      imgUrl: "https://imgur.com/80TtVIE.png",
      url: "https://github.com/WalyhU/GradeGenius",
    },
    {
      title: "RED SOCIAL",
      description: "Red social para gamers API NodeJS, ReactJs",
      imgUrl: "https://imgur.com/nQsVLiV.png",
      url: "https://github.com/WalyhU/SOTOPIA",
    },
  ];

  return (
    <section className="project" id="projects">
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
                  <h2>{language === "en" ? "Projects" : "Proyectos"}</h2>
                  <p>
                    {language === "en"
                      ? "Here are some of my projects, you can check more details on my GitHub."
                      : "Estos son algunos de mis proyectos, puedes ver más detalles en mi GitHub."}
                  </p>
                  <Row>
                    {language === "en"
                      ? projects_en.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })
                      : projects_es.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
