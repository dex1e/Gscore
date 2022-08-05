import { ButtonHTMLAttributes, FC } from "react";

import styled, {
  css,
  FlattenSimpleInterpolation,
  keyframes,
} from "styled-components";

import { COLORS } from "assets";
import { LoadingIcon } from "components/icons";

type Variant = "primary" | "secondary" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  variant?: Variant;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  text,
  className,
  variant = "primary",
  type = "button",
  isLoading,
  isDisabled,
  ...props
}) => {
  const buttonStyles = buttonTheme[variant];

  return (
    <Root
      onClick={onClick}
      className={className}
      $buttonStyles={buttonStyles}
      $isLoading={isLoading}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {isLoading ? <LoadingIcon /> : text}
    </Root>
  );
};

const buttonTheme = {
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

    svg {
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

    svg {
      stroke: ${COLORS.primary};
    }
  `,

  text: css`
    width: 57px;
    height: 18px;
    color: ${COLORS.primary};
    box-shadow: none;

    &:hover {
      color: ${COLORS.systemRed400};
    }

    &:disabled {
      color: ${COLORS.primary};
    }

    svg {
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

const Root = styled.button<{
  $buttonStyles: FlattenSimpleInterpolation;
  $isLoading?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 58px;
  border-radius: 4px;
  font-weight: 700;
  line-height: 18px;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);

  ${({ $buttonStyles }) => $buttonStyles};

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
