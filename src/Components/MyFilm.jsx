import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../custom.css";
import { Link } from "react-router-dom";
// 663d166a

const MyFilm = ({ filmt }) => {
  const [filmsArr, setFilmArr] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  const films = () => {
    fetch("http://www.omdbapi.com/?apikey=663d166a&s=" + filmt)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then((data) => {
        setFilmArr(data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };
  useEffect(() => {
    films();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid className="py-2 px-5">
      <Row className="g-4 justify-content-center ">
        {filmsArr.slice(0, 6).map((e, index) => {
          return (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              xxl={2}
              key={e.imdbID}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`x ${hoverIndex === index ? "hovered" : ""}`}
            >
              <Link to={"/movie-details/" + e.imdbID}>
                <img
                  src={e.Poster}
                  alt="fff"
                  className={`x w-75 h-100 ${
                    hoverIndex !== index ? "not-hovered" : ""
                  }`}
                />
                {hoverIndex === index && (
                  <p className="hover-text fs-3 w-25 text-white">{e.Title}</p>
                )}{" "}
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MyFilm;
