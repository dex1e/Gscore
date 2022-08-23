import React from "react";

import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

import { COLORS, DEVICE } from "assets";
import { PackageCard } from "components";
import { Button } from "components/ui";
import { ROUTES } from "constant";
import { MainLayout } from "Layout";
import { buySubscription } from "services";
import { setSubscription } from "store/features/subscription";
import { useAppDispatch, useAppSelector } from "store/hooks";

const CheckoutPage = () => {
  const plan = useAppSelector((state) => state?.plan?.plan);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const notify = (error: string) =>
    toast?.error(error, {
      toastId: "Data fetching error",
    });

  const handleBuySubscription = () => {
    buySubscription(plan?.id)
      .then((response) => {
        dispatch(setSubscription(response?.data));
        router.push(ROUTES.START_SUBSCRIPTION);
      })

      .catch(function (error) {
        notify(error?.message);
      });
  };

  return (
    <Root>
      <ToastContainer position="top-right" autoClose={2000} />
      <Container>
        <Title>Checkout</Title>

        {plan?.id &&
          plan?.prices?.map((priceId) => {
            return (
              <div key={priceId?.id}>
                <StyledPackageCard
                  packageName={plan?.name}
                  priceCost={priceId?.price}
                />

                <Total>
                  <Text>Total:</Text>
                  <Cost>${priceId?.price}</Cost>
                </Total>

                <StyledButton
                  text="Purchase"
                  onClick={() => handleBuySubscription()}
                />
              </div>
            );
          })}
      </Container>
    </Root>
  );
};

const Root = styled(MainLayout)`
  width: 100%;
`;

const Container = styled.div`
  color: ${COLORS.neutral100};
  overflow: hidden;
  max-width: 620px;
  height: 100%;
  margin: 0 auto;
  padding: 32px 0 60px;

  @media ${DEVICE.laptop} {
    padding: 72px 0 290px;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 30px;
  padding-bottom: 32px;

  @media ${DEVICE.laptop} {
    font-size: 44px;
    line-height: 54px;
  }
`;

const StyledPackageCard = styled(PackageCard)`
  margin-bottom: 24px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
  padding-bottom: 48px;
`;

const Text = styled.span``;

const Cost = styled.span``;

const StyledButton = styled(Button)`
  max-width: 200px;
  width: 100%;
`;

export default CheckoutPage;
