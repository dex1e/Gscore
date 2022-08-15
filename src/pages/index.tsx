import type { NextPage } from "next";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { PlanCard } from "components";
import { MainLayout } from "Layout";

const Home: NextPage = () => {
  return (
    <Root>
      <Title>Get started with Gscore today</Title>
      <PlanCards>
        <StyledPlanCard />
        <StyledPlanCard isActive />
        <StyledPlanCard />
      </PlanCards>

      <Offer>
        <Text>Have more than 10 sites?</Text>
        <Contact>Contact us</Contact>
      </Offer>
    </Root>
  );
};
const Root = styled(MainLayout)`
  position: relative;
`;

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

export default Home;
