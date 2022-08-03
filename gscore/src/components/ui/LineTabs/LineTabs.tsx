import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

import { COLORS } from "assets/styles/colors";

export const LineTabs = () => {
  return (
    <StyledTabs selectedTabClassName="isSelected">
      <StyledTabList>
        <StyledTab>Profile</StyledTab>
        <StyledTab>Subscriptions</StyledTab>
        <StyledTab>Change password</StyledTab>
      </StyledTabList>
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  width: 466px;
  height: 32px;
  margin: 20px 0 0 50px;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  border-bottom: 2px solid ${COLORS.neutral700};
`;

const StyledTabList = styled(TabList)`
  display: flex;
  gap: 48px;
  color: ${COLORS.neutral700};
  /* padding-left: 24px; */
`;

const StyledTab = styled(Tab)`
  position: relative;
  cursor: pointer;

  &.isSelected {
    color: ${COLORS.primary};

    &::after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: 0;
      width: 100%;
      border-bottom: 2px solid ${COLORS.primary};
    }
  }
`;
