import styled from "styled-components";

import {
  DomainCard,
  PlanCard,
  RegisterTabs,
  SettingsTabs,
  SubscriptionCard,
} from "components";
import { AccordionMenu, Button, Checkbox, Input } from "components/ui";
import { MainLayout } from "Layout";
import { card, domainCard } from "utils";

const UiKitPage = () => {
  return (
    <Root>
      <Gap>
        <Button variant="primary" text="Default" />
        <Button variant="primary" text="Default" isDisabled />
        <Button variant="secondary" text="Default" />
        <Button variant="secondary" text="Default" isDisabled />
        <Gap>
          <Button variant="text" text="Default" />
          <Button variant="text" text="Default" isDisabled />
          <Button isLoading />
          <Button variant="secondary" isLoading />
          <Button variant="text" isLoading />
        </Gap>
      </Gap>

      <Gap>
        <Input placeholder="Placeholder" />
        <Input placeholder="Placeholder" isDisabled />
        <Input placeholder="Placeholder" isSuccess />
        <Input placeholder="Placeholder" error="Error text" />
      </Gap>

      <Gap>
        <Checkbox />
        <Checkbox isDisabled />
      </Gap>

      <GapTabs>
        <SettingsTabs />
        <RegisterTabs />
      </GapTabs>

      <GapCards>
        <SubscriptionCard card={card} />
        <DomainCard domainCard={domainCard} />
      </GapCards>

      <Wrapper>
        <AccordionMenu />
      </Wrapper>
    </Root>
  );
};

const Root = styled(MainLayout)`
  position: relative;
`;

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Gap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const GapTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 20px;
`;

const GapCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
`;

export default UiKitPage;
