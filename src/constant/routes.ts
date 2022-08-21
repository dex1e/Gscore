export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  REGISTRATION: "/registration",
  CHECKOUT_ID: (id = ":id"): string => `checkout/${id}`,
  START_SUBSCRIPTION: "/start-subscription",
  SETTINGS: "/settings",
  MY_SUBSCRIPTIONS: "/my-subscriptions",
};
