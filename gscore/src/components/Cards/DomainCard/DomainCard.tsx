import React, { FC } from "react";

import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { CopyIcon } from "components/icons";
import { Button, Checkbox, Input } from "components/ui";
import { Status, StatusVariables } from "components/ui/Status";
import { Media } from "media";
import { IDomainCard } from "types";

interface domainCardProps {
  domainCard: IDomainCard;
}

export const DomainCard: FC<domainCardProps> = ({ domainCard }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(domainCard.licenseUrl);
  };

  const status = StatusVariables.INACTIVE;

  return (
    <Root>
      <Header>
        <StyledCheckbox />

        <StyledMediaMobileS between={["mobileS", "laptop"]}>
          <StyledStatus status={StatusVariables.ACTIVE} />

          {/* {status && <Button text="Activate" variant="secondary" />} */}
        </StyledMediaMobileS>
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

        <Media greaterThanOrEqual="laptop">
          <StatusText>Status</StatusText>
          <Status status={StatusVariables.ACTIVE} />
        </Media>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  max-width: 393px;
  width: 100%;
  background: ${COLORS.secondaryGray};
  border-radius: 12px;
  padding: 34px 20px 32px;
  display: flex;
  flex-direction: column;
  color: ${COLORS.neutral500};

  @media ${DEVICE.laptop} {
    max-width: 100%;
    flex-direction: row;
    padding: 24px 15px 31px 10px;
  }

  @media ${DEVICE.laptopL} {
    padding: 20px 96px 20px 32px;
  }
`;

const Header = styled.header`
  display: flex;
  padding-bottom: 24px;

  @media ${DEVICE.laptop} {
    padding: 50px 0 0 0;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 20px;

  @media ${DEVICE.laptop} {
    margin-right: 48px;
  }
`;

const StyledMediaMobileS = styled(Media)`
  /* display: flex; */
`;

const StyledStatus = styled(Status)`
  /* padding-right: 63px; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${DEVICE.laptop} {
    padding-top: 0;
    flex-direction: row;
  }
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LicenseItem = styled(ContentItem)`
  margin-bottom: 24px;

  @media ${DEVICE.laptop} {
    max-width: 296px;
    margin-right: 28px;
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
  max-width: 620px;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 18px;
  right: 24px;
  cursor: pointer;

  &:hover {
    path {
      stroke: ${COLORS.secondaryRed};
    }
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.primary};
  }
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
  width: 100%;
  max-width: 620px;

  @media ${DEVICE.laptop} {
    margin-right: 56px;
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

const StatusText = styled.p`
  padding-bottom: 32px;
`;
