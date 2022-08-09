import { FC } from "react";

import dayjs from "dayjs";
import styled from "styled-components";

import { COLORS } from "assets";
import { ICard } from "utils/mock";

import { Button } from "../../Button";
import { Status } from "../../Status";
import { StatusVariables } from "../../Status";

interface SubscriptionCardProps {
  card: ICard;
}

export const SubscriptionCard: FC<SubscriptionCardProps> = ({ card }) => {
  const validEndDate = dayjs.unix(card.currentPeriodEnd).format("DD.MM.YYYY");

  return (
    <Root>
      <Header>
        <SubscriptionName>{card.title}</SubscriptionName>
        <Status status={StatusVariables.ACTIVE} />
      </Header>
      <Content>
        <Description>
          <License>
            <LicenseName>{card.licenseItem}</LicenseName>
            <Price>{card.price}</Price>
          </License>
          <ValidEndDate>valid until {validEndDate}</ValidEndDate>
        </Description>
        <StyledButton variant="secondary" text="View" />
      </Content>
    </Root>
  );
};

const Root = styled.div`
  max-width: 318px;
  width: 100%;
  min-height: 268px;
  box-shadow: 0px 24px 65px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  background: ${COLORS.neutral700};
  padding: 32px 0;
`;

const Header = styled.header`
  width: 100%;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  padding: 0 24px 24px 16px;
  border-bottom: 1px solid ${COLORS.neutral500};
`;

const SubscriptionName = styled.h2`
  height: 22px;
  color: ${COLORS.neutral100};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 0 0 16px;
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

const License = styled.div`
  height: 30px;
  display: flex;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: ${COLORS.neutral100};
  padding-bottom: 4px;
`;

const LicenseName = styled.span`
  width: 428px;
`;

const Price = styled.span`
  padding-right: 50px;
`;

const ValidEndDate = styled.span`
  width: 428px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${COLORS.neutral500};
`;

const StyledButton = styled(Button)`
  width: 120px;
`;
