import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { DomainCard, SubscriptionCard } from "components";
import { ArrowLeftIcon, ArrowRightIcon } from "components/icons";
import { Button } from "components/ui";
import { MainLayout } from "Layout";
import { getMySubscriptions } from "services";
import { card, domainCard } from "utils";

const MySubscriptionsPage = () => {
  const [mySubscriptions, setMySubscriptions] = useState([]);

  useEffect(() => {
    getSubscriptions();
  }, []);

  const getSubscriptions = async () => {
    await getMySubscriptions()
      .then((response) => {
        setMySubscriptions(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return (
    <Root>
      <Container>
        <Header>
          <Title>My Subscriptions</Title>
          <StyledButton text="Upgrade" />
        </Header>

        <SubscriptionCardsWrapper>
          <StyledSubscriptionCard card={card} />
          <StyledSubscriptionCard card={card} />
        </SubscriptionCardsWrapper>

        <SwapCard>
          <Icon>
            <ArrowLeftIcon />
          </Icon>

          <CounterCards>1/10</CounterCards>

          <Icon>
            <ArrowRightIcon />
          </Icon>
        </SwapCard>

        <DomainCardsWrapper>
          <StyledDomainCard domainCard={domainCard} />
          <StyledDomainCard domainCard={domainCard} />
          <StyledDomainCard domainCard={domainCard} />
        </DomainCardsWrapper>
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled.div`
  @media ${DEVICE.laptop} {
    overflow: hidden;
    color: ${COLORS.neutral100};
    padding: 60px 0 120px;
  }
`;

const Header = styled.header`
  @media ${DEVICE.laptop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 44px;
  }
`;

const Title = styled.h1`
  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 54px;
    line-height: 64px;
  }
`;

const StyledButton = styled(Button)`
  @media ${DEVICE.laptop} {
    max-width: 152px;
    width: 100%;
    padding: 26px 38px;
  }
`;

const SubscriptionCardsWrapper = styled.div`
  @media ${DEVICE.laptop} {
    display: flex;
    padding-bottom: 24px;
  }
`;

const StyledSubscriptionCard = styled(SubscriptionCard)`
  @media ${DEVICE.laptop} {
    margin-right: 28px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const SwapCard = styled.div`
  @media ${DEVICE.laptop} {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    padding-bottom: 40px;
  }
`;

const Icon = styled.div`
  @media ${DEVICE.laptop} {
    padding: 10px;
    border: 1px solid ${COLORS.neutral500};
    border-radius: 12px;
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const CounterCards = styled.div`
  @media ${DEVICE.laptop} {
    margin-right: 12px;
  }
`;

const DomainCardsWrapper = styled.div`
  @media ${DEVICE.laptop} {
  }
`;

const StyledDomainCard = styled(DomainCard)`
  @media ${DEVICE.laptop} {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default MySubscriptionsPage;
