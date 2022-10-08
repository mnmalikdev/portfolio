import type { AppProps } from "next/app";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
