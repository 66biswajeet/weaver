import React, { useEffect, useRef } from "react";
import M from "materialize-css";
import "../css/Nav.css";

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

  return (
    <>
      <nav className="transparent z-depth-0">
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">
            WWT
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Explore Campains</a>
            </li>
            <li>
              <a href="/blogpost">CSR</a>
            </li>
            <li>
              <a href="/blog">Discover NGOs</a>
            </li>
            <li>
              <a href="#contact">Monthly Campains</a>
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

      <ul id="mobile-nav" className="sidenav" ref={sideNavRef}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#explore">Explore</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
