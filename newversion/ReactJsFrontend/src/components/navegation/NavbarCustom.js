import React from "react";
import logo from "media/logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarCustom() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img
              src={logo}
              width="40"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Home{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Nav>
              <form
                class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  class="form-control form-control-dark text-bg-dark"
                  placeholder="Search Post.."
                  aria-label="Search"
                ></input>
              </form>

              <div class="text-end">
                <button type="button" class="btn btn-outline-light me-2">
                  Login
                </button>{" "}
                <button type="button" class="btn btn-warning">
                  Sign-up
                </button>{" "}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
