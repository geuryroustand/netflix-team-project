import React, { Component } from "react";
import Getdata from "./Getdata";
import Loading from "./Loading";

import { Container } from "react-bootstrap";

class ShowMovies extends Component {
  state = {
    movies: [],
    loading: true,
    error: false,
  };
  //await  Promise.all([fetchMovies('harry potter'),fetchMovies('lord of rings')])
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
          movies: data.Search,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
        // console.log(data);
      }
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
  };

  render() {
    // const { loading, movies, error } = this.state;
    // console.log({ loading, movies, error });

    // if (loading) {
    //   return <p>loading</p>;
    // } else {
    //   if (error) {
    //     return <p>error</p>;
    //   } else {
    //     return console.log(this.state.movies);
    //   }
    // }

    return (
      <Container fluid>
        <div className="mt-5 mb-2 right">
          <h2> Trending Now </h2>
        </div>

        <div className="row movies-comedy row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mx-n1 right">
          {
            this.state.loading === true ? (
              <Loading />
            ) : (
              this.state.movies.map((movie) => {
                <div className="episodes   col   px-1 ">
                  <img
                    className="mb-2   mb-md-2   mb-sm-0  img-fluid w-100"
                    src={movie.Poster}
                    alt=""
                  />
                </div>;

                console.log(movie.Poster);
              })
            )

            // loading
            //   ? "loading"
            //   : movies.map((movie) => {
            //       <div className="episodes   col   px-1 ">
            //         <img
            //           className="mb-2   mb-md-2   mb-sm-0  img-fluid w-100"
            //           src={movie.Poster}
            //           alt=""
            //         />
            //       </div>;
            //     })
          }
        </div>
      </Container>
    );
  }
}

export default ShowMovies;
