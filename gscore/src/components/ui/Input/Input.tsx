import React, { FC, InputHTMLAttributes } from "react";

import styled, { css } from "styled-components";

import { COLORS } from "assets";
import { CheckIcon, CloseIcon } from "components/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isDisabled?: boolean;
  isSuccess?: boolean;
  error?: string;
}

export const Input: FC<InputProps> = ({
  className,
  isSuccess,
  error,
  isDisabled,
  ...props
}) => {
  const hasError = Boolean(error);

  return (
    <Root>
      <StyledInput
        className={className}
        disabled={isDisabled}
        $isSuccess={isSuccess}
        $hasError={hasError}
        {...props}
      />

      {(isSuccess && <StyledSuccessIcon />) ||
        (hasError && (
          <>
            <StyledErrorIcon />
            <Text>{error}</Text>
          </>
        ))}
    </Root>
  );
};

const Root = styled.div`
  max-width: 419px;
  position: relative;
`;

const StyledInput = styled.input<{
  $isSuccess?: boolean;
  $hasError?: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.neutral100};
  border: 1px solid ${COLORS.neutral300};
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  padding: 24px 54px 24px 22px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${COLORS.neutral700};
  caret-color: ${COLORS.primary};

  ${({ $isSuccess }) =>
    $isSuccess &&
    css`
      border: 1px solid ${COLORS.systemGreen300};
    `}

  ${({ $hasError }) =>
    $hasError &&
    css`
      border: 1px solid ${COLORS.systemRed300};
    `}

  &:disabled {
    opacity: 0.6;

    &::placeholder {
      color: ${COLORS.neutral700};
    }
  }

  &::placeholder {
    color: ${COLORS.neutral500};
  }
`;

const StyledSuccessIcon = styled(CheckIcon)`
  position: absolute;
  top: calc(50% - 10px);
  right: 25px;

  path {
    stroke: ${COLORS.systemGreen300};
  }
`;

const StyledErrorIcon = styled(CloseIcon)`
  position: absolute;
  top: 25px;
  right: 25px;

  path {
    stroke: ${COLORS.systemRed300};
  }
`;

const Text = styled.p`
  margin-top: 2px;
  color: ${COLORS.systemRed300};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;
