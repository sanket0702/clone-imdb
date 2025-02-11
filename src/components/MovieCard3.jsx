import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {sampleMovies} from './Moviedata';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
              
                
              
              
              <p style={{display:'flex'}}>
                <strong style={{width:'10px',marginRight:'19px'}}><StarBorderIcon sx={{color:'yellow',}}/></strong> {movie.averageRating} / 10
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
                  padding:'2px 0px 5px 0px',
                  width:'100%',
                  textAlign: "center",
                  color: "#FFF",
                  textDecoration: "none",
                  textAlign: "center",
                    background: "#E2B616",
                    color: "white",
                  borderRadius: "5px",
                }}
              >
                View on IMDB
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    
  );
};

export default MovieCard;
