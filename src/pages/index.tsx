import type { NextPage } from "next";
import styled from "styled-components";

import { MainLayout } from "Layout";
import { Home } from "pageComponents";
import { getMe, getProducts } from "services";
import { wrapper } from "store";
import { setUser } from "store/features/auth";
import { useAppDispatch, useAppSelector } from "store/hooks";

const HomePage: NextPage = ({ products, me }: any) => {
  return (
    <Root>
      <Home products={products} />
    </Root>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (ctx) => {
//     console.log(store);
//     const products = await getProducts()
//       .then((response) => response.data)

//       .catch(function (error: any) {
//         console.log(error);
//       });
//     console.log(products);

//     const state = store.getState();

//     const token = state.auth.auth.token;

//     let me = "";

//     if (token) {
//       me = await getMe()
//         .then((response) => response.data)

//         .catch(function (error: any) {
//           console.log(error);
//         });

//       store.dispatch(setUser(me));
//     }
//     console.log("token", token);

//     console.log("me", me);

//     return {
//       props: {
//         products,
//         me,
//       },
//     };
//   }
// );

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
