import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../custom.css";
// 663d166a

class MyFilm extends Component {
  state = {
    filmsArr: [],
    hoverInex: null,
  };
  films = () => {
    fetch("http://www.omdbapi.com/?apikey=663d166a&s=" + this.props.filmt)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then((data) => {
        // console.log("data", data);
        this.setState({
          filmsArr: data.Search,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleMouseEnter = (index) => {
    this.setState({ hoverIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoverIndex: null });
  };

  componentDidMount() {
    this.films();
  }
  render() {
    return (
      <Container fluid className="py-4 px-0">
        <Row className="g-1 justify-content-center ">
          {this.state.filmsArr.map((e, index) => {
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                xxl={1}
                key={e.imdbID}
                onMouseEnter={() => this.handleMouseEnter(index)}
                onMouseLeave={this.handleMouseLeave}
                className={`x ${
                  this.state.hoverIndex === index ? "hovered" : ""
                }`}
              >
                <img src={e.Poster} alt="" className=" w-100 h-100" />
                {this.state.hoverIndex === index && (
                  <p className="hover-text text-white">{e.Title}</p>
                )}
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default MyFilm;
