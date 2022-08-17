import { instance } from "./instance";

export const buySubscription = async (priceId: any) => {
  const json = JSON.stringify({ priceId });
  return instance
    .post("api/payments/buy", json)

    .then((response) => {
      return response.data;
    })

    .catch(function (error) {
      console.log(error);
    });
};
