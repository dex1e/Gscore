import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

import { COLORS } from "assets";

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
  max-width: 100%;
  height: 32px;
  margin: 20px 0 0 50px;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  border-bottom: 2px solid ${COLORS.neutral700};
`;

const StyledTabList = styled(TabList)`
  display: flex;
  gap: 0;
  color: ${COLORS.neutral700};
`;

const StyledTab = styled(Tab)`
  cursor: pointer;
  position: relative;
  text-align: center;
  padding: 0 24px;

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
