import { useState, useEffect } from "react";
import React from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { RotatingLines } from "react-loader-spinner";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [visible, setvisible] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setvisible(false);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.original_title ||
          movie?.name ||
          movie?.original_name
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <RotatingLines
        strokeColor="red"
        strokeWidth="3"
        animationDuration="0.70"
        width="80"
        visible={visible}
      />
      <div className={`row_posters ${isLargeRow && "row_posterLarge"}`}>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className="row_poster"
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
