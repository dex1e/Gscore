import type { NextPage } from "next";
import styled from "styled-components";

import { MainLayout } from "Layout";
import { Home } from "pageComponents";
import { getProducts } from "services";

const HomePage: NextPage = ({ products }: any) => {
  return (
    <Root>
      <Home products={products} />
    </Root>
  );
};

export async function getServerSideProps() {
  const products = await getProducts()
    .then((response) => response.data)

    .catch(function (error: any) {
      console.log(error);
    });

  return {
    props: {
      products,
    },
  };
}

const Root = styled(MainLayout)`
  position: relative;
`;

export default HomePage;
