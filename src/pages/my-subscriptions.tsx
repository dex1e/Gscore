import React, { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import styled, { css } from "styled-components";

import { COLORS, DEVICE } from "assets";
import { DomainCard, SubscriptionCard } from "components";
import { ArrowLeftIcon, ArrowRightIcon } from "components/icons";
import { Button } from "components/ui";
import { MainLayout } from "Layout";
import { getMySubscriptions } from "services";

const MySubscriptionsPage = () => {
  const [mySubscriptions, setMySubscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const isPrevButtonDisabled = activeSlideIndex === 0;
  const isNextButtonDisabled = activeSlideIndex === mySubscriptions.length - 1;
  const domainCards = mySubscriptions[activeSlideIndex]?.codes;

  const scrollToPrevious = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    getSubscriptions();

    return () => {
      emblaApi?.off("select", onSelect);
    };
  }, []);

  const getSubscriptions = () => {
    setIsLoading(true);

    getMySubscriptions()
      .then((response) => {
        setMySubscriptions(response.data);
        setIsLoading(false);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  const onSelect = () => {
    setActiveSlideIndex(emblaApi?.selectedScrollSnap() || 0);
  };

  emblaApi?.on("select", onSelect);

  return (
    <Root>
      <Container>
        <Header>
          <Title>My Subscriptions</Title>
          <StyledButton text="Upgrade" />
        </Header>

        <SubscriptionCardsWrapper>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {mySubscriptions.map((subscription: any, index) => (
                <div className="embla__slide" key={subscription.id}>
                  <StyledSubscriptionCard
                    card={subscription}
                    isInactive={index !== activeSlideIndex ? true : false}
                  />
                </div>
              ))}
            </div>
          </div>
        </SubscriptionCardsWrapper>

        <SwapCard>
          <ButtonIcon
            className="embla__prev"
            onClick={scrollToPrevious}
            $isDisabled={isPrevButtonDisabled}
            disabled={isPrevButtonDisabled}
          >
            <ArrowLeftIcon />
          </ButtonIcon>

          <CounterCards>
            {activeSlideIndex + 1}/{mySubscriptions?.length}
          </CounterCards>

          <ButtonIcon
            className="embla__next"
            onClick={scrollToNext}
            $isDisabled={isNextButtonDisabled}
            disabled={isNextButtonDisabled}
          >
            <ArrowRightIcon />
          </ButtonIcon>
        </SwapCard>

        <DomainCardsWrapper>
          {domainCards?.map((code: any) => (
            <StyledDomainCard key={code.id} domainCard={code} />
          ))}
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
  .embla {
    display: flex;
    overflow: hidden;
  }
  .embla__container {
    display: flex;
    position: relative;
    left: -648px;
  }
  .embla__slide {
    padding-right: 28px;
    width: 648px;

    &:last-child {
      padding-right: 0;
    }
  }

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

const ButtonIcon = styled.button<{ $isDisabled?: boolean }>`
  @media ${DEVICE.laptop} {
    padding: 10px;
    border: 1px solid ${COLORS.neutral500};
    border-radius: 12px;
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      path {
        stroke: ${COLORS.primary};
      }
    }

    &:focus {
      box-shadow: 0px 0px 5px 0px ${COLORS.primary};
    }

    ${({ $isDisabled }) =>
      $isDisabled &&
      css`
        opacity: 0.3;
      `}
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
