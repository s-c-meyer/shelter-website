import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function Footer () {
  return (
    <>
      <Container style={{ padding: '0' }} fluid>
        <Row className="footer-container d-flex justify-content-center">
          <Col xs={12} lg={3} className="footer-text d-flex justify-content-center justify-content-lg-end mt-5">
           Manna Shelter
          </Col>
          <Col xs={12} lg={5} className="footer-text d-flex justify-content-center mt-3 mt-lg-5">
            East Saint Louis, IL, United States, 62220
          </Col>
          <Col xs={12} lg={3} className="footer-text d-flex justify-content-center justify-content-lg-start mt-3 mt-lg-5">
            Ambassadors of Love
          </Col>
        </Row>
        <Row className="footer-container pt-5">
          <Col xs={12} className="d-flex justify-content-center">
            <a href="https://www.facebook.com/profile.php?id=61558994361378" target="_blank">
              <button role="link" className="footer-btn">
                <i className="bi bi-facebook" style={{ fontSize: "2rem" }}></i>
              </button>
            </a>
            <button className="footer-btn">
              <i className="bi bi-telephone-inbound-fill" style={{ fontSize: "2rem" }}></i>
            </button>
            <button className="footer-btn">
              <i className="bi bi-envelope-arrow-down-fill" style={{ fontSize: "2rem" }}></i>
            </button>
          </Col>
        </Row>
        <Row className="footer-container pt-5">
          <Col className="footer-text">
            A special thank you to our sponsors:
          </Col>
        </Row>
        <Row className="footer-container d-flex justify-content-center pt-4 pb-5">
          <Col xs={12} lg={6} xl={3} className="d-flex justify-content-center mt-4">
            <Image src="https://placehold.co/300x200" alt="Sponsor Footer Image" />
          </Col>
          <Col xs={12} lg={6} xl={3} className="d-flex justify-content-center mt-4">
            <Image src="https://placehold.co/300x200" alt="Sponsor Footer Image" />
          </Col>
          <Col xs={12} lg={6} xl={3} className="d-flex justify-content-center mt-4">
            <Image src="https://placehold.co/300x200" alt="Sponsor Footer Image" />
          </Col>
          <Col xs={12} lg={6} xl={3} className="d-flex justify-content-center mt-4">
            <Image src="https://placehold.co/300x200" alt="Sponsor Footer Image" />
          </Col>
        </Row>
      </Container>
    </>
  )
}