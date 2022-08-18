import React from "react";

import { useRouter } from "next/router";
import styled from "styled-components";

import { DEVICE } from "assets";
import { PackageCard, RegisterTabs } from "components";
import { Button } from "components/ui";
import { ContentLayout, MainLayout } from "Layout";
import { buySubscription } from "services";

const CheckoutPage = ({ priceId, priceCost, packageName }: any) => {
  const handleBuySubscription = (priceId: any) => {
    buySubscription(priceId);
  };

  const router = useRouter();

  const { planId } = router.query;

  console.log(planId, "planId");

  return (
    <Root>
      <Container>
        <StyledRegisterTabs />
        <Title>Checkout</Title>

        <StyledPackageCard packageName={packageName} priceCost={priceCost} />

        <Total>
          <Text>Total:</Text>
          <Cost>${priceCost}</Cost>
        </Total>

        <StyledButton
          text="Purchase"
          onClick={() => handleBuySubscription(Number(priceId))}
        />
      </Container>
    </Root>
  );
};

CheckoutPage.getInitialProps = ({ query }: any) => {
  return {
    priceId: query.id,
    priceCost: query.price,
    packageName: query.name,
  };
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled(ContentLayout)`
  @media ${DEVICE.laptop} {
    margin-bottom: 290px;
  }
`;

const StyledRegisterTabs = styled(RegisterTabs)`
  @media ${DEVICE.laptop} {
    margin-bottom: 64px;
  }
`;

const Title = styled.h1`
  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    padding-bottom: 32px;
  }
`;

const StyledPackageCard = styled(PackageCard)`
  @media ${DEVICE.laptop} {
    margin-bottom: 24px;
  }
`;

const Total = styled.div`
  @media ${DEVICE.laptop} {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    padding-bottom: 48px;
  }
`;

const Text = styled.span``;

const Cost = styled.span``;

const StyledButton = styled(Button)`
  @media ${DEVICE.laptop} {
    max-width: 200px;
    width: 100%;
  }
`;

export default CheckoutPage;
