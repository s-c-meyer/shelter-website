import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { useEffect } from "react";

export default function Index() {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('value-row-transition');
          return;
        }
      });
    });
  
    const rows = document.querySelectorAll('.value-row');
    rows.forEach((element) => observer.observe(element));
  }, [])

  return (
    <>
      <Container className="my-5">
        <Row className="d-flex justify-content-center mb-5 mt-5 mx-3">
          <Col xl={4} lg={12} className="d-flex justify-content-center px-3">
            <Image style={{ maxWidth: "35rem" }} src="../src/assets/Manna_Shelter_Logo.jpg" rounded alt="Manna Shelter Logo" width="100%" />
          </Col>
          <Col xl={7} lg={12} className="d-flex flex-wrap justify-items-center align-content-center index-text px-5 mt-4 mt-xl-0">
            Manna Shelter is a non-profit organization that provides transitional housing for those who are homeless, day care for teen mothers in school and working adults, family and individual therapy, and financial counseling.
          </Col>
        </Row>

        <Row className="mission-container d-flex justify-content-center">
          <Col xs={10} className="d-flex justify-content-center index-text-title">
            Our Mission
          </Col>
          <Col xs={10} className="d-flex justify-content-center index-text">
            <p className="barlow-regular-italic">Leading and serving as ambassadors by transforming lives and situations that are facing hunger, homelessness, addiction, and trauma in all areas of their lives.</p>
          </Col>
          <hr style={{ width: "80% "}} className="border-line mb-5" />
          <Col xs={10} className="d-flex justify-content-center index-text-title">
            Our Vision
          </Col>
          <Col xs={10} className="d-flex justify-content-center index-text">
            <p className="barlow-regular-italic">Saving lives while saving our city</p>
          </Col>
        </Row>

        {/* This is a Row for the Values, S E R V E */}
        <Row className="pt-2 pt-lg-5 value-container">
          <Col>
            {/* Stack containing all of the Values */}
            <Stack gap={5}> 
              <Row className="d-flex barlow-regular align-items-center justify-content-center value-row value-subtext-container">
                <Col xs={12} lg={3} className="value-title"><span className="value-text-title">S</span><span className="value-text">erving</span></Col>
                <Col xs={12} lg={7}>
                  <Stack gap={3}>
                    <div className="value-subtext">
                      Serving the community, clients, and each other by following Christ&apos;s example of Servant-Leadership
                    </div>
                    <div className="value-subtext">
                      &quot;<span className="barlow-regular-italic">Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain</span>&quot; - 1 Corinthians 15:58 
                    </div>
                  </Stack>
                </Col>
              </Row>
              <Row className="d-flex barlow-regular align-items-center justify-content-center value-row">
                <Col xs={12} lg={3} className=" value-title"><span className="value-text-title">E</span><span className="value-text">nable</span></Col>
                <Col xs={12} lg={7}>
                  <Stack gap={3}>
                    <div className="value-subtext">
                      We will make sure to invest in you and ourselves spiritual, personal, and professional empowerment for a successful HOLY living
                    </div>
                    <div className="value-subtext">
                      &quot;<span className="barlow-regular-italic">He gives power to the weak and strength to the powerless!</span>&quot; - Isaiah 40:29 
                    </div>
                  </Stack>
                </Col>
              </Row>
              <Row className="d-flex barlow-regular align-items-center justify-content-center value-row">
                <Col xs={12} lg={3} className="value-title"><span className="value-text-title">R</span><span className="value-text">epair</span></Col>
                <Col xs={12} lg={7}>
                  <Stack gap={3}>
                    <div className="value-subtext">
                      Letting God repair your life with the Holy essentials you need for a better productive Christian life
                    </div>
                    <div className="value-subtext">
                      &quot;<span className="barlow-regular-italic">Return to your fortress, you prisoners of hope; even now I announce that I will restore twice as much to you.</span>&quot; - Zechariah 9:12 
                    </div>
                  </Stack>
                </Col>
              </Row>
              <Row className="d-flex barlow-regular align-items-center justify-content-center value-row">
                <Col xs={12} lg={3} className="value-title"><span className="value-text-title">V</span><span className="value-text">alue</span></Col>
                <Col xs={12} lg={7}>
                  <Stack gap={3}>
                    <div className="value-subtext">
                      Letting God show us the value and price he has paid for our life, that the power he has used to save us from sin, we also have power to overcome every trial or tribulation that comes in your life
                    </div>
                    <div className="value-subtext">
                      &quot;<span className="barlow-regular-italic">He gives power to the weak and strength to the powerless!</span>&quot; - Isaiah 40:29 
                    </div>
                  </Stack>
                </Col>
              </Row>
              <Row className="d-flex barlow-regular align-items-center justify-content-center value-row">
                <Col xs={12} lg={4} className="value-title"><span className="value-text-title">E</span><span className="value-text">mpowerment</span></Col>
                <Col xs={12} lg={6}>
                  <Stack gap={3}>
                    <div className="value-subtext">
                      We will power you and ourselves everyday with the powerful word of God so you will be able to use the living word when you need it over circumstances
                    </div>
                    <div className="value-subtext">
                      &quot;<span className="barlow-regular-italic">For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart</span>&quot; - Hebrews 4:12 
                    </div>
                  </Stack>
                </Col>
              </Row>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}