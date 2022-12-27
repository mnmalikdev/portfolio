import type { AppProps } from "next/app";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="px-3">
        <Navbar />
        <div className="px-1">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
