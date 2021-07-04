//ФК, отвечающий за спиннер загрузки
import React from 'react';

function LoadingSpinner({isLoading}) {

  return (
    <div className={`spinner__wrapper ${isLoading ? "spinner__wrapper_active" : "" }`}>
      <div className="spinner"></div>
    </div>
  )
}

export default LoadingSpinner;