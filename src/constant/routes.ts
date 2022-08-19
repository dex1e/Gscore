export const ROUTES = {
  ROOT: "/",
  LOGIN: "/login",
  REGISTRATION: "/registration",
  CHECKOUT_ID: (id = ":id"): string => `checkout/${id}`,
  STARTSUBSCRIPTION: "/startSubscription",
};
