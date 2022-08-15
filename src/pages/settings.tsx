import React from "react";

import styled from "styled-components";

import { DEVICE } from "assets";
import { Button, Input } from "components/ui";
import { MainLayout, SettingsLayout } from "Layout";

const SettingsPage = () => {
  return (
    <Root>
      <Container>
        <Title>Settings</Title>

        <GridWrapper>
          <GridItem>
            <Subtitle>Personal Info</Subtitle>

            <StyledInput placeholder="Username" />
            <StyledInput placeholder="Email" />
          </GridItem>

          <GridItem>
            <Subtitle>Change password</Subtitle>

            <StyledInput placeholder="Current Password" />
            <StyledInput placeholder="New Password" />
          </GridItem>
        </GridWrapper>

        <StyledButton text="Save all changes" />
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled(SettingsLayout)`
  @media ${DEVICE.laptop} {
    margin-bottom: 444px;
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

const GridWrapper = styled.div`
  @media ${DEVICE.laptop} {
    padding-bottom: 74px;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const GridItem = styled.div`
  @media ${DEVICE.laptop} {
    max-width: 512px;
    width: 100%;
  }
`;

const Subtitle = styled.h2`
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
  @media ${DEVICE.laptop} {
    max-width: 228px;
    width: 100%;
  }
`;

export default SettingsPage;
