import React from "react";

import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { Button, Input, RegisterTabs } from "components/ui";
import { ContentLayout, MainLayout } from "Layout";

const CheckInPage = () => {
  return (
    <Root>
      <Container>
        <StyledRegisterTabs />
        <Title>Create account</Title>

        <Text>
          You need to enter your name and email. We will send you a temporary
          password by email
        </Text>

        <InputWrapper>
          <StyledInput placeholder="Username" />
          <StyledInput placeholder="Email" />
          <StyledInput placeholder="Password" />
        </InputWrapper>

        <StyledButton text="Send password" />

        <Login>
          <LoginText>Have an account? </LoginText>
          <NextStep>Go to the next step</NextStep>
        </Login>
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled(ContentLayout)`
  @media ${DEVICE.laptop} {
    padding-bottom: 228px;
  }
`;

const StyledRegisterTabs = styled(RegisterTabs)`
  @media ${DEVICE.laptop} {
    padding-bottom: 64px;
    text-align: start;
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
  @media ${DEVICE.laptop} {
    padding-bottom: 32px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

const InputWrapper = styled.div`
  @media ${DEVICE.laptop} {
    padding-bottom: 48px;
  }
`;

const StyledInput = styled(Input)`
  @media ${DEVICE.laptop} {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledButton = styled(Button)`
  @media ${DEVICE.laptop} {
    max-width: 200px;
    width: 100%;
    margin-bottom: 48px;
  }
`;

const Login = styled.div`
  @media ${DEVICE.laptop} {
    display: flex;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }
`;

const LoginText = styled.p`
  @media ${DEVICE.laptop} {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    padding-right: 8px;
  }
`;

const NextStep = styled.a`
  @media ${DEVICE.laptop} {
    color: ${COLORS.primary};
  }
`;

export default CheckInPage;
