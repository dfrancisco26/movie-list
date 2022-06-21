import React from 'react';
import Movie from './Movie';
export default function MovieList({ allMovies, movieTitle, movieDirector, movieYear, movieColor }) {
  return (
    <div>
      {
        allMovies.map((movie, i) => 
          <Movie key = {movie + i} movieTitle = {movieTitle} movieDirector = {movieDirector} movieYear = {movieYear} movieColor = {movieColor} />)
      }
    </div>
  );
}
