import React, { FC, InputHTMLAttributes } from "react";

import styled, { css } from "styled-components";

import { COLORS } from "assets/styles/colors";
import { InputErrorIcon, InputSuccessIcon } from "components/icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isSuccess?: boolean;
  isError?: boolean;
}

export const Input: FC<InputProps> = ({
  className,
  isSuccess,
  isError,
  ...props
}) => {
  return (
    <Root>
      <SInput
        className={className}
        $isSuccess={isSuccess}
        $isError={isError}
        {...props}
      />

      {(isSuccess && <StyledInputSuccessIcon />) ||
        (isError && <StyledInputErrorIcon />)}
    </Root>
  );
};

const Root = styled.form`
  width: 419px;
  height: 68px;
  position: relative;
`;

const SInput = styled.input<{ $isSuccess?: boolean; $isError?: boolean }>`
  width: 419px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.neutral100};
  border: 1px solid ${COLORS.neutral300};
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  padding: 25px;
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

  ${({ $isError }) =>
    $isError &&
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

const StyledInputSuccessIcon = styled(InputSuccessIcon)`
  position: absolute;
  top: calc(50% - 10px);
  right: 25px;
`;

const StyledInputErrorIcon = styled(InputErrorIcon)`
  position: absolute;
  top: calc(50% - 10px);
  right: 25px;
`;
