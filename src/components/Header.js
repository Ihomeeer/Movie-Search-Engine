//ФК, отвечающий за заголовок
import React from 'react';
import logoPath from '../images/logo.svg';

function Header() {
  return (
    <>
    <a className="header__link" href="https://github.com/Ihomeeer">
      <img className="header__logo" src={logoPath} alt="logo" />
    </a>
      <h1 className="header__title">Movie Search Engine</h1>
      <p className="header__subtitle">Search for your favourite movies by title</p>
    </>
  )
}

export default Header;