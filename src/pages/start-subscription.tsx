import React from "react";

import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { PackageCard } from "components";
import { LinkButton } from "components/ui";
import { ROUTES } from "constant";
import { MainLayout } from "Layout";
import { useAppSelector } from "store/hooks";

const StartSubscriptionPage = () => {
  const plan = useAppSelector((state) => state?.plan?.plan);

  return (
    <Root>
      <Container>
        <Title>Start your subscription</Title>

        <Text>
          We have sent you a payment receipt by e-mail and a link to download
          the plugin with a license key.
        </Text>

        {plan?.id &&
          plan?.prices?.map((priceId) => {
            return (
              <StyledPackageCard
                key={priceId?.id}
                packageName={plan?.name}
                priceCost={priceId?.price}
              />
            );
          })}
        <StyledLinkButton
          text="Go to my subscriptions"
          href={ROUTES.MY_SUBSCRIPTIONS}
        />
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled.div`
  color: ${COLORS.neutral100};
  overflow: hidden;
  max-width: 620px;
  margin: 0 auto;
  padding: 42px 0 90px;

  @media ${DEVICE.laptop} {
    padding: 72px 0 390px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 30px;
  padding-bottom: 16px;

  @media ${DEVICE.laptop} {
    font-size: 44px;
    line-height: 54px;
  }
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  padding-bottom: 24px;

  @media ${DEVICE.laptop} {
    padding-bottom: 48px;
  }
`;

const StyledPackageCard = styled(PackageCard)`
  margin-bottom: 24px;

  @media ${DEVICE.laptop} {
    margin-bottom: 48px;
  }
`;

const StyledLinkButton = styled(LinkButton)`
  max-width: 100%;
  width: 100%;
`;

export default StartSubscriptionPage;
