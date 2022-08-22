import React, { FC } from "react";

import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { PlanCard } from "components";

interface HomeProps {
  products?: any;
}

export const Home: FC<HomeProps> = ({ products }) => {
  return (
    <div>
      <Title>Get started with Gscore today</Title>
      <PlanCards>
        {products.length &&
          products.map((product: any, index: number) => (
            <StyledPlanCard
              key={product.id}
              product={product}
              isActive={index === 1}
            />
          ))}
      </PlanCards>

      <Offer>
        <Text>Have more than 10 sites?</Text>
        <Contact>Contact us</Contact>
      </Offer>
    </div>
  );
};

const Title = styled.h1`
  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    color: ${COLORS.neutral100};
    padding: 56px 0 98px;
    text-align: center;
  }
`;

const PlanCards = styled.div`
  display: flex;

  @media ${DEVICE.laptop} {
    padding-bottom: 33px;
  }
`;

const StyledPlanCard = styled(PlanCard)`
  @media ${DEVICE.laptop} {
    margin-right: 27.5px;
  }
`;

const Offer = styled.div`
  @media ${DEVICE.laptop} {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: ${COLORS.neutral100};
    text-align: center;
    padding-bottom: 42px;
  }
`;

const Text = styled.p`
  @media ${DEVICE.laptop} {
    width: 100%;
  }
`;

const Contact = styled.a`
  @media ${DEVICE.laptop} {
    color: ${COLORS.primary};
    text-decoration: underline;

    &:hover {
      color: ${COLORS.neutral100};
      text-decoration: none;
    }

    &:focus {
      box-shadow: 0px 0px 10px 0px ${COLORS.neutral100};
    }
  }
`;
