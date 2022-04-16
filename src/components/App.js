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
  //Хук для страниц
  const [page, setPage] = React.useState(1);
  const [movieValue, setMovieValue] = React.useState("");
  const [totalPages, setTotalPages] = React.useState(null);

  //Функция отвечает за отправку данных из инпута с названием фильма
  function handleSearch(title) {
    setIsLoading(true);
    api.getMovies(title)
      .then(res => {
        if (res.Response === "True") {
          const totalPages = Math.ceil(+res.totalResults / 10);
          setTotalPages(totalPages);
          setMoviesList(res.Search);
          setIsErrorShow(false);
          setIsLoading(false);
          setPage(1);
        }
        else {
          setMoviesList([]);
          setIsErrorShow(true);
          setIsLoading(false);
          setPage(1);
        }
      })
      .catch(err => console.log(err));
  }

  function forwardClick(title) {
    if (page && page <= totalPages) {
      setIsLoading(true);
      page && api.getMoviesPage(title, page + 1)
        .then(res => {
          if (res.Response === "True") {
            setMoviesList(res.Search);
            setIsErrorShow(false);
            setIsLoading(false);
            setPage(page + 1)
          }
          else {
            setMoviesList([]);
            setIsErrorShow(true);
            setIsLoading(false);
          }
        })
        .catch(err => console.log(err));
    } else {
      return
    }
  }

  function backClick(title) {
    if (page && page > 1) {
      setIsLoading(true);

      page && api.getMoviesPage(title, page - 1)
        .then(res => {
          if (res.Response === "True") {
            setMoviesList(res.Search);
            setIsErrorShow(false);
            setIsLoading(false);
            setPage(page - 1)
          }
          else {
            setMoviesList([]);
            setIsErrorShow(true);
            setIsLoading(false);
          }
        })
        .catch(err => console.log(err));
    } else {
      return
    }
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

      {
        isInfoModalOpen
          ?
          <ModalWithInfo
            data={currentMovie}
            isOpen={isInfoModalOpen}
            onClose={handleCloseModal}
          />
          :
          <>
            {isLoading
              ?
              <LoadingSpinner
                isLoading={isLoading}
              />
              :
              <Main
                onSubmit={handleSearch}
                movies={moviesList}
                openInfo={handleChoseMovie}
                showError={isErrorShow}
                forward={forwardClick}
                back={backClick}
                title={movieValue}
                setTitle={setMovieValue}
                totalPages={totalPages}
              />
            }
          </>
      }

      <Footer />

    </div>
  )
}

export default App;
