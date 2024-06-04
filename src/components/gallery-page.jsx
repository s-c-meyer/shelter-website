import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

export default function Gallery () {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={5}>
            <Image className="gallery-img" src="https://placehold.co/600x400" alt="Toys 4 Tots Image" />
            <p className="gallery-title">Toys 4 Tots</p>
            <p className="gallery-subtext">Every Christmas we give back to local families to make their holidays special</p>       
          </Col>
          <Col xs={12} lg={5}>
            <Image className="gallery-img" src="https://placehold.co/600x400" alt="Toys 4 Tots Image" />
            <p className="gallery-title">Back 2 School Giveaway</p>
            <p className="gallery-subtext">At the skating rink in East St. Louis every August</p>
          </Col>
        </Row>
        <Row style={{ marginTop: "15rem", marginBottom: "10rem" }} className="d-flex justify-content-center">
          <Col xs={12} lg={6}>
            <Image className="gallery-img" src="https://placehold.co/600x400" alt="love2giv Image" />
          </Col>
          <Col xs={12} lg={5}>
            <Stack gap={3} className="align-items-center justify-content-center">
              <div className="gallery-title-option2">Love2giv</div>
              <div style={{ padding: "2rem" }} className="gallery-subtext-option2">We give hygiene products and information out to help keep the homeless cooled off in the summer</div>
              <div style={{ padding: "2rem" }} className="gallery-subtext-option2">This is a second option for how we can do the pictures on this page, the pictures can all be on the left side down the page, or they can alternate left and right as you go down the page</div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}