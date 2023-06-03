import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/404") return <Component {...pageProps} />;
  return (
    <>
      <NextSeo
        title="FINENEX"
        titleTemplate="FINENEX"
        description="FINENEX e-website"
      />
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
  );
}
