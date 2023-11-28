import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle, Github, Linkedin } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ({ language }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Desktop Developer", "Mobile Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">
                  {language === "en" ? "Welcome to my portfolio" : "Bienvenido a mi portafolio"}
                </span>
                <h1>
                  {language === "en" ? "Hi! I'm " : "¡Hola! Soy "}{`Walter `}
                   <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Desktop Developer", "Mobile Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    {language === "en" ?
                    "Hello! I’m Walter, a Full Stack Developer with 3 years of experience in creating applications. My goal is to apply my skills in supporting and maintaining existing and new applications, and in integrating modules for the creation of final versions of computer systems. Explore my portfolio to learn more about my work!"
                    :
                    "¡Hola! Soy Walter, un desarrollador Full Stack con 3 años de experiencia en la creación de aplicaciones. Mi objetivo es aplicar mis habilidades en el soporte y mantenimiento de aplicaciones existentes y nuevas, y en la integración de módulos para la creación de versiones finales de sistemas informáticos. ¡Explore mi portafolio para conocer más sobre mi trabajo!"
                    }
                    </p>
                  <Col>
                    <Github
                      className="connection"
                      size={40}
                      onClick={() => window.open('https://github.com/WalyhU', '_blank')}
                    />
                    <Linkedin
                      className="connections"
                      size={40}
                      onClick={() => window.open('https://www.linkedin.com/in/walter-gómez-79ab3529b/', '_blank')}
                    />
                  </Col>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
