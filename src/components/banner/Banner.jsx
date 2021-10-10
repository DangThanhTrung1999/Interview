import React from 'react'
import Text from 'assets/img/Text.png'
import PG13 from 'assets/img/pg-13.png'
import './Banner.css'

function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="banner-container">
        <img className="banner-title" src={Text} />
        <div className="banner-text-group">
          <div className="banner-time">
            <p className="banner-item">2020</p>
            <div className="banner-dot">.</div>
            <p className="banner-item">2h19m</p>
            <div className="banner-dot">.</div>
            <p className="banner-item">Mystery, Comedy, Action-Adventure</p>
          </div>
          <div className="banner-lorem">
            Lorem ipsum dolor sit amet, conse elit. Hac nulla scel erisque eleme ntum id vulputate
            iaculis. Tortor sit at bibe ndum aenean commodo. eget.
          </div>
        </div>
        <img src={PG13} className="banner-icon" />
        <div className='banner-btn-group'>
          <div className="banner-btn">
                PLAY
          </div>
          <div className="banner-btn">
                TRAILER
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
