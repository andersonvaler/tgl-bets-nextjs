import { Ball } from "./style";
import { useState } from "react";

interface Props {
  children: Number;
  selected?: boolean;
  color?: string;
}

const GameBallNumber = ({ children, selected, color }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Ball color={color}>
      <button
        className={active ? "selected" : ""}
        onClick={() => setActive(!active)}
      >
        {children}
      </button>
    </Ball>
  );
};

export default GameBallNumber;
