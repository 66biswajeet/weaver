import React from "react";
import logo from "../assets/fund.png";
import "../css/Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <a href="#!" className="brand-logo">
            <img className="footer-logo" src={logo} alt="Logo" />
          </a>
        </div>

        <div className="footer-section">
          <h5>On our site</h5>
          <ul className="footer-links">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/how-it-works">How it works</a>
            </li>
            <li>
              <a href="/explore-campaigns">Explore campaigns</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Support</h5>
          <ul className="footer-links">
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">Donation Policy</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Other links</h5>
          <ul className="footer-links">
            <li>
              <a href="/">Start your campaign</a>
            </li>
            <li>
              <a href="#top">Back to top</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Get in touch with us</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Mill Road, Keonjhar, India Pin-758002</a>
            </li>
            <li>
              <a href="tel:+918282828282">+91 8282828282</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          Copyright @ 2024. Weaver Welfare Organisation. All rights reserved.
        </div>
        <div className="social-icons">
          <a href="/fb">
            <FaFacebook />
          </a>
          <a href="/twitter">
            <FaTwitter />
          </a>
          <a href="/insta">
            <FaInstagram />
          </a>
          <a href="/linkedin">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
