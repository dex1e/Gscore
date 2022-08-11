import { createMedia } from "@artsy/fresnel";
import styled from "styled-components";

// import { Menu } from "components/Header/Menu";
import { BuySubscriptionCard } from "components";
import AccordionMenu, {
  Button,
  SubscriptionCard,
  // Checkbox,
  DomainCard,
  Input,
  SettingsTabs,
  RegisterTabs,
} from "components/ui";
import HeaderAccordion from "components/ui/HeaderAccordion";
import { MainLayout } from "Layout/MainLayout";
import { card } from "utils";
import { domainCard } from "utils/mock";

const UiKitPage = () => {
  return (
    <Root>
      {/* <Buttons>
            <Button variant="primary" text="Default" />
            <Button variant="primary" text="Default" isDisabled />
            <Button variant="secondary" text="Default" />
            <Button variant="secondary" text="Default" isDisabled />
            <Somebutton>
              <Button variant="text" text="Default" />
              <Button variant="text" text="Default" isDisabled />
              <Button isLoading />
              <Button variant="secondary" isLoading />
              <Button variant="text" isLoading />
            </Somebutton>
          </Buttons> */}

      {/* <Input placeholder="Placeholder" />
          <Input placeholder="Placeholder" isDisabled />
          <Input placeholder="Placeholder" isSuccess />
          <Input placeholder="Placeholder" error="Error text" /> */}

      {/* <CheckboxWrapper>
            <Checkbox />
            <Checkbox isDisabled />
          </CheckboxWrapper> */}

      {/* <STabs>
        <SettingsTabs />
        <RegisterTabs />
      </STabs> */}

      <CardsWrapper>
        {/* <SubscriptionCard card={card} /> */}
        <DomainCard domainCard={domainCard} />
      </CardsWrapper>

      {/* <AccordionMenu /> */}
      {/* <HeaderAccordion /> */}

      {/* <WrapperBuy>
        <BuySubscriptionCard />
        <BuySubscriptionCard isActive />
      </WrapperBuy> */}
    </Root>
  );
};

const Root = styled(MainLayout)`
  position: relative;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Somebutton = styled.div`
  display: flex;
`;

// const CheckboxWrapper = styled.div`
//   display: flex;
//   gap: 80px;
// `;

const STabs = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin: 30px 0;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
`;

const WrapperBuy = styled.div`
  display: flex;
  margin: 100px;
`;

export default UiKitPage;
