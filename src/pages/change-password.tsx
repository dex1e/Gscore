import React from "react";

import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { Button, Input, SettingsTabs } from "components/ui";
import { MainLayout } from "Layout";

const SettingsPage = () => {
  return (
    <Root>
      <Container>
        <Title>Settings</Title>

        <StyledSettingsTabs />

        <Wrapper>
          <Subtitle>Change Password</Subtitle>
          <StyledInput placeholder="Current Password" />
          <StyledInput placeholder="New Password" />
        </Wrapper>

        <StyledButton text="Save" />
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
