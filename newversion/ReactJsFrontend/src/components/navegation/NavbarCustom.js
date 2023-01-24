import logo from "media/logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const navegation = [
  { name: "Posts", href: "/posts", current: "false" },
  { name: "Features", href: "/features", current: "false" },
  { name: "About", href: "/about", current: "false" },
  { name: "Contact", href: "/contact", current: "false" },
];

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
            <Nav className="me-auto">
              {navegation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  arial-current={item.current ? "page" : undefined}
                  className={"nav-link"}
                >
                  {item.name}
                </NavLink>
              ))}
            </Nav>
            <Nav>
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  className="form-control form-control-dark text-bg-dark"
                  placeholder="Search Post.."
                  aria-label="Search"
                ></input>
              </form>

              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>{" "}
                <button type="button" className="btn btn-warning">
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

//<Nav.Link href="#features">Features</Nav.Link>
