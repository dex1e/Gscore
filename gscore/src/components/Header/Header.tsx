import React, { useEffect, useState } from "react";

import { createMedia } from "@artsy/fresnel";
import styled from "styled-components";

import { GscoreLogoIcon, MenuIcon } from "components/icons";
import { DEVICE } from "constant";

import { Media } from "../../media";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";

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
          <StyledGscoreLogoIcon />
          <Nav>
            <Media at="mobileM">
              <BurgerButton onClick={handleMenuCLick}>
                <MenuIcon />
              </BurgerButton>
            </Media>
            <Media greaterThanOrEqual="laptop">
              <MenuList />
            </Media>
          </Nav>
        </Inner>
        <Menu menuActive={menuActive} onCloseMenu={handleCloseMenu} />
      </div>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  padding-top: 20px;
`;

const Inner = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledGscoreLogoIcon = styled(GscoreLogoIcon)`
  cursor: pointer;
`;

const Nav = styled.nav`
  height: 24px;
  display: flex;
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
