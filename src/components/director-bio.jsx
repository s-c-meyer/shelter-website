/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

export default function DirectorBio ({ director }) {
  return (
    <Container className="mt-5">
      <Row className="d-flex">
        <Col md={4}>
          <Image src="https://placehold.co/600x400" alt="placeholder image" width="100%"/>
        </Col>
        <Col className="d-flex" md={8}>
          <Stack className="align-items-center justify-content-center" gap={3}>
            <div className="barlow-bold director-name">{director.name}</div>
            <div className="barlow-light">{director.description}</div>
          </Stack>
        </Col>
        <hr className="border-line" />

      </Row>
    </Container>
  )
}

