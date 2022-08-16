import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar, Footer } from "../layouts";
// import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
      <div className="app">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    // </Provider>
  );
}

export default MyApp;
