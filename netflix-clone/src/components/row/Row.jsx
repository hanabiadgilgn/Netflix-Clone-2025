import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../utils/axios';
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow })  {
  const [movies, setMovis]= useState([]);
  const [trailerUrl, setTrailerUrl]= useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() =>{
    (async () => {
      try{
        console.log(fetchUrl)
        const request = await axios.get(fetchUrl);
        console.log(request)
        setMovis(request.data.results);
      }catch (error){
        console.log("error",error)
      }
    })()
  }, [fetchUrl])



  const handleClick = (movie) => {
    if (trailerUrl){
      setTrailerUrl('')
    }else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search)
          console.log(urlParams)
          // get the "v" which is video Id
          console.log(urlParams.get('v'))
          // set the video id in setTrailerUrl state
          setTrailerUrl(urlParams.get("v"));
        })
    }
  }

  const opts = {
    height: '390',
    // width: '640',
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map(( movie, index) => (
          //loading the images and onClick show trailer
          <img
            onClick={() => handleClick(movie)}  
            key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} className= {`row__poster $ {isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>

      <div style={{ padding: '40px'}}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>

    </div>
  );
}

export default Row