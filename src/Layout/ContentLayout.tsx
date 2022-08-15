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
  margin: 72px 315.5px 0;
  color: ${COLORS.neutral100};
`;
