import React, { FC } from "react";

import styled, { css } from "styled-components";

import { COLORS } from "assets";
import { ListCheckIcon } from "components/icons";
import { Button } from "components/ui";
import { DEVICE } from "constant";
import { Divider } from "utils";

interface BuySubscriptionCardProps {
  isActive?: boolean;
}

export const BuySubscriptionCard: FC<BuySubscriptionCardProps> = ({
  isActive,
}) => {
  return (
    <Root $isActive={isActive}>
      <Info>
        <Price>$77</Price>
        <LicenseName>Single site license</LicenseName>
        <Description $isActive={isActive}>
          Get the advanced WordPress plugin that optimizes content with GSC
          keywords at one low annual price
        </Description>
      </Info>

      <StyledDivider $isActive={isActive} />

      <FeaturesList>
        <ListItem>
          <ListCheckIcon />
          <Text>Single site license</Text>
        </ListItem>

        <ListItem>
          <ListCheckIcon />
          <Text>Special introductory pricing</Text>
        </ListItem>

        <ListItem>
          <ListCheckIcon />
          <Text>Unlimited Pages and Keywords</Text>
        </ListItem>

        <ListItem>
          <ListCheckIcon />
          <Text>Billed annually</Text>
        </ListItem>
      </FeaturesList>

      <StyledButton text="Get Gscore" variant="secondary" />
    </Root>
  );
};

const Root = styled.div<{ $isActive?: boolean }>`
  @media ${DEVICE.laptop} {
    max-width: 404px;
    width: 100%;
    max-height: 612px;
    display: flex;
    flex-direction: column;
    color: ${COLORS.neutral100};
    padding: 42px 48px;
    background: ${COLORS.secondaryGray};
    box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
    border-radius: 12px;

    ${({ $isActive }) =>
      $isActive &&
      css`
        background: ${COLORS.primary};
        position: relative;
        bottom: 50px;
      `}
  }
`;

const Info = styled.div`
  @media ${DEVICE.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
  }
`;

const Price = styled.p`
  @media ${DEVICE.laptop} {
    font-size: 54px;
    line-height: 66px;
  }
`;

const LicenseName = styled.p`
  @media ${DEVICE.laptop} {
    font-size: 24px;
    line-height: 26px;
    padding-top: 4px;
  }
`;

const Description = styled.p<{ $isActive?: boolean }>`
  @media ${DEVICE.laptop} {
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    color: ${COLORS.neutral400};
    text-align: center;
    padding-top: 8px;

    ${({ $isActive }) =>
      $isActive &&
      css`
        color: ${COLORS.neutral100};
      `}
  }
`;

const StyledDivider = styled(Divider)<{ $isActive?: boolean }>`
  @media ${DEVICE.laptop} {
    margin: 40px 0 38px;
    background: ${COLORS.neutral500};

    ${({ $isActive }) =>
      $isActive &&
      css`
        background: ${COLORS.neutral100};
      `}
  }
`;

const FeaturesList = styled.ul`
  @media ${DEVICE.laptop} {
    list-style-type: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  }
`;

const ListItem = styled.li`
  @media ${DEVICE.laptop} {
    display: flex;
    align-items: center;
    padding-bottom: 16px;

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const Text = styled.span`
  padding-left: 14px;
`;

const StyledButton = styled(Button)`
  @media ${DEVICE.laptop} {
    color: ${COLORS.secondaryBlack};
    font-size: 18px;
    line-height: 20px;
    margin-top: 32px;
    height: 72px;
  }
`;
