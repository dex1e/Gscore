import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { GscoreLogoIcon, MenuIcon } from "components/icons";

import { Menu } from "./Menu";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuCLick = () => {
    setMenuActive(!menuActive);
  };

  const handleCloseMenu = () => {
    setMenuActive(false);
  };

  return (
    <Root>
      <div className="container">
        <Inner>
          <StyledHeaderLogoIcon />
          <Nav>
            <BurgerButton onClick={handleMenuCLick}>
              <MenuIcon />
            </BurgerButton>
          </Nav>
          <Menu menuActive={menuActive} onCloseMenu={handleCloseMenu} />
        </Inner>
      </div>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;

const Inner = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderLogoIcon = styled(GscoreLogoIcon)``;

const Nav = styled.nav`
  /* width: 50%; */
  /* height: 44px; */
  margin-right: 26px;
  display: flex;
  align-items: center;
`;

const BurgerButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  /* margin-left: 20px; */
  /* position: relative; */
  /* display: flex;
  flex-direction: column; */
`;
