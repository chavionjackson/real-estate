import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import MenuData from "../data/MenuData";
import Button from "./Button";
import { FaBars } from "react-icons/fa"

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 30px;
    width: 25px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 45%)
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars />
      <NavMenu>
        {MenuData.map((item, id) => {
          return (
            <NavMenuLinks to={item.link} key={id}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button primary="true" to="/contact">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
