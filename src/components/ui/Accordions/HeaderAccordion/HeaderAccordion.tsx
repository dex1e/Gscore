import React, { FC, useRef, useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { ChevronDownIcon, LogoutIcon, SettingsIcon } from "components/icons";
import { useOnClickOutside } from "hooks";

interface HeaderAccordionProps {
  className?: string;
}

export const HeaderAccordion: FC<HeaderAccordionProps> = ({ className }) => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const handleAreaExpanded = () => {
    setIsAccordionExpanded(false);
  };

  const handleCLoseAccordion = () => {
    setIsAccordionExpanded((prevState) => !prevState);
  };

  const clickOutsideRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(clickOutsideRef, handleAreaExpanded);

  return (
    <Root ref={clickOutsideRef} onClick={handleCLoseAccordion}>
      <Accordion className={className}>
        <StyledAccordionItem dangerouslySetExpanded={isAccordionExpanded}>
          <AccordionItemHeading>
            <StyledAccordionItemButton>
              <Username>Alex</Username>
              <StyledChevronDownIcon />
            </StyledAccordionItemButton>
          </AccordionItemHeading>

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
      </Accordion>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  color: ${COLORS.neutral100};
  cursor: pointer;
`;

const StyledAccordionItem = styled(AccordionItem)`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  @media ${DEVICE.tablet} {
    position: relative;
  }
`;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  width: 100%;
  display: flex;
  justify-content: space-between;

  &[aria-expanded="true"] {
    svg {
      transform: rotate(180deg);
      transition: all 0.3s ease-in-out;
    }
  }

  @media ${DEVICE.tablet} {
    display: block;
  }
`;

const Username = styled.span`
  @media ${DEVICE.tablet} {
    padding-right: 7px;
  }
`;

const StyledChevronDownIcon = styled(ChevronDownIcon)`
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
