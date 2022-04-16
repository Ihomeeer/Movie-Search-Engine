//ФК, возвращающий разметку карточки с фильмом
import React from 'react';
import imageNotFoundPath from "../images/notAvailable.svg"

function Card(props) {

  function getMovieData() {
    props.openInfo(props.movie.imdbID);
  }

  return (
    <li key={props.movie.imdbID} className="card" >
      <img src={props.movie.Poster === "N/A" ? imageNotFoundPath : props.movie.Poster} alt={props.movie.Title} className={props.movie.Poster === "N/A" ? "card__notFound" : "card__photo"} />
      <h2 className="card__name" id="cardName">{props.movie.Title}</h2>
      <button className="card__info" onClick={getMovieData}>Learn more</button>
    </li>
  )
}

export default Card;