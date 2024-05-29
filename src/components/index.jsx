import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function Index () {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex m-3">
          <Col xl={4} lg={12} className="d-flex justify-content-center px-3">
            <Image src="../src/assets/Manna_Shelter_Logo.jpg" rounded alt="Manna Shelter Logo" width="100%"/>
          </Col>
          <Col xl={8} lg={12} className="d-flex flex-wrap justify-items-center align-content-center index-text px-5"> 
            Manna Shelter is a non-profit organization that provides transitional housing for those who are homeless, day care for teen mothers in school and working adults, family and individual therapy, and financial counseling.
          </Col>
        </Row>
      </Container>
    </>
  )
}