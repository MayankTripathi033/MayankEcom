import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLinkStyled exact to="/">Home</NavLinkStyled>/<Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.2rem;
  padding-left: 1.2rem;
`;

const NavLinkStyled = styled(NavLink)`
  font-size: inherit;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Title = styled.span`
  margin-left: 0.5rem;
  transition: color 0.3s ease;

  ${Wrapper}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default PageNavigation;
  