import React from 'react'
import logo from "../assets/fund.png";
import "../css/Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className='content'>
        <div className='br-image'>
          <a href="#!" className="brand-logo">
            <img className='Foot_img' src={logo} />
          </a>

        </div>
        
        <div className='site'><h5>On our site</h5>
          <span className='lists'>
            <li><a href='/about'>About</a></li>
            <li><a href='/how it works'>How it works</a></li>
            <li><a href='/explore campaigns'>Explore campaigns</a></li>
          </span>
        </div>
        <div className='support'>
          <h5>Support</h5>
          <span className='lists'>
            <li><a href='/FAQs'>FAQs</a></li>
            <li><a href='/donation Policy'>Donation Policy</a></li>
            <li><a href='/terms & Conditions'>Terms & Conditions</a></li>
            <li><a href='/privacy Policy'>Privacy Policy</a></li>

          </span>
        </div>
        <div className='links'>
          <h5>Other links</h5>
          <span className='lists'>
            <li><a href='/start your campaign'>Start your campaign</a></li>
            <li><a href='/back to top'>Back to top</a></li>

          </span>
        </div>
        <div className='contact'>
          <h5>Get in touch with us</h5>
          <span className='lists'>
            <li><a href='/address'>Mill Road, Keonjhar, India Pin-758002</a></li>
            <li><a href='/contact no'>+91 8282828282</a></li>

          </span>
        </div>
        
      </div>
      <div className='bottom'>
        <div className='copyright'>Copyright @ 2024. Weaver Welfare Organisation. All rights reserved.</div>
        <div className='icons'>
        <a href='/fb'><FaFacebook/></a>
        <a href='/twitter'><FaTwitter/></a>
        <a href='/insta'><FaInstagram/></a>
        <a href='/linkedin'><FaLinkedin/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer