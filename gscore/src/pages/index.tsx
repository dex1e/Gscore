import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return <Root></Root>;
};
const Root = styled.div`
  margin: 50px;
  display: flex;
  gap: 15px;
`;

export default Home;
