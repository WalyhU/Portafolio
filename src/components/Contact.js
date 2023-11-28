import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = ({ language }) => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const initialTextButton = "Send";
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(initialTextButton);
  const [status, setStatus] = useState({});

  useEffect(() => {
    // Change language of the button
    if (language === "en") {
      setButtonText("Send");
    } else {
      setButtonText("Enviar");
    }
  }, [language]);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    language === "en" ? setButtonText("Sending...") : setButtonText("Enviando...");
    let response = await fetch("https://formspree.io/f/mpzggjqw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    language === "en"
      ? setButtonText("Send")
      : setButtonText("Enviar");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.ok) {
      setStatus({
        succes: true,
        message: "Message sent successfully",
        color: "success",
      });
      language === "en"
        ? setButtonText("Sent")
        : setButtonText("Enviado");
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
        color: "danger",
      });
      language === "en"
        ? setButtonText("Something went wrong")
        : setButtonText("Algo salió mal");
    }
    setTimeout(() => {
      setStatus({});
      setButtonText("Send");
    }, 5000);
  };

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
                  <h2>
                    {language === "en" ? "Get in touch" : "Ponte en contacto"}
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder={language === "en" ? "First Name" : "Nombre"}
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder={language === "en" ? "Last Name" : "Apellido"}
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder={language === "en" ? "Email" : "Correo Electrónico"}
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder={language === "en" ? "Phone" : "Teléfono"}
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder={language === "en" ? "Message" : "Mensaje"}
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit" className={status.color}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
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
