import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { Button, Input } from "components/ui";
import { MainLayout } from "Layout";

export const ChangePassword = () => {
  return (
    <Root>
      <Wrapper>
        <Subtitle>Change Password</Subtitle>
        <InputItem>
          <StyledInput placeholder="Current Password" />
        </InputItem>

        <InputItem>
          <StyledInput placeholder="New Password" />
        </InputItem>
      </Wrapper>
      <StyledButton text="Save" />
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  @media ${DEVICE.laptop} {
    max-width: 512px;
    width: 100%;
    padding-bottom: 48px;
  }
`;

const Subtitle = styled.h2`
  @media ${DEVICE.laptop} {
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    padding-bottom: 24px;
  }
`;

const InputItem = styled.div`
  @media ${DEVICE.laptop} {
    padding-bottom: 24px;

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const StyledInput = styled(Input)`
  @media ${DEVICE.laptop} {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledButton = styled(Button)`
  @media ${DEVICE.laptop} {
    max-width: 160px;
    width: 100%;
  }
`;
