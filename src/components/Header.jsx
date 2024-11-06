import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container className="py-3">
          <Navbar.Brand>
            <span className="main-color-bg text-white rounded-circle p-2">
              PZ
            </span>
            <span className="text-dark fs-5 fw-bolder ms-2">Perfume House</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <button style={{ width: " 140px", height: "60px", backgroundColor:"#e6d2ff", color:"#8d34ff"}}
                className="border-0 rounded-2">
                  <Link style={{textDecoration:"none"}} to="/signin">Sign In</Link>
                </button>
              </Nav.Link>
              <Nav.Link>
                <button
                  style={{ width: " 140px", height: "60px", color:"#F5F5F5" }}
                  className="main-color-bg border-0 rounded-2 "
                >
                  <Link style={{textDecoration:"none"}} to="/register">Register</Link>
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
