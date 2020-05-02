import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import image80 from "../assets/80.svg";
import image81 from "../assets/81.svg";
import image82 from "../assets/82.svg";
import image83 from "../assets/83.svg";
import image84 from "../assets/84.svg";

const Footer = (props) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Container>
            <Row>
              <Col sm="4">
                <p>
                  Get the app <img src={image80} alt="" />
                </p>
                <p>Follow us</p>
                <img src={image81} alt="" /> &nbsp;&nbsp;
                <img src={image82} alt="" /> &nbsp;&nbsp;
                <img src={image83} alt="" /> &nbsp;&nbsp;
                <p>Get Inspiration</p>
                <input type="text" placeholder="ENTER YOUR EMAIL" />
                <Button secondary>Submit</Button>
              </Col>
              <Col>
                <p>How it Works</p>
                <p>Press</p>
                <p>For Art & Trade</p>
                <p>The Shop</p>
              </Col>
              <Col>
                <p>FAQ</p>
                <p>For Business</p>
                <p>Company</p>
                <p>Careers</p>
              </Col>
              <Col>
                <p>Stores</p>
                <p>Pricing</p>
                <p>Reviews</p>
                <p>Design Services</p>
              </Col>
              <Col>
                <p>About Us</p>
                <p>Gift Card</p>
                <p>Contact Us</p>
              </Col>
              <Col>
                <p>Terms Of Service</p>
                <p>Privacy Policy</p>
                <p>Accessibility</p>
                <p>Sitemap</p>
              </Col>
            </Row>
          </Container>
        </CardHeader>
        <CardFooter style={{ backgroundColor: "#112D46" }}>
          <p className="text-center" style={{ color: "white" }}>
            © 2020 Frameboss
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Footer;
