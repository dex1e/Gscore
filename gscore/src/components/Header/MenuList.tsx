import React from "react";

import styled from "styled-components";

import { COLORS } from "assets";
import HeaderAccordion from "components/ui/HeaderAccordion";
import { DEVICE } from "constant";
import { Divider } from "utils";

export const MenuList = () => {
  return (
    <Root>
      <MySubscriptions href="#">My subscriptions</MySubscriptions>
      <StyledDivider />
      <HeaderAccordion />
      <StyledDivider />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  margin: 48px 0 0 0;

  @media ${DEVICE.laptop} {
    display: flex;
    margin: 0;
  }
`;

const MySubscriptions = styled.a`
  color: ${COLORS.neutral100};
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  @media ${DEVICE.laptop} {
    width: 153px;
    height: fit-content;
    white-space: nowrap;
  }
`;

const StyledDivider = styled(Divider)`
  margin: 20px 0;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${DEVICE.laptop} {
    display: none;
  }
`;

// const StyledHeaderAccordion = styled(HeaderAccordion)`
//   @media ${DEVICE.laptop} {
//     padding-left: 32px;
//   }
// `;
