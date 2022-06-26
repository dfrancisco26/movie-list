import React from 'react';
import Movie from './Movie';
export default function MovieList({ filteredMovies }) {
  return (
    <div>
      {
        filteredMovies.map((movie, i) => 
          <Movie key = {movie.title + i + movie.director} movieTitle = {movie.title} movieDirector = {movie.director} movieYear = {movie.yearReleased} movieColor = {movie.movieColor} />)
      }
    </div>
  );
}
