import React from "react";

import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { DEVICE } from "assets";
import { Button, Input } from "components/ui";
import { ROUTES } from "constant";
import { loginUser } from "services";
import { setToken, setUser } from "store/features/auth";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { isValidEmail } from "utils";

type LoginFormValues = {
  email: string;
  password: string;
};

export const Login = () => {
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
        notify(error?.message);
      });
  };

  return (
    <Root>
      <ToastContainer position="top-right" autoClose={2000} />
      <Title>Log in</Title>

      <Form onSubmit={handleSubmit(handleLoginUser)}>
        <InputWrapper>
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

  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    padding-bottom: 32px;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  padding-bottom: 24px;

  @media ${DEVICE.laptop} {
    padding-bottom: 48px;
  }
`;

const InputItem = styled.div`
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 0;
  }

  @media ${DEVICE.laptop} {
    padding-bottom: 24px;
  }
`;

const StyledButton = styled(Button)`
  max-width: 200px;
  width: 100%;
`;
