import { ChangeEvent, useState } from "react";

import styled from "styled-components";

import { DEVICE } from "assets";
import { Button, Input } from "components/ui";
import { updatePersonalInfo } from "services";
import { setUser } from "store/features/auth";
import { useAppDispatch } from "store/hooks";

export const PersonalInfo = () => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const dispatch = useAppDispatch();

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    let email = event?.target?.value;

    setEmail(email);
  };

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    let username = event?.target?.value;

    setUsername(username);
  };

  const handleUpdateInfo = (email: string, username: string) => {
    updatePersonalInfo(email, username)
      .then((response: any) => {
        dispatch(setUser(response.data));
      })

      .catch(function (error: any) {
        console.log(error);
      });
  };

  return (
    <Root>
      <Wrapper>
        <Subtitle>Personal Info</Subtitle>
        <InputItem>
          <StyledInput
            placeholder="Username"
            value={username}
            onChange={handleChangeUsername}
          />
        </InputItem>

        <InputItem>
          <StyledInput
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
        </InputItem>
      </Wrapper>

      <StyledButton
        text="Save"
        type="submit"
        onClick={() => handleUpdateInfo(email, username)}
      />
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
