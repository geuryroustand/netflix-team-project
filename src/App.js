import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarNet from "./Components/NavbarNet";
import ShowMovies from "./Components/ShowMovies";

function App() {
  return (
    <>
      <NavbarNet />
      <ShowMovies />
    </>
  );
}

export default App;
