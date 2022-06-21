import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';
import Movie from './Movie';
import MovieList from './MovieList';
function App() {




  function handleSubmit(e) {
    e.preventDefault();

    setAllMovies([...allMovies, movie]);

  }

  const [allMovies, setAllMovies] = useState([
    {
      title: 'Across The Universe',
      director: 'Julie Taymor',
      yearReleased: 2007,
      movieColor: 'blue'
    },
    {
      title: 'Who Framed Roger Rabbit?',
      director: 'Robert Zemeckis',
      yearReleased: 1988,
      movieColor: 'blue'
    }
  ]);
  const [currentFilter, setCurrentFilter] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieDirector, setMovieDirector] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieColor, setMovieColor] = useState('');

  const movie = {
    title: movieTitle,
    director: movieDirector,
    yearReleased: movieYear,
    movieColor: movieColor
  };

  
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className='formAndPreview'>
        <MovieForm
          handleSubmit = {handleSubmit}
          setMovieTitle = {setMovieTitle}
          setMovieDirector = {setMovieDirector}
          setMovieYear = {setMovieYear}
          setMovieColor = {setMovieColor} />
      </div>
      <div className='movies'>
        <MovieList
          allMovies = {allMovies}
          movieTitle = {movieTitle} 
          movieDirector = {movieDirector} 
          movieYear = {movieYear}
          movieColor = {movieColor} />
      </div>
    </div>
  );
}

export default App;
