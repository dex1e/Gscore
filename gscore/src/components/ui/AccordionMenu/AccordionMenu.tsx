import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styled from "styled-components";

import { COLORS } from "assets";
import { ChevronRightIcon } from "components/icons";

const AccordionMenu = () => {
  return (
    <StyledAccordion allowZeroExpanded>
      <StyledAccordionItem>
        <StyledAccordionItemHeading>
          <StyledAccordionItemButton>
            <Text>Open me</Text>
            <StyledChevronRightIcon />
          </StyledAccordionItemButton>
        </StyledAccordionItemHeading>
        <StyledAccordionItemPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis
          pretium risus euismod dictum egestas orci netus feugiat ut egestas ut
          sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
    </StyledAccordion>
  );
};

const StyledAccordion = styled(Accordion)`
  width: 926px;
  min-height: 131px;
  /* neutral700 */
  /* :colors.secondarygray ; */
  /* padding:  }) => ($isOpened ? "48px 60px 56px" : "48px 60px")}; */

  transition: all 0.3s ease-in-out;
`;

const StyledAccordionItem = styled(AccordionItem)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;

  &[aria-expanded="true"] {
    background-color: blue;
  }
`;

const StyledAccordionItemHeading = styled(AccordionItemHeading)``;

const StyledAccordionItemButton = styled(AccordionItemButton)`
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: ${COLORS.neutral100};
  position: relative;

  &[aria-expanded="true"] {
    svg {
      transform: rotate(90deg);
    }
  }
`;

const Text = styled.p``;

const StyledChevronRightIcon = styled(ChevronRightIcon)`
  position: absolute;
  right: 0;
  top: calc(50% - 10px);
`;

const StyledAccordionItemPanel = styled(AccordionItemPanel)`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: ${COLORS.neutral300};
  /* padding: 48px 60px 56px; */
  /* background: green; */
`;

export default AccordionMenu;
