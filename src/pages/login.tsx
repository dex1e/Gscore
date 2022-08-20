import React, { ChangeEvent, useState } from "react";

import { useRouter } from "next/router";
import styled from "styled-components";

import { DEVICE } from "assets";
import { RegisterTabs } from "components";
import { Button, Input } from "components/ui";
import { ROUTES } from "constant";
import { ContentLayout, MainLayout } from "Layout";
import { loginUser } from "services";
import { setToken, setUser } from "store/features/auth";
import { useAppDispatch, useAppSelector } from "store/hooks";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const planId = useAppSelector((state) => state.plan.plan.id);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    let email = event.target.value;
    setEmail(email);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    let password = event.target.value;
    setPassword(password);
  };

  const handleOnClick = (email: any, password: any) => {
    loginUser(email, password)
      .then((response: any) => {
        dispatch(setToken(response.data.token));
        dispatch(setUser(response.data.user));

        router.push(ROUTES.CHECKOUT_ID(String(planId)));
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
          <InputItem>
            <StyledInput
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
          </InputItem>

          <InputItem>
            <StyledInput
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
          </InputItem>
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
