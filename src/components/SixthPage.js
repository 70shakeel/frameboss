import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardImgOverlay,
} from "reactstrap";
import image61 from "../assets/61.png";
import image52 from "../assets/52.svg";
import image62 from "../assets/62.svg";
import image63 from "../assets/63.svg";
import image64 from "../assets/64.svg";
import image65 from "../assets/65.svg";
const SixthPage = (props) => {
  return (
    <Container>
      <h1 className="text-center">We Love Our Client</h1>
      <hr style={{ width: "20%", borderColor: "black" }} />
      <p className="text-center text-muted">
        Design a Custom Frame For Photos, Art And More.
      </p>
      <Row>
        <Col className="justify-content-end" sm="3">
          <div>
            <span>
              <Card style={{ boxShadow: "0px 0px 0px 0", border: "0px" }}>
                <CardImg
                  style={{ marginLeft: "15%" }}
                  top
                  width="100%"
                  src={image52}
                  alt="Card image cap"
                />

                <CardImg
                  style={{ marginTop: "-80%", border: "0px" }}
                  src={image61}
                  alt="Card image cap"
                />
              </Card>
            </span>
          </div>
        </Col>
        <Col style={{ marginLeft: "2%", marginTop: "6%" }}>
          <h5>JEREMY CROUSE</h5>
          <p className="text-muted">(Graphic Designer)</p>
          <p className="text-muted">
            <img src={image62} alt="" />I was looking a way to save my
            University Degree from getting damaged while showing to others and I
            found Frame Boss's Diploma framing options. I have got my degree
            framed in stylish design which is also adding beauty to my room.{" "}
            <img src={image63} alt="" />
          </p>
          <p>
            <img src={image64} alt="" /> | <img src={image65} alt="" />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SixthPage;
