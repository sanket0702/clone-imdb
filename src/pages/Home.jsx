import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import MovieCard from '../components/MovieCards';
import { useEffect,useState } from 'react';
import {fetchLatestMovies} from '../server/api';
import FanFav from '../components/FanFav';
import { Box } from '@mui/material';
import ActorCard from '../components/ActorCard';
import {actors} from '../components/Actordata';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Home = () => {
const [Movies,setMovies]=useState([]);
 useEffect(() => {
  const dataFetch =async() => {
    let response =await fetchLatestMovies();
    setMovies(response);
    console.log(Movies);

  }
  dataFetch();
 }) 
  return (
    <>
      <Navbar/>
      <Box sx={{display:'flex',justifyContent:'center'}}>
      <Box sx={{width:'85%',}}>
      <Banner movies={Movies}/>
      <Box>
      <h1 style={{paddingLeft:'20px', color:'white',display:'flex',alignItems:'center'}}><span style={{height:'35px',width:'6px',borderRadius:'4px', marginRight:'5px',background:'yellow'}}></span>Most popular celebrities   <KeyboardArrowRightIcon sx={{fontSize:'40px','&:hover': {
          color: 'yellow', // Pseudo-class styling
        },}}/></h1>
        <Box>
          <h5 style={{color:'yellow',paddingLeft:'40px'}}>TOP RISING </h5>
        </Box>
        <ActorCard actors={actors} /> 
      </Box>
      <MovieCard/>
      <FanFav/>
      </Box>
      </Box>
    </>
  )
}

export default Home
