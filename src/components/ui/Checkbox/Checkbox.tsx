import React, { FC, useState } from "react";

import styled, { css } from "styled-components";

import { COLORS } from "assets";
import { CheckIcon } from "components/icons";

interface CheckboxProps {
  className?: string;
  text?: string;
  isDisabled?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  isDisabled,
  text,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Root className={className} $isDisabled={isDisabled}>
      <CheckboxInput
        type="checkbox"
        disabled={isDisabled}
        onChange={() => {
          setIsChecked((prevState) => !prevState);
        }}
      />
      <Check $isDisabled={isDisabled} $isChecked={isChecked}>
        {isChecked && <StyledCheckIcon />}
      </Check>

      {text && <Text>{text}</Text>}
    </Root>
  );
};

const Root = styled.label<{ $isDisabled?: boolean }>`
  display: flex;
  align-items: center;
  max-width: fit-content;

  &:hover {
    cursor: pointer;

    ${({ $isDisabled }) =>
      $isDisabled &&
      css`
        cursor: default;
      `}
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  visibility: hidden;
`;

const Check = styled.span<{ $isDisabled?: boolean; $isChecked?: boolean }>`
  width: 28px;
  height: 28px;
  background: ${COLORS.neutral100};
  border: 1px solid ${COLORS.neutral400};
  box-shadow: 0px 2px 6px rgba(20, 20, 43, 0.06);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${COLORS.neutral400};
  }

  &:focus {
    outline: 4px solid rgba(199, 199, 199, 0.3);
  }

  ${({ $isChecked }) =>
    $isChecked &&
    css`
      background: ${COLORS.primary};
      border: none;

      &:hover {
        background: ${COLORS.systemRed400};
      }

      &:focus {
        outline: 4px solid rgba(252, 88, 66, 0.3);
      }
    `}

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

const Text = styled.span`
  color: ${COLORS.neutral100};
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  padding-left: 10px;
`;
