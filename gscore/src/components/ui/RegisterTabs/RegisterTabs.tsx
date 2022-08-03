import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

import { COLORS } from "assets/styles/colors";

export const RegisterTabs = () => {
  return (
    <StyledTabs selectedTabClassName="isSelected">
      <StyledTabList>
        <StyledTab>Create account</StyledTab>
        <StyledTab>Log in</StyledTab>
        <StyledTab>Checkout</StyledTab>
      </StyledTabList>
    </StyledTabs>
  );
};

const StyledTabs = styled(Tabs)`
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: ${COLORS.neutral100};
`;

const StyledTabList = styled(TabList)`
  display: flex;
  gap: 16px;
`;

const StyledTab = styled(Tab)`
  width: 195px;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
    border-bottom: 8px solid ${COLORS.neutral600};
    border-radius: 5px;
  }

  &.isSelected {
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
