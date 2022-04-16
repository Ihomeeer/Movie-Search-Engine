//ФК, отвечающий за рендер модалки с расширенной инфой\
import React from 'react';
import imageNotFoundPath from "../images/notAvailable.svg"

function ModalWithInfo(props) {

  return (
    <div onClick={props.onClose} className={`info__wrapper ${props.isOpen ? 'info__wrapper_active' : ""}`}>
      <div className="info">
        <img className={props.data.Poster === "N/A" ? "info__without-poster" : "info__poster"} src={props.data.Poster === "N/A" ? imageNotFoundPath : props.data.Poster} alt={props.data.Title} />
        <div className="info__text-section">
          <h2 className="info__caption">Director:</h2>
          <p name="infoDirector" className="info__text">{props.data.Director}</p>
          <h2 className="info__caption">Actors:</h2>
          <p name="infoActors" className="info__text">{props.data.Actors}</p>
          <h2 className="info__caption">Description:</h2>
          <p name="infoAbout" className="info__text info__about">{props.data.Plot}</p>
        </div>
      </div>
    </div>
  )
}

export default ModalWithInfo;