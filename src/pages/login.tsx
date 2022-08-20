import React from "react";

import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { Button, Input, RegisterTabs } from "components/ui";
import { ContentLayout, MainLayout } from "Layout";

const LoginPage = () => {
  return (
    <Root>
      <Container>
        <StyledRegisterTabs />
        <Title>Log in</Title>

        <InputWrapper>
          <InputItem>
            <StyledInput placeholder="Email" />
          </InputItem>

          <InputItem>
            <StyledInput placeholder="Password" />
          </InputItem>
        </InputWrapper>

        <StyledButton text="Log in" />
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled(ContentLayout)`
  @media ${DEVICE.laptop} {
    margin-bottom: 426px;
  }
`;

const StyledRegisterTabs = styled(RegisterTabs)`
  @media ${DEVICE.laptop} {
    text-align: start;
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

const InputWrapper = styled.div`
  @media ${DEVICE.laptop} {
    padding-bottom: 48px;
  }
`;

const InputItem = styled.div`
  @media ${DEVICE.laptop} {
    padding-bottom: 24px;

    &:last-child {
      padding-bottom: 0;
    }
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
  }
`;

export default LoginPage;
