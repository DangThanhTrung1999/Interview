import React from 'react'
import './footer.css'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <FooterTop />
        <FooterBottom />
      </div>
    </div>
  )
}

export default Footer
