import { useEffect, useState } from "react";

import type { NextPage } from "next";
import styled from "styled-components";

import { MainLayout } from "Layout";
import { Home } from "pageComponents";
import { getMe, getProducts, LocalStorageService } from "services";

const HomePage: NextPage = ({ products }: any) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    if (LocalStorageService.getData("token")) {
      const me = await getMe()
        .then((response: any) => response.data)

        .catch(function (error: any) {
          console.log(error);
        });

      LocalStorageService.setData("user", me);

      if (me) setUser(me);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Root user={user}>
      <Home products={products} />
    </Root>
  );
};

export async function getStaticProps() {
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
