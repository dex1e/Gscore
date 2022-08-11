import styled from "styled-components";

import { COLORS } from "assets";
import {
  FacebookIcon,
  GscoreLogoIcon,
  LinkedinIcon,
  TwitterIcon,
} from "components/icons";
import { DEVICE } from "constant";
import { Divider } from "utils";

export const Footer = () => {
  return (
    <Root>
      <div className="container">
        <Inner>
          <Divider />

          <Content>
            <StyledGscoreLogoIcon />
            <Text>
              Ut enim ad minim veniam quis nostrud exercitation ea commodo
            </Text>
          </Content>

          <Divider />

          <Copyright>
            <CopyrightText>
              Copyright &copy; 2022 GScore | All Rights Reserved |&nbsp;
              <Info href="#">Cookies</Info>&nbsp;|&nbsp;
              <Info href="#">Privacy Policy</Info>
            </CopyrightText>

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
          </Copyright>
        </Inner>
      </div>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  padding-bottom: 24px;

  @media ${DEVICE.laptop} {
    padding-bottom: 42px;
  }
  /* flex: 0 0 auto; */
`;

const Inner = styled.div`
  color: ${COLORS.neutral400};
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
`;
const Content = styled.div`
  padding: 40px 0;
`;

const StyledGscoreLogoIcon = styled(GscoreLogoIcon)`
  width: 130px;
  height: 32px;
`;

const Text = styled.p`
  padding-top: 24px;
`;

const Copyright = styled.div`
  padding-top: 32px;

  @media ${DEVICE.laptop} {
    display: flex;
    justify-content: space-between;
    padding-top: 44px;
  }
`;

const CopyrightText = styled.p`
  /* padding-top: 32px; */
  text-align: center;

  @media ${DEVICE.laptop} {
    text-align: start;
  }
`;

const Info = styled.a`
  color: ${COLORS.neutral100};
  text-decoration: underline;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24px;

  @media ${DEVICE.laptop} {
    padding-top: 0;
  }
`;

const Contact = styled.a`
  cursor: pointer;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;
