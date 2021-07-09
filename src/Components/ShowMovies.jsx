import React, { Component } from "react";

import { Container } from "react-bootstrap";

class ShowMovies extends Component {
  render() {
    return (
      <Container fluid>
        <div class="mt-5 mb-2 right">
          <h2> Trending Now </h2>
        </div>

        <div className="row movies-comedy row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 mx-n1 right">
          <div className="episodes   col   px-1 ">
            <img
              className="mb-2   mb-md-2   mb-sm-0  img-fluid w-100"
              src="./media4.jpg"
              alt=""
            />
          </div>

          <div className="episodes   col   px-1 ">
            <img
              className="mb-2   mb-md-2   mb-sm-0  img-fluid w-100"
              src="./media4.jpg"
              alt=""
            />
          </div>

          <div className="episodes   col   px-1 ">
            <img
              className="mb-2   mb-md-2   mb-sm-0  img-fluid w-100"
              src="./media4.jpg"
              alt=""
            />
          </div>

          <div className="episodes   col   px-1 ">
            <img
              className="mb-2   mb-md-2   mb-sm-0  img-fluid w-100"
              src="./media4.jpg"
              alt=""
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default ShowMovies;
