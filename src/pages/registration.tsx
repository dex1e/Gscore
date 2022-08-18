import React, { useState } from "react";

import Link from "next/link";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { RegisterTabs } from "components";
import { Button, Input } from "components/ui";
import { ROUTES } from "constant";
import { ContentLayout, MainLayout } from "Layout";
import { registerUser } from "services";

const CheckInPage = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleChangeName = (event: any) => {
    let name = event.target.value;
    setName(name);
  };

  const handleChangeEmail = (event: any) => {
    let email = event.target.value;
    setEmail(email);
  };

  const handleChangePassword = (event: any) => {
    let password = event.target.value;
    setPassword(password);
  };

  const handleOnClick = (email: any, name: any, password: any) => {
    registerUser(email, name, password);
  };

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
          <StyledInput
            placeholder="Username"
            value={name}
            onChange={handleChangeName}
          />

          <StyledInput
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />

          <StyledInput
            placeholder="Password"
            value={password}
            onChange={handleChangePassword}
          />
        </InputWrapper>

        <StyledButton
          text="Send password"
          type="submit"
          onClick={() => handleOnClick(email, name, password)}
        />

        <Login>
          <LoginText>Have an account? </LoginText>

          <Link href={ROUTES.LOGIN}>
            <NextStep>Go to the next step</NextStep>
          </Link>
        </Login>
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled(ContentLayout)`
  @media ${DEVICE.tablet} {
    padding-bottom: 228px;
  }
`;

const StyledRegisterTabs = styled(RegisterTabs)`
  @media ${DEVICE.tablet} {
    padding-bottom: 64px;
    text-align: start;
  }
`;

const Title = styled.h1`
  @media ${DEVICE.tablet} {
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    padding-bottom: 16px;
  }
`;

const Text = styled.p`
  @media ${DEVICE.tablet} {
    padding-bottom: 32px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

const InputWrapper = styled.div`
  @media ${DEVICE.tablet} {
    padding-bottom: 48px;
  }
`;

const StyledInput = styled(Input)`
  @media ${DEVICE.tablet} {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledButton = styled(Button)`
  @media ${DEVICE.tablet} {
    max-width: 200px;
    width: 100%;
    margin-bottom: 48px;
  }
`;

const Login = styled.div`
  @media ${DEVICE.tablet} {
    display: flex;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }
`;

const LoginText = styled.p`
  @media ${DEVICE.tablet} {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    padding-right: 8px;
  }
`;

const NextStep = styled.a`
  &:hover {
    color: ${COLORS.neutral100};
  }

  @media ${DEVICE.tablet} {
    color: ${COLORS.primary};
  }
`;

export default CheckInPage;
