import { FC } from "react";

import dayjs from "dayjs";
import styled from "styled-components";

import { COLORS } from "assets";
import { ICard } from "utils/mock";

import { Button } from "../Button";
import { Status } from "../Status";
import { StatusVariables } from "../Status";

interface CardsProps {
  card: ICard;
}

export const Card: FC<CardsProps> = ({ card }) => {
  const validEndDate = dayjs.unix(card.currentPeriodEnd).format("DD.MM.YYYY");
  return (
    <Root>
      <Header>
        <Title>{card.title}</Title>
        <Status status={StatusVariables.ACTIVE} />
      </Header>
      <Content>
        <Description>
          <License>
            <LicenseItem>{card.licenseItem}</LicenseItem>
            <Price>{card.price}</Price>
          </License>
          <Validity>valid until {validEndDate}</Validity>
        </Description>
        <StyledButton variant="secondary" text="View" />
      </Content>
    </Root>
  );
};

const Root = styled.div`
  width: 620px;
  height: 334px;
  box-shadow: 0px 24px 65px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  background: ${COLORS.neutral700};
`;

const Header = styled.header`
  width: 100%;
  height: 108px;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  border-bottom: 1px solid ${COLORS.neutral500};
  display: flex;
  justify-content: space-between;
  padding: 48px 64px 0 32px;
`;

const Title = styled.h2`
  color: ${COLORS.neutral100};
`;

const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: 32px 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const License = styled.div`
  display: flex;
  gap: 32px;
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  color: ${COLORS.neutral100};
`;

const LicenseItem = styled.h3`
  width: 428px;
`;

const Price = styled.h3``;

const Validity = styled.span`
  width: 428px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${COLORS.neutral500};
`;

const StyledButton = styled(Button)`
  width: 120px;
`;
