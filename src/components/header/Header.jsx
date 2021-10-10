import React from 'react'
import Indie from 'assets/img/INDIE.png'
import Search from 'assets/img/Search.png'
import Notification from 'assets/img/Notification.png'
import Avatar from 'assets/img/Avatar.png'
import Menu from 'assets/img/Menu.png'
import './Header.css'

function Header(props) {
  const { handleTogglePopup } = props

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <img src={Menu} className="header-hamburger" onClick={handleTogglePopup} />
        <img src={Indie} className="header-img" />
        <div className="header-menu">
          <div className="header-item">MENU ONE</div>
          <div className="header-item">MENU TWO</div>
          <div className="header-item">DISCORD</div>
        </div>
        <div className="header-list-icon">
          <img src={Search} className="header-icon" />
          <img src={Notification} className="header-icon" />
          <img src={Avatar} className="header-icon" />
        </div>
      </div>
    </div>
  )
}

export default Header
