import { Container, Button } from "./style";
import React from "react";

interface Props {
  color: string;
  children: string;
  handler: Function;
}

const GameButton = ({ children, color, handler }: Props) => {
  return (
    <Container>
      <Button color={color} onClick={() => handler()}>
        {children}
      </Button>
    </Container>
  );
};

export default GameButton;
