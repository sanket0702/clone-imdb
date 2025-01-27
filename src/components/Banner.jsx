import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Banner = ({movies}) => {
  return (
    <Carousel responsive={responsive} >
      {movies.map((movie, index) => (
        <div style={{ height:'500px',background: '#f5f5f5',
          padding: '10px',
          borderRadius: '8px',
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',objectFit:'cover'}} id={index}>
           <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'fill',
              borderRadius: '8px',
              marginBottom: '10px',
            }}
            src={movie.Poster}
            alt={movie.Title}
          />
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
            {movie.Title}
          </h3>
        </div>
      ))}
    </Carousel>
  )
}

export default Banner
