import { FC } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

import { COLORS } from "assets";
import { Z_INDEX } from "constant";

interface SettingsTabsProps {
  className?: string;
}

export const SettingsTabs: FC<SettingsTabsProps> = ({ className }) => {
  return (
    <StyledTabs selectedTabClassName="isSelected" className={className}>
      <StyledTabList>
        <StyledTab>Profile</StyledTab>
        <StyledTab>Change password</StyledTab>
      </StyledTabList>

      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  min-width: 100%;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 2px solid ${COLORS.neutral700};
  }
`;

const StyledTabList = styled(TabList)`
  display: flex;
  color: ${COLORS.neutral700};
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
