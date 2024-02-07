import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UrlOMB = "http://www.omdbapi.com/?apikey=663d166a&s=";
const UrlApi = "https://striveschool-api.herokuapp.com/api/comments/";

const MovieDetails = () => {
  const params = useParams();
  //   console.log(params.movieId);

  const [filmData, setFilmData] = useState(null);
  const [commentiFilm, setCommentiFilm] = useState([]);

  useEffect(() => {
    fetchDetails();
    fetchCommenti();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDetails = () => {
    fetch(UrlOMB + "&i=" + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore 1");
        }
      })
      .then((data) => {
        console.log("data", data);
        setFilmData(data);
      })
      .catch((err) => console.log("ERRORE", err));
  };

  const fetchCommenti = () => {
    fetch(UrlApi + params.movieId, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMzOWJmNDZkZTM0YTAwMTk3YTEyOWIiLCJpYXQiOjE3MDczMTgyNjAsImV4cCI6MTcwODUyNzg2MH0.ccZg6hm-rRLZ4AiwniRRzvLXegHYmgJNvol3ayYgByo",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore 1");
        }
      })
      .then((data) => {
        console.log("data", data);
        setCommentiFilm(data);
      })
      .catch((err) => console.log("ERRORE", err));
  };

  return (
    <div className="text-danger my-5">
      {filmData && (
        <div className="d-flex justify-content-evenly ">
          <img src={filmData.Poster} alt="fff" className="w-25" />
          <div className="w-50 px-5">
            <h3>{filmData.Title}</h3>
            <p>{filmData.Plot}</p>
            {commentiFilm && (
              <div>
                {commentiFilm.map((commenti, i) => {
                  return (
                    <div className="d-flex align-items-center ">
                      {" "}
                      <p className="text-white my-2 pe-3" key={commenti._id}>
                        {i + 1 + ")"} - {commenti.comment}
                      </p>
                      <p className="text-warning">Voto: {commenti.rate}/5</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default MovieDetails;
