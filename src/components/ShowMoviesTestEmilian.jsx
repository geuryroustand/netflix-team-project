import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class ShowMoviesTestEmilian extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=61231279`
    );
    let data = await response.json();
    this.setState({ movies: data }, () =>
      console.log(this.state.movies.Search)
    );
  };
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          {this.state.movies.Search &&
            this.state.movies
              .slice(0.6)
              .map((movie) => (
                <SingleMovie
                  img={movie.Poster}
                  title={movie.Title}
                  id={movie.imdbID}
                />
              ))}
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default ShowMoviesTestEmilian;
