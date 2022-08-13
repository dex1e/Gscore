import { FC } from "react";

import styled, { css } from "styled-components";

import { COLORS } from "assets";
import { EStatus, IStatuses } from "types";

interface StatusProps {
  status: EStatus;
  className?: string;
}

export const Status: FC<StatusProps> = ({ status, className }) => {
  const statuses: Record<string, IStatuses> = {
    ACTIVE: { label: "Active", color: COLORS.systemGreen300 },
    HOLD: { label: "Hold", color: COLORS.systemOrange300 },
    INACTIVE: { label: "Inactive", color: COLORS.systemRed300 },
  };

  return (
    <Root $statusColor={statuses?.[status]?.color} className={className}>
      {statuses?.[status]?.label}
    </Root>
  );
};

const Root = styled.div<{ $statusColor?: string }>`
  ${({ $statusColor }) => $statusColor && `color: ${$statusColor} `};

  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  height: 22px;
`;
