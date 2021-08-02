import { Container } from "./style";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";
import { ReactNode } from "react";
library.add(fas);

interface Props {
  greenFluorescent?: boolean;
  green?: boolean;
  gray?: boolean;
  arrowLeft?: boolean;
  children?: ReactNode;
  redirectTo?: string;
}

const ArrowButton = ({ ...props }: Props) => {
  const redirect = (path: any) => {
    Router.push(path);
  };
  const theme = useContext(ThemeContext);
  const color = props.greenFluorescent
    ? theme.greenFluorescent
    : props.green
    ? theme.green
    : theme.mediumTitle;
  return (
    <Container>
      <button
        style={{ color: color }}
        onClick={() => props.redirectTo && redirect(props.redirectTo)}
      >
        {props.children}
        <FontAwesomeIcon
          icon={props.arrowLeft ? "arrow-left" : "arrow-right"}
        />
      </button>
    </Container>
  );
};

export default ArrowButton;
