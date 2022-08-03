import React, { FC, useState } from "react";

import styled, { css } from "styled-components";

import { COLORS } from "assets/styles/colors";
import { CheckIcon } from "components/icons";

interface CheckboxProps {
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ className }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Root className={className}>
      <Input
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />

      {isChecked ? (
        <CheckActive>
          <CheckIcon />
        </CheckActive>
      ) : (
        <Check />
      )}
    </Root>
  );
};

const Root = styled.label``;

const Input = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  appearance: none;
`;

const CheckActive = styled.span`
  position: absolute;
  width: 28px;
  height: 28px;
  background: ${COLORS.primary};
  border: none;
  box-shadow: 0px 2px 6px rgba(20, 20, 43, 0.06);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${COLORS.systemRed400};
  }

  &:focus {
    background: ${COLORS.primary};
    outline: 4px solid rgba(252, 88, 66, 0.3);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Check = styled.span`
  position: absolute;
  width: 28px;
  height: 28px;
  background: ${COLORS.neutral100};
  border: 1px solid ${COLORS.neutral400};
  box-shadow: 0px 2px 6px rgba(20, 20, 43, 0.06);
  border-radius: 7px;

  &:hover {
    background: ${COLORS.neutral400};
  }

  &:focus {
    background: ${COLORS.neutral100};
    outline: 4px solid rgba(199, 199, 199, 0.3);
  }

  &:disabled {
    opacity: 0.5;
  }
`;
