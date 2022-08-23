import React, { ChangeEvent, FC, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import styled, { css } from "styled-components";

import { COLORS, DEVICE } from "assets";
import { CopyIcon } from "components/icons";
import { Button, Checkbox, Input, Status } from "components/ui";
import { activateLicenseCode } from "services";
import { CodeStatus } from "types";

interface domainCardProps {
  domainCard: any;
  className?: string;
}

export const DomainCard: FC<domainCardProps> = ({ domainCard, className }) => {
  const [domain, setDomain] = useState("");

  const notify = (error: string) =>
    toast?.error(error, {
      toastId: "Data fetching error",
    });

  const handleChangeDomain = (event: ChangeEvent<HTMLInputElement>) => {
    const domainInputValue = event.target.value;

    setDomain(domainInputValue);
  };

  const handleActivateDomain = () => {
    activateLicenseCode(domain, domainCard?.code)
      .then((response) => console.log(response.data))
      .catch((error) => notify(error?.message));
  };

  const handleCopyToClipboard = () => {
    navigator?.clipboard?.writeText(domainCard?.licenseUrl);
  };

  const isStatusInactive = domainCard?.status === CodeStatus?.INACTIVE;

  const readOnlyInput =
    domainCard?.status === CodeStatus?.ACTIVE ||
    domainCard?.status === CodeStatus?.HOLD;

  return (
    <Root $isStatusInactive={isStatusInactive} className={className}>
      <ToastContainer position="top-right" autoClose={2000} />
      <StyledCheckbox $isStatusInactive={isStatusInactive} />

      <StatusGridWrapper $isStatusInactive={isStatusInactive}>
        <StatusWrapper $isStatusInactive={isStatusInactive}>
          <StatusTitle $isStatusInactive={isStatusInactive}>Status</StatusTitle>
          <Status status={domainCard?.status} />
        </StatusWrapper>

        {isStatusInactive && (
          <StyledButtonStatus
            text="Activate"
            variant="secondary"
            $isStatusInactive={isStatusInactive}
            onClick={handleActivateDomain}
          />
        )}
      </StatusGridWrapper>

      <Content>
        <LicenseGridWrapper>
          <Title>License code</Title>
          <Code>
            <LicenseInput defaultValue={domainCard?.code || ""} readOnly />
            <CopyButton onClick={handleCopyToClipboard}>
              <CopyIcon />
            </CopyButton>
          </Code>
        </LicenseGridWrapper>

        <DomainGridWrapper>
          <Title>Domain</Title>
          <DomainInput
            readOnly={readOnlyInput}
            value={domainCard?.origin || domain}
            onChange={handleChangeDomain}
          />
        </DomainGridWrapper>
      </Content>
    </Root>
  );
};

const Root = styled.div<{ $isStatusInactive?: boolean }>`
  padding: 34px 20px 32px;
  max-width: 393px;
  width: 100%;
  background: ${COLORS.secondaryGray};
  color: ${COLORS.neutral500};
  border-radius: 12px;

  display: grid;
  grid-template-rows: 28px 1fr;
  grid-template-columns: 48px 1fr;
  grid-template-areas:
    "checkbox status"
    "content content";
  row-gap: 24px;

  ${({ $isStatusInactive }) =>
    $isStatusInactive &&
    css`
      padding: 20px 20px 32px;
      grid-template-areas:
        "checkbox status"
        "content content";
      grid-template-columns: 48px 1fr;
      grid-template-rows: 58px 1fr;
      row-gap: 8px;
    `}

  @media ${DEVICE.laptop} {
    max-width: 100%;
    padding: 24px 30px 31px 10px;
    grid-template-areas: "checkbox content status";
    grid-template-rows: 1fr;
    grid-template-columns: 76px 1fr min-content;

    ${({ $isStatusInactive }) =>
      $isStatusInactive &&
      css`
        grid-template-areas: "checkbox content status";
        grid-template-rows: 1fr;
        grid-template-columns: 50px 1fr 248px;
      `}

    @media ${DEVICE.laptopL} {
      padding: 24px 79px 31px 32px;

      ${({ $isStatusInactive }) =>
        $isStatusInactive &&
        css`
          grid-template-areas: "checkbox content status";
          grid-template-rows: 1fr;
          grid-template-columns: 76px 1fr 248px;
        `}
    }
  }
`;

const StyledCheckbox = styled(Checkbox)<{ $isStatusInactive?: boolean }>`
  grid-area: checkbox;

  ${({ $isStatusInactive }) =>
    $isStatusInactive &&
    css`
      align-self: center;
    `}

  @media ${DEVICE.laptop} {
    margin-top: 50px;

    ${({ $isStatusInactive }) =>
      $isStatusInactive &&
      css`
        align-self: flex-start;
      `}
  }
`;

const StatusGridWrapper = styled.div<{ $isStatusInactive?: boolean }>`
  grid-area: status;

  ${({ $isStatusInactive }) =>
    $isStatusInactive &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media ${DEVICE.laptop} {
        flex-direction: row-reverse;
        align-items: flex-start;
      }
    `}
`;

const StatusWrapper = styled.div<{ $isStatusInactive?: boolean }>`
  ${({ $isStatusInactive }) =>
    $isStatusInactive &&
    css`
      @media ${DEVICE.laptop} {
        display: flex;
        flex-direction: column;
      }
    `}
`;

const StatusTitle = styled.div<{ $isStatusInactive?: boolean }>`
  display: none;
  grid-area: title;

  @media ${DEVICE.laptop} {
    display: block;
    padding-bottom: 32px;
  }
`;

const StyledButtonStatus = styled(Button)<{ $isStatusInactive?: boolean }>`
  min-width: 111px;

  ${({ $isStatusInactive }) =>
    $isStatusInactive &&
    css`
      @media ${DEVICE.laptop} {
        margin-top: 35px;
      }
    `}
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${DEVICE.laptop} {
    padding-top: 0;
    flex-direction: row;
    padding-right: 56px;
  }
`;

const LicenseGridWrapper = styled.div`
  padding-bottom: 24px;

  @media ${DEVICE.laptop} {
    padding-bottom: 0;
    padding-right: 28px;
    max-width: 324px;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  padding-bottom: 12px;
`;

const Code = styled.div`
  position: relative;
  max-width: 620px;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 18px;
  right: 24px;
  cursor: pointer;

  &:hover {
    path {
      stroke: ${COLORS.secondaryRed};
    }
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.primary};
  }
`;

const LicenseInput = styled(Input)`
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  padding: 25px 97px 25px 24px;
  background: ${COLORS.neutral700};
  color: ${COLORS.neutral500};
  border: none;
`;

const DomainGridWrapper = styled.div`
  @media ${DEVICE.laptop} {
    width: 100%;
    max-width: 620px;
  }
`;

const DomainInput = styled(Input)`
  background: ${COLORS.neutral700};
  border: none;
  padding: 25px 31px 25px 24px;
  color: ${COLORS.neutral500};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
