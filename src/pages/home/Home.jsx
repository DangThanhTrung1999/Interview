import Banner from 'components/banner/Banner'
import Footer from 'components/footer/Footer'
import Header from 'components/header/Header'
import Intro from 'components/intro/Intro'
import MovieCarousel from 'components/movieCarousel/MovieCarousel'
import React, { useState } from 'react'

function Home() {
  const [open, setOpen] = useState(false)
  const handleTogglePopup = () => {
    setOpen(open => !open)
  }
  return (
    <div className='home'>
      {open && (<div className='layer'>
        <div className="layer-menu">
          <div className="layer-item">MENU ONE</div>
          <div className="layer-item">MENU TWO</div>
          <div className="layer-item">DISCORD</div>
        </div>
      </div>)}
      <Header handleTogglePopup={handleTogglePopup} />
      <Intro />
      <Banner />
      <MovieCarousel />
      <Footer />
    </div>
  )
}

export default Home
