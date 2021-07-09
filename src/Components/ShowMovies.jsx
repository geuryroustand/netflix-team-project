import React, { Component } from "react";
import Getdata from "./Getdata";

import { Container } from "react-bootstrap";

class ShowMovies extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=8b917407&s=harry%20potter"
        // {
        //   headers: {
        //     Authorization: "8b917407",
        //   },
        // }
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({
          movies: data,
        });

        // console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container fluid>
        <div className="mt-5 mb-2 right">
          <h2> Trending Now </h2>
        </div>

        <div className="row movies-comedy row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mx-n1 right">
          {
            // <div className="episodes   col   px-1 ">
            //   <img
            //     className="mb-2   mb-md-2   mb-sm-0  img-fluid w-100"
            //     src="./media4.jpg"
            //     alt=""
            //   />
            // </div>
            // this.state.Search !== (console.log(this.state.Search))

            // console.log(
            //   this.state.movies.Search.map((movie) => {
            //     console.log(movie);
            //   })
            // )

            // console.log(this.state.movies.Search)

            this.state.movies.Search.map((movie) => {
              <div className="episodes   col   px-1 ">
                <img
                  className="mb-2   mb-md-2   mb-sm-0  img-fluid w-100"
                  src={movie.Poster}
                  alt=""
                />
              </div>;
            })
          }
        </div>
      </Container>
    );
  }
}

export default ShowMovies;
