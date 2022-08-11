import React, { FC } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styled from "styled-components";

import { COLORS } from "assets";
import { ChevronRightIcon, LogoutIcon, SettingsIcon } from "components/icons";
import { DEVICE } from "constant";

const HeaderAccordion = () => {
  return (
    <Root allowZeroExpanded>
      <StyledAccordionItem>
        <StyledAccordionItemHeading>
          <StyledAccordionItemButton>
            Alex
            <StyledChevronBottomIcon />
          </StyledAccordionItemButton>
        </StyledAccordionItemHeading>

        <StyledAccordionItemPanel>
          <Wrapper>
            <Settings href="#">
              <Text>Settings</Text>
              <StyledSettingsIcon />
            </Settings>

            <Logout>
              <Text>Logout</Text>
              <StyledLogoutIcon />
            </Logout>
          </Wrapper>
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
    </Root>
  );
};

const Root = styled(Accordion)`
  width: 100%;

  @media ${DEVICE.laptopL} {
    padding-left: 32px;
  }
`;

const StyledAccordionItem = styled(AccordionItem)`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  @media ${DEVICE.laptopL} {
    position: relative;
    /* display: flex;
    flex-direction: column; */
    /* width: 118px; */
  }
`;

const StyledAccordionItemHeading = styled(AccordionItemHeading)`
  @media ${DEVICE.laptopL} {
    max-width: 70px;
  }
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  width: 100%;
  position: relative;
  color: ${COLORS.neutral100};

  &[aria-expanded="true"] {
    svg {
      transform: rotate(270deg);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const StyledChevronBottomIcon = styled(ChevronRightIcon)`
  position: absolute;
  right: 0;
  top: calc(50% - 10px);
  transform: rotate(90deg);
  transition: all 0.3s ease-in-out;

  @media ${DEVICE.laptopL} {
    right: 0;
  }
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  color: ${COLORS.neutral500};
  margin-top: 31px;

  @media ${DEVICE.laptopL} {
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

  @media ${DEVICE.laptopL} {
  }
`;

const Settings = styled.a`
  margin-bottom: 24px;
  position: relative;
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  position: absolute;
  left: 0;
`;

const Logout = styled.button`
  position: relative;
`;

const Text = styled.span`
  padding-left: 28px;
`;

const StyledLogoutIcon = styled(LogoutIcon)`
  position: absolute;
  left: 0;
`;

export default HeaderAccordion;
