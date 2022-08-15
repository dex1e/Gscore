import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import {
  FacebookIcon,
  GscoreLogoIcon,
  LinkedinIcon,
  TwitterIcon,
} from "components/icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Root>
      <div className="container">
        <Inner>
          <Content>
            <StyledGscoreLogoIcon />
            <Text>
              Ut enim ad minim veniam quis nostrud exercitation ea commodo
            </Text>
          </Content>

          <Copyright>
            <CopyrightText>
              Copyright &copy; {currentYear} GScore | All Rights Reserved |
              <> </>
              <Info href="#">Cookies</Info>
              <> </>|<> </>
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
  border-top: 1px solid ${COLORS.neutral700};

  @media ${DEVICE.laptop} {
    padding-bottom: 42px;
  }
`;

const Inner = styled.div`
  color: ${COLORS.neutral400};
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
`;

const Content = styled.div`
  padding: 40px 0;
  border-bottom: 1px solid ${COLORS.neutral700};
`;

const StyledGscoreLogoIcon = styled(GscoreLogoIcon)`
  width: 130px;
  height: 32px;
`;

const Text = styled.p`
  padding-top: 24px;
  width: 100%;

  @media ${DEVICE.laptop} {
    max-width: 323px;
  }
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
  text-align: center;

  @media ${DEVICE.laptop} {
    text-align: start;
  }
`;

const Info = styled.a`
  color: ${COLORS.neutral100};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: ${COLORS.secondaryRed};
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.primary};
  }
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
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    path {
      fill: ${COLORS.secondaryRed};
    }
  }

  &:focus {
    box-shadow: 0px 0px 10px 0px ${COLORS.primary};
  }
`;
