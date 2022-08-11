import { FC, MouseEvent } from "react";

import styled, { css } from "styled-components";

import { COLORS } from "assets";
import { CloseIcon, GscoreLogoIcon } from "components/icons";
import AccordionMenu from "components/ui";
import HeaderAccordion from "components/ui/HeaderAccordion";
import { DEVICE, Z_INDEX } from "constant";
import { Divider } from "utils";

import { MenuList } from "./MenuList";

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
        {/* <MySubscriptions href="#">My subscriptions</MySubscriptions>

        <StyledDivider />
        <HeaderAccordion />
        <StyledDivider /> */}
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

  @media ${DEVICE.laptopL} {
    display: none;
  }
`;

const BackgroundBlur = styled.div<{ $menuActive: boolean }>`
  width: 100vw;
  height: 100%;
  opacity: 0.6;
  background: ${COLORS.secondaryGray};
  position: fixed;
  /* top: -20px; */
  right: 260px;
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
  padding: 28px 24px 0 21px;
  /* z-index: ${Z_INDEX.main}; */
  /* right: 0; */
  /* transition: transform 0.4s; */
  /* align-items: center; */
  /* background-color: blue; */
  /* position: absolute;
  right: 30%;
  top: 0; */
`;

const MenuHeader = styled.header`
  display: flex;
  align-items: center;
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

const StyledHeaderLogoIcon = styled(GscoreLogoIcon)`
  width: 130px;
  height: 32px;
  margin-left: 32px;
`;

const MySubscriptions = styled.a<{ $menuActive: boolean }>`
  color: ${COLORS.neutral100};
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  margin: 48px 0 0 0;
`;

const StyledDivider = styled(Divider)`
  margin: 20px 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

// const StyledAccordionMenu = styled(AccordionMenu)``;
