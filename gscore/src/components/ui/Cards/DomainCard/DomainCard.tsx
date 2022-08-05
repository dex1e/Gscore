import React, { FC } from "react";

import styled from "styled-components";

import { COLORS } from "assets";
import { Copy } from "components/icons";
import { Checkbox } from "components/ui/Checkbox";
import { Status, StatusVariables } from "components/ui/Status";
import { IDomainCard } from "utils/mock";

interface domainCardProps {
  domainCard: IDomainCard;
}

export const DomainCard: FC<domainCardProps> = ({ domainCard }) => {
  return (
    <Root>
      <Header>
        <Checkbox />
        <Status status={StatusVariables.Active} />
      </Header>
      <Content>
        <ContentItem>
          <Title>{domainCard.licenseTitle}</Title>
          <Code>
            <Url>{domainCard.licenseUrl}</Url>
            <StyledCopy />
          </Code>
        </ContentItem>
        <ContentItem>
          <Title>{domainCard.domainTitle}</Title>
          <DomainCode>
            <DomainUrl>{domainCard.domainUrl}</DomainUrl>
          </DomainCode>
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
  margin: 0 16px;
`;

const Header = styled.header`
  padding: 34px 0 0 20px;
  display: flex;
  gap: 48px;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 20px 32px;
  color: ${COLORS.neutral500};
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

const Code = styled.span`
  width: 303px;
  height: 68px;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  background: ${COLORS.neutral700};
  padding: 25px 97px 25px 24px;
  position: relative;
`;

const StyledCopy = styled(Copy)`
  position: absolute;
  top: 18px;
  right: 24px;
`;

const DomainCode = styled(Code)`
  padding: 25px 31px 25px 24px;
`;

const Url = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  width: 182px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DomainUrl = styled(Url)`
  width: 248px;
`;
