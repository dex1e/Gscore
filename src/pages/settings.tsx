import React from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { ChangePassword, PersonalInfo } from "components";
import { Z_INDEX } from "constant";
import { MainLayout } from "Layout";

const SettingsPage = () => {
  return (
    <Root>
      <Container>
        <Title>Settings</Title>

        <StyledTabs selectedTabClassName="isSelected">
          <StyledTabList>
            <StyledTab>Profile</StyledTab>
            <StyledTab>Change password</StyledTab>
          </StyledTabList>

          <TabPanel>
            <PersonalInfo />
          </TabPanel>

          <TabPanel>
            <ChangePassword />
          </TabPanel>
        </StyledTabs>
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled.div`
  color: ${COLORS.neutral100};
  overflow: hidden;
  padding: 35px 0 54px;

  @media ${DEVICE.laptop} {
    padding: 65px 0 444px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 34px;
  padding-bottom: 38px;

  @media ${DEVICE.laptop} {
    font-size: 54px;
    line-height: 64px;
    padding-bottom: 48px;
  }
`;

const StyledTabs = styled(Tabs)`
  min-width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  position: relative;
`;

const StyledTabList = styled(TabList)`
  display: flex;
  color: ${COLORS.neutral700};
  margin-bottom: 48px;

  &::after {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    border-bottom: 2px solid ${COLORS.neutral700};
  }
`;

const StyledTab = styled(Tab)`
  cursor: pointer;
  position: relative;
  text-align: center;
  padding: 0 24px 12px;

  &.isSelected {
    color: ${COLORS.primary};

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 2px solid ${COLORS.primary};
      z-index: ${Z_INDEX.primary};
    }
  }
`;

export default SettingsPage;
