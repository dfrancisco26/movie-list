import React from 'react';
import Movie from './Movie';
export default function MovieList({ allMovies }) {
  return (
    <div>
      {
        allMovies.map((movie, i) => 
          <Movie key = {movie.title + i + movie.director} movieTitle = {movie.title} movieDirector = {movie.director} movieYear = {movie.yearReleased} movieColor = {movie.movieColor} />)
      }
    </div>
  );
}
