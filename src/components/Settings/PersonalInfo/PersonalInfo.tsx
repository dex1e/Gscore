import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { DEVICE } from "assets";
import { Button, Input } from "components/ui";
import { updatePersonalInfo } from "services";
import { setUser } from "store/features/auth";
import { useAppDispatch } from "store/hooks";
import { isValidEmail } from "utils";

type PersonalInfoFormValues = {
  username: string;
  email: string;
  password: string;
};

export const PersonalInfo = () => {
  const dispatch = useAppDispatch();

  const notify = (error: string) =>
    toast?.error(error, {
      toastId: "Data fetching error",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PersonalInfoFormValues>({
    mode: "onChange",
  });

  const errorUsername = errors?.username && "Field is required";

  const errorEmail =
    (errors?.email?.type === "required" && "Field is required") ||
    (errors?.email?.type === "validate" && "Wrong email") ||
    "";

  const handleUpdateInfo: SubmitHandler<PersonalInfoFormValues> = ({
    email,
    username,
  }) => {
    updatePersonalInfo(email, username)
      .then((response: any) => {
        dispatch(setUser(response.data));
        reset();
      })

      .catch(function (error: any) {
        notify(error?.message);
      });
  };

  return (
    <Root>
      <ToastContainer position="top-right" autoClose={2000} />
      <Form onSubmit={handleSubmit(handleUpdateInfo)}>
        <Wrapper>
          <Subtitle>Personal Info</Subtitle>

          <InputItem>
            <StyledInput
              placeholder="Username"
              error={errorUsername}
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
        </Wrapper>

        <StyledButton text="Save" type="submit" />
      </Form>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  @media ${DEVICE.laptop} {
    max-width: 512px;
    width: 100%;
    padding-bottom: 48px;
  }
`;

const Subtitle = styled.h2`
  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    padding-bottom: 24px;
  }
`;

const Form = styled.form``;

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
    max-width: 160px;
    width: 100%;
  }
`;
