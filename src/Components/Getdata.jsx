import React from "react";

const Getdata = async () => {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=8b917407&s=harry%20potter",
      {
        headers: {
          Authorization: "8b917407",
        },
      }
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default Getdata;
