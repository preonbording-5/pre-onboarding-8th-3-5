import React from 'react';
import styled from 'styled-components';
import logo from '../../../lib/images/logo.png'

const NavBar = () => (
  <Container>
    <Image src={logo} alt="logo" />
  </Container>
);

export default NavBar;

const Container = styled.header`
  width: 100%;
  height: 56px;
  position: static;
  background-color: #ffffff;
  padding: 0 100px 0 100px;
`;

const Image = styled.img`
  width: 160px;
  height: 56px;
`;
