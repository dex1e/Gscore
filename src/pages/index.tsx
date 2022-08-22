import type { NextPage } from "next";
import styled from "styled-components";

import { MainLayout } from "Layout";
import { Home } from "pageComponents";
import { getProducts } from "services";
import { IPlan } from "types";

interface IProductsProps {
  products: IPlan[];
}

const HomePage: NextPage<IProductsProps> = ({ products }) => {
  return (
    <Root>
      <Home products={products} />
    </Root>
  );
};

export async function getServerSideProps() {
  try {
    const { data: products } = await getProducts();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
}

const Root = styled(MainLayout)`
  position: relative;
`;

export default HomePage;
