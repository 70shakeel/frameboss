import React, { useState } from "react";
import { Container, Row, Col, Card, CardImg, CardImgOverlay } from "reactstrap";
import image1 from "../assets/3480373.png";
import image2 from "../assets/57.svg";
import image3 from "../assets/start-framing-btn.png";
import prev from "../assets/prev-btn.svg";
import next from "../assets/next-btn.svg";

const FirstPage = (props) => {
  const [frame, updateFrame] = useState(image2);
  return (
    <div>
      <Container>
        <Row>
          <Col sm="6">
            <Card>
              <CardImg top width="100%" src={image1} alt="Card image cap" />
              <CardImgOverlay>
                <Col className="justify-content-end">
                  <CardImg
                    style={{
                      width: "12%",
                      height: "12%",
                      marginTop: "73%",
                      marginLeft: "96%",
                    }}
                    src={prev}
                    alt="Card image cap"
                  />
                </Col>
                <Col>
                  <CardImg
                    style={{ width: "12%", height: "12%", marginLeft: "96%" }}
                    src={next}
                    alt="Card image cap"
                  />
                </Col>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col>
            <div className="justify-content-around">
              <Container style={{ marginTop: "15%" }}>
                <Row>
                  <Col>
                    <h1 className="display-5">
                      A NEW APPROACH TO CUSTOM FRAME
                    </h1>
                    <Row>
                      <Col
                        sm="1"
                        style={{
                          borderLeft: "3px solid black",
                          height: "100px",
                          marginLeft: "3%",
                        }}
                      ></Col>
                      <Col>
                        <p
                          className="text-start"
                          style={{ marginLeft: "-10%", marginTop: "10%" }}
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </Col>
                      <Col
                        sm="1"
                        style={{ marginRight: "22%", marginTop: "-10%" }}
                      >
                        <p
                          className="text-muted"
                          style={{
                            textOrientation: "mixed",
                            writingMode: "vertical-rl",
                          }}
                        >
                          FACEBOOK
                        </p>
                        <p
                          className="text-muted"
                          style={{
                            textOrientation: "mixed",
                            writingMode: "vertical-rl",
                          }}
                        >
                          INSTAGRAM
                        </p>
                        <p
                          className="text-muted"
                          style={{
                            textOrientation: "mixed",
                            writingMode: "vertical-rl",
                          }}
                        >
                          TWITTER
                        </p>
                      </Col>
                    </Row>
                    <Col>
                      <img
                        src={frame}
                        alt=""
                        className="img-fluid"
                        style={{ marginTop: "-25%", width: "50%" }}
                        onMouseOver={() => updateFrame(image3)}
                        onMouseLeave={() => updateFrame(image2)}
                        onFocus={() => updateFrame(image3)}
                      />
                    </Col>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstPage;
