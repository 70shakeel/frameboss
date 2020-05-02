import React from "react";
import image31 from "../assets/31.png";
import image32 from "../assets/32.png";
import image33 from "../assets/33.png";
import image34 from "../assets/34.png";
import { MDBView } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

import { Container, Row, Col, Card, CardImg } from "reactstrap";

const FourthPage = (props) => {
  return (
    <Container>
      <h1 className="text-center">Our Impressive Works</h1>
      <hr style={{ width: "20%", borderColor: "black" }} />
      <p className="text-center text-muted">
        Design a Custom Frame For Photos, Art And More.
      </p>
      <Row>
        <Col sm="6">
          <div>
            <span>
              <Card>
                <MDBView hover zoom>
                  <CardImg
                    top
                    width="100%"
                    src={image31}
                    alt="Card image cap"
                  />
                </MDBView>
              </Card>
            </span>
          </div>
        </Col>

        <Col sm="6">
          <Row>
            <Col>
              <div>
                <span>
                  <Card>
                    <MDBView hover zoom>
                      <CardImg src={image32} alt="Card image cap" />
                    </MDBView>
                  </Card>
                </span>
              </div>
            </Col>

            <Col>
              <div>
                <span>
                  <Card>
                    <MDBView hover zoom>
                      <CardImg src={image33} alt="Card image cap" />
                    </MDBView>
                  </Card>
                </span>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div>
                <span>
                  <Card>
                    <MDBView hover zoom>
                      <CardImg src={image34} alt="Card image cap" />
                    </MDBView>
                  </Card>
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FourthPage;
