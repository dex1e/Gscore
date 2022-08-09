import { FC } from "react";

import styled, { css } from "styled-components";

import { COLORS } from "assets";
import { CloseIcon, GscoreLogoIcon } from "components/icons";
import { Z_INDEX } from "constant";

interface MenuProps {
  menuActive: boolean;
  onCloseMenu: () => void;
}

export const Menu: FC<MenuProps> = ({ menuActive, onCloseMenu }) => {
  const handleStopPropagation = (e: any) => {
    e.stopPropagation();
  };

  return (
    <Root $menuActive={menuActive} onClick={onCloseMenu}>
      {/* {menuActive && <BackgroundBlur $menuActive={menuActive} />} */}
      <MenuContent onClick={handleStopPropagation} $menuActive={menuActive}>
        <MenuHeader>
          <StyledCloseIcon onClick={onCloseMenu} />
          <StyledHeaderLogoIcon />
        </MenuHeader>
        <MenuText $menuActive={menuActive}>My subscriptions</MenuText>
      </MenuContent>
    </Root>
  );
};

const Root = styled.div<{ $menuActive: boolean }>`
  width: 260px;
  height: 100vh;
  position: absolute;
  top: 44px;
  right: -260px;
  /* right: ${({ $menuActive }) => ($menuActive ? "0" : "-260px")}; */
  background: #272727;
  -webkit-font-smoothing: antialiased;

  transform: translateX(0);
  opacity: 0;
  transition: all 0.2s;

  ${({ $menuActive }) =>
    $menuActive &&
    css`
      opacity: 1;
      transform: translateX(-100%);
    `}
`;

const BackgroundBlur = styled.div<{ $menuActive: boolean }>`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  position: fixed;
  /* right: 260px; */
  z-index: ${Z_INDEX.upper};

  /* ${({ $menuActive }) =>
    !$menuActive &&
    css`
      display: none;
    `} */
`;

const MenuContent = styled.div<{ $menuActive: boolean }>`
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 48px; */
  /* right: 0; */
  /* transition: transform 0.4s; */
  /* align-items: center; */
  /* background-color: blue; */
  /* position: absolute;
  right: 30%;
  top: 0; */
  z-index: ${Z_INDEX.main};
`;

const MenuHeader = styled.header`
  display: flex;
  gap: 35px;
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

const StyledHeaderLogoIcon = styled(GscoreLogoIcon)`
  width: 130px;
  height: 32px;
`;

const MenuText = styled.h2<{ $menuActive: boolean }>`
  color: ${COLORS.neutral100};
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
`;
