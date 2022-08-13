import type { NextPage } from "next";
import styled from "styled-components";

import { COLORS } from "assets";

const Home: NextPage = () => {
  return <Root>Hello</Root>;
};
const Root = styled.div`
  color: ${COLORS.neutral100};
`;

export default Home;
