import React from 'react'
import arrowLeft from 'assets/img/chevron-left.png'
import arrowRight from 'assets/img/chevron-right.png'

function MovieCrouselTop() {
  return (
    <div className="movie__carousel-top">
      <div className="movie__carousel-title">
        <div className="title-item active">Suggested</div>
        <div className="title-item">Extras</div>
        <div className="title-item">Details</div>
      </div>
      <div className="arrow-transfer">
        <div className="arrow arrow-right">
          <img src={arrowRight} alt="arrow-right" />
        </div>
        <div className="arrow arrow-left">
          <img src={arrowLeft} alt="arrow-left" />
        </div>
      </div>
    </div>
  )
}

export default MovieCrouselTop
