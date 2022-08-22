import React, { ChangeEvent, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { RegisterTabs } from "components";
import { Button, Input } from "components/ui";
import { ROUTES } from "constant";
import { ContentLayout, MainLayout } from "Layout";
import { registerUser } from "services";
import { setToken } from "store/features/auth";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { isValidEmail } from "utils";

type RegistrationFormValues = {
  username: string;
  email: string;
  password: string;
};

const CheckInPage = () => {
  const planId = useAppSelector((state) => state.plan.plan.id);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    mode: "onChange",
  });

  console.log(errors);

  const handleRegisterUser: SubmitHandler<RegistrationFormValues> = ({
    email,
    username,
    password,
  }) => {
    registerUser(email, username, password)
      .then((response: any) => {
        dispatch(setToken(response.data.token));
        router.push(ROUTES.CHECKOUT_ID(String(planId)));
      })

      .catch(function (error: any) {
        console.log(error);
      });
  };

  const errorUsername = errors.username && "Field is required";

  const errorEmail =
    (errors?.email?.type === "required" && "Field is required") ||
    (errors?.email?.type === "validate" && "Wrong email") ||
    "";

  const errorPassword =
    (errors?.password?.type === "required" && "Field is required") ||
    (errors?.password?.type === "minLength" && "Minimal length is 6 symbols") ||
    "";

  return (
    <Root>
      <Container>
        <StyledRegisterTabs />
        <Title>Create account</Title>

        <Text>
          You need to enter your name and email. We will send you a temporary
          password by email
        </Text>

        <Form onSubmit={handleSubmit(handleRegisterUser)}>
          <InputWrapper>
            <InputItem>
              <StyledInput
                error={errorUsername}
                placeholder="Username"
                {...register("username", {
                  required: true,
                })}
              />
            </InputItem>

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
                type="password"
                error={errorPassword}
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
            </InputItem>
          </InputWrapper>

          <StyledButton text="Send password" type="submit" />
        </Form>

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

const Form = styled.form``;

const InputWrapper = styled.div`
  @media ${DEVICE.tablet} {
    padding-bottom: 48px;
  }
`;

const InputItem = styled.div`
  @media ${DEVICE.tablet} {
    padding-bottom: 24px;

    &:last-child {
      padding-bottom: 0;
    }
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
