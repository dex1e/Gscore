import React, { FC, ReactNode } from "react";

import styled from "styled-components";

import { COLORS } from "assets";

interface ContentLayoutProps {
  children: ReactNode;
  className?: string;
}

export const ContentLayout: FC<ContentLayoutProps> = ({
  children,
  className,
}) => {
  return <Root className={className}>{children}</Root>;
};

const Root = styled.div`
  overflow: hidden;
  height: 100%;
  max-width: 620px;
  width: 100%;
  margin: 0 auto;
  padding-top: 72px;
  color: ${COLORS.neutral100};
`;
