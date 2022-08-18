import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { DEVICE } from "assets";
import { RegisterTabs } from "components";
import { Button, Input } from "components/ui";
import { ContentLayout, MainLayout } from "Layout";
import { LocalStorageService, loginUser } from "services";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleChangeEmail = (event: any) => {
    let email = event.target.value;
    setEmail(email);
  };

  const handleChangePassword = (event: any) => {
    let password = event.target.value;
    setPassword(password);
  };

  const handleOnClick = (email: any, password: any) => {
    loginUser(email, password)
      .then((response: any) => {
        LocalStorageService.setData("token", response.data.token);
      })

      .catch(function (error: any) {
        console.log(error);
      });
  };

  return (
    <Root>
      <Container>
        <StyledRegisterTabs />
        <Title>Log in</Title>

        <InputWrapper>
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
          text="Log in"
          onClick={() => handleOnClick(email, password)}
        />
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
