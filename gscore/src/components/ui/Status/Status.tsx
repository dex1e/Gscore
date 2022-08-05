import { FC } from "react";

import styled from "styled-components";

import { COLORS } from "assets";

interface StatusProps {
  status: StatusVariables;
}

export enum StatusVariables {
  Active = "Active",
  Hold = "Hold",
  Inactive = "Inactive",
}

export const Status: FC<StatusProps> = ({ status }) => {
  return <Root $status={status}>{status}</Root>;
};

const Root = styled.div<{ $status: StatusVariables }>`
  color: ${({ $status }) =>
    ($status === StatusVariables.Active && COLORS.systemGreen300) ||
    ($status === StatusVariables.Hold && COLORS.systemOrange300) ||
    ($status === StatusVariables.Inactive && COLORS.systemRed300)};
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
`;
