import { useState } from "react";

import styled from "styled-components";

import { Button, Checkbox, Input, LineTabs, RegisterTabs } from "components/ui";

const UiKitPage = () => {
  return (
    <Root>
      <Buttons>
        <Button variant="primary" text="Default" />
        <Button variant="secondary" text="Default" />
        <Button variant="text" text="Default" />
        <Button isLoading />
        <Button variant="secondary" isLoading />
        <Button variant="text" isLoading />
      </Buttons>

      <Input placeholder="Placeholder" />
      <Input placeholder="Placeholder" isSuccess />
      <Input placeholder="Placeholder" isError />
      <Checkbox />

      <LineTabs />
      <RegisterTabs />
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

export default UiKitPage;
