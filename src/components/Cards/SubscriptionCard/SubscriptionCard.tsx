import { FC } from "react";

import dayjs from "dayjs";
import styled, { css } from "styled-components";

import { COLORS, DEVICE } from "assets";
import { Button, Status } from "components/ui";
import { ISubscriptions } from "types";

interface SubscriptionCardProps {
  card: ISubscriptions;
  className?: string;
  isInactive?: boolean;
}

export const SubscriptionCard: FC<SubscriptionCardProps> = ({
  card,
  className,
  isInactive,
}) => {
  const validEndDate = dayjs
    .unix(Number(card?.currentPeriodEnd))
    .format("DD.MM.YYYY");

  return (
    <Root className={className} $isInactive={isInactive}>
      <Header>
        <SubscriptionName>Gscore</SubscriptionName>
        <Status status={card?.status} />
      </Header>

      <Content>
        <Description>
          <License>
            <LicenseName>{card?.product?.name}</LicenseName>$
            {card?.product?.prices[0]?.price}
          </License>

          <ValidEndDate>valid until {validEndDate}</ValidEndDate>
        </Description>

        <StyledButton variant="secondary" text="View" />
      </Content>
    </Root>
  );
};

const Root = styled.div<{ $isInactive?: boolean }>`
  max-width: 318px;
  width: 100%;
  box-shadow: 0px 24px 65px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  background: ${COLORS.neutral700};
  padding: 32px 0;

  ${({ $isInactive }) =>
    $isInactive &&
    css`
      opacity: 0.3;
    `}

  @media ${DEVICE.laptop} {
    max-width: 400px;
    padding: 48px 0;
  }

  @media ${DEVICE.laptopL} {
    max-width: 620px;
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

  @media ${DEVICE.laptop} {
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
  padding: 24px 50px 0 16px;
  display: flex;
  flex-direction: column;

  @media ${DEVICE.laptop} {
    padding: 32px 81px 0 32px;
  }
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  padding-bottom: 24px;

  @media ${DEVICE.laptop} {
    font-size: 24px;
    line-height: 26px;
    padding-bottom: 32px;
  }
`;

const License = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${COLORS.neutral100};
  padding-bottom: 4px;

  @media ${DEVICE.laptop} {
    padding-bottom: 12px;
  }
`;

const LicenseName = styled.span`
  width: 100%;
`;

const ValidEndDate = styled.span`
  width: 428px;
  font-size: 16px;
  line-height: 18px;
  color: ${COLORS.neutral500};
`;

const StyledButton = styled(Button)`
  width: 120px;
`;
