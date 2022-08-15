import React, { FC, ReactNode } from "react";

import styled from "styled-components";

import { COLORS } from "assets";

interface SettingsLayoutProps {
  children: ReactNode;
  className?: string;
}

export const SettingsLayout: FC<SettingsLayoutProps> = ({
  children,
  className,
}) => {
  return <Root className={className}>{children}</Root>;
};

const Root = styled.div`
  overflow: hidden;
  height: 100%;
  max-width: 1226px;
  margin-top: 64px;
  color: ${COLORS.neutral100};
`;
