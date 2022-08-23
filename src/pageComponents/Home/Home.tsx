import React, { FC, useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { PlanCard } from "components";
import { IPlan } from "types";

interface HomeProps {
  products?: IPlan[];
}

export const Home: FC<HomeProps> = ({ products }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    breakpoints: {
      "(min-width: 1024px)": { active: false },
    },
  });

  useEffect(() => {
    return () => {
      emblaApi?.off("select", onSelect);
    };
  }, []);

  const onSelect = () => {
    emblaApi?.selectedScrollSnap() || 0;
  };

  emblaApi?.on("select", onSelect);

  return (
    <div>
      <Title>Get started with Gscore today</Title>

      <PlanCards>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {products?.length &&
              products?.map((product: IPlan, index: number) => (
                <div className="embla__slide" key={product?.id}>
                  <StyledPlanCard
                    key={product?.id}
                    product={product}
                    isActive={index === 1}
                  />
                </div>
              ))}
          </div>
        </div>
      </PlanCards>

      <Offer>
        <Text>Have more than 10 sites?</Text>
        <Contact>Contact us</Contact>
      </Offer>
    </div>
  );
};

const Title = styled.h1`
  font-weight: 600;
  font-size: 34px;
  line-height: 34px;
  color: ${COLORS.neutral100};
  text-align: center;
  padding: 36px 0 76px;

  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    padding: 56px 0 98px;
  }
`;

const PlanCards = styled.div`
  display: flex;
  padding-bottom: 33px;

  .embla {
    display: flex;
    overflow: hidden;

    @media ${DEVICE.tablet} {
      width: 100%;
      padding-top: 50px;
    }
  }

  .embla__container {
    display: flex;
    position: relative;
    left: calc((100vw + 4px) * -1);

    @media ${DEVICE.tablet} {
      left: 0;
      width: 100%;
    }
  }

  .embla__slide {
    width: calc(100vw + 4px);

    @media ${DEVICE.tablet} {
      width: calc(100vw + 16px);
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const StyledPlanCard = styled(PlanCard)`
  margin-right: 27.5px;
  width: calc(100vw - 32px);

  @media ${DEVICE.tablet} {
    margin-right: 0;
    width: calc(100vw - 100px);
  }

  @media ${DEVICE.laptop} {
    width: 100%;
  }
`;

const Offer = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: ${COLORS.neutral100};
  text-align: center;
  padding-bottom: 32px;

  @media ${DEVICE.tablet} {
    padding-bottom: 42px;
  }
`;

const Text = styled.p`
  width: 100%;
`;

const Contact = styled.a`
  color: ${COLORS.primary};
  text-decoration: underline;

  &:hover {
    color: ${COLORS.neutral100};
    text-decoration: none;
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.neutral100};
  }
`;
