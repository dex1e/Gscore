import React from "react";

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
    <Root allowZeroExpanded>
      <StyledAccordionItem
        activeClassName="active accordion__item"
        className="accordion__item"
      >
        <AccordionItemHeading>
          <StyledAccordionItemButton>
            Open me
            <StyledChevronRightIcon />
          </StyledAccordionItemButton>
        </AccordionItemHeading>
        <StyledAccordionItemPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis
          pretium risus euismod dictum egestas orci netus feugiat ut egestas ut
          sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.
        </StyledAccordionItemPanel>
      </StyledAccordionItem>
    </Root>
  );
};

const Root = styled(Accordion)`
  max-width: 926px;
  min-height: 131px;

  .accordion__item {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 12px;
    background: ${COLORS.secondaryGray};
    padding: 48px 60px;
    transition: all 0.3s ease-in-out;
  }

  .accordion__item.active {
    background: ${COLORS.neutral700};
    padding: 48px 60px 56px;
  }
`;

const StyledAccordionItem = styled(AccordionItem)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
`;

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
`;

export default AccordionMenu;
