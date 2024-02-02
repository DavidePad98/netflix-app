import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import MyNav from "./Components/MyNav";
import PreMain from "./Components/PreMain";
import MyFilm from "./Components/MyFilm";
import FooterC from "./Components/FooterC";

function App() {
  return (
    <div className="bg-dark">
      <div>
        <MyNav />
        <PreMain />
      </div>
      <div>
        <h3 className="text-white px-3">Trending Now</h3>
        <MyFilm filmt={"Star Wars"} />
      </div>
      <div>
        <h3 className="text-white px-3">Watch it Again</h3>
        <MyFilm filmt={"Harry Potter"} />
      </div>
      <div>
        <h3 className="text-white px-3">New Releases</h3>
        <MyFilm filmt={"The Lord of the Rings"} />
      </div>
      <div>
        <FooterC />
      </div>
    </div>
  );
}

export default App;
