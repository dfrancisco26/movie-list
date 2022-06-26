import React from 'react';

export default function MovieForm({ handleSubmit, setMovieTitle, setMovieDirector, setMovieYear, setMovieColor }) {


  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Title
          <input onChange={e => setMovieTitle(e.target.value)}></input>
        </label>
        <label>Director
          <input onChange={e => setMovieDirector(e.target.value)}></input>
        </label>
        <label>Year Released
          <input type='number' onChange={e => setMovieYear(e.target.value)}></input>
        </label>
        <label>Choose color
          <select onChange={e => setMovieColor(e.target.value)}>
            <option value='lightblue'>blue</option>
            <option value='pink'>pink</option>
            <option value='lightgreen'>green</option>
            <option value='rgb(231, 203, 111)'>yellow</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
