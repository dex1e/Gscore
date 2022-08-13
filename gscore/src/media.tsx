import { createMedia } from "@artsy/fresnel";

const ExampleAppMedia = createMedia({
  breakpoints: {
    mobileS: 320,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
  },
});

export const mediaStyles = ExampleAppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = ExampleAppMedia;
