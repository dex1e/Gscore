import React from "react";

import Link from "next/link";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { HeaderAccordion } from "components/ui";
import { ROUTES } from "constant";

export const MenuList = () => {
  return (
    <Root>
      <MySubscriptionsWrapper>
        <Link href={ROUTES.MY_SUBSCRIPTIONS}>
          <MySubscriptions>My subscriptions</MySubscriptions>
        </Link>
      </MySubscriptionsWrapper>

      <StyledHeaderAccordion />
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

const MySubscriptionsWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${COLORS.neutral700};

  @media ${DEVICE.tablet} {
    border: none;
    padding: 0;
    padding-right: 32px;
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

const StyledHeaderAccordion = styled(HeaderAccordion)`
  border-bottom: 1px solid ${COLORS.neutral700};
  padding: 20px 0;

  @media ${DEVICE.tablet} {
    border: none;
    padding: 0;
  }
`;
