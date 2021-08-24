import "@app/styles/index.scss";

import GridConfiguration from "@app/components/layouts/GridConfiguration/GridConfiguration";
import RoutesLoading from "@app/components/layouts/RoutesLoading/RoutesLoading";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GridConfiguration />
      <RoutesLoading />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
