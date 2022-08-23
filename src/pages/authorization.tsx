import { useState } from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { Login, Registration } from "components";
import { MainLayout } from "Layout";

const AuthorizationPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSelectLogin = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Root>
      <Container>
        <StyledTabs
          selectedTabClassName="is-tab-selected"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <StyledTabList>
            <StyledTab>Create account</StyledTab>
            <StyledTab>Log in</StyledTab>
          </StyledTabList>
          <TabPanel>
            <Registration onSelectLogin={handleSelectLogin} />
          </TabPanel>

          <TabPanel>
            <Login />
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
  overflow: hidden;
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
  color: ${COLORS.neutral100};
  padding: 55px 0 55px;

  @media ${DEVICE.tablet} {
    padding-top: 72px;
    padding-bottom: 228px;
  }
`;

const StyledTabs = styled(Tabs)`
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
`;

const StyledTabList = styled(TabList)`
  display: flex;
  margin-bottom: 34px;

  @media ${DEVICE.tablet} {
    margin-bottom: 64px;
  }
`;

const StyledTab = styled(Tab)`
  width: 195px;
  cursor: pointer;
  position: relative;
  margin-right: 16px;
  padding-bottom: 20px;

  &:last-child {
    margin-right: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 8px solid ${COLORS.neutral600};
    border-radius: 5px;
  }

  &.is-tab-selected {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 8px solid ${COLORS.primary};
      border-radius: 5px;
    }
  }
`;

export default AuthorizationPage;
