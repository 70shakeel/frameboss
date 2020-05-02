import React, { useState } from "react";
import image7 from "../assets/7.png";
import image21 from "../assets/21.png";
import image22 from "../assets/22.png";
import image23 from "../assets/23.png";
import image24 from "../assets/24.png";
import image25 from "../assets/25.png";
import image26 from "../assets/26.png";
import sf from "../assets/start-framing.png";
import atc from "../assets/add-to-cart.png";
import frame from "../assets/frame.svg";
import { MDBView } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

import { Container, Row, Col, Card, CardImg, CardImgOverlay } from "reactstrap";

const ThirdPage = (props) => {
  const [stframe1, updateStframe1] = useState(image21);
  const [stframe2, updateStframe2] = useState(image23);
  const [stframe3, updateStframe3] = useState(image25);
  const [adcart1, updateAdcart1] = useState(image22);
  const [adcart2, updateAdcart2] = useState(image24);
  const [adcart3, updateAdcart3] = useState(image26);
  return (
    <Container>
      <h1 className="text-center">Feature Product</h1>
      <hr style={{ width: "20%", borderColor: "black" }} />
      <p className="text-center text-muted">
        Design a Custom Frame For Photos, Art And More.
      </p>
      <Row className="justify-content-around">
        <Col sm="4" className="justify-content-around">
          <div>
            <span>
              <Card>
                <MDBView hover zoom>
                  <CardImg
                    className="view overlay zoom"
                    top
                    width="100%"
                    src={image7}
                    alt="Card image cap"
                  />
                </MDBView>
              </Card>
            </span>
          </div>
        </Col>
        <Col>
          <Col>
            <div>
              <span>
                <Card>
                  <CardImg top width="100%" src={frame} alt="Card image cap" />
                  <CardImgOverlay>
                    <CardImg
                      src={stframe1}
                      alt="Card image cap"
                      onMouseLeave={() => updateStframe1(image21)}
                      onMouseOver={() => updateStframe1(sf)}
                    />
                  </CardImgOverlay>
                </Card>
                Dover
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
                      src={adcart1}
                      alt="Card image cap"
                      onMouseLeave={() => updateAdcart1(image22)}
                      onMouseOver={() => updateAdcart1(atc)}
                    />
                  </CardImgOverlay>
                </Card>
                Mercer
              </span>
            </div>
          </Col>
        </Col>
        <Col>
          <Col>
            <div>
              <span>
                <Card>
                  <CardImg top width="100%" src={frame} alt="Card image cap" />
                  <CardImgOverlay>
                    <CardImg
                      src={stframe2}
                      alt="Card image cap"
                      onMouseLeave={() => updateStframe2(image23)}
                      onMouseOver={() => updateStframe2(sf)}
                    />
                  </CardImgOverlay>
                </Card>
                Marquette
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
                      src={adcart2}
                      alt="Card image cap"
                      onMouseLeave={() => updateAdcart2(image24)}
                      onMouseOver={() => updateAdcart2(atc)}
                    />
                  </CardImgOverlay>
                </Card>
                Everett
              </span>
            </div>
          </Col>
        </Col>
        <Col>
          <Col>
            <div>
              <span>
                <Card>
                  <CardImg top width="100%" src={frame} alt="Card image cap" />
                  <CardImgOverlay>
                    <CardImg
                      src={stframe3}
                      alt="Card image cap"
                      onMouseLeave={() => updateStframe3(image25)}
                      onMouseOver={() => updateStframe3(sf)}
                    />
                  </CardImgOverlay>
                </Card>
                Wren
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
                      src={adcart3}
                      alt="Card image cap"
                      onMouseLeave={() => updateAdcart3(image26)}
                      onMouseOver={() => updateAdcart3(atc)}
                    />
                  </CardImgOverlay>
                </Card>
                Mandalay
              </span>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ThirdPage;
