import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyFooter from "./Components/MyFooter";
import NavbarNet from "./Components/NavbarNet";
import ShowMovies from "./Components/ShowMovies";

function App() {
  return (
    <>
      <NavbarNet />
      <ShowMovies />
    
     <MyFooter />
    </>

  );
}

export default App;
