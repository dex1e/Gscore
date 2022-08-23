import { Url } from "url";

export const ROUTES = {
  ROOT: "/" as unknown as Url,
  LOGIN: "/login" as unknown as Url,
  AUTHORIZATION: "/authorization" as unknown as Url,
  CHECKOUT_ID: (id = ":id"): Url => `checkout/${id}` as unknown as Url,
  START_SUBSCRIPTION: "/start-subscription" as unknown as Url,
  SETTINGS: "/settings" as unknown as Url,
  MY_SUBSCRIPTIONS: "/my-subscriptions" as unknown as Url,
};
