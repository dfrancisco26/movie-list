import React from 'react';

export default function Movie({ movieTitle, movieDirector, movieYear, movieColor }) {
  return (
    <div className='movie' style={{ background: movieColor }}>
      <h3>{movieTitle}</h3>
      <p>{movieDirector}</p>
      <p>{movieYear}</p>
    </div>
  );
}
