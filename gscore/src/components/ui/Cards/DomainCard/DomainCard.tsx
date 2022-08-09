import React, { FC } from "react";

import styled from "styled-components";

import { COLORS } from "assets";
import { CopyIcon } from "components/icons";
import { Checkbox, Input, Status } from "components/ui";
import { StatusVariables } from "components/ui/Status";
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
        <Status status={StatusVariables.ACTIVE} />
      </Header>
      <Content>
        <ContentItem>
          <Title>{domainCard.licenseTitle}</Title>
          <Code>
            <LicenseInput value={domainCard.licenseUrl} readOnly disabled />
            <CopyButton onClick={handleCopyToClipboard}>
              <CopyIcon />
            </CopyButton>
          </Code>
        </ContentItem>
        <ContentItem>
          <Title>{domainCard.domainTitle}</Title>
          <DomainInput />
        </ContentItem>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  width: 343px;
  height: 338px;
  background: ${COLORS.secondaryGray};
  border-radius: 12px;
  padding: 34px 20px 32px;
`;

const Header = styled.header`
  display: flex;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  color: ${COLORS.neutral500};
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 0;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  padding-bottom: 12px;
`;

const Code = styled.div`
  width: 303px;
  height: 68px;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  background: ${COLORS.neutral700};
  /* padding: 25px 97px 25px 24px; */
  position: relative;
  /* overflow: hidden; */
`;

const CopyButton = styled.button`
  position: absolute;
  top: 18px;
  right: 24px;
  cursor: pointer;
`;

const LicenseInput = styled.input`
  /* width: 182px; */
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  padding: 25px 97px 25px 24px;
`;

const DomainInput = styled(Input)`
  background: ${COLORS.neutral700};
  border: none;
  padding: 25px 31px 25px 24px;
  color: ${COLORS.neutral500};
  overflow: hidden;
  text-overflow: ellipsis;
`;

// const inputStyles = styled.input`
//   /* font-weight: 400;
//   font-size: 16px;
//   line-height: 18px; */
//   overflow: hidden;
//   text-overflow: ellipsis;
//   pointer-events: none;
// `;
