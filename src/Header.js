import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 30px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const NavLinksContainer = styled.div`
  display: flex;
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin-right: 20px;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    background-color: #333;
  }

  &.active {
    color: #fff;
    background-color: #333;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 50px;
  padding: 5px 10px;
`;

const SearchBarInput = styled.input`
  border: none;
  font-size: 16px;
  width: 200px;
  margin-left: 10px;

  &:focus {
    outline: none;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>My App</Logo>
      <NavLinksContainer>
        <NavLinkStyled exact to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/about">About</NavLinkStyled>
        <NavLinkStyled to="/contact">Contact</NavLinkStyled>
      </NavLinksContainer>
      <SearchBarContainer>
        <i className="fa fa-search"></i>
        <SearchBarInput type="text" placeholder="Search..." />
      </SearchBarContainer>
    </HeaderContainer>
  );
};

export default Header;
