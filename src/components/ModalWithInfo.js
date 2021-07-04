import React from 'react';


function ModalWithInfo(props) {


  return (
    <div className= {`info__wrapper ${props.isOpen ? 'info__wrapper_active' : "" }`}>
      <button name="closeButton" className="info__close-btn" type="button" onClick={props.onClose}></button>
      <div className="info">
        <h2 className="info__caption">Director:</h2>
        <p name="infoDirector" className="info__text">{props.data.Director}</p>
        <h2 className="info__caption">Actors:</h2>
        <p name="infoActors" className="info__text">{props.data.Actors}</p>
        <h2  className="info__caption">Description:</h2>
        <p name="infoAbout" className="info__text">{props.data.Plot}</p>
      </div>
    </div>
  )
}

export default ModalWithInfo;