import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import img1 from 'assets/img/img1.png'
import img2 from 'assets/img/img2.png'
import img3 from 'assets/img/img3.png'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

function MovieCarouselBottom() {
  const [slidesToShow, setSlidesToShow] = useState(2.5)
  useEffect(() => {
    const { width } = getWindowDimensions()
    if (width > 500) {
      setSlidesToShow(3)
    }
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    center: 60
  }
  return (
    <div className="movie__carousel-bottom">
      <Slider {...settings} className="slider-movie">
        <div className="movie__image">
          <img src={img1} alt="image1"></img>
        </div>
        <div className="movie__image">
          <img src={img2} alt="image1"></img>
        </div>
        <div className="movie__image">
          <img src={img3} alt="image1"></img>
        </div>
        <div className="movie__image">
          <img src={img1} alt="image1"></img>
        </div>
      </Slider>
    </div>
  )
}

export default MovieCarouselBottom
