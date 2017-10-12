import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1000;
  color: #fff;
  background-color: rebeccapurple;
  height: 40px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.5);
  margin-bottom: 20px;
`;

const NavItem = styled.div`
  margin: 10px 20px;
  font-weight: 500;
`;

const NavBar = () => {
  return (
  <Nav>
    <NavItem>LOGO</NavItem>
  </Nav>
    );
};

export default NavBar;

