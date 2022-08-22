import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

import { DEVICE } from "assets";
import { Button, Input } from "components/ui";
import { updatePassword } from "services";
import { useAppDispatch } from "store/hooks";

type PasswordFormValues = {
  currentPassword: string;
  newPassword: string;
};

export const ChangePassword = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PasswordFormValues>({
    mode: "onChange",
  });

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
        console.log("Notify OK");
      } else {
        console.log("Not 200", response?.data?.message);
      }
    } catch (error: any) {
      console.log("catch error", error?.response?.data?.message);
    }
  };

  return (
    <Root>
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

const Form = styled.form``;

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
