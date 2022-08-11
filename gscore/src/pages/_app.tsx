import type { AppProps } from "next/app";

import "assets/styles/main.scss";
import { MediaContextProvider } from "../media";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MediaContextProvider disableDynamicMediaQueries>
      <Component {...pageProps} />
    </MediaContextProvider>
  );
}

export default MyApp;
