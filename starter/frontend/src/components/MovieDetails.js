import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = ({ movie }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!movie) {
      return;
    }

    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/movies/${movie.id}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [movie]);

  if (!movie) {
    return <div>Select a movie to view details.</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>

      {details && (
        <div>
          <p>{details.description}</p>
          <p>Release Date: {details.release_date}</p>
          <p>Rating: {details.rating}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
