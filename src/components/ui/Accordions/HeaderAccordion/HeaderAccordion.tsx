import React, { FC, useRef, useState } from "react";

import Link from "next/link";
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
import { Z_INDEX } from "constant";
import { useOnClickOutside } from "hooks";
import { LocalStorageService } from "services";

interface HeaderAccordionProps {
  className?: string;
}

export const HeaderAccordion: FC<HeaderAccordionProps> = ({ className }) => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const handleAccordionExpanded = () => {
    setIsAccordionExpanded(false);
  };

  const handleAccordionClick = () => {
    setIsAccordionExpanded((prevState) => !prevState);
  };

  const clickOutsideRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(clickOutsideRef, handleAccordionExpanded);

  const handleLogOut = () => {
    LocalStorageService.removeData("token");
    LocalStorageService.removeData("user");
  };

  return (
    <Root ref={clickOutsideRef} onClick={handleAccordionClick}>
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

              <Link href={"/"}>
                <Logout onClick={() => handleLogOut()}>
                  <StyledLogoutIcon />
                  Logout
                </Logout>
              </Link>
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

  &:hover {
    path {
      stroke: ${COLORS.secondaryRed};
    }
    color: ${COLORS.secondaryRed};
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.primary};
  }

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
    text-overflow: ellipsis;
    white-space: nowrap;
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
  z-index: ${Z_INDEX.primary};

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
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  &:hover {
    path {
      stroke: ${COLORS.secondaryRed};
    }
    color: ${COLORS.secondaryRed};
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.primary};
  }
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  margin-right: 8px;
`;

const Logout = styled.button`
  display: flex;
  align-items: center;

  &:hover {
    path {
      stroke: ${COLORS.secondaryRed};
    }
    color: ${COLORS.secondaryRed};
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.primary};
  }
`;

const StyledLogoutIcon = styled(LogoutIcon)`
  margin-right: 8px;
`;
