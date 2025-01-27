import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {sampleMovies} from './Moviedata';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieCard = () => {
  

  return (
    <div style={{gap:'10px',width:'100%'}}>
        <div>
        <h1 style={{color:'white',}}><span style={{height:'35px',width:'6px',borderRadius:'4px', marginRight:'5px',background:'white'}}></span>
        TOP LATEST MOVIE
    </h1>
        </div>

      <Carousel responsive={responsive}>
        {sampleMovies.map((movie, index) => (
              <div
            key={index}
            style={{height:'500px',
              borderRadius:'00px 10px 10px 10px',
              color: "white",
              gap: "0px",
              width: "200px",
              margin:'10px',
              background:'#1A1A1A'
            }}
          >
            {/* Movie Poster */}
            <div style={{height:'50%'}}>
              <img
                src={movie.primaryImage}
                alt={movie.primaryTitle}
                style={{height:'100%',
                  width: "200px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>

            {/* Movie Details */}
            <div style={{ flex: 1 ,padding:'10px'}}>
              <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{movie.primaryTitle}</h1>
              
                
              
              
              <p>
                <strong style={{width:'10px'}}><img style={{width:'10px',color:'white',background:'green'}} src="https://www.svgrepo.com/show/533052/star.svg" alt="" /></strong> {movie.averageRating} / 10
              </p>
              <p>
                <strong>Languages:</strong> {movie.spokenLanguages.join(", ")}
              </p>
              

              
              <a
                href={movie.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  
                  width:'100%',
                  textAlign: "center",
                  color: "#FFF",
                  textDecoration: "none",
                  borderRadius: "5px",
                }}
              >
                View on IMDB
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieCard;
