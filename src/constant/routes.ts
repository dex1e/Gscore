export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  REGISTRATION: "/registration",
  CHECKOUT_ID: (id = ":id"): string => `checkout/${id}`,
  START_SUBSCRIPTION: "/start-subscription",
  PERSONAL_INFO: "/personal-info",
};
