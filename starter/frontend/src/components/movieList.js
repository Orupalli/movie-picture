import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`)
      .then((response) => {
        setMovies(response.data.movies || response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => onMovieClick(movie)} className="movie-item">
          {movie.title}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
