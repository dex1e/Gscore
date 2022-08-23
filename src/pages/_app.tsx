import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { store, wrapper } from "store";
import { MediaContextProvider } from "utils";

import "assets/styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MediaContextProvider disableDynamicMediaQueries>
          <Component {...pageProps} />
        </MediaContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
