import React, { FC, useState } from "react";

import styled, { css } from "styled-components";

import { COLORS } from "assets";
import { CheckIcon } from "components/icons";

interface CheckboxProps {
  className?: string;
  isDisabled?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({ className, isDisabled }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Root className={className}>
      <Input
        type={"checkbox"}
        disabled={isDisabled}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />

      <CheckBox $isDisabled={isDisabled} $isChecked={isChecked}>
        {isChecked && <StyledCheckIcon />}
      </CheckBox>
    </Root>
  );
};

const Root = styled.label``;

const Input = styled.input`
  position: absolute;
  appearance: none;
`;

const CheckBox = styled.span<{ $isDisabled?: boolean; $isChecked?: boolean }>`
  position: absolute;
  width: 28px;
  height: 28px;

  background: ${({ $isChecked }) =>
    $isChecked ? COLORS.primary : COLORS.neutral100};

  border: 1px solid
    ${({ $isChecked }) => ($isChecked ? "none" : COLORS.neutral400)};

  box-shadow: 0px 2px 6px rgba(20, 20, 43, 0.06);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ $isChecked }) =>
      $isChecked ? COLORS.systemRed400 : COLORS.neutral400};
  }

  &:focus {
    outline: 4px solid
      ${({ $isChecked }) =>
        $isChecked ? "rgba(252, 88, 66, 0.3)" : "rgba(199, 199, 199, 0.3)"};
  }

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.5;

      &:hover {
        background: ${COLORS.neutral100};
      }
    `}

  ${({ $isDisabled, $isChecked }) =>
    $isDisabled &&
    $isChecked &&
    css`
      background: ${COLORS.systemRed400};

      &:hover {
        background: ${COLORS.systemRed400};
      }
    `}
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 16px;
  height: 12px;
`;
