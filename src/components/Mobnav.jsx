import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { HiHome, HiCalendar, HiGift } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  top: 93%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: #333;
`;

const Mobnav = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 50) {
        // Introduce a threshold
        controls.start({ y: "100%" });
      } else if (currentScrollY < lastScrollY - 50) {
        controls.start({ y: 0 });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls]);

  return (
    <NavbarContainer
      style={controls}
      initial={{ y: "100%" }}
      animate={controls}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
      }}
    >
      <NavItem>
        <Link to="/">
          <IconWrapper>
            <HiHome />
          </IconWrapper>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/payment">
          <IconWrapper>
            <FaRupeeSign />
          </IconWrapper>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/csr">
          <IconWrapper>
            <HiGift />
          </IconWrapper>
        </Link>
      </NavItem>
    </NavbarContainer>
  );
};

export default Mobnav;
