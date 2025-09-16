import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/assets/react.svg"
              width="30"
              height="30"
              alt="OpenShelf Logo"
            />
          </Navbar.Brand>
          <Nav className="menu-items" fixed="right">
            <Nav.Link href="#home">Browse Books</Nav.Link>
            <Nav.Link href="#features">Manage My Shelf</Nav.Link>
            {/* <Nav.Button href="#pricing">My Account</Nav.Button> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
