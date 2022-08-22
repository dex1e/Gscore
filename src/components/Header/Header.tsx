import React, { useEffect, useState } from "react";

import Link from "next/link";
import styled from "styled-components";

import { COLORS } from "assets";
import { GscoreLogoIcon, MenuIcon } from "components/icons";
import { ROUTES } from "constant";
import { getMe } from "services/auth";
import { setUser } from "store/features/auth";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { Media } from "utils";

import { Menu } from "./Menu";
import { MenuList } from "./MenuList";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    if (token) {
      getMe()
        .then((response) => {
          dispatch(setUser(response.data));
        })

        .catch(function (error: any) {
          console.log(error);
        });
    }
  };

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
          <Link href={ROUTES.ROOT}>
            <Home>
              <GscoreLogoIcon />
            </Home>
          </Link>

          {user?.id && (
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

  &:hover {
    transform: scale(1.1);
    transform-origin: 0 0;

    path {
      fill: ${COLORS.primary};
    }
  }
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
