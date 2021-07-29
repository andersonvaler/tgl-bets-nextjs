import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<Props>`
  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.lightText};
    font-size: 1rem;
    font-weight: 400;
    overflow-x: hidden;
  }
  ::-webkit-input-placeholder {
   color: ${({ theme }) => theme.lightText};
  }
`;

export default GlobalStyle;
