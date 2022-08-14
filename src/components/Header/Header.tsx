import React, { useState } from "react";

import styled from "styled-components";

import { COLORS } from "assets";
import { GscoreLogoIcon, MenuIcon } from "components/icons";
import { Media } from "media";

import { Menu } from "./Menu";
import { MenuList } from "./MenuList";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Root>
      <div className="container">
        <Inner>
          <StyledGscoreLogoIcon />

          <Nav>
            <Media at="mobileS">
              <BurgerButton onClick={handleOpenMenu}>
                <MenuIcon />
              </BurgerButton>
            </Media>

            <Media greaterThanOrEqual="tablet">
              <MenuList />
            </Media>
          </Nav>
        </Inner>
        <Menu isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu} />
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

  &:hover {
    path {
      stroke: ${COLORS.secondaryRed};
    }
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.primary};
  }
`;
