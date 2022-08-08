import React, {useState,useEffect} from 'react'
import axios from './axios';

function Row({title,fetchUrl}) {
    const [movies,SetMovies] = useState([]);
    useEffect(()=>
    {
        // Basicaal it works like teelgram to run once
    async function fetchData()
    {
        const request = await axios.get(fetchUrl);
        SetMovies(request.data.results)
        return request;
    }
    fetchData();
    },[fetchUrl]);
    console.log(movies);
  return (
    <div className='row'>
    <h2>{title}</h2>
    <div className='row_posters'>
        {movies.map(movie =>{
          //  <img src={`${baseURL}${movie.poster_path}`} alt={movie.name}/>
        })}
    </div>
    </div>
  )
}

export default Row