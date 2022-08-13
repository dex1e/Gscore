import { FC } from "react";

import styled from "styled-components";

import { COLORS } from "assets";

interface DividerProps {
  className?: string;
}

export const Divider: FC<DividerProps> = ({ className }) => {
  return <Root className={className}></Root>;
};

const Root = styled.div`
  width: 100%;
  height: 1px;
  background: ${COLORS.neutral700};
`;
