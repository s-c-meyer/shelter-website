import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export default function Contact () {
  const [selectValue, setSelectValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTextClick = (newSelectValue) => {
    setSelectValue(newSelectValue);
  }

  const handleButtonClick = () => setIsLoading(true);

  //will simulate a network request for the loading state of the submit button
  //This will later be removed in lieu of an actual request
  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if(isLoading) {
      simulateNetworkRequest().then(() => {
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <>
      <Container className="my-5">
        <Row className="d-flex justify-content-center my-5">
          <Col xs={9} lg={7} className="mb-5 mb-lg-0">
            <Stack className="align-items-center justify-content-center mt-4" gap={5}>
              <Row className="d-flex barlow-regular align-items-center">
                <Col xs={12} lg={2} className="d-flex justify-content-center"><img src="../src/assets/info-icon.png" width="128px" /></Col>
                <Col xs={12} lg={10} className="d-flex justify-content-center mt-3 mt-lg-0">
                  <span className="contact-text text-center text-lg-start">Interested in learning more about <span><a className="contact-text-flair" href="#ContactForm" onClick={() => handleTextClick("LearnMore")}>Manna Shelter</a></span>?</span>
                </Col>
              </Row>
              <Row className="d-flex barlow-regular align-items-center">
                <Col xs={12} lg={2} className="d-flex justify-content-center"><img src="../src/assets/volunteer-icon.png" width="128px" /></Col>
                <Col xs={12} lg={10} className="d-flex justify-content-center mt-3 mt-lg-0"><span className="contact-text text-center text-lg-start">Interested in <span><a className="contact-text-flair" href="#ContactForm" onClick={() => handleTextClick("Volunteer")}>Volunteering</a></span> your time or talents?</span></Col>
              </Row>
              <Row xs={12} className="d-flex barlow-regular align-items-center justify-content-center">
                <Col xs={12} lg={2} className="d-flex justify-content-center"><img src="../src/assets/board-member-icon.png" width="128px" /></Col>
                <Col xs={12} lg={10} className="d-flex justify-content-center mt-3 mt-lg-0"><span className="contact-text text-center text-lg-start">Do you want to join our <span><a className="contact-text-flair" href="#ContactForm" onClick={() => handleTextClick("BoardMember")}>Board of Directors</a></span>?</span></Col>
              </Row>
            </Stack>
          </Col>
          <Col xs={9} lg={3} className="align-content-center mt-5 mt-lg-0">
            <div className="contact-img-container">
              <img src="../src/assets/VolunteerStockPhoto.jpg" alt="Stock Photo of a Volunteer" width="100%"/>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <hr className="border-line mb-5" />
          <Col id="ContactForm" xs={9} className="mt-5 barlow-bold d-flex justify-content-center">
            <h1>We look forward to hearing from you!</h1>
          </Col>
        </Row>

        {/* Contact Form */}
        <Row className="mt-5 d-flex justify-content-center">
          <Col xs={12} lg={9} className="mt-4 mb-5">
            <Form>
              <FloatingLabel
                controlId="floatingName"
                label="Name"
                className="mb-4 barlow-regular"
              >
                <Form.Control type="text" placeholder="First Name Last Name" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email Address"
                className="mb-4 barlow-regular"
              >
                <Form.Control type="email" placeholder="example-email@gmail.com" />
              </FloatingLabel>
              <FloatingLabel 
                controlId="ContactReason"
                label="Reason for Contacting"
                className="mb-4 barlow-regular"
              >
                <Form.Select aria-label="Select Reason for Contacting" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                  <option value="LearnMore">Learn more about Manna Shelter</option>
                  <option value="Volunteer">I would like to learn more about volunteering with Manna Shelter</option>
                  <option value="BoardMember">I would like to learn more about being a member of Manna Shelter&apos;s board</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextArea"
                label="Message"
                className="mb-4 barlow-regular"
              >
                <Form.Control 
                  as="textarea" 
                  placeholder="Leave your message here"
                  style={{ height: '12rem' }}
                />
              </FloatingLabel>
              <div className="d-grid gap-2">
                <Button 
                  variant="primary" 
                  size="lg"
                  disabled={isLoading}
                  onClick={!isLoading ? handleButtonClick : null}
                >
                  {isLoading ? "Submitting..." : "Click to Submit"}
                </Button>

                {/* add an alert here? One that says it was successfully submitted and that we will get back to them ASAP.
                Could also use a modal instead to pop up and make it more obvious */}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}