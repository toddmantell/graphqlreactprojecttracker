import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  color: #fff;
  background-color: lightblue;
  height: 40px;
  box-shadow: 0 1px 0 rgba(0,0,0,0.5);
  margin-bottom: 20px;
`;

const Header = props => {
  return (
  <Nav>
    Header
  </Nav>
    );
};

export default Header;

