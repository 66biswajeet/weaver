import React from 'react'
import logo from "../assets/fund.png";
import "../css/Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='content'>
            <div className='br-image'>
            <a href="#!" className="brand-logo">
            <img className='Foot_img' src={logo} />
          </a>

            </div>
            {/* <div className='ref'> */}
              <div className='site'><h5>On our site</h5>
              <span className='lists'>
                <li><a href='/about'>About</a></li>
                <li><a href='/about'>How it works</a></li>
                <li><a href='/about'>Explore campaigns</a></li>
                </span>
              </div>
              <div className='support'>
              <h5>On our site</h5>
              </div>
              <div className='links'>
              <h5>On our site</h5>
              </div>
              <div className='contact'>
              <h5>On our site</h5>
              </div>
            {/* </div> */}
        </div>
    </footer>
  )
}

export default Footer