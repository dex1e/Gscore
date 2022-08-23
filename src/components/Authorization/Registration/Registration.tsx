import React, { FC } from "react";

import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { Button, Input } from "components/ui";
import { ROUTES } from "constant";
import { registerUser } from "services";
import { setToken } from "store/features/auth";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { isValidEmail } from "utils";

interface RegistrationProps {
  onSelectLogin: (index: number) => void;
}

type RegistrationFormValues = {
  username: string;
  email: string;
  password: string;
};

export const Registration: FC<RegistrationProps> = ({ onSelectLogin }) => {
  const planId = useAppSelector((state) => state?.plan?.plan?.id);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const notify = (error: string) =>
    toast?.error(error, {
      toastId: "Data fetching error",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    mode: "onChange",
  });

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
        notify(error?.message);
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
      <ToastContainer position="top-right" autoClose={2000} />
      <Title>Create account</Title>
      <Text>
        You need to enter your name and email. We will send you a temporary
        password by email
      </Text>

      <Form onSubmit={handleSubmit(handleRegisterUser)}>
        <InputWrapper>
          <InputItem>
            <Input
              error={errorUsername}
              placeholder="Username"
              {...register("username", {
                required: true,
              })}
            />
          </InputItem>

          <InputItem>
            <Input
              placeholder="Email"
              error={errorEmail}
              {...register("email", {
                required: true,
                validate: isValidEmail,
              })}
            />
          </InputItem>

          <InputItem>
            <Input
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

        <NextStep onClick={() => onSelectLogin(1)}>
          Go to the next step
        </NextStep>
      </Login>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 34px;
  line-height: 34px;
  padding-bottom: 16px;

  @media ${DEVICE.tablet} {
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    padding-bottom: 16px;
  }
`;

const Text = styled.p`
  padding-bottom: 22px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  @media ${DEVICE.tablet} {
    padding-bottom: 32px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  padding-bottom: 24px;

  @media ${DEVICE.tablet} {
    padding-bottom: 48px;
  }
`;

const InputItem = styled.div`
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 0;
  }

  @media ${DEVICE.tablet} {
    padding-bottom: 24px;
  }
`;

const StyledButton = styled(Button)`
  max-width: 200px;
  width: 100%;
  margin-bottom: 24px;

  @media ${DEVICE.tablet} {
    margin-bottom: 48px;
  }
`;

const Login = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
`;

const LoginText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  padding-right: 8px;
`;

const NextStep = styled.a`
  color: ${COLORS.primary};

  &:hover {
    color: ${COLORS.neutral100};
  }
`;
