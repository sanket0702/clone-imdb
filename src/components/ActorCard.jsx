import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const ActorCard = ({ actors}) => {
  const cardStyle = {
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    borderRadius: '12px',
    
    maxWidth: '200px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    
  };

  const imageContainerStyle = {
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const nameStyle = {
    marginTop: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    
  };

  return (
    <Carousel responsive={responsive}>
    {actors.map((actor)=>(<div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img src={actor.imageUrl} alt={actor.name} style={imageStyle} />
      </div>
      <p style={nameStyle}>{actor.name}</p>
    </div>))

    }
    </Carousel>
  );
};

export default ActorCard;
