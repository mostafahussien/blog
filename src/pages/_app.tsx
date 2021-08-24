import "@app/styles/index.scss";

import GridConfiguration from "@app/components/layouts/GridConfiguration/GridConfiguration";
import RoutesLoading from "@app/components/layouts/RoutesLoading/RoutesLoading";
import ThemeProvider from "@app/context/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GridConfiguration />
      <RoutesLoading />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
