import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../custom.css";

const FooterC = () => {
  return (
    <Container className="px-5 pt-5">
      <Row className="px-5">
        <Col>
          <div className="text-secondary">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </div>
        </Col>
        <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
          <Col>
            <Row>
              <Col>
                <p>
                  <a
                    href="#a"
                    alt="footer link"
                    className="text-secondary fs-c text-decoration-none"
                  >
                    Audio and Subtitles
                  </a>
                </p>
                <p>
                  <a
                    className="text-secondary fs-c text-decoration-none "
                    href="#a"
                    alt="footer link"
                  >
                    Media Center
                  </a>
                </p>
                <p>
                  <a
                    className="text-secondary fs-c text-decoration-none"
                    href="#a"
                    alt="footer link"
                  >
                    Privacy
                  </a>
                </p>
                <p>
                  <a
                    className="text-secondary fs-c text-decoration-none"
                    href="#a"
                    alt="footer link"
                  >
                    Contact us
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p>
                  <a
                    href="#a"
                    className="text-secondary fs-c text-decoration-none"
                    alt="footer link"
                  >
                    Audio Description
                  </a>
                </p>
                <p>
                  <a
                    href="#a"
                    className="text-secondary fs-c text-decoration-none"
                    alt="footer link"
                  >
                    Investor Relations
                  </a>
                </p>
                <p>
                  <a
                    href="#a"
                    className="text-secondary fs-c text-decoration-none"
                    alt="footer link"
                  >
                    Legal Notices
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p>
                  <a
                    href="#a"
                    className="text-secondary fs-c text-decoration-none"
                    alt="footer link"
                  >
                    Help Center
                  </a>
                </p>
                <p>
                  <a
                    href="#a"
                    className="text-secondary fs-c text-decoration-none"
                    alt="footer link"
                  >
                    Jobs
                  </a>
                </p>
                <p>
                  <a
                    href="#a"
                    className="text-secondary fs-c text-decoration-none"
                    alt="footer link"
                  >
                    Cookie Preferences
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p>
                  <a
                    href="#a"
                    className="text-secondary fs-c text-decoration-none"
                    alt="footer link"
                  >
                    Gift Cards
                  </a>
                </p>
                <p>
                  <a
                    href="#a"
                    className="text-secondary fs-c text-decoration-none"
                    alt="footer link"
                  >
                    Terms of Use
                  </a>
                </p>
                <p>
                  <a
                    href="#a"
                    className="text-secondary fs-c text-decoration-none"
                    alt="footer link"
                  >
                    Corporate Information
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="button"
              className="bg-transparent btn btn-sm text-secondary border-1 border-secondary rounded-0 my-3"
            >
              Service Code
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-secondary fs-c mb-3">
            &copy; 1997-2023 Netflix, Inc.
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default FooterC;
