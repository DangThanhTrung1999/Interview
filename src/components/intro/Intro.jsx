import React from 'react'
import Universal from 'assets/img/Universal.png'
import './Intro.css'

function Intro() {
  return (
    <div className="intro-wrapper">
      <div className="intro-container">
        <img src={Universal} alt="universal" className='intro-img'/>
        <div className='intro-text'>
            LOS ANGELES, CA
        </div>
      </div>
    </div>
  )
}

export default Intro
