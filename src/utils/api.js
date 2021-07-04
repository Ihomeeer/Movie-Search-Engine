import './api.css';

//Класс содержит всю логику для работы с API
class Api {
  constructor(baseUrl, authorization) {
    this._baseUrl = baseUrl;
    this._authorization = authorization;
  }

  //проверка состояния промиса, чтобы не писать одно и то же сто тыщ раз
  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //получение информации о фильмах с сервера
  getMovies(title) {
    return fetch(`${this._baseUrl}?s=${title}&apikey=${this._authorization}`)
    .then(res => this._checkStatus(res));
  }

  //получение информации о фильмах с сервера с расширенной инфой
  getMoviesbyId(id) {
    return fetch(`${this._baseUrl}?i=${id}&apikey=${this._authorization}&plot=full`)
    .then(res => this._checkStatus(res));
  }


};

const api = new Api("https://www.omdbapi.com/", "5cd3eeda");
export default api;