import React from "react";

import styled from "styled-components";

import { DEVICE } from "assets";
import { PackageCard } from "components";
import { Button } from "components/ui";
import { ContentLayout, MainLayout } from "Layout";

const START_SUBSCRIPTIONPage = () => {
  return (
    <Root>
      <Container>
        <Title>Start your subscription</Title>

        <Text>
          We have sent you a payment receipt by e-mail and a link to download
          the plugin with a license key.
        </Text>

        <StyledPackageCard />
        <StyledButton text="Go to my subscriptions" />
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled(ContentLayout)`
  @media ${DEVICE.laptop} {
    margin-bottom: 390px;
  }
`;

const Title = styled.h1`
  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    padding-bottom: 16px;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding-bottom: 48px;
`;

const StyledPackageCard = styled(PackageCard)`
  @media ${DEVICE.laptop} {
    margin-bottom: 48px;
  }
`;

const StyledButton = styled(Button)`
  @media ${DEVICE.laptop} {
    max-width: 100%;
    width: 100%;
  }
`;

export default START_SUBSCRIPTIONPage;
