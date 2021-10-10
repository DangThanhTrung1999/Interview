import React from 'react'
import MovieCarouselBottom from './MovieCarouselBottom'
import './movieCarousel.css'
import MovieCrouselTop from './MovieCrouselTop'

function MovieCarousel() {
  return (
    <div className="movie__carousel">
      <div className="movie__carousel-container">
        <MovieCrouselTop />
        <MovieCarouselBottom />
      </div>
    </div>
  )
}

export default MovieCarousel
