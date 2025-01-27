import React from 'react'
import { useState,useEffect } from 'react'
import { fetchUpcomingMovies } from '../server/api';
const Upcomming = () => {
const[movie,setmovie]=useState([]);


useEffect(()=>{
    const fetchUpcoming= async()=>{
        let response =await fetchUpcomingMovies();
        setmovie(response);
        console.log(movie);
    }
    fetchUpcoming();
},[]);

  return (
    <>
        <Upcomming movies={movie}/>
      
    </>
  )
}

export default Upcomming
