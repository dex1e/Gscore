import React, { ChangeEvent, useState } from "react";

import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import { DEVICE } from "assets";
import { RegisterTabs } from "components";
import { Button, Input } from "components/ui";
import { ROUTES } from "constant";
import { ContentLayout, MainLayout } from "Layout";
import { loginUser } from "services";
import { setToken, setUser } from "store/features/auth";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { isValidEmail } from "utils";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const planId = useAppSelector((state) => state.plan.plan.id);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: "onChange",
  });

  const errorEmail =
    (errors?.email?.type === "required" && "Field is required") ||
    (errors?.email?.type === "validate" && "Wrong email") ||
    "";

  const errorPassword =
    (errors?.password?.type === "required" && "Field is required") ||
    (errors?.password?.type === "minLength" && "Minimal length is 6 symbols") ||
    "";

  const handleLoginUser: SubmitHandler<LoginFormValues> = ({
    email,
    password,
  }) => {
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

        <Form onSubmit={handleSubmit(handleLoginUser)}>
          <InputWrapper>
            <InputItem>
              <StyledInput
                placeholder="Email"
                error={errorEmail}
                {...register("email", {
                  required: true,
                  validate: isValidEmail,
                })}
              />
            </InputItem>

            <InputItem>
              <StyledInput
                placeholder="Password"
                error={errorPassword}
                type="password"
                {...register("password", {
                  required: true,
                })}
              />
            </InputItem>
          </InputWrapper>

          <StyledButton text="Log in" type="submit" />
        </Form>
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

const Form = styled.form``;

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
