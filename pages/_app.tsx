import "src/styles/index.css";

import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { AppProps, CustomAppPage } from "next/app";
import Head from "next/head";
import { memo } from "react";
import { RecoilRoot } from "recoil";

gsap.registerPlugin(ScrollTrigger);

const App: CustomAppPage = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Shinji Takahashi&apos;s PORTFOLIO</title>
    </Head>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </>
);

export default memo(App);
