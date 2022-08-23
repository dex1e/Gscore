import { useEffect } from "react";

import type { NextPage } from "next";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { MainLayout } from "Layout";
import { Home } from "pageComponents";
import { getProducts } from "services";
import { IPlan } from "types";

interface IProductsProps {
  products: IPlan[];
  error?: string;
}

const HomePage: NextPage<IProductsProps> = ({ products, error }) => {
  const notify = (error: string) =>
    toast?.error(error, {
      toastId: "Data fetching error",
    });

  useEffect(() => {
    if (error) {
      notify(error);
    }
  }, []);

  return (
    <Root>
      <ToastContainer position="top-right" autoClose={2000} />
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
  } catch (error: any) {
    return {
      props: {
        products: [],
        error: error?.message,
      },
    };
  }
}

const Root = styled(MainLayout)`
  position: relative;
`;

export default HomePage;
