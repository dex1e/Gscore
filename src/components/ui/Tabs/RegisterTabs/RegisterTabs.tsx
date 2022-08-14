import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

import { COLORS } from "assets";

export const RegisterTabs = () => {
  return (
    <StyledTabs selectedTabClassName=" is-tab-selected">
      <StyledTabList>
        <StyledTab>Create account</StyledTab>
        <StyledTab>Log in</StyledTab>
        <StyledTab>Checkout</StyledTab>
      </StyledTabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: ${COLORS.neutral100};
  text-align: center;
`;

const StyledTabList = styled(TabList)`
  display: flex;
`;

const StyledTab = styled(Tab)`
  width: 195px;
  cursor: pointer;
  position: relative;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    border-bottom: 8px solid ${COLORS.neutral600};
    border-radius: 5px;
  }

  &.is-tab-selected {
    &::after {
      content: "";
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      border-bottom: 8px solid ${COLORS.primary};
      border-radius: 5px;
    }
  }
`;
