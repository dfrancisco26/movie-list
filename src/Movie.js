import React from 'react';

export default function Movie({ movieTitle, movieDirector, movieYear, movieColor, handleMovieClick, i }) {
  return (
    <div onClick={() => handleMovieClick(i) }className='movie' style={{ background: movieColor }}>
      <h3>{movieTitle}</h3>
      <p>{movieDirector}</p>
      <p>{movieYear}</p>
    </div>
  );
}
