import React, { useState } from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import image51 from "../assets/51.png";
import image52 from "../assets/52.svg";
import image53 from "../assets/53.svg";
import image54 from "../assets/54.svg";
import image55 from "../assets/55.svg";
import image56 from "../assets/56.svg";
import image57 from "../assets/57.svg";
import image3 from "../assets/start-framing-btn.png";
const FifthPage = (props) => {
  const [frame, updateFrame] = useState(image57);
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col className="justify-content-start" sm="11">
              <h1>Why Choose Us</h1>
              <p className="text-muted">
                Our Countless Frame Types Are Loved By Global Frame Lovers, Due
                To The variety, Quality Yet Simplicity.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <Row className="justify-content-around">
                <Col sm="4">
                  <img src={image53} alt="" />
                </Col>
                <Col>
                  <h5>Free Shipping</h5>
                  <p className="text-muted">
                    You're here to buy art, not cardboard boxes.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col sm="6">
              <Row className="justify-content-around">
                <Col sm="4">
                  <img src={image54} alt="" />
                </Col>
                <Col>
                  <h5>Free Design Advice</h5>
                  <p className="text-muted">
                    You're here to buy art, not cardboard boxes.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col sm="6">
              <Row className="justify-content-around">
                <Col sm="4">
                  <img src={image55} alt="" />
                </Col>
                <Col>
                  <h5>Everyday Low Price</h5>
                  <p className="text-muted">
                    You're here to buy art, not cardboard boxes.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col sm="6">
              <Row className="justify-content-around">
                <Col sm="4">
                  <img src={image56} alt="" />
                </Col>
                <Col>
                  <h5>Free Returns</h5>
                  <p className="text-muted">
                    Don't adore it? Return it for free within 45 days.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <p> </p>
          <Col className="justify-conent-center">
            <img
              src={frame}
              className="img-fluid"
              style={{ width: "40%" }}
              src={frame}
              alt=""
              onMouseOver={() => updateFrame(image3)}
              onMouseLeave={() => updateFrame(image57)}
              onFocus={() => updateFrame(image3)}
            />
          </Col>
        </Col>
        <Col className="justify-content-end" sm="4">
          <div>
            <span>
              <Card style={{ boxShadow: "0px 0px 0px 0", border: "0px" }}>
                <CardImg
                  style={{ marginLeft: "-10%" }}
                  top
                  width="100%"
                  src={image52}
                  alt="Card image cap"
                />

                <CardImg
                  className=".z-depth-0 noshadow"
                  style={{ marginTop: "-80%", border: "0px" }}
                  src={image51}
                  alt="Card image cap"
                />
              </Card>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FifthPage;
