import React, { useState } from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import framenow from "../assets/selected-framing.png";
import frame from "../assets/frame.svg";

import { Container, Row, Col, Card, CardImg, CardImgOverlay } from "reactstrap";

const SecondPage = (props) => {
  const [fnow1, updateFnow1] = useState(image1);
  const [fnow2, updateFnow2] = useState(image2);
  const [fnow3, updateFnow3] = useState(image3);
  const [fnow4, updateFnow4] = useState(image4);
  const [fnow5, updateFnow5] = useState(image5);
  const [fnow6, updateFnow6] = useState(image6);

  return (
    <Container>
      <h1 className="text-center">What Are You Framing?</h1>
      <hr style={{ width: "20%", borderColor: "black" }} />
      <p className="text-center text-muted">
        Design a Custom Frame For Photos, Art And More.
      </p>
      <Row className="justify-content-around">
        <Col>
          <div>
            <span>
              <Card>
                <CardImg top width="100%" src={frame} alt="Card image cap" />
                <CardImgOverlay>
                  <CardImg
                    src={fnow1}
                    alt="Card image cap"
                    onMouseOver={() => updateFnow1(framenow)}
                    onMouseLeave={() => updateFnow1(image1)}
                  />
                </CardImgOverlay>
              </Card>
              Original Art
            </span>
          </div>
        </Col>
        <Col>
          <div>
            <span>
              <Card>
                <CardImg top width="100%" src={frame} alt="Card image cap" />
                <CardImgOverlay>
                  <CardImg
                    src={fnow2}
                    alt="Card image cap"
                    onMouseOver={() => updateFnow2(framenow)}
                    onMouseLeave={() => updateFnow2(image2)}
                  />
                </CardImgOverlay>
              </Card>
              Object
            </span>
          </div>
        </Col>
        <Col>
          <div>
            <span>
              <Card>
                <CardImg top width="100%" src={frame} alt="Card image cap" />
                <CardImgOverlay>
                  <CardImg
                    src={fnow3}
                    alt="Card image cap"
                    onMouseOver={() => updateFnow3(framenow)}
                    onMouseLeave={() => updateFnow3(image3)}
                  />
                </CardImgOverlay>
              </Card>
              Textile
            </span>
          </div>
        </Col>
        <Col>
          <div>
            <span>
              <Card>
                <CardImg top width="100%" src={frame} alt="Card image cap" />
                <CardImgOverlay>
                  <CardImg
                    src={fnow4}
                    alt="Card image cap"
                    onMouseOver={() => updateFnow4(framenow)}
                    onMouseLeave={() => updateFnow4(image4)}
                  />
                </CardImgOverlay>
              </Card>
              Jersey
            </span>
          </div>
        </Col>
        <Col>
          <div>
            <span>
              <Card>
                <CardImg top width="100%" src={frame} alt="Card image cap" />
                <CardImgOverlay>
                  <CardImg
                    src={fnow5}
                    alt="Card image cap"
                    onMouseOver={() => updateFnow5(framenow)}
                    onMouseLeave={() => updateFnow5(image5)}
                  />
                </CardImgOverlay>
              </Card>
              Photography
            </span>
          </div>
        </Col>
        <Col>
          <div>
            <span>
              <Card>
                <CardImg top width="100%" src={frame} alt="Card image cap" />
                <CardImgOverlay>
                  <CardImg
                    src={fnow6}
                    alt="Card image cap"
                    onMouseOver={() => updateFnow6(framenow)}
                    onMouseLeave={() => updateFnow6(image6)}
                  />
                </CardImgOverlay>
              </Card>
              Something Else
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SecondPage;
