import React from 'react';
import './App.css';
import api from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalWithInfo from './ModalWithInfo';
import LoadingSpinner from './LoadingSpinner';

function App() {
  //Хук, отвечающий за список фильмов
  const [moviesList, setMoviesList] = React.useState([]);
  //Хук, отвечающий за конкретный фильм, инфа о котором пойдет в модалку
  const [currentMovie, setCurrentMovie] = React.useState({});
  //Хук, отвечающий за открытие модалки с инфой
  const [isInfoModalOpen, setIsInfoModalOpen] = React.useState(false);
  //Хук, отвечающий за показ ошибки, если по запросу ничего не найдено
  const [isErrorShow, setIsErrorShow] = React.useState(false);
  //Хук, отвечающий за спиннер с загрузкой
  const [isLoading, setIsLoading] = React.useState(false);

  //Функция отвечает за отправку данных из инпута с названием фильма
  function handleSearch(title) {
    setIsLoading(true);
    api.getMovies(title)
    .then(res => {
      if (res.Response === "True") {
        setMoviesList(res.Search);
        setIsErrorShow(false);
        setIsLoading(false);
      }
      else {
        setMoviesList([]);
        setIsErrorShow(true);
        setIsLoading(false);
      }
    })
    .catch(err => console.log(err));
  }

  //Функция делает запрос к АПИ по айди фильма, чтобы получить пул с расширенной инфой
  function handleChoseMovie(id) {
    api.getMoviesbyId(id)
    .then(res => {
      setCurrentMovie(res);
      setIsInfoModalOpen(true);
    })
    .catch(err => console.log(err));
  }

  //Закрытие модалки с инфой
  function handleCloseModal() {
    setIsInfoModalOpen(false);
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

      <LoadingSpinner
        isLoading={isLoading}
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
