import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="container">
      <div className="mynav">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src="/holdex-logo.png" height="30px"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto menu-navbar">
                <Nav.Link className="ms-2 my-2 nav-link-active" href="#home">
                  LENDING
                </Nav.Link>
                <Nav.Link className="my-2 text-navbar" href="#link">
                  STAKING
                </Nav.Link>
                <Nav.Link className="my-2 text-navbar" href="#link">
                  BRIDGE
                </Nav.Link>
                <Nav.Link className="my-2 text-navbar" href="#link">
                  BORROWERS
                </Nav.Link>
                <Nav.Link className="my-2 text-navbar" href="#link">
                  OZEAN
                  <img src="external-link.svg" className="icon-navbar"></img>
                </Nav.Link>
                <Nav.Link className="my-2 text-navbar" href="#link">
                  DOCS
                  <img
                    src="external-link.svg"
                    className="me-3 icon-navbar"
                  ></img>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Button className="launch">Launch App</Button>
          </Container>
        </Navbar>
      </div>

      <div className="hero-content">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title"> Careers at Clearpool</h1>
            <p className="body">
              We are a fast growing crypto startup with over 30 employees
              worldwide. We are fully remote.
            </p>
            <p className="body mt-3">
              Connection and kindness are core to our culture. We focus on
              lifting each other up instead of competing amongst ourselves, and
              we build relationships through numerous company traditions.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-hero mx-auto" src="/hero-logo.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
