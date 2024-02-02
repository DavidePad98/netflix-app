import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const MyNav = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>
          <img
            src="/logo.png"
            width="80"
            height="40"
            className="d-inline-block align-top"
            alt="Netflix-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#bi">
              <i className="bi bi-search icons"></i>
            </Nav.Link>
            <Nav.Link href="#link">KIDS</Nav.Link>
            <Nav.Link href="#link">
              <i className="bi bi-bell icons"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              <i className="bi bi-person-circle icons"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
