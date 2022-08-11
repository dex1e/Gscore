import { FC } from "react";

import styled from "styled-components";

import { COLORS } from "assets";

interface StatusProps {
  status: StatusVariables;
  className?: string;
}

export enum StatusVariables {
  ACTIVE = "Active",
  HOLD = "Hold",
  INACTIVE = "Inactive",
}

export const Status: FC<StatusProps> = ({ status, className }) => {
  return (
    <Root $status={status} className={className}>
      {status}
    </Root>
  );
};

const Root = styled.div<{ $status: StatusVariables }>`
  color: ${({ $status }) =>
    ($status === StatusVariables.ACTIVE && COLORS.systemGreen300) ||
    ($status === StatusVariables.HOLD && COLORS.systemOrange300) ||
    ($status === StatusVariables.INACTIVE && COLORS.systemRed300)};
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  height: 22px;
`;
