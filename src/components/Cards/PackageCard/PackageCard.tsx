import React, { FC } from "react";

import styled from "styled-components";

import { COLORS } from "assets";
import { ShopBasketIcon } from "components/icons";

interface CheckoutCardProps {
  className?: string;
}

export const PackageCard: FC<CheckoutCardProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Header>
        <PackageNameTitle>Package name</PackageNameTitle>
        <PriceTitle>Price</PriceTitle>
      </Header>

      <Content>
        <PackageName>Single site license</PackageName>
        <Price>
          <PriceCost>$1000</PriceCost>
          <StyledShopBasketIcon />
        </Price>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  background: ${COLORS.secondaryGray};
  border-radius: 12px;
  font-size: 24px;
`;

const Header = styled.header`
  border-bottom: 1px solid ${COLORS.neutral500};
  display: flex;
  justify-content: space-between;
  padding: 48px 72px 32px 32px;
  font-weight: 700;
  line-height: 34px;
`;

const PackageNameTitle = styled.span``;

const PriceTitle = styled.span``;

const Content = styled.div`
  padding: 32px 48px 48px 32px;
  display: flex;
  font-weight: 400;
  line-height: 38px;
`;

const PackageName = styled.span`
  max-width: 428px;
  width: 100%;
  margin-right: 32px;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
`;

const PriceCost = styled.span`
  padding-right: 9px;
`;

const StyledShopBasketIcon = styled(ShopBasketIcon)``;
