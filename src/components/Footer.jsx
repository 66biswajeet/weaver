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
            <div className='ref'></div>
        </div>
    </footer>
  )
}

export default Footer