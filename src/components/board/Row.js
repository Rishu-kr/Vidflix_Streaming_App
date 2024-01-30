import React, {useEffect,useState} from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../axios";
import "./row.css";
import Fuse from 'fuse.js';

const base_url="https://image.tmdb.org/t/p/original";

function Row({
  title,
  fetchUrl,
  isLargeRow,
}) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      //https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  
  
  movies.map((movie)=>{
    console.log(movie.original_title);
  });
 
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick =(movie)=>{
    if (trailerUrl){
      settrailerUrl('');
    }
    else{
      movieTrailer(movie?.name || "")
      .then(url=>{
        //pass the url inside the urlparams
        //youtube.com/v=65426416jhftyf7628ugu
          const urlParams= new URLSearchParams(new URL(url).search);
         settrailerUrl(urlParams.get('v'));
         console.log(urlParams.get('v'))
      }) 
      .catch((error)=>console.log(error));
    }
  }
  
  return ( 
  <div className="row">
        <h2 className="title"> {title} </h2> 
    <div className = "rowPosters" >
     {/*several row poster*/ } 
     {movies.map(movie => ( <
        img 
        key={movie.id}
        onClick={()=>handleClick(movie)}
        className = {`rowPoster ${isLargeRow && "rowPosterLarge"}`}
        src = {`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
        alt = {movie.name}
        />
      ))
    } </div> 
    {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;