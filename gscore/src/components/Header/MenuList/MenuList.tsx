import React from "react";

import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { Divider, HeaderAccordion } from "components/ui";

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
  padding: 48px 0 0 0;

  @media ${DEVICE.tablet} {
    display: flex;
    padding: 0;
  }
`;

const MySubscriptions = styled.a`
  color: ${COLORS.neutral100};
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;

  &:hover {
    color: ${COLORS.secondaryRed};
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.primary};
  }

  @media ${DEVICE.tablet} {
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

  @media ${DEVICE.tablet} {
    display: none;
  }
`;
