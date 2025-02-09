import React, { useEffect, useRef } from "react";
import M from "materialize-css";
import "../css/Nav.css";
import styled from "styled-components";
import logo from "../assets/fund.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const sideNavRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    M.Sidenav.init(sideNavRef.current, {
      edge: "right",
      draggable: true,
      inDuration: 250,
      outDuration: 200,
      onOpenStart: () => {
        hamburgerRef.current.classList.add("is-active");
      },
      onCloseEnd: () => {
        hamburgerRef.current.classList.remove("is-active");
      },
    });
  }, []);

  const toggleSideNav = () => {
    const instance = M.Sidenav.getInstance(sideNavRef.current);
    instance.isOpen ? instance.close() : instance.open();
  };

  const StyledButton = styled.button`
    padding: 1rem 2rem; /* px-8 py-4 equivalent */
    background-color: #26a8b9; /* bg-rose-400 */
    border-radius: 0.375rem; /* rounded-md */
    color: white;
    font-weight: 600; /* font-semibold */
    font-family: "sans-serif"; /* font-sans */
    position: relative;
    overflow: hidden;
    font-size: 1.5rem; /* text-2xl */
    /* text-shadow */
    height: 43px;
    text-align: center;
    padding: 0 10px 4px 10px;
    border: none;
    margin-left: 20px;
    cursor: pointer;
    transition: all 0.5s;

    &:after {
      content: "";
      position: absolute;
      height: 0.25rem; /* h-1 */
      width: 0.25rem; /* w-1 */
      background-color: #147885; /* bg-rose-800 */
      left: 1.25rem; /* left-5 */
      bottom: 0;
      transform: translateY(100%);
      border-radius: 0.375rem; /* rounded-md */
      transition: all 0.7s;
      z-index: -20;
    }

    &:hover {
      /* hover:text-shadow */
      background-color: #147885;
    }

    &:hover:after {
      transform: scale(3) translateY(100%);
      transition: all 0.7s;
    }
  `;
  return (
    <>
      <nav className="transparent z-depth-0">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            <img src={logo} />
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/redirect">Explore Campaign</Link>
            </li>
            <li>
              <Link to="/csr">CSR</Link>
              {/* <a href="/blogpost">CSR</a> */}
            </li>
            <li>
              <Link href="/redirect">Discover NGOs</Link>
            </li>
            <li>
              <Link href="/">Monthly Campains</Link>
            </li>
            <li>
              <Link to="/payment">
                <StyledButton>Fund Raiser</StyledButton>
              </Link>
            </li>
          </ul>

          <a
            href="#!"
            data-target="mobile-nav"
            className="sidenav-trigger right"
            onClick={toggleSideNav}
          >
            <div className="hamburger" ref={hamburgerRef}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </nav>

      <ul
        id="mobile-nav"
        className="sidenav"
        ref={sideNavRef}
        onClick={toggleSideNav}
      >
        <li>
          <Link to="/redirect">Explore Campains</Link>
        </li>
        <li>
          <Link to="/csr">CSR</Link>
        </li>
        <li>
          <Link to="/redirect">Discover NGOs</Link>
        </li>
        <li>
          <Link to="/">Monthly Campains</Link>
        </li>
        <Link to="/payment">
          <StyledButton>Fund Raiser</StyledButton>
        </Link>
      </ul>
    </>
  );
};

export default Nav;
