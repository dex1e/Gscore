import React, { FC } from "react";

import Link from "next/link";
import styled, {
  css,
  FlattenSimpleInterpolation,
  keyframes,
} from "styled-components";

import { COLORS } from "assets";

interface LinkButtonProps {
  text?: string;
  className?: string;
  variant?: Variant;
  href?: any;
}

type Variant = "primary" | "secondary" | "text";

export const LinkButton: FC<LinkButtonProps> = ({
  text,
  className,
  variant = "primary",
  href,
}) => {
  const linkButtonStyles = linkButtonTheme[variant];

  return (
    <Link href={href} passHref>
      <Root className={className} $linkButtonStyles={linkButtonStyles}>
        {text}
      </Root>
    </Link>
  );
};

const linkButtonTheme = {
  primary: css`
    background: ${COLORS.primary};
    color: ${COLORS.neutral100};

    &:hover {
      background: ${COLORS.systemRed400};
    }

    &:focus {
      outline: 4px solid ${COLORS.buttonBorderPrimary};
    }

    &:disabled {
      background: ${COLORS.primary};
      color: ${COLORS.neutral100};
    }

    path {
      stroke: ${COLORS.neutral100};
    }
  `,

  secondary: css`
    background: ${COLORS.neutral100};
    color: ${COLORS.primary};

    &:hover {
      background: ${COLORS.neutral200};
      color: ${COLORS.systemRed400};
    }

    &:focus {
      outline: 4px solid ${COLORS.buttonBorderSecondary};
    }

    &:disabled {
      background: ${COLORS.neutral100};
      color: ${COLORS.primary};
    }

    path {
      stroke: ${COLORS.primary};
    }
  `,

  text: css`
    width: 57px;
    height: 18px;
    color: ${COLORS.primary};
    box-shadow: none;
    padding: 0;

    &:hover {
      color: ${COLORS.systemRed400};
    }

    &:disabled {
      color: ${COLORS.primary};
    }

    path {
      stroke: ${COLORS.primary};
    }
  `,
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Root = styled.a<{
  $linkButtonStyles: FlattenSimpleInterpolation;
  $isLoading?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 105px;
  max-width: 308px;
  padding: 20px 24px;
  border-radius: 4px;
  font-weight: 700;
  line-height: 18px;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);

  ${({ $linkButtonStyles }) => $linkButtonStyles};

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      svg {
        animation: ${spin} 1.5s linear infinite;
      }
    `}

  &:disabled {
    opacity: 0.6;
  }
`;
