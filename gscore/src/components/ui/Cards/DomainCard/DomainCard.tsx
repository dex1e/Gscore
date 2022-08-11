import React, { FC } from "react";

import styled from "styled-components";

import { COLORS } from "assets";
import { CopyIcon } from "components/icons";
import { Checkbox, Input } from "components/ui";
import { Status, StatusVariables } from "components/ui/Status";
import { DEVICE } from "constant";
import { Media } from "media";
import { IDomainCard } from "utils/mock";

interface domainCardProps {
  domainCard: IDomainCard;
}

export const DomainCard: FC<domainCardProps> = ({ domainCard }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(domainCard.licenseUrl);
  };

  return (
    <Root>
      <Header>
        <StyledCheckbox />
        <Media at="mobileM">
          <StyledStatus status={StatusVariables.ACTIVE} />
        </Media>
      </Header>

      <Content>
        <LicenseItem>
          <Title>{domainCard?.licenseTitle}</Title>
          <Code>
            <LicenseInput value={domainCard?.licenseUrl} readOnly />
            <CopyButton onClick={handleCopyToClipboard}>
              <CopyIcon />
            </CopyButton>
          </Code>
        </LicenseItem>

        <DomainItem>
          <Title>{domainCard?.domainTitle}</Title>
          <DomainInput />
        </DomainItem>

        <StatusItem>
          <Media greaterThanOrEqual="laptop">
            <StatusText>Status</StatusText>
            <StyledStatus status={StatusVariables.INACTIVE} />
          </Media>
        </StatusItem>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  background: ${COLORS.secondaryGray};
  border-radius: 12px;
  padding: 34px 20px 32px;
  display: flex;
  flex-direction: column;
  color: ${COLORS.neutral500};
  width: 100%;

  @media ${DEVICE.laptop} {
    flex-direction: row;
    /* align-items: center; */
    padding: 24px 15px 31px 10px;

    @media ${DEVICE.laptopL} {
      padding: 24px 96px 31px 32px;
    }
  }

  /* @media ${DEVICE.laptopL} {
    padding: 0;
    flex-direction: row;
    padding: 24px 96px 31px 32px;
  } */
`;

const Header = styled.header`
  display: flex;
  height: 28px;
  width: 28px;

  @media ${DEVICE.laptop} {
    padding-top: 50px;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  /* margin-right: 20px; */

  @media ${DEVICE.laptop} {
    /* margin-right: 48px; */
  }
`;

const StyledStatus = styled(Status)`
  margin-left: 20px;

  @media ${DEVICE.laptop} {
    margin: 0;
    padding-top: 32px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  width: 100%;

  @media ${DEVICE.laptop} {
    padding-top: 0;
    flex-direction: row;
    margin-left: 48px;
  }
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${DEVICE.laptop} {
  }
`;

const LicenseItem = styled(ContentItem)`
  @media ${DEVICE.laptop} {
    max-width: 296px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  padding-bottom: 12px;
`;

const Code = styled.div`
  position: relative;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 18px;
  right: 24px;
  cursor: pointer;
`;

const LicenseInput = styled(Input)`
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  padding: 25px 97px 25px 24px;
  background: ${COLORS.neutral700};
  color: ${COLORS.neutral500};
  border: none;
`;

const DomainItem = styled(ContentItem)`
  margin-top: 24px;
  width: 100%;
  max-width: 620px;

  @media ${DEVICE.laptop} {
    margin: 0 0 0 28px;
  }
`;

const DomainInput = styled(Input)`
  background: ${COLORS.neutral700};
  border: none;
  padding: 25px 31px 25px 24px;
  color: ${COLORS.neutral500};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const StatusItem = styled.div`
  margin-left: 56px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const StatusText = styled.p``;
