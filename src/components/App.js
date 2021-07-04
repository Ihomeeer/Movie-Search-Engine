import React from 'react';
import './App.css';
import api from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalWithInfo from './ModalWithInfo';

function App() {
  const [moviesList, setMoviesList] = React.useState([]);
  const [currentMovie, setCurrentMovie] = React.useState({});
  const [isInfoModalOpen, setIsInfoModalOpen] = React.useState(false);
  const [isErrorShow, setIsErrorShow] = React.useState(false);

  function handleSearch(title) {
    api.getMovies(title)
    .then(res => {
      if (res.Response === "True") {
        setMoviesList(res.Search)
        setIsErrorShow(false)
      }
      else {
        setMoviesList([])
        setIsErrorShow(true)
      }
    })
    .catch(err => console.log(err))
  }

  function handleChoseMovie(id) {
    api.getMoviesbyId(id)
    .then(res => {
      setCurrentMovie(res)
      setIsInfoModalOpen(true)
    })
    .catch(err => console.log(err))
  }

  function handleCloseModal() {
    setIsInfoModalOpen(false)
  }

  return (
    <div className="App">
      <Header />


      <Main
        onSubmit={handleSearch}
        movies={moviesList}
        openInfo={handleChoseMovie}
        showError={isErrorShow}
      />

      <ModalWithInfo
        data={currentMovie}
        isOpen={isInfoModalOpen}
        onClose={handleCloseModal}
      />


      <Footer />

    </div>
  )
}

export default App;
