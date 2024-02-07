import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./Components/MyNav";
import PreMain from "./Components/PreMain";
import MyFilm from "./Components/MyFilm";
import FooterC from "./Components/FooterC";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./Components/TVShows";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark d-flex flex-column h-100">
        <MyNav />
        <PreMain />
        <div className="bg-dark flex-grow-1">
          <div>
            {/* <h3 className="text-white px-3">Trending Now</h3> */}
            <Routes>
              <Route element={<TVShows />} path="/TVShows" />
              <Route
                path="/movie-details/:movieId"
                element={<MovieDetails />}
              />
              <Route element={<MyFilm filmt={"Star Wars"} />} path="/Home" />
            </Routes>
          </div>
          <div>
            {/* <h3 className="text-white px-3">Watch it Again</h3> */}
            <Routes>
              <Route element={<MyFilm filmt={"Harry Potter"} />} path="/Home" />
            </Routes>
          </div>
          <div>
            {/* <h3 className="text-white px-3">New Releases</h3> */}
            <Routes>
              <Route
                element={<MyFilm filmt={"The Lord of the Rings"} />}
                path="/Home"
              />
            </Routes>
          </div>
        </div>
        {/* <Row className="mx-3">
            <h3 className="text-white px-3">Trending Now</h3>
            <MyFilm filmt={"Star Wars"} />
          </Row>
          <Row className="mx-3">
            <h3 className="text-white px-3">Watch it Again</h3>
            <MyFilm filmt={"Harry Potter"} />
          </Row>
          <Row className="mx-3">
            <h3 className="text-white px-3">New Releases</h3>
            <MyFilm filmt={"The Lord of the Rings"} />
          </Row> */}
        <FooterC />
      </div>
    </BrowserRouter>
  );
}

export default App;
