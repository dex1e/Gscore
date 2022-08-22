import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { CloseIcon } from "components/icons";
import { LinkButton } from "components/ui";
import { ROUTES } from "constant";
import { MainLayout } from "Layout";

const NoSubscriptionsPage = () => {
  return (
    <Root>
      <Container>
        <Title>My subscriptions</Title>
        <Wrapper>
          <Icon>
            <StyledCloseIcon />
          </Icon>
          <Subtitle>No active subscriptions</Subtitle>

          <Text>
            You can subscribe right now by clicking on the button below
          </Text>
          <StyledLinkButton text="Get Gscore" href={ROUTES.ROOT} />
        </Wrapper>
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled.div`
  overflow: hidden;
  color: ${COLORS.neutral100};
  padding: 34px 0 100px;

  @media ${DEVICE.tablet} {
    padding: 64px 0 240px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 44px;
  padding-bottom: 30px;

  @media ${DEVICE.tablet} {
    font-weight: 700;
    font-size: 54px;
    line-height: 64px;
    padding-bottom: 200px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  background: #393939;
  padding: 19px;
  border-radius: 50%;
  margin-bottom: 24px;

  @media ${DEVICE.tablet} {
    padding: 39px;
    border-radius: 50%;
    margin-bottom: 24px;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  @media ${DEVICE.tablet} {
    width: 24px;
  }
`;

const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  padding-bottom: 6px;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  padding-bottom: 24px;
`;

const StyledLinkButton = styled(LinkButton)`
  max-width: 164px;
  width: 100%;
`;

export default NoSubscriptionsPage;
