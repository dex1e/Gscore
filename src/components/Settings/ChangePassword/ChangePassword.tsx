import { SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { DEVICE } from "assets";
import { Button, Input } from "components/ui";
import { updatePassword } from "services";

type PasswordFormValues = {
  currentPassword: string;
  newPassword: string;
};

export const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordFormValues>({
    mode: "onChange",
  });

  const notify = (error: string) => {
    toast?.error(error, {
      toastId: "Data fetching error",
    });
  };

  const notifySucces = (succesText: string) => {
    toast.success(succesText, { toastId: "Data fetching succes" });
  };

  const errorCurrentPassword = errors?.currentPassword && "Field is required";

  const errorNewPassword = errors?.newPassword && "Field is required";

  const handleUpdatePassword: SubmitHandler<PasswordFormValues> = async ({
    currentPassword,
    newPassword,
  }) => {
    try {
      const response = await updatePassword(currentPassword, newPassword);
      if (response.status === 200) {
        reset();
        notifySucces("Password changed");
      } else {
        notify(response?.data?.message);
      }
    } catch (error: any) {
      notify(error?.response?.data?.message);
    }
  };

  return (
    <Root>
      <ToastContainer position="top-right" autoClose={2000} />
      <Form onSubmit={handleSubmit(handleUpdatePassword)}>
        <Wrapper>
          <Subtitle>Change Password</Subtitle>
          <InputItem>
            <StyledInput
              placeholder="Current Password"
              error={errorCurrentPassword}
              {...register("currentPassword", {
                required: true,
              })}
            />
          </InputItem>

          <InputItem>
            <StyledInput
              placeholder="New Password"
              error={errorNewPassword}
              {...register("newPassword", {
                required: true,
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

const Form = styled.form`
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 512px;
  width: 100%;
  padding-bottom: 24px;

  @media ${DEVICE.laptop} {
    padding-bottom: 48px;
  }
`;

const Subtitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  padding-bottom: 12px;

  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 28px;
    padding-bottom: 24px;
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

const StyledInput = styled(Input)`
  @media ${DEVICE.laptop} {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledButton = styled(Button)`
  max-width: 160px;
  width: 100%;
`;
