import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Dropdown,
} from "reactstrap";
import image1 from "../assets/user-account-icon.svg";
import image2 from "../assets/cart-icon.svg";
import image4 from "../assets/selected-cart-icon.png";
import image3 from "../assets/selected-user-account-icon.png";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uisOpen, updateIsOpen] = useState(false);
  const [profileImage, updateProfileImage] = useState(image1);
  const [cartImage, updateCartImage] = useState(image2);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <h1 className="display-5">FRAMEBOSS</h1>
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />
          <Collapse navbar>
            <Nav className="ml-auto mr-4" navbar>
              <UncontrolledDropdown
                nav
                inNavbar
                {...props}
                onMouseOver={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                toggle={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
              >
                <DropdownToggle nav caret className="font-weight-bold">
                  SERVICES
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>Gifts</DropdownItem>
                  <DropdownItem>Diploma Framing</DropdownItem>
                  <DropdownItem>Jersey Framing</DropdownItem>
                  <DropdownItem>Canvas Framing</DropdownItem>
                  <DropdownItem>Instagram Framing</DropdownItem>
                  <DropdownItem>Canvas Framing</DropdownItem>
                  <DropdownItem>Designer's Choice Framing</DropdownItem>
                  <DropdownItem>Gallery Wall Framing</DropdownItem>
                  <DropdownItem>Business Framing</DropdownItem>
                  <DropdownItem>Artist And Vendor Framing</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown
                nav
                inNavbar
                {...props}
                onMouseOver={() => updateIsOpen(true)}
                onMouseLeave={() => updateIsOpen(false)}
                toggle={() => updateIsOpen(!uisOpen)}
                isOpen={uisOpen}
              >
                <DropdownToggle nav caret className="font-weight-bold">
                  FRAMES
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Our Frames</DropdownItem>
                  <DropdownItem>What we Frame?</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink className="font-weight-bold" href="#">
                  BLOG
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="font-weight-bold" href="#">
                  CONTACT US
                </NavLink>
              </NavItem>
            </Nav>

            <img
              className="ml-2 mr-4"
              src={profileImage}
              alt=""
              style={{ width: "3%", height: "3%" }}
              onMouseOver={() => updateProfileImage(image3)}
              onMouseLeave={() => updateProfileImage(image1)}
            />
            <img
              className="ml-2 mr-4 "
              src={cartImage}
              alt=""
              style={{ width: "3%", height: "3%" }}
              onMouseOver={() => updateCartImage(image4)}
              onMouseLeave={() => updateCartImage(image2)}
            />
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
