import React from "react";

import styled from "styled-components";

import { DEVICE } from "assets";
import { PackageCard } from "components";
import { Button, RegisterTabs } from "components/ui";
import { ContentLayout, MainLayout } from "Layout";

const CheckoutPage = () => {
  return (
    <Root>
      <Container>
        <StyledRegisterTabs />
        <Title>Checkout</Title>

        <StyledPackageCard />

        <Total>
          <Text>Total:</Text>
          <Cost>$77</Cost>
        </Total>

        <StyledButton text="Purchase" />
      </Container>
    </Root>
  );
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
