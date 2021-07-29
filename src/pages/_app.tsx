import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import defaultTheme from "../styles/theme";
import GlobalStyle from "../styles/global";
import "../styles/reset.css";
import store from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
