import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  LogoutIcon,
  SettingsIcon,
} from "components/icons";

export const HeaderAccordion = () => {
  return (
    <Root allowZeroExpanded>
      <StyledAccordionItem>
        <StyledAccordionItemHeading>
          <StyledAccordionItemButton>
            Alex
            <StyledChevronDownIcon />
          </StyledAccordionItemButton>
        </StyledAccordionItemHeading>

        <StyledAccordionItemPanel>
          <Wrapper>
            <Settings href="#">
              <StyledSettingsIcon />
              Settings
            </Settings>

            <Logout>
              <StyledLogoutIcon />
              Logout
            </Logout>
          </Wrapper>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
    </Root>
  );
};

const Root = styled(Accordion)`
  width: 100%;
  color: ${COLORS.neutral100};

  @media ${DEVICE.tablet} {
    padding-left: 32px;
  }
`;

const StyledAccordionItem = styled(AccordionItem)`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  @media ${DEVICE.tablet} {
    position: relative;
  }
`;

const StyledAccordionItemHeading = styled(AccordionItemHeading)`
  @media ${DEVICE.tablet} {
    max-width: 70px;
  }
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  width: 100%;
  position: relative;

  &[aria-expanded="true"] {
    svg {
      transform: rotate(180deg);
      transition: all 0.3s ease-in-out;
      /* transform: translateY(50%); */
    }
  }
`;

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media ${DEVICE.tablet} {
    right: 0;
  }
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  margin-top: 31px;

  @media ${DEVICE.tablet} {
    position: absolute;
    top: 24px;
    right: 0;
    margin-top: 29px;
    padding: 28px 52px 28px 24px;
    background: ${COLORS.secondaryGray};
    border-radius: 12px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Settings = styled.a`
  padding-bottom: 24px;
  display: flex;
  align-items: center;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  margin-right: 8px;
`;

const Logout = styled.button`
  display: flex;
  align-items: center;
`;

const StyledLogoutIcon = styled(LogoutIcon)`
  margin-right: 8px;
`;
