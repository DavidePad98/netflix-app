import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const PreMain = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="bg-dark d-flex justify-content-between">
            <div className="d-flex align-items-center ">
              <h2 className="text-white px-2">TV Shows</h2>
              <Dropdown>
                <Dropdown.Toggle
                  className="bg-dark border-white rounded-0 "
                  id="dropdown-basic"
                  size="sm"
                >
                  Genres
                </Dropdown.Toggle>

                <Dropdown.Menu className="bg-dark ">
                  <Dropdown.Item className="text-white " href="#/action-1">
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white " href="#/action-2">
                    Commedy
                  </Dropdown.Item>
                  <Dropdown.Item className="text-white " href="#/action-3">
                    Horror
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <i className="text-white bi bi-grid icons px-3"></i>
              <i className="text-white bi bi-grid-3x3 icons pe-3"></i>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default PreMain;
