import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            Forum - Sandbox Project{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign In</Nav.Link>
              <Nav.Link href="#memes">Sing Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MainContent />
    </>
  );
}
/*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NewComponent />
        <Router>
          <Routes>
            <Route path="search/:id_post" element={<DetailPost />} />
          </Routes>
        </Router>
      </header>
    </div>
  );*/
export default App;
