import { FC, MouseEvent } from "react";

import styled, { css } from "styled-components";

import { COLORS, DEVICE } from "assets";
import { CloseIcon, GscoreLogoIcon } from "components/icons";
import { Z_INDEX } from "constant";

import { MenuList } from "../MenuList";

interface MenuProps {
  menuActive: boolean;
  onCloseMenu: () => void;
}

export const Menu: FC<MenuProps> = ({ menuActive, onCloseMenu }) => {
  const handleStopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Root $menuActive={menuActive} onClick={onCloseMenu}>
      {menuActive && <BackgroundBlur $menuActive={menuActive} />}

      <MenuContent onClick={handleStopPropagation} $menuActive={menuActive}>
        <MenuHeader>
          <StyledCloseIcon onClick={onCloseMenu} />
          <StyledHeaderLogoIcon />
        </MenuHeader>

        <MenuList />
      </MenuContent>
    </Root>
  );
};

const Root = styled.div<{ $menuActive: boolean }>`
  width: 260px;
  min-height: calc(100% + 20px);
  position: fixed;
  top: -20px;
  right: -260px;
  background: ${COLORS.secondaryGray};
  transform: translateX(0);
  transition: all 0.2s;
  opacity: 0;
  z-index: ${Z_INDEX.main};
  -webkit-font-smoothing: antialiased;

  ${({ $menuActive }) =>
    $menuActive &&
    css`
      opacity: 1;
      transform: translateX(-100%);
    `}

  @media ${DEVICE.tablet} {
    display: none;
  }
`;

const BackgroundBlur = styled.div<{ $menuActive: boolean }>`
  width: 100vw;
  height: 100%;
  opacity: 0.6;
  background: ${COLORS.secondaryGray};
  position: fixed;
  right: 260px;
  z-index: ${Z_INDEX.upper};
`;

const MenuContent = styled.div<{ $menuActive: boolean }>`
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 28px 24px 0 21px;
`;

const MenuHeader = styled.header`
  display: flex;
  align-items: center;
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  margin-right: 32px;
`;

const StyledHeaderLogoIcon = styled(GscoreLogoIcon)`
  width: 130px;
  height: 32px;
`;