import styled from "styled-components";

import { COLORS } from "assets";
import {
  FacebookIcon,
  GscoreLogoIcon,
  LinkedinIcon,
  TwitterIcon,
} from "components/icons";

export const Footer = () => {
  return (
    <Root>
      <StyledGscoreLogoIcon />
      <Text>Ut enim ad minim veniam quis nostrud exercitation ea commodo</Text>
      <Copyright>
        Copyright &copy; 2022 GScore | All Rights Reserved | &nbsp;
        <Info href="#">Cookies</Info> | &nbsp;
        <Info href="#">Privacy Policy</Info>
      </Copyright>
      <Icons>
        <Contact href="#">
          <FacebookIcon />
        </Contact>
        <Contact href="#">
          <TwitterIcon />
        </Contact>
        <Contact href="#">
          <LinkedinIcon />
        </Contact>
      </Icons>
    </Root>
  );
};

const Root = styled.div`
  color: ${COLORS.neutral400};
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
`;

const StyledGscoreLogoIcon = styled(GscoreLogoIcon)`
  width: 130px;
  height: 32px;
`;

const Text = styled.p``;

const Copyright = styled.p``;

const Info = styled.a`
  color: ${COLORS.neutral100};
  text-decoration: underline;
`;

const Icons = styled.div`
  display: flex;
`;

const Contact = styled.a`
  cursor: pointer;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;
