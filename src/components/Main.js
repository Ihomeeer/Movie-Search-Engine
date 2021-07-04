import React from 'react';
import Card from './Card';

function Main({movies, onSubmit, openInfo, showError}) {

  //хук для хранения и изменения значения инпута с названием фильма
  const [movieValue, setMovieValue] = React.useState("");

  function handleMovieChange(e) {
    setMovieValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(movieValue)
  }

  React.useEffect(() => {
    setMovieValue("")
  }, [onSubmit])

  return (
    <main className="main">
      <form className="main__form" onSubmit={handleSubmit}>
        <input name="movieTitle" className="main__search-input" value={movieValue} onChange={handleMovieChange} placeholder="Search for movies" minLength="2" maxLength="30" required autoFocus></input>
        <button name="submitButton" className="main__search-button" type="submit">Search</button>
      </form>
      <p className={`main__error ${showError ? 'main__error_active' : "" }`}>No such movies found...</p>
        <ul className="main__grid">
          {movies.map(item => {
            return (
               <Card movie={item} key={item.imdbID} openInfo={openInfo} />)
              }
            )
          }
        </ul>
    </main>
  )
}

export default Main;

