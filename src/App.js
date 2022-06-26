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




  function handleMovieClick(index) {
    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }


  function filterMovies(currentFilter) {
    const updatedMovies = allMovies.filter(movie => movie.title.includes(currentFilter));
    setAllMovies(updatedMovies);
  }
  const [allMovies, setAllMovies] = useState([
    {
      title: 'Across The Universe',
      director: 'Julie Taymor',
      yearReleased: 2007,
      movieColor: 'lightblue'
    },
    {
      title: 'Who Framed Roger Rabbit?',
      director: 'Robert Zemeckis',
      yearReleased: 1988,
      movieColor: 'lightblue'
    }
  ]);
  const [currentFilter, setCurrentFilter] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieDirector, setMovieDirector] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieColor, setMovieColor] = useState('lightblue');

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
          setMovieColor = {setMovieColor}
        />
      </div>
      <Movie movieTitle = {movieTitle}
        movieDirector = {movieDirector}
        movieColor={movieColor} movieYear={movieYear}
        handleMovieClick={handleMovieClick}
      />
      <div className='filter'>
        <label>Filter by Title:
          <input onChange={(e) => filterMovies(e.target.value)} />
        </label>
      </div>
      <div className='movies'>
        <MovieList
          allMovies = {allMovies}
          handleMovieClick = {handleMovieClick}
        />
      </div>
    </div>
  );
}

export default App;
