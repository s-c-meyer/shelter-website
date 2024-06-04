import DirectorBio from "./director-bio";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Board () {
  let director = {
    name: "Example Name",
    description: "This is an example description of one of the board members, possibly with an official title, or could also include a short description of the work they do for the organization"
  }

  return (
    <>
      <Container className="d-flex justify-content-center mt-4">
        <Row className="d-flex justify-content-center">
          <Col xs={12} sm={11}>
            <DirectorBio director={director} />
            <DirectorBio director={director} />
            <DirectorBio director={director} />
            <DirectorBio director={director} />
          </Col>
        </Row>
      </Container>
    </>
  )
}