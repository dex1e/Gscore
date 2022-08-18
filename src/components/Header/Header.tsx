import React, { useEffect, useState } from "react";

import Link from "next/link";
import styled from "styled-components";

import { COLORS } from "assets";
import { GscoreLogoIcon, MenuIcon } from "components/icons";
import { Media } from "media";
import { LocalStorageService } from "services";

import { Menu } from "./Menu";
import { MenuList } from "./MenuList";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const user = LocalStorageService.getData("user");

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
          <Link href="/">
            <Home>
              <StyledGscoreLogoIcon />
            </Home>
          </Link>

          {hasWindow && user && (
            <Nav>
              <Media at="mobileS">
                <BurgerButton onClick={handleOpenMenu}>
                  <MenuIcon />
                </BurgerButton>
                <Menu isMenuOpen={isMenuOpen} onCloseMenu={handleCloseMenu} />
              </Media>

              <Media greaterThanOrEqual="tablet">
                <MenuList />
              </Media>
            </Nav>
          )}
        </Inner>
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

const Home = styled.a`
  width: fit-content;
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
