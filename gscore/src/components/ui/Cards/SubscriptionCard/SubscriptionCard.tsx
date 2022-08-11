import { FC } from "react";

import dayjs from "dayjs";
import styled from "styled-components";

import { COLORS } from "assets";
import { DEVICE } from "constant";
import { ICard } from "utils/mock";

import { Button } from "../../Button";
import { Status } from "../../Status";
import { StatusVariables } from "../../Status";

interface SubscriptionCardProps {
  card: ICard;
}

export const SubscriptionCard: FC<SubscriptionCardProps> = ({ card }) => {
  const validEndDate = dayjs.unix(card?.currentPeriodEnd).format("DD.MM.YYYY");

  return (
    <Root>
      <Header>
        <SubscriptionName>{card?.title}</SubscriptionName>
        <Status status={StatusVariables.ACTIVE} />
      </Header>

      <Content>
        <Description>
          <License>
            <LicenseName>{card?.licenseItem}</LicenseName>
            <Price>{card?.price}</Price>
          </License>

          <ValidEndDate>valid until {validEndDate}</ValidEndDate>
        </Description>

        <StyledButton variant="secondary" text="View" />
      </Content>
    </Root>
  );
};

const Root = styled.div`
  min-width: 318px;
  max-width: 620px;
  width: calc(100% - 25px);
  min-height: 268px;
  max-height: 334px;
  box-shadow: 0px 24px 65px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  background: ${COLORS.neutral700};
  padding: 32px 0;

  @media ${DEVICE.laptopL} {
    padding: 48px 0;
    height: 334px;
    width: 100%;
  }
`;

const Header = styled.header`
  width: 100%;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  padding: 0 24px 24px 16px;
  border-bottom: 1px solid ${COLORS.neutral500};

  @media ${DEVICE.laptopL} {
    padding: 0 64px 32px 32px;
  }
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

  @media ${DEVICE.laptopL} {
    padding: 32px 0 0 32px;
  }
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;

  @media ${DEVICE.laptopL} {
    font-size: 24px;
    line-height: 26px;
  }
`;

const License = styled.div`
  height: 30px;
  display: flex;
  color: ${COLORS.neutral100};
`;

const LicenseName = styled.span`
  max-width: 212px;
  width: 100%;

  @media ${DEVICE.laptopL} {
    max-width: 428px;
  }
`;

const Price = styled.span`
  /* padding-right: 50px; */
  padding-left: 8px;

  @media ${DEVICE.laptopL} {
    padding-left: 32px;
  }
`;

const ValidEndDate = styled.span`
  width: 428px;
  font-size: 16px;
  line-height: 18px;
  color: ${COLORS.neutral500};
  padding-top: 4px;
`;

const StyledButton = styled(Button)`
  width: 120px;
  margin-top: 24px;

  @media ${DEVICE.laptopL} {
    margin-top: 32px;
  }
`;
