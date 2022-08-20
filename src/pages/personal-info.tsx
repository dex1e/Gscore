import React, { ChangeEvent, useState } from "react";

import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { SettingsTabs } from "components";
import { Button, Input } from "components/ui";
import { MainLayout } from "Layout";
import { updatePersonalInfo } from "services";
import { setUser } from "store/features/auth";
import { useAppDispatch } from "store/hooks";

const SettingsPage = () => {
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
      <Container>
        <Title>Settings</Title>

        <StyledSettingsTabs />

        <Wrapper>
          <Subtitle>Personal Info</Subtitle>
          <StyledInput
            placeholder="Username"
            value={username}
            onChange={handleChangeUsername}
          />
          <StyledInput
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
        </Wrapper>

        <StyledButton
          text="Save"
          type="submit"
          onClick={() => handleUpdateInfo(email, username)}
        />
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled.div`
  @media ${DEVICE.laptop} {
    color: ${COLORS.neutral100};
    padding: 65px 0 444px;
    overflow: hidden;
  }
`;

const Title = styled.h1`
  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 54px;
    line-height: 64px;
    padding-bottom: 48px;
  }
`;

const StyledSettingsTabs = styled(SettingsTabs)`
  @media ${DEVICE.laptop} {
    margin-bottom: 48px;
  }
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

export default SettingsPage;
