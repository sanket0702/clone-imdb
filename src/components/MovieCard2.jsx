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
    items: 1,
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
    <div>
        
      <Carousel responsive={responsive}>
        {sampleMovies.map((movie, index) => (
              <div
            key={index}
            style={{
              padding: "20px",
              display: "flex",
              gap: "20px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Movie Poster */}
            <div>
              <img
                src={movie.primaryImage}
                alt={movie.primaryTitle}
                style={{
                  width: "300px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>

            {/* Movie Details */}
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{movie.primaryTitle}</h1>
              <p style={{ color: "#555", margin: "10px 0" }}>{movie.description}</p>
              <p>
                <strong>Genres:</strong> {movie.genres.join(", ")}
              </p>
              <p>
                <strong>Release Date:</strong> {movie.releaseDate}
              </p>
              <p>
                <strong>Runtime:</strong> {movie.runtimeMinutes} minutes
              </p>
              <p>
                <strong>Rating:</strong> {movie.averageRating} / 10
              </p>
              <p>
                <strong>Languages:</strong> {movie.spokenLanguages.join(", ")}
              </p>
              <p>
                <strong>Country of Origin:</strong> {movie.countriesOfOrigin.join(", ")}
              </p>
              <p>
                <strong>Budget:</strong> ${movie.budget.toLocaleString()}
              </p>
              <p>
                <strong>Worldwide Gross:</strong> ${movie.grossWorldwide.toLocaleString()}
              </p>
              <a
                href={movie.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  padding: "10px 20px",
                  backgroundColor: "#007BFF",
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

