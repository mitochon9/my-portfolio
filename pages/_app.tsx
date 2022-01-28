import "../src/styles/index.css";

import type { AppProps, CustomAppPage } from "next/app";
import Head from "next/head";
import { memo } from "react";

const App: CustomAppPage = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>mitochon next tailwind</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default memo(App);
