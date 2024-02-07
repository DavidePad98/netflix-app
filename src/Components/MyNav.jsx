import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();

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
            <Link
              className={
                location.pathname === "/Home" ? "nav-link active" : "nav-link"
              }
              to="/Home"
            >
              Home
            </Link>
            <Link
              className={
                location.pathname === "/Link" ? "nav-link active" : "nav-link"
              }
              to="/Link"
            >
              Link
            </Link>
            <Link
              className={
                location.pathname === "/Movies" ? "nav-link active" : "nav-link"
              }
              to="/Movies"
            >
              Movies
            </Link>
            <Link
              className={
                location.pathname === "/RecentlyAdded"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/RecentlyAdded"
            >
              Recently Added
            </Link>
            <Link
              className={
                location.pathname === "/MyList" ? "nav-link active" : "nav-link"
              }
              to="/MyList"
            >
              My List
            </Link>
            <Link
              className={
                location.pathname === "/TVShows "
                  ? "nav-link active"
                  : "nav-link"
              }
              to="/TVShows "
            >
              TV Shows
            </Link>
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
