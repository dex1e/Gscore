import React, { FC } from "react";

import styled, { css } from "styled-components";

import { COLORS, DEVICE } from "assets";
import { ListCheckIcon } from "components/icons";
import { Button } from "components/ui";

interface PlanCardProps {
  isActive?: boolean;
  className?: string;
}

export const PlanCard: FC<PlanCardProps> = ({ isActive, className }) => {
  return (
    <Root $isActive={isActive} className={className}>
      <Info $isActive={isActive}>
        <Price>$77</Price>
        <LicenseName>Single site license</LicenseName>
        <Description $isActive={isActive}>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </Description>
      </Info>

      <FeaturesList>
        <ListItem>
          <StyledListCheckIcon />
          Single site license
        </ListItem>

        <ListItem>
          <StyledListCheckIcon />
          Special introductory pricing
        </ListItem>

        <ListItem>
          <StyledListCheckIcon />
          Unlimited Pages and Keywords
        </ListItem>

        <ListItem>
          <StyledListCheckIcon />
          Billed annually
        </ListItem>
      </FeaturesList>

      <StyledButton text="Get Gscore" variant="secondary" />
    </Root>
  );
};

const Root = styled.div<{ $isActive?: boolean }>`
  width: 100%;
  max-width: 303px;
  display: flex;
  flex-direction: column;
  color: ${COLORS.neutral100};
  padding: 20px 15px;
  background: ${COLORS.secondaryGray};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${COLORS.primary};
      position: relative;
      bottom: 20px;
    `}

  @media ${DEVICE.laptop} {
    max-width: 404px;
    padding: 42px 48px;

    ${({ $isActive }) =>
      $isActive &&
      css`
        bottom: 50px;
      `}
  }
`;

const Info = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid ${COLORS.neutral500};
  margin-bottom: 20px;

  ${({ $isActive }) =>
    $isActive &&
    css`
      border-bottom: 1px solid ${COLORS.neutral100};
    `}

  @media ${DEVICE.laptop} {
    font-weight: 700;
    margin-bottom: 38px;
  }
`;

const Price = styled.p`
  font-size: 34px;
  line-height: 40px;
  padding-bottom: 4px;

  @media ${DEVICE.laptop} {
    font-size: 54px;
    line-height: 66px;
    padding-bottom: 4px;
  }
`;

const LicenseName = styled.p`
  font-size: 20px;
  line-height: 26px;
  padding-bottom: 8px;

  @media ${DEVICE.laptop} {
    font-size: 24px;
    line-height: 26px;
    padding-bottom: 8px;
  }
`;

const Description = styled.p<{ $isActive?: boolean }>`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: ${COLORS.neutral400};
  text-align: center;
  padding-bottom: 20px;
  color: ${({ $isActive }) => $isActive && COLORS.neutral100};

  @media ${DEVICE.laptop} {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    padding-bottom: 40px;
  }
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 25px;

  @media ${DEVICE.laptop} {
    font-size: 18px;
    padding-bottom: 32px;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 8px;

  &:last-child {
    padding-bottom: 0;
  }

  @media ${DEVICE.laptop} {
    padding-bottom: 16px;
  }
`;

const StyledListCheckIcon = styled(ListCheckIcon)`
  width: 22px;
  height: 22px;
  margin-right: 10px;

  @media ${DEVICE.laptop} {
    margin-right: 14px;
  }
`;

const StyledButton = styled(Button)`
  color: ${COLORS.secondaryBlack};
  font-size: 16px;
  line-height: 20px;

  @media ${DEVICE.laptop} {
    font-size: 18px;
    height: 72px;
  }
`;
