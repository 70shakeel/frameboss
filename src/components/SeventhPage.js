import React, { useState } from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import image71 from "../assets/71.png";
import image72 from "../assets/72.png";
import image73 from "../assets/73.svg";
import readMore from "../assets/read-more.png";
const SeventhPage = (props) => {
  const [rmore, updateRmore] = useState(image73);
  const [rmore1, updateRmore1] = useState(image73);
  return (
    <Container>
      <h1 className="text-center">Our Blog</h1>
      <hr style={{ width: "20%", borderColor: "black" }} />
      <p className="text-center text-muted">
        Our Countless Frame Types Are Loved By Global Frame Lovers. <br />
        Due To The Variety, Quality Yet Simplicity.
      </p>
      <Row>
        <Col className="justify-content-end" sm="3">
          <div>
            <span>
              <Card style={{ border: "0px" }}>
                <CardImg src={image71} alt="Card image cap" />
              </Card>
            </span>
          </div>
        </Col>
        <Col>
          <p className="text-muted">Category Blog</p>
          <h5>A Very Anthropologie Holiday with Jodie Harrison</h5>
          <p className="text-muted">By Admin 30/3/2020</p>
          <p className="text-muted">
            One of my favorite illustrators, Dan who goes by the creative name
            of Roach Graphics,...
          </p>
          <img
            src={rmore1}
            alt=""
            className="img-fluid"
            style={{ width: "50%" }}
            onMouseOver={() => updateRmore1(readMore)}
            onMouseLeave={() => updateRmore1(image73)}
          />
        </Col>
        <Col className="justify-content-end" sm="3">
          <div>
            <span>
              <Card style={{ border: "0px" }}>
                <CardImg src={image72} alt="Card image cap" />
              </Card>
            </span>
          </div>
        </Col>
        <Col>
          <p className="text-muted">Category Blog</p>
          <h5>A Very Anthropologie Holiday with Jodie Harrison</h5>
          <p className="text-muted">By Admin 30/3/2020</p>
          <p className="text-muted">
            One of my favorite illustrators, Dan who goes by the creative name
            of Roach Graphics,...
          </p>
          <img
            src={rmore}
            alt=""
            className="img-fluid"
            style={{ width: "50%" }}
            onMouseOver={() => updateRmore(readMore)}
            onMouseLeave={() => updateRmore(image73)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SeventhPage;
