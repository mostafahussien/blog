import { NextPage } from "next";

import { useEffect } from "react";

import Head from "next/head";

import { getInitialLocale } from "@app/translations/getInitialLocale";

const Index: NextPage<any> = () => {
  useEffect(() => {
    window.location.replace(`blog/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
