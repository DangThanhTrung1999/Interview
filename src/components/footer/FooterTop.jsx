import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import facebook from '../../assets/img/facebook.png'
import linkendin from '../../assets/img/linkedin.png'
import twitter from '../../assets/img/twitter.png'

function FooterTop() {
  const [hidden, setHidden] = useState(true)
  const [hidden1, setHidden1] = useState(true)
  const [hidden2, setHidden2] = useState(true)
  const [hidden3, setHidden3] = useState(true)
  return (
    <div className="footer-content">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <p className="footer-text text">
          An experiential and interactive multi-platform streaming app and distribution channel
          dedicated to independently produced film and TV.
        </p>
        <div className="footer-social">
          <div className="icon facebook">
            <img src={facebook} alt="facebook" />
          </div>
          <div className="icon twitter">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="icon linkendin">
            <img src={linkendin} alt="linkendin" />
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="element">
          <h4 className="title" onClick={() => setHidden(!hidden)}>
            Genres
          </h4>
          <ul className={hidden === true ? 'list-item' : 'list-item genres'}>
            <li>
              <a>Mystery</a>
            </li>
            <li>
              <a>Sci-Fi</a>
            </li>
            <li>
              <a>Horror</a>
            </li>
            <li>
              <a>Romance</a>
            </li>
          </ul>
        </div>
        <div className="element">
          <h4 className="title" onClick={() => setHidden1(!hidden1)}>
            Company
          </h4>
          <ul className={hidden1 === true ? 'list-item' : 'list-item company'}>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Partners</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Meet the Team</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
          </ul>
        </div>
        <div className="element">
          <h4 className="title" onClick={() => setHidden2(!hidden2)}>
            For You
          </h4>
          <ul className={hidden2 === true ? 'list-item' : 'list-item for-you'}>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Terms of Use</a>
            </li>
            <li>
              <a>Subscriber</a>
            </li>
          </ul>
        </div>
        <div className="element">
          <h4 className="title" onClick={() => setHidden3(!hidden3)}>
            Help
          </h4>
          <ul className={hidden3 === true ? 'list-item ' : 'list-item help'}>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Email Support</a>
            </li>
            <li>
              <a>Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
