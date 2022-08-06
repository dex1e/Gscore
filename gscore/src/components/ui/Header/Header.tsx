import React from "react";

import styled from "styled-components";

import { HeaderLogoIcon, LessIcon } from "components/icons";

export const Header = () => {
  return (
    <Root>
      <HeaderLogoIcon />
      <Nav>
        <BurgerButton>
          <StyledLessIcon></StyledLessIcon>
          <StyledLessIcon></StyledLessIcon>
          <StyledLessIcon></StyledLessIcon>
        </BurgerButton>
      </Nav>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background: green;
  /* position: fixed; */
  z-index: 50;
  display: flex;
  align-items: center;
`;

const BurgerButton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  /* &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 20px;
    height: 2px;
    background-color: white;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 20px;
    background-color: white;
    height: 2px;
  } */
`;

const StyledLessIcon = styled(LessIcon)`
  position: absolute;
`;

const Span = styled.span``;
