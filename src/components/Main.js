//ФК, отвечающий за рендер карточек с фильмами, и возвращающий разметку поисковой строки и карточек
import React from 'react';
import Card from './Card';

function Main({ movies, onSubmit, openInfo, showError, forward, back, title, setTitle, totalPages }) {

  function handleMovieChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(title);
  }

  return (
    <main className="main">
      <form className="main__form" onSubmit={handleSubmit}>
        <input name="movieTitle" className="main__search-input" value={title} onChange={handleMovieChange} placeholder="Search for movies" minLength="2" maxLength="30" required autoFocus></input>
        <button name="submitButton" className="main__search-button" type="submit">Search</button>
      </form>
      <p className={`main__error ${showError ? 'main__error_active' : ""}`}>No such movies found...</p>
      <ul className="main__grid">
        {movies.map(item => {
          return (
            <Card movie={item} key={item.imdbID} openInfo={openInfo} />)
        })}
      </ul>
      <nav className="main__pages">
        {totalPages > 1
          &&
          <>
            <button className="main__nav-button main__nav-button_type_back" onClick={() => { back(title) }}>&#129120;</button>
            <button className="main__nav-button main__nav-button_type_forward" onClick={() => { forward(title) }}>&#129122;</button>
          </>
        }
      </nav>
    </main>
  )
}

export default Main;

