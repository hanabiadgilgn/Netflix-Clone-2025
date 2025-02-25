import React, {useEffect, useState} from 'react'
import axios from "../../utils/axios"
import requests from '../../utils/requests'
import "./banner.css"

function Banner() {
    const [movie, setMovie] = useState({})

    useEffect(()=>{
        (async () => {
            try {
              const request = await axios.get(requests.fetchNetflixOriginals);
              console.log(request);
              //when the page refreshes, randomly select a movie from the data and display it in the banner
              setMovie(
                request.data.results[
                  Math.floor(Math.random() * request.data.results.length)
                ]
              );
            } catch (error){
                console.log("error", error)
            }
        })()

    }, [])


    function truncate(str, n){
        return str?.lenght > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <div
        className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundPostion: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
        <div className="banner__contents">
            <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
            <button className="banner__button paly">Paly</button>
            <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className="banner__fadeBottom" />
        </div>
    );
}

export default Banner;