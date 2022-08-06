import styled from "styled-components";

import Accordions, {
  Button,
  Card,
  Checkbox,
  DomainCard,
  Header,
  Input,
  LineTabs,
  RegisterTabs,
} from "components/ui";
import { card } from "utils";
import { domainCard } from "utils/mock";

const UiKitPage = () => {
  return (
    <Root>
      <Buttons>
        <Button variant="primary" text="Default" />
        <Button variant="primary" text="Default" isDisabled />
        <Button variant="secondary" text="Default" />
        <Button variant="secondary" text="Default" isDisabled />
        <Button variant="text" text="Default" />
        <Button variant="text" text="Default" isDisabled />
        <Button isLoading />
        <Button variant="secondary" isLoading />
        <Button variant="text" isLoading />
      </Buttons>

      <Input placeholder="Placeholder" />
      <Input placeholder="Placeholder" isDisabled />
      <Input placeholder="Placeholder" isSuccess />
      <Input placeholder="Placeholder" error="Error text" />

      <CheckboxWrapper>
        <Checkbox />
        <Checkbox isDisabled />
      </CheckboxWrapper>

      <STabs>
        <LineTabs />
        <RegisterTabs />
      </STabs>

      <CardsWrapper>
        <Card card={card} />
        <DomainCard domainCard={domainCard} />
      </CardsWrapper>

      <Accordions />

      <Header />
    </Root>
  );
};

const Root = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 15px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  gap: 80px;
`;

const STabs = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  gap: 30px;
`;

export default UiKitPage;
